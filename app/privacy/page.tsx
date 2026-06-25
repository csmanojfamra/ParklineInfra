import type { Metadata } from "next";
import { SITE } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Parkline Infra",
  description: "Privacy policy for Parkline Infra Private Limited website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-paper-50 pt-32 pb-12 border-b border-line-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="font-display text-4xl text-navy-900 mt-6">Privacy Policy</h1>
          <p className="text-slate-400 font-mono text-xs mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-paper-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">1. Information We Collect</h2>
              <p>When you submit an enquiry through our website, we collect your name, company name, phone number, email address, and the details you provide about your project or requirements. We do not collect payment information through this website.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide solely to respond to your enquiry, provide information about our services, and communicate with you about potential or ongoing projects. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">3. Data Security</h2>
              <p>We take reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, or loss. Enquiry data submitted through this website is transmitted using HTTPS encryption.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">4. Cookies</h2>
              <p>This website uses minimal cookies necessary for site functionality. We do not use tracking cookies or third-party advertising cookies.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">5. Contact</h2>
              <p>For any privacy-related questions, contact us at <a href={`mailto:${SITE.contact.email}`} className="text-gold-500 hover:underline">{SITE.contact.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
