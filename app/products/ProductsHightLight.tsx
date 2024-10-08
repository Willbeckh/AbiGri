import React from "react";
import { supabase } from "@/utils/supabaseClient";

const ProductHighlights = async () => {
  const { data: featuredProducts } = await supabase
    .from("products")
    .select("*, product_categories(*)");

  console.log("featuredProducts: ", featuredProducts);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <h1 className=" text-green-500  text-3xl lg:mt-20 mt-12 mb-4 lg:ps-6 border-b-2 border-green-400 pb-4">
        Featured Products
      </h1>
      <div className="flex flex-col lg:flex-row flex-1 justify-between p-8">

        <div className="">
          <pre>{JSON.stringify(featuredProducts, null)}</pre>
        </div>
        <div className=""> Product 2</div>
        <div className=""> Product 3</div>
        <div className=""> Product 4</div>
      </div>
    </div>
  );
};

export default ProductHighlights;
