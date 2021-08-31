import React from "react";

const categories = [
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
    title: "Design",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
    title: "Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    title: "Marketing",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    title: "IT and Software",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
    title: "Personal Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    title: "Business",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    title: "Photography",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
    title: "Music",
  },
];

export default function TopCateGories() {
  const renderCategories = () => {
    return categories.map((item, index) => {
      return (
        <a
          key={index}
          href="#"
          className="block border border-black rounded-full text-md font-bold p-3 mr-2 mt-2 md:border-0"
        >
          <img
            className="py-2 hidden md:block"
            src={item.image}
            alt={`Hình ảnh categories ${index}`}
          />
          <p className="md:py-2">{item.title}</p>
        </a>
      );
    });
  };

  return (
    <div className="p-6">
      <h2 className="mb-3 text-2xl font-bold">Top categories</h2>
      <div className="flex flex-wrap md:grid grid-cols-4 m-0">
        {renderCategories()}
      </div>
    </div>
  );
}
