import React, { useEffect, useState } from "react";
import "./style.css";
import useBook from "../../../redux/hooks/useBook";
import "bootstrap/dist/css/bootstrap.min.css";

function AddBook() {
  const { handleAddBook } = useBook();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setpublisher] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("Title", title);
    form.append("Price", price);
    form.append("PublishDate", publishDate);
    form.append("Genre", genre);
    form.append("Quantity", quantity);
    form.append("Description", description);
    form.append("publisher", publisher);
    if (image) {
      form.append("image", image); // Append image to the form data if it's not null
    }
    handleAddBook(form);
   
  };

  const handleImageUpload = (e : any) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setImage(uploadedFile);
    }
  };

  console.log(image)

  return (
    <>
      <div>
        {" "}
        {/* Opening div tag */}
        <div className="book-nav">{/* Your existing components */}</div>
        <div className="container text-center mb-3 col-md-8">
          <form className="card bg-light ml-3 mr-3" onSubmit={handleSubmit}>
            <div className="form-group mt-2 mb-2">
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>         
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  min="1"
                  max="20"
                />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Description
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  accept="image/*" 
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <div className="form-group mt-2 mb-2">
                <input className="btn btn-danger" type="submit" value="Add" />
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* Closing div tag */}
    </>
  );
}

export default AddBook;
