import React from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import Button from "@/components/ui/Button";

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

  console.log("products: ", products);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <h1 className=" text-green-500 text-3xl mb-4 lg:ps-6 border-b-2 border-green-400 pb-4">
        Shop
      </h1>
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
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <div className="badge badge-sm badge-ghost">
                  {product.price || "$$"}
                </div>
                <div className="flex justify-between mt-4">
                  <div className="card-actions ">
                    <Button text="Add" className="btn-sm btn-info" />
                  </div>
                  <div className="card-actions">
                    <Button
                      text="Buy"
                      className="btn-sm btn-outline btn-info"
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
