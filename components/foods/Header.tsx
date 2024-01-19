import Link from "next/link";

type Props = {
  slug?: string;
};

export default function Header({ slug }: Props) {
  const title = slug ? slug.charAt(0).toUpperCase() + slug?.slice(1) : "Foods";
  return (
    <div className={`text-start p-4 sm:p-8 flex flex-col gap-2`}>
      <div className="text-base sm:text-lg flex gap-1">
        <Link href={`/`} className="flex gap-1">
          <img src="/icon/home.svg" alt="Home Icon" /> Home
        </Link>
        <Link href={`/foods`} className="flex gap-1">
          <img src="/icon/caret.svg" alt="Caret Icon" /> Foods
        </Link>
        {slug && (
          <div className="flex gap-1 font-bold">
            <img src="/icon/caret.svg" alt="Caret Icon" /> {slug}
          </div>
        )}
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold">{title} Meals</h1>
    </div>
  );
}
