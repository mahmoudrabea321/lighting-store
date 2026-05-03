import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-white/50 text-xs font-sans mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center">
          <span className="text-white text-lg font-serif tracking-[0.2em] mr-4">LUMINA<span className="text-gold">.</span></span>
          <span className="uppercase tracking-widest">&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left uppercase tracking-widest">
          <p>
            Developed by{' '}
            <a 
              href="http://mahmoud-rabea.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Mahmoud Rabea
            </a>
          </p>
          <a 
            href="https://www.linkedin.com/in/mahmoud-rabea-456547259/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors font-medium border border-white/20 px-3 py-1 rounded-full hover:border-gold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
