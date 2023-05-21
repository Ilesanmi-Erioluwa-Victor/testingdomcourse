import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet/Greet";
import Application from "components/Application/Application";

function App() {
  //       const [image, setImage] = useState("");
  //       const [url, setUrl] = useState("");

  //   const uploadImage = () => {
  // const data = new FormData()
  // data.append("file", image)
  // data.append("upload_preset", "Eric_collection");
  // data.append("cloud_name", "dprzlxu1r");
  // fetch("  https://api.cloudinary.com/v1_1/dprzlxu1r/image/upload", {
  //   method: "post",
  //   body: data,
  // })
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     setUrl(data.url);
  //     console.log(data)
  //   })
  //   .catch((err) => console.log(err));
  //   }

  return (
    <div>
      {/* <h2>Learn React</h2> */}
      <Application />

      {/* <div>
        <input
          type="file"
          onChange={(e: any) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <div style={{ width: "50%", border : "2px solid red", margin : "auto"}}>
          <img
            src={url}
            alt={url}
            width={"100%"}
          />
        </div>
      </div> */}
    </div>
  );
}

export default App;
