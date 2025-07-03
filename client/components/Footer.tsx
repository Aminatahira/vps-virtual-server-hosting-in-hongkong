import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ocean-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ARZ Host</h3>
            <p className="text-gray-300 mb-4">
              Professional VPS hosting solutions for Asia-Pacific region with
              unbeatable performance and reliability.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                Website:{" "}
                <a
                  href="https://arzhost.com"
                  className="text-ocean-accent hover:underline"
                >
                  arzhost.com
                </a>
              </p>
              <p>Phone: +1 (631) 594-8060</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                  className="hover:text-ocean-accent transition-colors"
                >
                  VPS Hosting Hong Kong
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/region-based-vps/"
                  className="hover:text-ocean-accent transition-colors"
                >
                  VPS Region
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Lifetime Web Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Our Hosting Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-ocean-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-ocean-accent transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Actions</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://arzhost.com/vps/"
                  className="bg-ocean-primary text-white px-4 py-2 rounded-lg hover:bg-ocean-primary/90 transition-colors inline-block"
                >
                  Choose Your Plan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} ARZ Host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
