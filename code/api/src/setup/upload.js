// Imports
import path from 'path'
import multer from 'multer'

// This functions import images and saves the m in public/images/uploads folder

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  console.info('SETUP - Upload...')

  // Set destination
  const storage = multer.diskStorage({  // This multer method that sets  the storage and destination name of the files uploaded
    destination: path.join(__dirname, '..', '..', 'public', 'images', 'uploads'),

    filename: function (request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({
    storage: storage
  }).single('file')

  // Upload route
  server.post(serverConfig.upload.endpoint, (request, response) => {  // Save the image on the "/uploads" path
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}
// reuse this code to upload a user image may be use a different the endpoint and the storage location for clarity