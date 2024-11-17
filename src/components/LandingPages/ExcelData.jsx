import React, { useState } from "react";
import * as XLSX from "xlsx";

const Footer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
      // You can validate file type here, for example:
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        alert("Please select a valid Excel file.");
        return;
      }

      setSelectedFile(file);
      handleFileUpload(file);
    }
  };

  // Function to handle the file upload and read the Excel file
  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      // Assuming you want to log the sheet data
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log("Excel Data:", jsonData); // Process the data as needed
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <button onClick={() => document.getElementById("file-input").click()}>
        Add File
      </button>
      <input
        type="file"
        id="file-input"
        accept=".xlsx, .xls"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default Footer;
