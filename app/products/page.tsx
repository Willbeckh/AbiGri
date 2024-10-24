import React from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";

const Products = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, product_categories(*)");

  if (error) {
    return <p>Failed to fetch data</p>;
  }

  if (!products) {
    return (
      <div className="loading loading-dots">
        <p>Loading products data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8">
      <h1 className=" text-green-500 text-3xl mb-4 lg:ps-6">Shop</h1>
      <div className="w-1/2 h-1 bg-green-500 rounded-full mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {products &&
          products.map((product, index) => (
            <div key={index} className="card card-compact shadow-lg h-80 mb-4">
              <figure>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <div className="badge badge-sm badge-ghost">
                  {product.price || "$$"}
                </div>
                <div className="card-actions ">
                  <Button className="btn-button">
                    Add to Cart <FaShoppingCart />
                  </Button>
                </div>
                {/* <div className="flex justify-between mt-4">
                  <div className="card-actions">
                    <Button className="btn-sm btn-outline" disabled={true}>
                      Buy
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
