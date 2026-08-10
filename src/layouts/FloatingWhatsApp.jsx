import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

function FloatingWhatsApp() {
  const [showLabel, setShowLabel] = useState(false);
  const whatsappNumber = "919665083964";
  const message = "Hello BrainBrick, I would like to know more about your robotics products and workshops.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showLabel && (
        <div className="relative max-w-xs rounded-2xl bg-white px-4 py-3 text-sm shadow-xl ring-1 ring-gray-200">
          <button type="button" onClick={() => setShowLabel(false)} className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white" aria-label="Close WhatsApp message">
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="font-semibold text-gray-800">Have a question?</p>
          <p className="mt-1 text-gray-500">Chat with BrainBrick on WhatsApp.</p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setShowLabel((v) => !v)} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-gray-200 hover:shadow-xl sm:block" aria-label="Show WhatsApp information">
          Chat with us
        </button>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with BrainBrick on WhatsApp" className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl ring-4 ring-white hover:-translate-y-1 hover:bg-green-600 hover:shadow-2xl">
          <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
        </a>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;