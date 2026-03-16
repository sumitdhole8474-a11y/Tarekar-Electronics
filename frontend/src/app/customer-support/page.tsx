import CustomerSupportPage from "./CustomerSupportPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch With Our Support Team | Tarekar Electronics",
  description:
    "Need assistance? Contact Tarekar Electronics support team for help with all your electronic needs in Amaravati.",
  openGraph: {
    title: "Get In Touch With Our Support Team | Tarekar Electronics",
    description:
      "Reach our support team for quick assistance and professional guidance from Shree Multiservices.",
    url: "https://shreemultiservices.com/customer-support",
    siteName: "Shree Multiservices",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <CustomerSupportPage />;
}