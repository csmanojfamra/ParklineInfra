"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SERVICES } from "../data/services";

type FormState = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[\d\s\+\-]{8,}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.length < 20)
      e.message = "Please describe your requirement (min 20 characters)";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", company: "", phone: "", email: "", service: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border bg-paper-50 text-ink-700 text-sm transition-colors focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500";
  const labelClass = "block text-xs font-mono tracking-[0.1em] uppercase text-slate-500 mb-1.5";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-gold-500 mb-4" />
        <h3 className="font-display text-2xl text-navy-800 mb-2">Enquiry Received</h3>
        <p className="text-slate-500 max-w-sm">
          Thank you for reaching out. Our team will contact you within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 px-6 py-2.5 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-colors text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${inputClass} ${errors.name ? "border-red-400" : "border-slate-200"}`}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company / Organisation</label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={`${inputClass} border-slate-200`}
            placeholder="Your company name"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${inputClass} ${errors.phone ? "border-red-400" : "border-slate-200"}`}
            placeholder="+91 98765 43210"
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClass} ${errors.email ? "border-red-400" : "border-slate-200"}`}
            placeholder="you@company.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service of Interest</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`${inputClass} border-slate-200`}
        >
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Project / Requirement Details *</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} ${errors.message ? "border-red-400" : "border-slate-200"} resize-none`}
          placeholder="Describe your project, location, timeline, and specific requirements..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {state === "submitting" ? (
          <span className="animate-spin w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {state === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Or call us directly:{" "}
        <a href="tel:+919785817192" className="text-gold-500 hover:underline">+91 97858 17192</a>
      </p>
    </form>
  );
}
