import React, { useEffect, useState } from "react";
import "./style.css";
import useBook from "../../redux/hooks/useBook";
import { Link } from "react-router-dom";
function OwnerBook() {
  const { getAllBooks, handleDeleteBook, book } = useBook();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllBooks(page);
  }, [page]);

  return (
    <>
      <div>
        <div className="book-nav">
          <span style={{ width: "30%" }}>
            <button className="active-sort-btn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
              </svg>
            </button>
          </span>

          <span
            style={{ width: "30%", display: "flex", justifyContent: "right" }}
          >
            <select name="filter" id="filter">
              <option value="">Lowest price</option>
              <option value="">highest price</option>
              <option value="">Book title {"(A-Z)"}</option>
              <option value="">Lowest price{"(Z-A)"}</option>
            </select>
          </span>
        </div>
        <div className="row justify-content-center">
          <table className="books">
            <thead>
              <tr>
                <th>Name book</th>
                <th>Pubish Date</th>
                <th>Description</th>
                <th>
                  <a className="button_Add" href="./addBook">
                    Add
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {book.map((b: any) => (
                <tr key={b.id}>
                  <td>{b?.title}</td>
                  {/* <td>{b?.genre}</td> */}
                  <td>{b?.publishDate}</td>
                  <td>{b?.description}</td>
                  <td>
                    <div className="btn-group">
                      <Link to={"/editBook"}>
                        <button className="Btn_Edit">
                          Edit
                          <svg className="svg" viewBox="0 0 512 512">
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                          </svg>
                        </button>
                      </Link>

                      <button
                        className="button_Delete"
                        onClick={() => handleDeleteBook(b.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OwnerBook;
