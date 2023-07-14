import React, { useEffect, useState } from "react";

function Cartlist({ carts }) {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(carts);
  }, [carts]);

  const message = ()=>{
    alert('Payment Successfully')
  }
  return (
    <>
      <h2 className="text-center"> Items </h2>
      <div className="container bg-body-tertiary">
        {" "}
        <div className="row">
          {" "}
          <div className="col-md-12">
            {CART?.map((item, cartindex) => {
              return (
                <>
                  <div className="py-4 text-center">
                    <img src={item.url} alt="2" width={60} />
                    &nbsp;&nbsp; <br />
                    <br />
                    <span>{item.name}</span>&nbsp;&nbsp;
                    <button
                      onClick={() => {
                        const _CART = CART.map((itemcart, index) => {
                          return cartindex === index
                            ? {
                                ...item,
                                quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                              }
                            : itemcart;
                        });
                        setCART(_CART);
                      }}
                    >
                      -
                    </button>
                    &nbsp;
                    <span>{item.quantity}</span>&nbsp;
                    <button
                      onClick={() => {
                        const _CART = CART.map((itemcart, index) => {
                          return cartindex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : itemcart;
                        });
                        setCART(_CART);
                      }}
                    >
                      +
                    </button>
                    &nbsp;&nbsp;
                    <span>Rs.{item.price * item.quantity}</span>
                  </div>
                </>
              );
            })}
            <hr/>
           <div className="text-center">  
            <p>
              {" "}
             <b>Total: </b>  <span></span>
              {CART.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}
            </p>
             <button className="btn btn-primary mb-3" onClick={message}>PAY NOW</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartlist;
