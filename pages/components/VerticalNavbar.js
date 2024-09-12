import Link from 'next/link';

const VerticalNavbar = () => {
  return (
    <div className="fixed right-6 top-1/3 h-full flex flex-col items-center text-gray-400 w-20">
      <ul className="flex flex-col items-center mt-10 space-y-6">
        <li>
          <a href="#about" className="hover:text-gray-700">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-700">Services</a>
        </li>
        <li>
          <a href="#works" className="hover:text-gray-700">Works</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
