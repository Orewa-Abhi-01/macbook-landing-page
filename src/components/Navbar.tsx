import { navLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="h-[50px]  flex items-center justify-around py-2 px-4 mx-auto container ">
      <img src="/logo.svg" alt="apple-logo" />

      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link} className=" hover:text-gray-400 cursor-pointer">
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <button>
          <img src="/search.svg" alt="search" />
        </button>
        <button>
          <img src="/cart.svg" alt=" cart" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
