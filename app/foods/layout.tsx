import CategoryList from "@/components/index/CategoryList";
import Header from "@/components/foods/Header";

type Props = {
  children: React.ReactNode;
};

export default function FoodsLayout({ children }: Props) {
  return (
    <div className="grid grid-flow-row place-content-center">{children}</div>
  );
}
