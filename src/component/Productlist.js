import React from "react";

function Productlist({ products, addTocart }) {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/112.jpg"
              class="d-block w-100"
              alt="..."
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {products.map((item, productindex) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="text-center">
                    <img src={item.url} alt="1" className="w-50" />
                    <p>
                      {item.name} || {item.category}
                      <br />
                      {item.seller}
                      <br />
                      Rs. {item.price}/-{" "}
                    </p>
                    <button onClick={() => addTocart(item)} className="btn btn-outline-info">Add To Cart</button>
                  </div>
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Productlist;
