"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:8000/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-100 rounded-md py-10 px-6 md:mt-5" id="contact">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect ✉️
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 text-black"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded border"
          required
          disabled={status === "sending"}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded border"
          required
          disabled={status === "sending"}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Message"
          className="w-full p-3 rounded border"
          required
          disabled={status === "sending"}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className={`px-6 py-2 rounded text-white ${
            status === "sending"
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-300"
          }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-2">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
