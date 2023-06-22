import React, { useState } from "react";
import axios from "axios";

function JpftoPdf() {
  const [convertedFileURL, setConvertedFileURL] = useState("");
  const [showPrintOption, setShowPrintOption] = useState(false);
  const [showDownloadOption, setShowDownloadOption] = useState(false);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/convert",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          }
        );

        const convertedFileURL = URL.createObjectURL(response.data);
        setConvertedFileURL(convertedFileURL);
        setShowPrintOption(true);
        setShowDownloadOption(true);
      } catch (error) {
        console.error("Error converting file:", error);
      }
    }
  };

  const handlePrint = () => {
    window.open(convertedFileURL, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = convertedFileURL;
    link.download = "converted_file.pdf";
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word to PDF Converter</h1>
        <input type="file" accept=".docx" onChange={handleFileUpload} />
        {showDownloadOption ? (
          <>
            <button onClick={handlePrint}>Print</button>
            <button onClick={handleDownload}>Download</button>
          </>
        ) : (
          <button disabled>Convert</button>
        )}
      </header>
    </div>
  );
}

export default JpftoPdf;