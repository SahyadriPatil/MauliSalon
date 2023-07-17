import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get product details
  const getProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      setLoading(false);
    } catch (error) {
    }
  };

  return (
    <div style={{paddingTop:"80px"}}>
      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ minHeight: "70vh" }}
        >
          <SpinnerDotted
            size={90}
            thickness={76}
            speed={145}
            color="#36ad47"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      ) : (
        <>
          <div className="row container mt-3">
            <div className="col-md-6 text-center">
              <img
                src={`/api/v1/product/product-image/${product?._id}`}
                className="card-img-top h-80"
                alt={product?.name}
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              />
            </div>
            <div className="col-md-6 ">
              <h1 className="text-center" style={{color:"#2900bd"}}>Product Details</h1>
              
              <h6>
                <span style={{ fontWeight: "bold" }}>Name : </span>
                {product?.name}
              </h6>
              <h6>
                <span style={{ fontWeight: "bold" }}>Description : </span>
                {product?.description}
              </h6>
              <h6>
                <span style={{ fontWeight: "bold" }}>Price : </span>
                {product?.price}
              </h6>
              <h6>
                <span style={{ fontWeight: "bold" }}>Category : </span>
                {product?.category.name}
              </h6>
              </div>
            </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
