
import { Heart, Code, Coffee } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 border-t border-gray-800 py-[10px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            
          </div>

          {/* Quick Links */}
          

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Poorna Prakash. All rights reserved.
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              "Driven by code, powered by curiosity" - Always learning, always growing.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
