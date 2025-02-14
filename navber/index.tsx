import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center bg-gray-800 p-4 rounded">
          <li><a href="#" className="block hover:text-gray-400">Home</a></li>
          <li><a href="#" className="block hover:text-gray-400">About</a></li>
          <li><a href="#" className="block hover:text-gray-400">Services</a></li>
          <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default App;