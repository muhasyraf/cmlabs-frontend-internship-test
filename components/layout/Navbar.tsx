import Link from "next/link";
import Routes from "@/data/routes";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 backdrop-blur-md bg-[#ffffffb9]">
      <ul>
        <li className="font-bold">Meal App</li>
      </ul>
      <ul className="flex items-center space-x-10">
        {Routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
