import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex-none p-4 hidden md:block">
      <h1 className="text-2xl font-semibold mb-4">My Sidebar</h1>
      <ul>
        <li className="mb-2">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
