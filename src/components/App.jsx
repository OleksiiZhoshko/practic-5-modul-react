import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { Products } from "./Pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Teem";
import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
