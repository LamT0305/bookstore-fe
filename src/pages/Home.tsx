import PopularBook from "../components/popular/PopularBook";
import SaleProducts from "../components/sale-products/SaleProducts";
import Slider from "../components/slides/Slider";

export default function Home() {
  return (
    <div className="inner-page">
      <Slider />
      <SaleProducts />
      <PopularBook />
    </div>
  );
}
