import React, { useState, Fragment } from "react";
import "./App.css";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="title_div">
          <h3>内観写真(保管場所の様子がわかるもの)</h3>
        </div>
        <label className="label_one">
          + Add Images
          <br />
          <span className="label_one_span">up to 4 images</span>
          <input
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <div className="botton_three_container">
          <div>
            <label className="label_two">
              + Add Images
              <br />
              <span className="label_two_span">up to 4 images</span>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
          </div>
          <label className="label_three">
            + Add Images
            <br />
            <span className="label_three_span">up to 4 images</span>
            <input
              type="file"
              name="images"
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg, image/webp"
            />
          </label>
          <div>
            <label className="label_four">
              + Add Images
              <br />
              <span className="label_four_span">up to 4 images</span>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
          </div>
          <div></div>
        </div>
        <div className="button-div">
          <div>
            <label className="button-18">
              写真をアップロード
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
                className=''
              />
            </label>
          </div>
        </div>
        <input type="file" multiple />

        {selectedImages.length > 0 &&
          (selectedImages.length > 4 ? (
            <p className="error">
              You can't upload more than 4 images! <br />
              <span>
                please delete <b> {selectedImages.length - 4} </b> of them{" "}
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log(selectedImages);
              }}
            >
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ))}

        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} height="200" alt="upload" />
                  <button onClick={() => deleteHandler(image)}>
                   x
                  </button>
                  <p>{index + 1}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default App;