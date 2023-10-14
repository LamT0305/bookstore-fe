import React, { useState } from "react";
import Category from "../components/categories/Category";
import Books from "../components/books/Books";
import ViewBook from "../components/viewBook/ViewBook";

const AllBooks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, SetId] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ padding: "100px 20px", margin: "80px auto" }}
      >
        <div className="row">
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-9">
            <Books isOpen={isOpen} setIsOpen={setIsOpen} setIdBook={SetId} />
          </div>
        </div>
      </div>

      {isOpen ? (
        <ViewBook isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      ) : null}
    </>
  );
};

export default AllBooks;
