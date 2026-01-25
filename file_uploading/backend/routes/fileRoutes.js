const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { UploadFile } = require('../controllers/fileController')

/* Storage configuration */
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')             // Save files in uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname) // Unique name
    }
})


/* File type validation */
const FileFilter = (req, file, cb)  => {
    const allowedTypes = /png|jpg|jpeg|svg/ ;
    const ext = path.extname(file.originalname).toLowerCase()
 
    if (allowedTypes.test(ext)) {
        cb(null, true)                  // Accept file
    } else {
        cb(new Error('Invalid file type')) // Reject file
    }
}

/* Multer upload setup */
const upload = multer({
    storage: Storage,
    fileFilter: FileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
})
 
router.post('/file-upload', upload.array('file', 3), UploadFile)
// Accept max 3 files with field name "file"


module.exports = router
