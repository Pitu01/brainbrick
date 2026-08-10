import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import Badge from "../common/Badge";

const accentStyles = {
  blue: "from-blue-500 to-cyan-500 bg-blue-50 text-blue-600",
  purple: "from-purple-500 to-fuchsia-500 bg-purple-50 text-purple-600",
  orange: "from-orange-500 to-amber-500 bg-orange-50 text-orange-600",
  green: "from-green-500 to-emerald-500 bg-green-50 text-green-600",
};

function ProductCard({ product }) {
  const Icon = product.icon;
  const accent = accentStyles[product.accent] || accentStyles.blue;

  return (
    <Link to={`/products/${product.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${accent.split(" ").slice(0, 2).join(" ")}`} />
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.split(" ").slice(2).join(" ")}`}>
              <Icon className="h-7 w-7" />
            </div>
            <Badge variant="gray">{product.status}</Badge>
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-gray-400">{product.category}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 group-hover:text-blue-700">{product.name}</h2>
          <p className="mt-3 font-semibold leading-6 text-gray-700">{product.tagline}</p>
          <p className="mt-3 text-sm leading-7 text-gray-500">{product.description}</p>

          <ul className="mt-6 space-y-2">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
            View product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ProductCard;
