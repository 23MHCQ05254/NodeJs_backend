import { useState } from "react";

function App() {

  const [files, setFiles] = useState([]);      // Selected files
  const [uploaded, setUploaded] = useState([]); // Uploaded files response

  const handleChange = (e) => {
    setFiles(e.target.files);                  // Store selected files
  };

  const handleUpload = async () => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);       // "file" must match multer
    }


    const res = await fetch("http://localhost:3000/file-upload", {
      method: "POST",
      body: formData
    });
    
    const data = await res.json();
    setUploaded(data.files);                   // Save uploaded files info
  };



  return (
    <div style={{ padding: "20px" }}>
      <h2>React Image Upload</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>

      <hr />

      <div style={{ display: "flex", gap: "10px" }}>
        {uploaded.map((file, index) => (
          <img
            key={index}
            src={`http://localhost:3000/uploads/${file.filename}`}
            alt="uploaded"
            width="150"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
