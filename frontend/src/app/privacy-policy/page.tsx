import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tarekar’s Electronics & Home Appliances",
  description:
    "Read the Privacy Policy of Tarekar’s Electronics & Home Appliances to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Tarekar’s Electronics & Home Appliances",
    description:
      "Learn how Tarekar’s Electronics & Home Appliances protects your personal data and ensures privacy across our services.",
    url: "https://tarekarselectronics.com/privacy-policy",
    siteName: "Tarekar’s Electronics & Home Appliances",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f8fafc] text-slate-700 pt-24 pb-20 min-h-screen font-sans">
      {/* pt-24 ensures extra breathing room for fixed navbars */}

      <div className="max-w-4xl mx-auto px-6">

        {/* Decorative Header Area */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Legal Document
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy & Policy
          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden">

          {/* Header Strip */}
          <div className="bg-slate-900 px-8 py-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Privacy Policy for Tarekar’s Electronics & Home Appliances
            </h2>
          </div>

          <div className="p-8 md:p-12 space-y-12">

            {/* 1. Introduction */}
            <section className="relative pl-8 border-l-2 border-slate-100 hover:border-indigo-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-indigo-600"></span>
                1. Introduction
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Tarekar’s Electronics & Home Appliances values the privacy of
                our customers and visitors. This Privacy Policy explains how we
                collect, use, store, and protect your personal information when
                you visit our store, contact us, or interact with our website.
                By using our services, you agree to the practices described in
                this policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="relative pl-8 border-l-2 border-slate-100 hover:border-indigo-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-indigo-600"></span>
                2. Information We Collect
              </h3>
              <p className="text-slate-600 mb-4 text-lg">
                We may collect the following types of information:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-600 mb-1">
                    Personal Information
                  </strong>
                  <p className="text-sm">
                    Your name, phone number, email address, billing or delivery
                    address, and purchase details when you enquire about or
                    purchase products.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="block text-indigo-600 mb-1">
                    Non-Personal Information
                  </strong>
                  <p className="text-sm">
                    Information such as your IP address, browser type, device
                    information, and website usage data collected to improve
                    user experience and website performance.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="relative pl-8 border-l-2 border-slate-100 hover:border-indigo-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-indigo-600"></span>
                3. How We Use Your Information
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                The information collected is used to respond to customer
                enquiries, process product purchases, provide after-sales
                support, improve our services, and communicate important
                updates or promotional offers related to our electronics and
                home appliance products.
              </p>
            </section>

            {/* 4. Data Sharing */}
            <section className="relative pl-8 border-l-2 border-slate-100 hover:border-indigo-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-indigo-600"></span>
                4. Data Sharing
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We do not sell or rent your personal information. However, your
                information may be shared with trusted service providers,
                delivery partners, or payment processors when necessary to
                complete product purchases, deliveries, or customer support
                services. We may also disclose information if required by law.
              </p>
            </section>

            {/* 5. Contact Us */}
            <section className="mt-16 pt-10 border-t border-slate-100">
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  5. Contact Us
                </h3>
                <p className="text-indigo-700/80 mb-6">
                  If you have any questions regarding this Privacy Policy,
                  please contact us at:
                </p>

                <div className="flex flex-wrap gap-y-4 gap-x-12 items-center">

                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
                      Business
                    </p>
                    <p className="font-bold text-slate-900">
                      Tarekar’s Electronics & Home Appliances
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="font-bold text-slate-900">
                      Rajkamal Square, Amravati, Maharashtra
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
                      Support
                    </p>
                    <p className="font-bold text-slate-900">
                      9270727029
                    </p>
                  </div>

                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-400 text-sm mt-12">
          &copy; {new Date().getFullYear()} Tarekar’s Electronics & Home Appliances. All rights reserved.
        </p>

      </div>
    </main>
  );
}