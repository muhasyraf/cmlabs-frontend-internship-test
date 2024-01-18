import Image from "next/image";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

async function getAllCategory() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
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
    <>
      {data.categories.map((category: Category) => (
        <div
          key={category.idCategory}
          className="rounded-xl relative w-max flex justify-center items-center"
        >
          <p className="text-xl w-full h-full absolute bg-black/50 rounded-xl text-white flex flex-col justify-center items-center">
            {category.strCategory}
          </p>
          <Image
            src={category.strCategoryThumb}
            alt={category.strCategory}
            width={200}
            height={200}
            sizes="100vw"
            className="rounded-xl object-cover object-center"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      ))}
    </>
  );
}
