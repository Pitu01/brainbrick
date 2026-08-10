import { useMemo, useState } from "react";
import { ArrowRight, Boxes, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import ProductCard from "../components/products/ProductCard";
import { categories, productHighlights, products } from "../data/products";

function Products() {
  const [category, setCategory] = useState("All");

  const visibleProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(124,58,237,.24),transparent_32%)]" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">BRAINBRICK PRODUCTS</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Robotics that invite you to build.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Explore the BrainBrick product ecosystem — from starter robot concepts to the programmable core and modular expansions.</p>
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <SectionTitle eyebrow="Designed as an Ecosystem" title="Start small. Keep building." description="The catalogue is structured around a reusable learning journey rather than one-off products." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {productHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-lg font-extrabold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Product Catalogue</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Explore the range</h2>
            </div>
            <Link to="/brainbrick" className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700">Understand the BrainBrick platform <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? "bg-gray-900 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"}`}>
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white shadow-xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Boxes className="h-6 w-6" /></div>
                <h2 className="mt-5 text-3xl font-black sm:text-4xl">Need help choosing a starting point?</h2>
                <p className="mt-4 max-w-2xl leading-7 text-blue-100">Tell us what you want to build or learn. We can help map the idea to a suitable BrainBrick product or workshop.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to="/contact" variant="secondary" className="border-white/30 bg-white text-blue-700 hover:bg-blue-50">Contact BrainBrick</Button>
                <a href="https://wa.me/919665083964?text=Hello%20BrainBrick,%20please%20help%20me%20choose%20a%20robotics%20product." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/20"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Products;
