import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  try {
    const query = search
      ? `*[_type == "product" && title match "${search}*"]{
          _id,
          title,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          dicountPercentage,
          description,
          isNew
        }`
      : `*[_type == "product"]{
          _id,
          title,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          dicountPercentage,
          description,
          isNew
        }`;

    const data = await client.fetch(query);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
