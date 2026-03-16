import ContactPage from "./ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact With Us | Tarekar Electronics",
  description:
    "Get in touch with Tarekar Electronics for all your electronic needs in Amaravati. Call, email, or visit us today.",
  openGraph: {
    title: "Contact With Us | Tarekar Electronics",
    description:
      "Reach out to Shree Multiservices for trusted financial and registration services in Amaravati.",
    url: "https://shreemultiservices.com/contact",
    siteName: "Shree Multiservices",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}