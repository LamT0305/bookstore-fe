import React, { useEffect, useState } from "react";
import "./style.css";
import useBook from "../../redux/hooks/useBook";
import "bootstrap/dist/css/bootstrap.min.css";

function Managebook() {
  const { getAllBooks, handleAddBook  } = useBook();
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: "",
    price: "",
    img: "",
    quantity: "",
    cate: ""
  });

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    handleAddBook(form);
  };

  useEffect(() => {
    getAllBooks(page);
  }, [page]);

  return (
    <>
      <div>
        {" "}
        {/* Opening div tag */}
        <div className="book-nav">{/* Your existing components */}</div>
        <div className="container text-center mb-3 col-md-8">
          <form className="card bg-light ml-3 mr-3">
            <div className="form-group mt-2 mb-2">
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={form.name}
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
                  value={form.price}
                  required
                />
              </div>
              <div className="form-group mt-2 mb-2">
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
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  required
                  min="1"
                  max="20"
                />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="fw-bold" htmlFor="">
                  Categorry
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="cate"
                  value={form.cate}
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

export default Managebook;
