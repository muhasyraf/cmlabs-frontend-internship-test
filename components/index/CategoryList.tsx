import FoodCard from "../global/FoodCard";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

async function getAllCategory() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
}

export default async function CategoryList() {
  const data = await getAllCategory();
  return (
    <div className="px-4 py-5 sm:px-8 grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center w-max">
      {data.categories.map((category: Category) => (
        <FoodCard
          key={category.idCategory}
          id={category.idCategory}
          title={category.strCategory}
          thumb={category.strCategoryThumb}
          ver="categoryList"
        />
      ))}
    </div>
  );
}
