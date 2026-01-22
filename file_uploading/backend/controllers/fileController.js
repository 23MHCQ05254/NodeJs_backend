const UploadFile = async (req, res) => {
    try {
        return res.status(200).json({
            message: "Files uploaded successfully",
            files: req.files                // Uploaded file details
        })
    } catch (error) {
        return res.status(500).json({
            message: "Upload failed",
            error: error.message
        })
    }
}

module.exports = { UploadFile }
