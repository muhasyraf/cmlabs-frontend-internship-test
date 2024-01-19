import Link from "next/link";
import FoodCard from "@/components/global/FoodCard";
import Header from "@/components/foods/Header";

type CategoryFood = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export default async function CategoryFood({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();

  return (
    <>
      <Header slug={slug} />
      <div className="px-4 py-2 sm:px-8 grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center w-max">
        {data.meals.map((food: CategoryFood) => (
          <FoodCard
            key={food.idMeal}
            id={food.idMeal}
            title={food.strMeal}
            thumb={food.strMealThumb}
            ver="categoryFood"
          />
        ))}
      </div>
    </>
  );
}
