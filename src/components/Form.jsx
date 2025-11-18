// src/components/Form.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ACCENT_BG_CLASS = "bg-blue-500 hover:bg-blue-600";
const ACCENT_FOCUS_RING = "focus:ring-blue-500";

export default function Form() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function sendEmail(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert(
        "EmailJS is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env and restart the dev server."
      );
      return;
    }

    if (!form.user_name || !form.user_email || !form.user_subject || !form.user_message) {
      alert("Please fill all fields.");
      return;
    }

    setSending(true);

    try {
      const params = { ...form, time: new Date().toLocaleString() };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      alert("Message sent successfully!");
      setForm({ user_name: "", user_email: "", user_subject: "", user_message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      alert("Failed to send message. Check console for details.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-blue-500">CCRL</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            CCRL is a leading provider of commercial kitchen solutions, offering innovative, reliable, and
            high-quality products and services. Our team is dedicated to helping businesses enhance efficiency
            and maintain the highest standards of safety and hygiene. Reach out to us for support, inquiries,
            or collaborations.
          </p>
        </div>

        {/* Right Column (Form) */}
        <div className="lg:w-7/12 bg-white shadow-lg rounded-xl p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Need fast, reliable commercial kitchen support? Reach out to us today.
          </p>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              value={form.user_name}
              onChange={handleChange}
              required
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              value={form.user_email}
              onChange={handleChange}
              required
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <input
              name="user_subject"
              type="text"
              placeholder="Subject"
              value={form.user_subject}
              onChange={handleChange}
              required
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <textarea
              name="user_message"
              placeholder="Message"
              rows="5"
              value={form.user_message}
              onChange={handleChange}
              required
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <button
              type="submit"
              disabled={sending}
              className={`w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-lg ${ACCENT_BG_CLASS} transition duration-150 shadow-md ${
                sending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
