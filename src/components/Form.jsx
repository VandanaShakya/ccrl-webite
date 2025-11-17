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

  // Read env vars (Vite)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Debug: uncomment to inspect (only in dev)
  // console.log({ SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function sendEmail(e) {
    e.preventDefault();

    // Basic env check
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert(
        "EmailJS is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env and restart the dev server."
      );
      console.warn("Missing EmailJS env:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return;
    }

    // Basic validation
    if (!form.user_name || !form.user_email || !form.user_subject || !form.user_message) {
      alert("Please fill all fields.");
      return;
    }

    setSending(true);

    try {
      // Optional init (emailjs.init is not required when using send with public key arg)
      // emailjs.init(PUBLIC_KEY);

      const params = {
        ...form,
        time: new Date().toLocaleString(),
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      console.log("EmailJS response:", res);
      alert("Message sent successfully!");
      setForm({ user_name: "", user_email: "", user_subject: "", user_message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      alert("Failed to send message. Check console for details.");
    } finally {
      setSending(false);
    }
  }
  console.log()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-2 pl-2 sm:pl-4">
        Get In<span className="text-sky-500"> Touch</span>
      </h1>

      <p className="text-gray-500 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed">
        Need fast, reliable commercial kitchen support? Reach out to us today.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        {/* Keep contact info column unchanged if you have it elsewhere */}
        <div className="w-full xl:w-8/12">
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
    </div>
  );
}
