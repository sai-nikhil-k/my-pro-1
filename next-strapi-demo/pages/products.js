import React, { useState } from "react";
import Card from "../components/card";

// var http = require("http");

// const [commentArray, setCommentArray] = useState([]);

export default function Products({ productList }) {
  //   const fetchCommentsWithGet = async () => {
  //     const res = await fetch("http://localhost:1337/api/products?populate=*");
  //     const data = await res.json();
  //     setCommentArray(data);
  //   };
  return (
    <div>
      {/* <button onClick={fetchCommentsWithGet}>getPrd</button> */}
      {productList.map((data) => (
        <Card product={data} />
      ))}
    </div>
  );
}

// export default Products;

export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer 857203818d61346797e30c2d11c9d2fc3b234acd53a90b6fb891de8b555f103086d4a69bc32f6ba935fa1c21099b538d2ceba5d290fdb73f822b1ea338b0dedc3048de8459279a7ab1df5909bfbfaf536e9de95bf3efff3655f9d8065db4fce4213a107b267c97921d3a9c14386fc6c8dc0fa8aabb90eb74eafeb03d6b04dbdf",
  };
  let res = await fetch("http://localhost:1337/api/products", {
    headers: headers,
  });
  const data = await res.json();
  console.log(data);
  return {
    props: {
      productList: data,
    },
  };
}
