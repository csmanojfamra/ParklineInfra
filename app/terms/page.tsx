import type { Metadata } from "next";
import { SITE } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | Parkline Infra",
  description: "Terms and conditions for the Parkline Infra Private Limited website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-paper-50 pt-32 pb-12 border-b border-line-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
          <h1 className="font-display text-4xl text-navy-900 mt-6">Terms & Conditions</h1>
          <p className="text-slate-400 font-mono text-xs mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-paper-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">1. Website Use</h2>
              <p>This website is operated by Parkline Infra Private Limited (CIN: {SITE.cin}). By accessing this website, you agree to these terms. The content on this website is for general information purposes and is subject to change without notice.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">2. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, and images — is the property of Parkline Infra Private Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">3. Enquiries and Quotations</h2>
              <p>Enquiries submitted through this website do not constitute a contract or commitment on the part of Parkline Infra Private Limited. All project engagements are subject to separately agreed contracts and terms.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">4. Limitation of Liability</h2>
              <p>Parkline Infra Private Limited shall not be liable for any damages arising from the use of, or inability to use, this website or its content.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">5. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-3">6. Contact</h2>
              <p>For any queries regarding these terms, contact us at <a href={`mailto:${SITE.contact.email}`} className="text-gold-500 hover:underline">{SITE.contact.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
