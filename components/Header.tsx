import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/logo.svg"
        alt="Logo showing overlapping circles"
        width={650}
        height={650}
        className="size-10 mb-8 block"
      />
      <h1 className="uppercase text-2xl mb-4 font-mono tracking-widest md:hidden font-bold">
        0ru 0v13
      </h1>
    </header>
  );
}
