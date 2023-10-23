import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import ReactDropdown from "react-dropdown";

function Managebook() {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    ["link", "image"],
  ];
  return (
    <div>
      <form className="formcreatebook">
        <div style={{display:"flex"}}>
          <div style={{ width: "60%" }}>
            <div
              style={{display: "flex",justifyContent: "space-around",alignItems: "center",marginBottom:30}}>
              <div className="input-field">
                <label htmlFor="">Book's name</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="">Price</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="">Quanlity</label>
                <input type="text" />
              </div>
            </div>
            <div className="content">
              <ReactQuill
                theme="snow"
                id="description"
                // value={formik.values.description}
                // onChange={e => formik.setFieldValue("description", e)}
                modules={{
                  toolbar: toolbarOptions,
                }}
              />
            </div>
          </div>
          <div className=""style={{ width: "40%" }}>
            <div className="thumbnail">
                {/* {formik.values.image.length > 0 || formik.values.image ? (
            <>
              <div className="preview">
                <img
                  src={
                    preview || (currentPost && `${baseURL}${currentPost.image}`)
                  }
                  alt=""
                  width={"100%"}
                />
                <button className="removePre" onClick={handleRemoveFile}>
                  X
                </button>
              </div>
            </>
          ) : ( */}
            <div className="thumbnail-img">
              <label id="file-upload" htmlFor="file">
                Upload image
              </label>
              <input
                style={{ width: "45%", margin: "0 auto" }}
                type="file"
                id="file"
                accept="image/*"
                name="thumbnail"
                // onChange={handleChangeFile}
                required
              />
            </div>
            {/* )} */}
            </div>
            {/* <div className="dropdown flex flex-col justify-between h-40">
                            <div className="">
                                <p className=' mb-2'>Category:</p>
                                <ReactDropdown options={options} onChange={e => setDropdown(e.value)} value={dropdown} />
                            </div>
                            <div className="">
                                <p className=' mb-2'>Store:</p>
                                <ReactDropdown options={stores} onChange={e => setStore_(e.value)} value={store_} />
                            </div>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Managebook;
