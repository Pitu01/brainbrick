import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Container from "../components/common/Container";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { getProduct } from "../data/products";

function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="page-wrapper bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-black text-gray-900">Product not found</h1>
            <p className="mt-4 text-gray-500">This product page is not available yet.</p>
            <div className="mt-7"><Button to="/products">Back to Products</Button></div>
          </div>
        </Container>
      </main>
    );
  }

  const Icon = product.icon;

  return (
    <main>
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to products</Link>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div className="flex aspect-square max-w-xl items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white/5 ring-1 ring-white/10"><Icon className="h-20 w-20 text-blue-300" strokeWidth={1.2} /></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-slate-500">Product visual placeholder</p>
              </div>
            </div>
            <div>
              <Badge variant="blue" className="bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">{product.category}</Badge>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{product.name}</h1>
              <p className="mt-5 text-xl font-semibold text-slate-200">{product.tagline}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">{product.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/contact">Ask About This Product</Button><a href={`https://wa.me/919665083964?text=${encodeURIComponent(`Hello BrainBrick, I would like to know more about ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10"><MessageCircle className="h-5 w-5" /> WhatsApp</a></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="brain-section bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <Card className="p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">What you can explore</p>
              <h2 className="mt-3 text-3xl font-black text-gray-900">Learning features</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => <div key={feature} className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 text-sm font-semibold text-gray-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />{feature}</div>)}
              </div>
            </Card>
            <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-purple-600">Product stage</p>
              <h2 className="mt-3 text-3xl font-black text-gray-900">{product.status}</h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">This Module 3 catalogue intentionally uses product concepts and placeholders. Final specifications, photographs, pricing, availability and compliance information should be added only after they are confirmed.</p>
              <div className="mt-7"><Button to="/contact" variant="secondary">Discuss this product</Button></div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ProductDetail;
