import React from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";

const ProductHighlights = async () => {
  const { data: featuredProducts, error } = await supabase
    .from("products")
    .select("*, product_categories(*)")
    .eq("featured", true);

  if (error) {
    return <p>Failed to fetch data</p>;
  }

  if (!featuredProducts) {
    return (
      <div className="loading loading-dots">
        <p>Loading products data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-8">
      <h1 className=" text-green-500  text-3xl lg:mt-20 mt-12 mb-4 lg:ps-6 border-b-2 border-green-400 pb-4">
        Featured Products
      </h1>
      <div className="flex flex-col lg:flex-row flex-1 columns-3  p-8">
        {featuredProducts &&
          featuredProducts.map((product, index) => (
            <div key={index} className="flex-auto">
              <div className="card glass lg:w-4/5 mb-4 h-80">
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
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductHighlights;

