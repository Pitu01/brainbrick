import { Link } from "react-router-dom";
import { Bot, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "BrainBrick Platform", path: "/brainbrick" },
  { label: "Workshops", path: "/workshops" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const productLinks = [
  { label: "Starter Robots", path: "/products" },
  { label: "BrainBrick Controller", path: "/brainbrick" },
  { label: "DIY Robotics Kits", path: "/products" },
  { label: "Robotics Workshops", path: "/workshops" },
];

function Footer() {
  const whatsappUrl = "https://wa.me/919665083964?text=Hello%20BrainBrick,%20I%20would%20like%20to%20know%20more%20about%20your%20robotics%20products.";

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="group inline-flex items-center gap-3" aria-label="BrainBrick Home">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-105">
                <Bot className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight">BrainBrick</div>
                <div className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-gray-400">BUILD • CODE • CREATE</div>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">Hands-on robotics learning through building, coding, experimenting and creating.</p>
            <p className="mt-4 text-sm font-medium text-gray-300">An Atlas Robotics Initiative</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-600">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group inline-flex items-center text-sm text-gray-400 hover:text-white">
                    <span>{link.label}</span><ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Explore</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="group inline-flex items-center text-sm text-gray-400 hover:text-white">
                    <span>{link.label}</span><ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Contact Us</h3>
            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div><p className="text-sm font-semibold">Visit Us</p><p className="mt-1 text-sm leading-6 text-gray-400">Life Republic<br />Pune – 411057</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                <div><p className="text-sm font-semibold">Call / WhatsApp</p><a href="tel:+919665083964" className="mt-1 block text-sm text-gray-400 hover:text-white">+91 96650 83964</a></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                <div><p className="text-sm font-semibold">Email</p><a href="mailto:ppbiswas100@gmail.com" className="mt-1 block break-all text-sm text-gray-400 hover:text-white">ppbiswas100@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs text-gray-500 sm:text-sm">© {new Date().getFullYear()} BrainBrick. All rights reserved.</p>
          <p className="text-xs text-gray-600 sm:text-sm">Build • Code • Create</p>
          <div className="flex justify-center gap-5 md:justify-end">
            <Link to="/about" className="text-xs text-gray-500 hover:text-white sm:text-sm">About</Link>
            <Link to="/contact" className="text-xs text-gray-500 hover:text-white sm:text-sm">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;