import { Section } from "./Section";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { useState } from "react";

const pills = [
  { icon: Mail, label: "bakhtiar.sabir025@gmail.com", href: "mailto:bakhtiar.sabir025@gmail.com" },
  { icon: Phone, label: "+92 345 2473995", href: "tel:+923452473995" },
  { icon: LinkedinIcon, label: "linkedin.com/in/bakhtiar-sabir", href: "https://linkedin.com/in/bakhtiar-sabir" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xnjlzkjo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something"
      subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {pills.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover-glow text-sm"
          >
            <p.icon className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{p.label}</span>
          </a>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-strong rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <Field
          label="Subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
          />
        </div>
        
        {status === "error" && (
          <div className="text-center text-sm text-red-400 bg-red-500/10 py-2 rounded-xl">
            {errorMessage}
          </div>
        )}
        
        {status === "success" && (
          <div className="text-center text-sm text-green-400 bg-green-500/10 py-2 rounded-xl">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-purple text-white font-medium hover-glow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </Section>
  );
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}