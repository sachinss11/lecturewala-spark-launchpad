
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-poppins font-bold text-xl text-lecturewala-text">
              Lecture<span className="text-lecturewala-yellow">wala</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="font-medium text-lecturewala-text hover:text-lecturewala-yellow-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button className="bg-lecturewala-yellow hover:bg-lecturewala-yellow-dark text-lecturewala-text" size="sm">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-600 hover:text-lecturewala-yellow focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden pt-2 pb-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block px-4 py-2 text-base font-medium text-lecturewala-text hover:bg-lecturewala-yellow-light rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col px-4 pt-4 space-y-2">
              <Button variant="outline" className="justify-center">
                Log in
              </Button>
              <Button className="bg-lecturewala-yellow hover:bg-lecturewala-yellow-dark text-lecturewala-text justify-center">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
