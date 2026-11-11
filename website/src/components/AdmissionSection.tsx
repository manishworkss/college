import React, { useEffect, useMemo, useState } from "react";
import {
  Award,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileImage,
  Mail,
  MessageSquare,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface FormState {
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  course: string;
  tenthMarks: string;
  twelfthMarks: string;
  graduationMarks: string;
  address: string;
  photoName: string;
  photoPreviewUrl: string;
}

export const AdmissionSection: React.FC = () => {
  const { config, admissionPrefill } = useSiteConfig();
  const courses = config.coursesSection.items;

  const [form, setForm] = useState<FormState>({
    name: admissionPrefill.name ?? "",
    phone: admissionPrefill.phone ?? "",
    email: admissionPrefill.email ?? "",
    dob: "",
    gender: "",
    course: admissionPrefill.course,
    tenthMarks: "",
    twelfthMarks: "",
    graduationMarks: "",
    address: "",
    photoName: "",
    photoPreviewUrl: "",
  });

  const [photoError, setPhotoError] = useState("");
  const [submittedSlip, setSubmittedSlip] = useState<{
    refId: string;
    messageText: string;
    whatsappUrl: string;
    departmentName: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync course & optional lead identity when user clicks from Hero or Course cards
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      course: admissionPrefill.course || prev.course,
      name: admissionPrefill.name ? admissionPrefill.name : prev.name,
      phone: admissionPrefill.phone ? admissionPrefill.phone : prev.phone,
      email: admissionPrefill.email ? admissionPrefill.email : prev.email,
    }));
  }, [admissionPrefill]);

  // Dynamically resolve matching department counselor based on selected course
  const activeDepartment = useMemo(() => {
    const matchedCourse = courses.find((c) => c.title === form.course);
    if (matchedCourse) {
      return (
        config.departments.find((d) => d.key === matchedCourse.departmentKey) ??
        config.departments[0]
      );
    }
    return config.departments[0];
  }, [courses, config.departments, form.course]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoError("");

    if (!file.type.startsWith("image/")) {
      setPhotoError("Please select a valid image file (JPG, PNG, or WEBP).");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setPhotoError("Photo must be under 2 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({
        ...prev,
        photoName: file.name,
        photoPreviewUrl: typeof reader.result === "string" ? reader.result : "",
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `SP2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const targetWa = activeDepartment?.whatsappRaw ?? config.admissionSection.defaultWhatsapp;
    const deptName = activeDepartment?.name ?? "Admission Desk";

    const lines = [
      `*Admission Registration (${refId})*`,
      `Department: ${deptName}`,
      "",
      "*Personal Details:*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `DOB: ${form.dob}`,
      `Gender: ${form.gender || "Not Specified"}`,
      "",
      "*Academic Details:*",
      `10th Marks: ${form.tenthMarks}%`,
      `12th Marks: ${form.twelfthMarks}%`,
      `Graduation: ${form.graduationMarks ? `${form.graduationMarks}%` : "N/A"}`,
      "",
      `*Course Applied:* ${form.course}`,
      `*Address:* ${form.address}`,
      `*Photo Attached Locally:* ${form.photoName ? `Yes (${form.photoName})` : "No"}`,
    ];

    const messageText = lines.join("\n");
    const whatsappUrl = `https://wa.me/${targetWa}?text=${encodeURIComponent(messageText)}`;
    setCopied(false);
    setSubmittedSlip({
      refId,
      messageText,
      whatsappUrl,
      departmentName: deptName,
    });
  };

  const copySummary = async () => {
    if (!submittedSlip) return;
    try {
      await navigator.clipboard.writeText(submittedSlip.messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  const downloadSlip = () => {
    if (!submittedSlip) return;
    const blob = new Blob([submittedSlip.messageText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${submittedSlip.refId}-${form.name.replace(/\s+/g, "_") || "registration"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="admission"
      className="scroll-mt-28 lg:scroll-mt-20 relative py-14 sm:py-18 bg-gradient-to-br from-brand-deep via-brand-via to-brand-deep overflow-hidden"
    >
      {/* Subtle verified local campus background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gallery/gallery-06.jpg')" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Dynamic Counselor Desk & Clean Non-Clipped Step Pills */}
          <div className="lg:col-span-5 min-w-0 bg-gradient-to-br from-accent via-accent to-amber-500 p-6 sm:p-8 text-accent-ink flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-deep px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                <Award className="h-3.5 w-3.5 text-accent" />
                {config.branding.admissionsBadge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {config.admissionSection.heading}
              </h2>

              <p className="text-sm sm:text-base font-medium text-brand-deep/90 leading-relaxed">
                {config.admissionSection.subtitle}
              </p>

              {/* Crisp 3-Step Indicator Strip */}
              <div className="flex flex-wrap gap-2">
                {config.admissionSection.steps.map((step) => (
                  <span
                    key={step}
                    className="rounded-xl bg-white/85 px-3 py-1.5 text-[11px] font-extrabold text-brand-deep shadow-xs whitespace-nowrap"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            {/* Dynamic Department Routing Box */}
            <div className="space-y-3 rounded-2xl bg-brand-deep p-5 text-white shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent">
                  Assigned Department Counselor
                </span>
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-extrabold text-accent-ink">
                  {form.course}
                </span>
              </div>

              <div className="text-base font-extrabold">{activeDepartment?.name}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs">
                <a
                  href={`tel:${activeDepartment?.phoneRaw}`}
                  className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="font-bold">{activeDepartment?.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${config.contactSection.email}`}
                  className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="font-bold truncate">{config.contactSection.email}</span>
                </a>
              </div>

              <p className="text-[11px] text-accent-soft pt-1">
                {config.admissionSection.bsccHighlight}
              </p>
            </div>
          </div>

          {/* Right Panel: Compact Horizontal Grid Registration Form */}
          <div className="lg:col-span-7 min-w-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-deep">
                Student Registration Form
              </h3>
              <span className="text-xs font-bold text-slate-500">
                All {courses.length} programs synced dynamically
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name, Phone, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter student name"
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="student@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: DOB, Gender, Select Course */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.dob}
                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gender *
                  </label>
                  <select
                    required
                    value={form.gender}
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Program Applied *
                  </label>
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full rounded-xl border border-brand/35 bg-surface px-3 py-2.5 text-sm font-extrabold text-brand-deep focus:border-brand focus:bg-white focus:outline-none"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} — {c.duration}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Academic Percentages */}
              <div className="rounded-2xl border border-slate-200/80 bg-surface p-3.5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-brand mb-2">
                  Academic Percentages
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      10th (%) *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.tenthMarks}
                      onChange={(e) => setForm({ ...form, tenthMarks: e.target.value })}
                      placeholder="e.g. 85"
                      className="w-full rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-sm focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      12th (%) *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.twelfthMarks}
                      onChange={(e) => setForm({ ...form, twelfthMarks: e.target.value })}
                      placeholder="e.g. 80"
                      className="w-full rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-sm focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Grad (%)
                    </label>
                    <input
                      type="text"
                      value={form.graduationMarks}
                      onChange={(e) => setForm({ ...form, graduationMarks: e.target.value })}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-sm focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Photo Preview + Address */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch">
                <div className="sm:col-span-5 rounded-2xl border border-slate-200 bg-surface p-3 flex items-center gap-3">
                  {form.photoPreviewUrl ? (
                    <img
                      src={form.photoPreviewUrl}
                      alt="Passport preview"
                      className="h-14 w-14 shrink-0 rounded-xl object-cover ring-2 ring-accent"
                    />
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand">
                      <FileImage className="h-6 w-6 text-brand" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Passport Photo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="mt-1 block w-full text-[11px] text-slate-500 file:mr-2 file:rounded-lg file:border-0 file:bg-brand file:px-2.5 file:py-1 file:text-[11px] file:font-bold file:text-white hover:file:bg-accent hover:file:text-accent-ink"
                    />
                    {photoError && (
                      <p className="mt-1 text-[11px] font-semibold text-red-600">{photoError}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Permanent Address *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Village / Mohalla, Post, District, Bihar with PIN code"
                    className="w-full rounded-xl border border-slate-200 bg-surface px-3 py-2 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg hover:bg-accent hover:text-accent-ink hover:-translate-y-0.5 active:scale-[0.99] transition-all"
              >
                <Send className="h-4 w-4" />
                <span>Generate Application &amp; Connect to {activeDepartment?.name}</span>
              </button>
            </form>
          </div>
        </div>
        </AnimateOnScroll>
      </div>

      {/* Registration Slip Modal */}
      {submittedSlip && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="slip-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setSubmittedSlip(null)}
        >
          <div
            className="animate-modal-in w-full max-w-xl rounded-3xl bg-white p-6 sm:p-7 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-text">
                    Reference #{submittedSlip.refId}
                  </span>
                  <h3 id="slip-title" className="text-xl font-extrabold text-brand-deep">
                    Application Ready for Submission
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSubmittedSlip(null)}
                aria-label="Close registration slip"
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <pre className="max-h-56 overflow-y-auto rounded-2xl border border-slate-200 bg-surface p-4 text-xs text-slate-700 whitespace-pre-wrap font-sans">
              {submittedSlip.messageText}
            </pre>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={submittedSlip.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="sm:col-span-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Send WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-brand-deep hover:bg-surface"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Copied!" : "Copy Text"}</span>
              </button>
              <button
                type="button"
                onClick={downloadSlip}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-brand-deep hover:bg-surface"
              >
                <Download className="h-4 w-4" />
                <span>Save Slip</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
