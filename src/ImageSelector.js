
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function ImageSelector() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    useEffect(() => {
        console.log(file);
    },[file])
    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    );
}
export default ImageSelector;