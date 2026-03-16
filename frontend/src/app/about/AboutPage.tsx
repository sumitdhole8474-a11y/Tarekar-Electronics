"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Star,
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight
} from "lucide-react";
import LatestBlogs from "../components/LatestBlogs";
import Link from "next/link";

// --- COUNTER COMPONENT ---
function Counter({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

 useEffect(() => {
  const unsubscribe = springValue.on("change", (latest: number) => {
    if (ref.current) {
      (ref.current as HTMLElement).textContent =
        Intl.NumberFormat("en-US").format(Math.floor(latest));
    }
  });

  return () => unsubscribe();
}, [springValue]);
  return <span ref={ref} />;
}

const stats = [
  { label: "Years of Legacy", value: 45, suffix: "+", icon: <Award className="w-6 h-6" /> },
  { label: "Happy Customers", value: 50000, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "Premium Brands", value: 15, suffix: "+", icon: <Star className="w-6 h-6" /> },
  { label: "Service Score", value: 100, suffix: "%", icon: <ShieldCheck className="w-6 h-6" /> },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Premium Tech Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase border border-indigo-400/30 rounded-full backdrop-blur-md"
          >
            <Clock className="w-3 h-3" /> Since 1976
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight"
          >
            Tarekar's Electronics <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
             & Home Appliances
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Amravati's premier destination for luxury home appliances and 
            future-ready technology for over four decades.
          </motion.p>
        </div>
      </section>

      {/* FLOATING STATS STRIP WITH COUNTERS */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 text-center flex flex-col items-center group hover:bg-slate-50 transition-colors"
            >
              <div className="mb-4 text-indigo-600 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-black text-slate-900 flex items-center gap-1">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE LEGACY STORY */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
            <img 
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200" 
              alt="Consultation"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-square z-10"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-indigo-600" /> Our Heritage
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] text-slate-900">
              Forty-Five Years of Absolute Integrity.
            </h3>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
              <p>
                Founded in the heart of Amravati, Tarekar’s has evolved into a 
                <span className="text-slate-900 font-semibold"> multi-generational household name</span>. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {['Genuine Warranty', 'On-Site Setup', 'Zero-Cost EMI', 'Priority Support'].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-slate-800 text-base font-semibold">
                    <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    {/* BRAND CARDS SECTION */}
<section className="bg-slate-50 py-32 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">
      <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">
        Partner Ecosystem
      </h2>

      <h3 className="text-4xl md:text-5xl font-black text-slate-900">
        Authorized Retail Excellence
      </h3>

      <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg font-light">
        We partner with leading global electronics brands.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <Link href="/categories/sony">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/sony.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/samsung">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/samsung.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/lg">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/LG.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/panasonic">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/Panasonic.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/ifb">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/IFB.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/godrej">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/godrej.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/daikin">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/dakin.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/lloyd">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/lloyad.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/tcl">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/tlc.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

      <Link href="/categories/voltas">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center aspect-video shadow-sm hover:shadow-xl transition cursor-pointer">
          <img src="/brands/voltas.png" className="max-w-[110px] h-10 object-contain" />
        </div>
      </Link>

    </div>
  </div>
</section>

      {/* CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">Experience Excellence in Person.</h2>
              <p className="text-slate-400 text-lg mb-8 font-light">
                Visit our showroom at Rajkamal Square to explore the latest innovations in smart home technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:9270727029" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
                  <Phone className="w-4 h-4" /> Call Specialist
                </a>
                <button className="border border-slate-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                  Get Directions <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400"><MapPin className="w-6 h-6" /></div>
                <div className="text-left">
                  <h5 className="text-white font-bold text-xl">Amravati Flagship</h5>
                  <p className="text-slate-400">Rajkamal Square, Main Road</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 text-left">
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Open Daily</p>
                <p className="text-white font-medium">10:00 AM — 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LATEST BLOGS */} 
      <LatestBlogs />
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Tarekar’s Electronics & Home Appliances.
        </p>
      </footer>
    </div>
  );
} 