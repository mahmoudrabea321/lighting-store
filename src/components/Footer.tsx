import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-white/60 text-xs font-sans mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <span className="text-white text-xl font-serif tracking-[0.2em]">LUMINA<span className="text-gold">.</span></span>
            </div>
            <p className="leading-relaxed mb-6 pr-4">
              Curators of fine architectural lighting. We believe that illumination is the foundation of extraordinary spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-4 uppercase tracking-widest text-[10px]">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Shop Collection</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Design Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Trade Program</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Customer Care</h3>
            <ul className="space-y-4 uppercase tracking-widest text-[10px]">
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Product Warranty</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">123 Design District,<br />Cairo, Egypt 11511</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@lumina.com" className="hover:text-white transition-colors">info@lumina.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="uppercase tracking-widest text-[10px] text-white/40">
            &copy; {new Date().getFullYear()} Lumina Lighting. All Rights Reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left uppercase tracking-widest text-[10px]">
            <p>
              Developed by{' '}
              <a 
                href="http://mahmoud-rabea.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors font-medium border-b border-transparent hover:border-gold pb-0.5"
              >
                Mahmoud Rabea
              </a>
            </p>
            <a 
              href="https://www.linkedin.com/in/mahmoud-rabea-456547259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors font-medium border border-white/20 px-4 py-1.5 rounded-full hover:border-gold flex items-center"
            >
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
