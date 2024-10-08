import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  // extract data from the request body
  const { title, description, banner_image } = await request.json();

  const homepageData = {
    title,
    description,
    banner_image,
  };

  //   insertion
  const { data, error } = await supabase
    .from("homepage_content")
    .insert([homepageData]);

  //   error
  if (error) {
    console.error("Error adding content", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data }, { status: 200 });
}
