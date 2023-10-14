import { useState } from "react";
import PopularBook from "../components/popular/PopularBook";
import SaleProducts from "../components/sale-products/SaleProducts";
import Slider from "../components/slides/Slider";
import ViewBook from "../components/viewBook/ViewBook";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, SetId] = useState("");
  return (
    <>
      <div className="inner-page">
        <Slider />
        <SaleProducts />
        <PopularBook isOpen={isOpen} setIsOpen={setIsOpen} setIdBook={SetId} />
      </div>

      {isOpen ? (
        <ViewBook isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      ) : null}
    </>
  );
}
