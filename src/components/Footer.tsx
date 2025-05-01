
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Company Info */}
          <div>
            <div className="font-poppins font-bold text-xl text-lecturewala-text mb-4">
              Lecture<span className="text-lecturewala-yellow">wala</span>
            </div>
            <p className="text-lecturewala-text-light mb-6">
              India's leading online platform for CA, CS, and CMA aspirants. 
              Quality education at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="/courses" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Courses</a>
              </li>
              <li>
                <a href="/faculty" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Faculty</a>
              </li>
              <li>
                <a href="/blogs" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Blogs</a>
              </li>
              <li>
                <a href="/about" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">CA Foundation</a>
              </li>
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">CA Intermediate</a>
              </li>
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">CA Final</a>
              </li>
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">ACCA Complete Course</a>
              </li>
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">CS Executive</a>
              </li>
              <li>
                <a href="#" className="text-lecturewala-text-light hover:text-lecturewala-yellow transition-colors">Crash Courses</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-lecturewala-yellow" />
                <span className="text-lecturewala-text-light">
                  123 Education Lane, Knowledge Park, New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-lecturewala-yellow" />
                <span className="text-lecturewala-text-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-lecturewala-yellow" />
                <span className="text-lecturewala-text-light">info@lecturewala.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-6 text-center">
          <p className="text-lecturewala-text-light text-sm">
            © {currentYear} Lecturewala Education Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
