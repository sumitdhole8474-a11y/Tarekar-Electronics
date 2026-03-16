"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Headset, RotateCcw, ArrowRight } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function PremiumHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [hero, setHero] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  /* ===============================
     FETCH HERO DATA FROM BACKEND
  =============================== */
  useEffect(() => {
    const loadHero = async () => {
      try {
        const res = await fetch(`${API_URL}/api/hero`, {
          cache: "no-store",
        });

        const data = await res.json();

        setHero(data);

        if (data?.images) {
          setImages(data.images);
        }
      } catch (err) {
        console.error("Hero fetch failed", err);
      }
    };

    loadHero();
  }, []);

  /* ===============================
     AUTO SLIDER
  =============================== */
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [images]);

  if (!hero) return null;

  return (
    <section className="w-full bg-white pt-24 pb-12 px-4 md:px-10">
      {/* MAIN CINEMA CONTAINER */}
      <div className="relative max-w-7xl mx-auto h-[480px] md:h-[520px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">

        {/* BACKGROUND IMAGE SLIDER */}
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />

            <img
              src={src}
              alt="Premium Electronics"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* CONTENT OVERLAY */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-20 text-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-blue-500"></span>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              {hero.subtitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 max-w-2xl">
            {hero.title_main}{" "}
            <span className="text-blue-400">{hero.title_highlight}</span>
            <br />
            {hero.title_line2}
          </h1>

          <p className="text-slate-200 text-base md:text-lg max-w-md mb-10 font-light leading-relaxed opacity-90">
            {hero.description}
          </p>

          {/* BUTTON GROUP (UNCHANGED) */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/customer-support" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm transition-all hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-900/20 active:scale-95 whitespace-nowrap">
                Get Customer Help
                <ArrowRight size={18} />
              </button>
            </Link>

            <a
              href="https://g.page/r/CVopq8vfr-Y6EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white hover:text-black transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              <GoogleIcon />
              Write a Review
            </a>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="absolute bottom-8 left-8 md:left-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-12 bg-blue-500"
                    : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE RIBBON (DYNAMIC) */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <CompactFeature
          icon={<ShieldCheck size={20} />}
          title={hero.feature_1_title}
          desc={hero.feature_1_desc}
        />

        <CompactFeature
          icon={<Truck size={20} />}
          title={hero.feature_2_title}
          desc={hero.feature_2_desc}
        />

        <CompactFeature
          icon={<Headset size={20} />}
          title={hero.feature_3_title}
          desc={hero.feature_3_desc}
        />

        <CompactFeature
          icon={<RotateCcw size={20} />}
          title={hero.feature_4_title}
          desc={hero.feature_4_desc}
        />
      </div>
    </section>
  );
}

/* ===============================
   FEATURE COMPONENT
=============================== */

function CompactFeature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
      <div className="p-2 bg-slate-50 rounded-lg text-blue-600">
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-900 leading-tight">
          {title}
        </h4>

        <p className="text-[11px] text-slate-400 font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ===============================
   GOOGLE ICON
=============================== */

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.2 3.6l6.9-6.9C35.5 2.4 30.2 0 24 0 14.7 0 6.7 5.5 2.8 13.5l8.1 6.3C13 13 18 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.1 24.5c0-1.7-.1-3.3-.4-4.8H24v9.1h12.4c-.5 2.7-2 5-4.2 6.6l6.5 5C42.8 36.5 46.1 31 46.1 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.9 28.8c-.5-1.4-.8-2.9-.8-4.3s.3-2.9.8-4.3l-8.1-6.3C1 17.3 0 20.6 0 24s1 6.7 2.8 10.1l8.1-6.3z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.5 0 12-2.1 16-5.7l-6.5-5c-2 1.4-4.6 2.2-9.5 2.2-6 0-11-3.5-13.1-8.5l-8.1 6.3C6.7 42.5 14.7 48 24 48z"
      />
    </svg>
  );
}