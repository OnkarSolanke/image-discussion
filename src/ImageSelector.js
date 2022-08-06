
import React from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function ImageSelector({ handleFileSelect }) {

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length) {
            handleFileSelect(e.target.files[0]);
        }
    }
    return (
        <div className="image-sector-container">
            <FileUploader handleChange={handleFileSelect} name="file" types={fileTypes} />
            <p className="mt-2 text-center">Or</p>
            <input
                className="btn btn-primary"
                type="file"
                accept={fileTypes.map(e => '.' + e).join(',')}
                onChange={handleFileChange}
            />
        </div>
    );
}
export default ImageSelector;