import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-ocean-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-ocean-primary">
              ARZ Host
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="text-ocean-text hover:text-ocean-primary transition-colors"
              >
                VPS Hosting Hong Kong
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-ocean-text hover:text-ocean-primary transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-ocean-text hover:text-ocean-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/about"
              className="text-ocean-text hover:text-ocean-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-ocean-text hover:text-ocean-primary transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://arzhost.com/vps/"
              className="bg-ocean-primary text-white px-6 py-2 rounded-lg hover:bg-ocean-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
