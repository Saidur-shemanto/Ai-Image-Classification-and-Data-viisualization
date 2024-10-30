import React, { useEffect, useRef, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Classification() {
  const [model, setModel] = useState(null);
  const [modelLoading, setModelLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const imageref = useRef();
  const fileref = useRef();
  const loadModel = async () => {
    setModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setModelLoading(false);
    } catch (error) {
      console.log(error);
      setModelLoading(false);
    }
  };
  const handleUpload = () => {
    fileref.current.click();
  };
  const handleImage = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleIdentification = async () => {
    const result = await model.classify(imageref.current);
    setPredictions(result);
  };
  useEffect(() => {
    loadModel();
  }, []);
  if (modelLoading) {
    return (
      <div className="flex   justify-center gap-2">
        <p>model is loading</p>
        <span className="loading loading-dots loading-sm mt-2"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col m-auto items-center justify-center border-2 border-purple-600  rounded-2xl h-auto min-h-[60vh] p-4 w-2/3">
      <div>
        <IoCloudUploadOutline
          className="text-5xl cursor-pointer"
          onClick={handleUpload}
        />
        <input
          type="file"
          name=""
          accept="image/*"
          onChange={handleImage}
          className="hidden"
          ref={fileref}
        />
      </div>
      {imageUrl ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={imageUrl} alt="" ref={imageref} className="w-48 h-48" />
          <button className="btn" onClick={handleIdentification}>
            Identify Image
          </button>
        </div>
      ) : (
        <div>no image</div>
      )}
      {predictions.length > 0 && (
        <div className="w-full flex flex-col items-center  justify-center mt-4 gap-2">
          <div className="relative w-2/6">
            <progress
              className="progress progress-error w-full h-14 "
              value={predictions[0].probability * 100}
              max="100"
            ></progress>
            <div className="absolute inset-0 flex items-center justify-center gap-4 text-white">
              {predictions[0].className}

              <p>{(predictions[0].probability * 100).toFixed(2)}% </p>
            </div>
          </div>
          <div className="relative w-2/6">
            <progress
              className="progress progress-error w-full h-14"
              value={predictions[1].probability * 100}
              max="100"
            ></progress>
            <div className="absolute inset-0 flex items-center justify-center gap-4 text-white">
              {predictions[1].className}

              <p>{(predictions[1].probability * 100).toFixed(2)}% </p>
            </div>
          </div>
          <div className="relative w-2/6">
            <progress
              className="progress progress-error w-full h-14"
              value={predictions[2].probability * 100}
              max="100"
            ></progress>
            <div className="absolute inset-0 flex items-center justify-center gap-4 text-white">
              {predictions[2].className}

              <p>{(predictions[2].probability * 100).toFixed(2)}% </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
