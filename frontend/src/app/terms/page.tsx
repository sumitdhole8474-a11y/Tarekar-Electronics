import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tarekar’s Electronics & Home Appliances",
  description:
    "Read the Terms & Conditions of Tarekar’s Electronics & Home Appliances to understand the rules, usage policies, and legal guidelines for using our services.",
  openGraph: {
    title: "Terms & Conditions | Tarekar’s Electronics & Home Appliances",
    description:
      "Review the official Terms and Conditions of Tarekar’s Electronics & Home Appliances before using our services.",
    url: "https://tarekarselectronics.com/terms-and-conditions",
    siteName: "Tarekar’s Electronics & Home Appliances",
    locale: "en_IN",
    type: "website",
  },
};

// 👇 The keyword 'export default' MUST be here for Next.js to work
export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
          Legal Information
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conditions</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
          Please read these Terms and Conditions carefully before using the services of Tarekar’s Electronics & Home Appliances to ensure you understand your rights and responsibilities.
        </p>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="relative max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 overflow-hidden">

          {/* Header Bar */}
          <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-mono text-slate-400">
              Last Updated: March 2026
            </span>
          </div>

          <div className="p-8 md:p-12 space-y-12">

            {/* 1. Acceptance */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                1
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  By accessing our store, website, or services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using our services.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* 2. Use of Services */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                2
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Use of Services</h2>
                <p className="text-slate-600 mb-4 text-sm md:text-base">
                  Customers agree to use our services only for lawful purposes. You agree not to:
                </p>

                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Engage in illegal activities",
                    "Disrupt website operations",
                    "Attempt unauthorized access",
                    "Misuse store or service information"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* 3. Intellectual Property */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                3
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  All logos, content, images, branding, and materials displayed on our website or promotional materials belong to <strong className="text-slate-900">Tarekar’s Electronics & Home Appliances</strong> unless otherwise stated. Unauthorized use or reproduction is strictly prohibited.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* 4. Product Information */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                4
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Product Information</h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  We aim to provide accurate details about the electronics and home appliances we sell. However, product specifications, availability, and pricing may change without prior notice.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* 5 & 6 */}
            <div className="grid md:grid-cols-2 gap-12">

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center font-bold text-amber-600">
                    5
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tarekar’s Electronics & Home Appliances shall not be held liable for any damages arising from misuse of products, delays in delivery, or third-party service issues.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center font-bold text-amber-600">
                    6
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Warranty Disclaimer</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Warranty for products is provided directly by the respective manufacturers or brands such as Sony, Samsung, LG, Panasonic, TCL, Godrej, Daikin, Lloyd, IFB, and Voltas.
                </p>
              </div>

            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* 7 & 8 */}
            <div className="grid md:grid-cols-2 gap-12">

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600">
                    7
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Governing Law</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  These Terms and Conditions are governed by the laws of India. Any disputes will fall under the jurisdiction of courts located in Maharashtra, India.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600">
                    8
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Changes to Terms</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We reserve the right to update these Terms and Conditions at any time. Continued use of our services means you accept the updated terms.
                </p>
              </div>

            </div>

            {/* 9 Contact */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden text-white">

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-lg">
                    9
                  </div>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>

                <p className="text-slate-400 mb-8 max-w-lg">
                  If you have any questions regarding these Terms and Conditions, please contact us.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <div className="flex-1 flex items-center gap-4 bg-white/10 border border-white/5 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                      📍
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-widest font-bold">
                        Location
                      </span>
                      <span className="text-sm font-medium text-white">
                        Rajkamal Square, Amravati
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-4 bg-white/10 border border-white/5 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                      📞
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-widest font-bold">
                        Phone
                      </span>
                      <span className="text-sm font-medium text-white">
                        9270727029
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Tarekar’s Electronics & Home Appliances. All rights reserved.
          </p>
        </div>

      </section>
    </main>
  );
}