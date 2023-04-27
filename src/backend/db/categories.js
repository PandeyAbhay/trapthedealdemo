import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Telivision",
    image:
      "https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-02-min%20(1).jpg",
  },
  {
    _id: uuid(),
    categoryName: "Washing Machine",
    image:
      "https://trapthedeal.dousoftit.com/uploads/highlight_products/1675312192.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Geysers",
    image:
      "https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-03-min%20(1).jpg",
  },
];
