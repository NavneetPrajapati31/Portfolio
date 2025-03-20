import { useState } from "react";
import RevealOnScreen from "../RevealOnScreen";
import emailjs from "emailjs-com";
import FlashMessage from "../FlashMessage"; // Import your Flash component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [flash, setFlash] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [sending, setSending] = useState(false); // New state for sending status

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true); // Set sending to true

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setFlash({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setFlash({
          show: true,
          message: "Oops! Something went wrong.",
          type: "error",
        });
      })
      .finally(() => {
        setSending(false); // Reset sending state
        setTimeout(
          () => setFlash({ show: false, message: "", type: "" }),
          3000
        );
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-700 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-700 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-700 focus:bg-blue-500/5"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={sending}
              className={`w-full text-white py-3 px-6 rounded font-medium transition 
                ${
                  sending
                    ? "bg-blue-900 cursor-not-allowed"
                    : "bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScreen>

      {flash.show && <FlashMessage message={flash.message} type={flash.type} />}
    </section>
  );
}
