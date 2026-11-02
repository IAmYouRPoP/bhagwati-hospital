import { Phone, MapPin } from "lucide-react";

export default function QuickContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 lg:hidden shadow-2xl flex items-center justify-between gap-3">
      <a
        href="tel:+919627408441"
        className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-3 rounded-lg text-sm shadow-md transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span>Emergency Call</span>
      </a>
      <a
        href="https://maps.google.com/?q=Bhagwati+Hospital+325+Chaw+Mandi+Roorkee"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-3 rounded-lg text-sm transition-all"
      >
        <MapPin className="w-4 h-4 text-emerald-400" />
        <span>Map</span>
      </a>
    </div>
  );
}
