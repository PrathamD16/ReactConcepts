//We will see how to convert 'Images' uploaded by users in React Frontend into DataUrl, so that image can be rendered directly even if it is not present in the user device.
import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const Upload = async (e) => {
    // console.log(e.target.files)
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUrl(base64);
    // console.log(typeof(base64))
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="ml-[6cm] mt-[4cm]">
      <h3>Upload image in here</h3>
      <input multiple type="file" onChange={(e) => Upload(e)} />
      <button className="bg-slate-400 px-4 py-2 rounded-md">Submit</button>
      <img className="h-[7cm] w-[7cm]" src={url} alt="IMG" />
    </div>
  );
}

export default App;
