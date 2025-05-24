export default function Header() {
  return (
    <header>
      {/* Logo Design */}
      <div className="size-10 bg-primary flex items-center rounded-sm relative p-1 mb-8">
        <div className="size-6 bg-background rounded-full"></div>
        <div className="size-6 bg-background inline-flex justify-center items-center rounded-full absolute -translate-x-2/5 -translate-y-1/2 top-1/2 left-1/2">
          <div className="size-4 bg-primary rounded-full"></div>
        </div>
      </div>
      <h1 className="uppercase text-2xl mb-4 font-mono tracking-widest md:hidden font-bold">
        0ru 0v13
      </h1>
    </header>
  );
}
