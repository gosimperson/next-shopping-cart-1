import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-between w-full h-12 px-8 bg-primary">
        <h1>WOOWA SHOP</h1>
        <Link href={"/cart"}>장바구니</Link>
      </header>
    </>
  );
}
