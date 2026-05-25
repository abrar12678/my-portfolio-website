"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  icon: Icon,
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      {Icon && (
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 z-10 ${focused ? "text-[#00b4d8]" : "text-muted-foreground/40"}`}
        >
          <Icon size={16} />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl text-foreground text-sm pt-6 pb-3 px-4 outline-none transition-all duration-300 hover:border-white/15 placeholder-transparent"
        style={{
          paddingLeft: Icon ? "2.75rem" : "1rem",
          boxShadow: focused
            ? "0 0 0 1px rgba(0, 180, 216, 0.3), 0 0 20px rgba(0, 180, 216, 0.08)"
            : "none",
          borderColor: focused ? "rgba(0, 180, 216, 0.4)" : undefined,
        }}
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
          isActive
            ? "top-2 text-[10px] font-semibold uppercase tracking-wider text-[#00b4d8]"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground/50"
        }`}
        style={{ left: Icon ? "2.75rem" : "1rem" }}
      >
        {label}
      </label>
      {/* Bottom gradient line on focus */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-500 rounded-full ${
          focused ? "w-3/4 opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, #00b4d8, #7c3aed, transparent)",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const whatsappNumber = "8801912188976";
    const text = `Hello Abrar! I'm *${formData.name}*.\n\n📧 Email: ${formData.email}\n📱 Phone: ${formData.phone}\n🏢 Company: ${formData.company}\n\n💬 Message:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setTimeout(() => setIsSending(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "programmer.ab.etarnity@gmail.com",
      href: "mailto:programmer.ab.etarnity@gmail.com?subject=Hello&body=",
      color: "#00b4d8",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1912-188976",
      href: "tel:+8801912188976",
      color: "#7c3aed",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Khulna, Bangladesh",
      href: "#",
      color: "#f72585",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00b4d8]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/4 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-[#f72585]/3 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#00b4d8]/80 font-semibold mb-3 px-4 py-1.5 rounded-full border border-[#00b4d8]/20 bg-[#00b4d8]/5">
            Get in Touch
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4">
            Contact <span className="gradient-text">Me</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and
            I&apos;ll get back to you via WhatsApp for an instant response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* ===================== LEFT SIDE — Contact Info ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s build something{" "}
                <span className="gradient-text">amazing</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently available for freelance work and open to
                discussing new projects, creative ideas, or opportunities to be
                part of your vision. Your message goes straight to my WhatsApp.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={
                    info.href.startsWith("mailto:") ||
                    info.href.startsWith("tel:") ||
                    info.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  whileHover={{
                    x: 8,
                    boxShadow: `0 0 20px ${info.color}15, 0 8px 25px rgba(0, 0, 0, 0.2)`,
                  }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-400 group cursor-pointer"
                  style={{
                    background: "rgba(26, 26, 26, 0.6)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}15, ${info.color}08)`,
                      border: `1px solid ${info.color}20`,
                    }}
                  >
                    <info.icon size={20} style={{ color: info.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold block mb-0.5">
                      {info.label}
                    </span>
                    <p className="text-sm font-medium text-foreground truncate transition-colors duration-300 group-hover:text-foreground">
                      {info.value}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    style={{
                      background: `${info.color}15`,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={info.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Connect Card */}
            <div
              className="p-5 rounded-2xl space-y-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 180, 216, 0.08), rgba(124, 58, 237, 0.08))",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <WhatsAppIcon size={16} className="text-green-400" />
                <span className="text-sm font-semibold text-foreground">
                  Quick Connect
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You can also find me on{" "}
                <a
                  href="https://github.com/abrar12678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4d8] hover:underline font-medium transition-colors hover:text-[#5cd8ec]"
                >
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/ab-webdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4d8] hover:underline font-medium transition-colors hover:text-[#5cd8ec]"
                >
                  LinkedIn
                </a>
                . For the fastest response, send me a message on WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* ===================== RIGHT SIDE — Form ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl space-y-6"
              style={{
                background: "rgba(26, 26, 26, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  icon={null}
                />
                <FloatingInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  icon={Mail}
                />
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                />
                <FloatingInput
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  icon={null}
                />
              </div>

              {/* Row 3: Message (textarea with floating label) */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Message"
                  className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl text-foreground text-sm pt-6 pb-3 px-4 outline-none transition-all duration-300 hover:border-white/15 resize-none placeholder-transparent"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(0, 180, 216, 0.4)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 1px rgba(0, 180, 216, 0.3), 0 0 20px rgba(0, 180, 216, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message.length > 0
                      ? "top-2 text-[10px] font-semibold uppercase tracking-wider text-[#00b4d8]"
                      : "top-4 text-sm text-muted-foreground/50"
                  }`}
                >
                  Your Message
                </label>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-500 rounded-full ${
                    formData.message.length > 0 &&
                    document.activeElement?.name === "message"
                      ? "w-3/4 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #00b4d8, #7c3aed, transparent)",
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 0 30px rgba(0, 180, 216, 0.35), 0 0 60px rgba(124, 58, 237, 0.2), 0 15px 45px rgba(247, 37, 133, 0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                disabled={isSending}
                className="relative w-full py-4 rounded-xl text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group/sw"
                style={{
                  background:
                    "linear-gradient(135deg, #00b4d8 0%, #7c3aed 50%, #f72585 100%)",
                }}
              >
                {/* Shimmer sweep on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/sw:translate-x-full transition-transform duration-700" />
                {/* Shimmer overlay while loading */}
                {isSending && (
                  <div
                    className="absolute inset-0 animate-pulse"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s ease-in-out infinite",
                    }}
                  />
                )}
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-muted-foreground/60 flex items-center justify-center gap-1.5">
                <WhatsAppIcon size={12} className="text-green-400/60" />
                Your message will open WhatsApp for instant delivery.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
