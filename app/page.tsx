import Hero from "@/components/index/Hero";
import CategoryList from "@/components/index/CategoryList";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <CategoryList />
    </div>
  );
}
