import React from "react";

function Home(props) {
  // console.log("Home", props);
  console.log("Home", props.data);
  return (
    <div>
      <h1> Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177802-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTU5MnxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGYzLzk4OTA3MzM5NDg5NTguanBnfDA0MzRlOTY1YzI2ZDRmMjcwNjJmOWViMzYyNDAxMmZkYTU5MTFiNDkyOThlOTU1ODExOTQyYTljOTUyMGM5ZDQ" />
          <div className="text-wrapper ">
            <span>I-Phone 14 ( Pro-Max ) </span>
            <span> Price : $1099</span>
          </div>
          <div className="btn-wrapper">
            <button
              onClick={() =>
                props.addToCartHandler({
                  name: "I-Phone 14 (Pro-Max)",
                  price: 1099,
                })
              }
            >
              Add to Cart
            </button>{" "}
            <button onClick={() => props.removeToCartHandler({})}>
              Remove to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
