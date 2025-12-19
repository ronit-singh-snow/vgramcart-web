import React, { useState } from "react";
import { post } from "../Utils/Utils";
// import "bootstrap/dist/css/bootstrap.min.css";

const RicePrediction = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFile = (file) => {
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleFileChange = (e) => {
        handleFile(e.target.files[0]);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPrediction(null);
        setError(null);

        if (!selectedFile) {
            setError("Please select an image file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);
        const params = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        try {
            setLoading(true);
            const response = await post("/predict", formData, params);
            setPrediction(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded p-4 w-100"
                style={{ maxWidth: "500px" }}
            >
                <label className="form-label fw-bold">Upload your files here</label>

                {/* Upload Box with Drag & Drop */}
                <div
                    className={`border border-2 rounded d-flex flex-column align-items-center justify-content-center p-3 mb-3 ${dragActive ? "border-primary bg-light" : "border-secondary"
                        }`}
                    style={{ height: "160px", cursor: "pointer" }}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                >
                    <label htmlFor="file-upload" className="w-100 h-100 text-center">
                        {!previewUrl ? (
                            <>
                                <i className="bi bi-cloud-upload fs-1 text-secondary"></i>
                                <p className="mb-0 fw-semibold">Click to upload</p>
                                <small className="text-muted">or drag & drop files here</small>
                            </>
                        ) : (
                            <img
                                src={previewUrl}
                                alt="preview"
                                className="img-fluid h-100"
                                style={{ objectFit: "contain" }}
                            />
                        )}
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="d-none"
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success w-100 fw-bold">
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
        </div>
    );
};

export default RicePrediction;
