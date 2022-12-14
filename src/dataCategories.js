export const Categories = [
  { text: "All Products", url: "all" },
  { text: "Electronics & Accessories", url: "electronics-accessories" },
  { text: "Tools & Equipment", url: "tools-equipment" },
  { text: "Home Furniture & Appliances", url: "home-furniture-appliances" },
  { text: "Party & Event Items", url: "party-event-items" },
  { text: "Toys & Sports", url: "toys-sports" },
  { text: "Fashion & Jewelries", url: "fashion-jewelry" },
  { text: "Books", url: "books" },
];

export function getCategories() {
  return Categories;
}

export function getCategory(url) {
  return Categories.find((category) => category.url === url);
}
