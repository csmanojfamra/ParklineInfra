import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";
import EnquiryForm from "../components/EnquiryForm";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Parkline Infra — Request a Quote",
  description:
    "Contact Parkline Infra Private Limited for infrastructure project enquiries. Phone: +91 97858 17192. Email: info@parklineinfra.com. Chomu, Jaipur, Rajasthan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent("Hello Parkline Infra, I'd like to enquire about your services.");
  const whatsappUrl = `https://wa.me/${SITE.contact.whatsapp.replace(/\D/g, "")}?text=${whatsappMsg}`;
  const mapsUrl = `https://maps.google.com/?q=${SITE.geo.lat},${SITE.geo.lng}`;

  return (
    <>
      <section className="relative bg-navy-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} light />
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Get in Touch</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mb-4">
              Let&apos;s Build<br />
              <span className="text-gold-500">Something Together</span>
            </h1>
            <p className="text-white/70 text-lg">
              Submit an enquiry below and our engineering team will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-paper-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="font-display text-2xl text-navy-800 mb-2">Project Enquiry</h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fill in your details and we&apos;ll get back to you within one business day.
                </p>
                <EnquiryForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-navy-900 rounded-2xl p-6">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">
                  Direct Contact
                </p>
                <div className="space-y-4">
                  <a href={`tel:${SITE.contact.phone1}`} className="flex items-center gap-3 text-white/80 hover:text-gold-500 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-gold-500/15 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-semibold">{SITE.contact.phone1Display}</p>
                      <p className="text-xs text-white/40">Primary</p>
                    </div>
                  </a>
                  <a href={`tel:${SITE.contact.phone2}`} className="flex items-center gap-3 text-white/80 hover:text-gold-500 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-gold-500/15 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-semibold">{SITE.contact.phone2Display}</p>
                      <p className="text-xs text-white/40">Office</p>
                    </div>
                  </a>
                  <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-gold-500 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-gold-500/15 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-semibold">{SITE.contact.email}</p>
                      <p className="text-xs text-white/40">Email</p>
                    </div>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#25D366] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-semibold">WhatsApp Chat</p>
                      <p className="text-xs text-white/40">Quick response</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-paper-100 rounded-2xl p-6 border border-slate-200">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">Office Address</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-slate-600 leading-relaxed">
                    {SITE.address.full}
                  </address>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-xs font-mono text-gold-500 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="bg-paper-100 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500">Business Hours</p>
                </div>
                <p className="text-sm text-slate-600">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                <p className="text-xs text-slate-400 mt-1">Enquiries received outside hours will be addressed the next business day.</p>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 flex items-center justify-center">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-gold-500 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
