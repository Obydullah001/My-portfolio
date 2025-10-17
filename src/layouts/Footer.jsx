const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-gray-900 text-white px-6 py-4">
      {/* Left Side */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block">
          Obydullah<span className="text-white">&lt;/&gt;</span>
        </h2>
        <p className="text-sm mt-1">© All rights reserved</p>
      </div>

      {/* Right Side Navigation */}
      <nav>
        <ul className="flex gap-6 text-sm">
          <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;