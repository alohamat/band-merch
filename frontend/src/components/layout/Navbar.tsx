export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-white/20 border border-white/10 text-white backdrop-blur-xl p-4 flex justify-between font-medium">
      <article>
        <p className="cursor-pointer w-fit">BM</p>
      </article>
      <article className="flex gap-5">
        <p>Products</p>
        <p>About</p>
      </article>
    </nav>
  );    
}
