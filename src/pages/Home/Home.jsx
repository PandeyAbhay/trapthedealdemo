import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { categories } from "../../backend/db/categories";
import { useProducts } from "../../contexts/productContext";
import SA from "../../SA.jpg";
import A1 from "../../A1.jpg";
import B1 from "../../B1.jpg";
const Home = () => {
  const { productState, productDispatch, filterTypes } = useProducts();
  const { CATEGORY, CLEAR_FILTERS } = filterTypes;

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={SA} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={A1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={B1} class="d-block w-100" alt="..."/>
    </div>

    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        <div className="services-category">
          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-check-circle"></i>
            </div>

            <div className="text">
              <div className="heading">Money Guarantee</div>
              <div className="sub-heading">7 Days Money Back</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>

            <div className="text">
              <div className="heading">Fast Delivery</div>
              <div className="sub-heading">Within 3-5 business days</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa fa-credit-card"></i>
            </div>

            <div className="text">
              <div className="heading">Secure Payments</div>
              <div className="sub-heading">All Cards Accepted</div>
            </div>
          </div>
        </div>

        <div className="main-category">
          <div className="heading-2">Categories</div>

          <div className="grid grid-three-col category-grid">
            {categories.map((category) => {
              return (
                <Link to="/products" key={category._id}>
                  <div
                    className="category-container"
                    onClick={() => {
                      productDispatch({
                        type: CLEAR_FILTERS,
                        payload: { data: productState.products },
                      });
                      productDispatch({
                        type: CATEGORY,
                        payload: { value: category.categoryName },
                      });
                    }}
                  >
                    <img
                      className="resp-img"
                      src={category.image}
                      alt={category.categoryName}
                    />
                    <div className="overlay-container">
                      {category.categoryName.toUpperCase()}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="featured-category">
          <div className="heading-2">Featured</div>

          <div className="grid grid-three-col featured-grid">
            {productState.products.slice(0, 4).map((product) => (
              <HorizontalCard product={product} key={product._id} />
            ))}
          </div>
        </div>
        <div className="featured-category">
          <div className="heading-2">You May Also Like</div>

          <div className="grid grid-four-col featured-grid">
            {productState.products.slice(0, 4).map((product) => (
              <HorizontalCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
