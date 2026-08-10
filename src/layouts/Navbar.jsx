import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown, Bot } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "BrainBrick Platform", path: "/brainbrick" },
  { label: "Workshops", path: "/workshops" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const productLinks = [
  { label: "Starter Robots", description: "Begin your robotics journey", path: "/products" },
  { label: "BrainBrick Controller", description: "The heart of your robot", path: "/brainbrick" },
  { label: "DIY Robotics Kits", description: "Build, experiment and learn", path: "/products" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  const whatsappUrl = "https://wa.me/919665083964?text=Hello%20BrainBrick,%20I%20would%20like%20to%20know%20more%20about%20your%20robotics%20products.";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMobileMenu} className="group flex items-center gap-3" aria-label="BrainBrick Home">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-md transition-transform duration-300 group-hover:scale-105">
            <Bot className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <div className="leading-none">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">BrainBrick</div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-gray-500 sm:text-[10px]">BUILD • CODE • CREATE</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`}>Home</NavLink>

          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button type="button" onClick={() => setProductsOpen((v) => !v)} className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600" aria-expanded={productsOpen} aria-haspopup="true">
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                  {productLinks.map((product) => (
                    <Link key={product.label} to={product.path} onClick={() => setProductsOpen(false)} className="group flex items-start gap-3 rounded-xl p-3 hover:bg-blue-50">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600"><Bot className="h-5 w-5" /></div>
                      <div>
                        <div className="text-sm font-bold text-gray-800 group-hover:text-blue-700">{product.label}</div>
                        <div className="mt-0.5 text-xs text-gray-500">{product.description}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="my-1 border-t border-gray-100" />
                  <Link to="/products" onClick={() => setProductsOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-purple-600 hover:bg-purple-50">View all products →</Link>
                </div>
              </div>
            )}
          </div>

          {navigation.filter((item) => item.label !== "Home" && item.label !== "Products").map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`}>{item.label}</NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-green-600" aria-label="Chat with BrainBrick on WhatsApp">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>

        <button type="button" onClick={() => setMobileMenuOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 lg:hidden" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            <div className="space-y-1">
              <NavLink to="/" end onClick={closeMobileMenu} className={({ isActive }) => `block rounded-xl px-4 py-3 text-base font-semibold ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"}`}>Home</NavLink>

              <button type="button" onClick={() => setProductsOpen((v) => !v)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-gray-700 hover:bg-gray-50" aria-expanded={productsOpen}>
                <span>Products</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="ml-3 space-y-1 border-l-2 border-blue-100 pl-3">
                  {productLinks.map((product) => (
                    <Link key={product.label} to={product.path} onClick={closeMobileMenu} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700">{product.label}</Link>
                  ))}
                </div>
              )}

              {navigation.filter((item) => item.label !== "Home" && item.label !== "Products").map((item) => (
                <NavLink key={item.path} to={item.path} onClick={closeMobileMenu} className={({ isActive }) => `block rounded-xl px-4 py-3 text-base font-semibold ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"}`}>{item.label}</NavLink>
              ))}
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3.5 text-base font-bold text-white hover:bg-green-600">
              <MessageCircle className="h-5 w-5" /> Chat with BrainBrick
            </a>

            <div className="mt-5 border-t border-gray-100 pt-4 text-center">
              <p className="text-xs font-medium text-gray-500">Life Republic, Pune – 411057</p>
              <p className="mt-1 text-xs text-gray-500">+91 96650 83964</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;