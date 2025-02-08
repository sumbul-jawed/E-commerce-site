import {defineQuery} from "next-sanity"

export const allproducts = defineQuery(`
  *[_type == "product"]{
     _id,
     title,
     description,
     price,
     "imageUrl": productImage.asset->url
  }`);
