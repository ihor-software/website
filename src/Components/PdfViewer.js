import React from 'react';
import cv from "../files/Ihor_Resume.pdf"

const PDFViewer = () => {
    return (
        <div style={{ height: "100vh" }}>
            <iframe src={cv} width="100%" height="100%" />
        </div>
    );
};
export default PDFViewer;