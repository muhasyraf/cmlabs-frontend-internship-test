import Link from "next/link";
import Image from "next/image";
import { stringToSlug } from "@/utils/helpers";

type Props = {
  id: string;
  title: string;
  thumb: string;
  ver: string;
};

export default function FoodCard({ id, title, thumb, ver }: Props) {
  const slug = stringToSlug(title);
  return (
    <Link
      href={`/foods/${slug}`}
      className="rounded-xl relative w-max flex justify-center items-center"
      key={id}
    >
      <p className="text-xl w-full h-full absolute bg-black/50 rounded-xl text-white flex flex-col justify-center items-center">
        {title}
      </p>
      <Image
        src={thumb}
        alt={title}
        width={200}
        height={200}
        sizes={`${ver === "categoryList" ? "" : "200px"}`}
        className="rounded-xl object-cover object-center"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Link>
  );
}
