import Hero from "@/components/index/Hero";
import CategoryList from "@/components/index/CategoryList";

export default function Home() {
  return (
    <div className="bg-slate-300 flex flex-col">
      <Hero />
      <div className="bg-white py-5 px-3 sm:py-10 sm:px-20 grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        <CategoryList />
      </div>
    </div>
  );
}
