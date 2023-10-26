import React, { useEffect, useState } from "react";
import "./style.css";
import useBook from "../../../redux/hooks/useBook";
import "bootstrap/dist/css/bootstrap.min.css";

function AddBook() {
  const { getAllBooks, handleGetBookByID,handleUpdateBook, book } = useBook();
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("description", description);
    handleUpdateBook("id", form);
    setTitle("");
    setPrice("");
    setQuantity("");
    setDescription("");
  };

  useEffect(() => {
    handleGetBookByID("id");
    // getAllBooks(page);
  }, []);

  return (
    <>
      <div>
        {" "}
        {/* Opening div tag */}
        <div className="book-nav">{/* Your existing components */}</div>
        <div className="container text-center mb-3 col-md-8">
          {book.map((b: any) => (
            <form
              className="card bg-light ml-3 mr-3"
              onSubmit={handleFormSubmit}
            >
              <div key={b.id} className="form-group mt-2 mb-2">
                <div className="form-group mt-2 mb-2">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={b.title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    value= {b.price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                {/* <div className="form-group mt-2 mb-2">
               <label className="fw-bold" htmlFor="">
                 Image
               </label>
               <input
                 className="form-control"
                 type="text"
                 name="img"
                 //   value={form.image}
                 required
               />
             </div> */}
                <div className="form-group mt-2 mb-2">
                    <input
                      className="form-control"
                      type="text"
                      name="quantity"
                      value= {b.quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                      min="1"
                      max="20"
                    />
                  </div>
                  <div className="form-group mt-2 mb-2">
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      value={b.description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                <div className="form-group mt-2 mb-2">
                  <input
                    className="btn btn-danger"
                    type="submit"
                    value="Edit"
                  />
                </div>
              </div>
            </form>
          ))}
        </div>
      </div>{" "}
      {/* Closing div tag */}
    </>
  );
}

export default AddBook;
