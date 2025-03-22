import { useState } from "react";
import { FaComment, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_t3tewuh", "template_l67bttf", templateParams, "KjNzzBhoT4auvs-ik")
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        Swal.fire({
          title: "Your message has been sent!",
          icon: "success",
          confirmButtonColor: "#3B82F6",
        });
      })
      .catch((error) => {
        setStatus("Failed to send message. Try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold text-center mb-3 text-blue-400">Contact Me</h2>
      <p className="text-center mb-8">Got a question? Send me a message, and I'll get back to you soon.</p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Contact Info */}
        <div className="p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Get in Touch</h3>
          <p className="mb-4">Have something to discuss? Send me an email or contact me via phone.</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-blue-400" />
              <a
                href="mailto:mdabubakarsiddique789@gmail.com"
                className="text-lg text-blue-400 hover:underline"
                rel="noopener noreferrer"
              >
                mdabubakarsiddique789@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhone className="text-xl text-blue-400" />
              <a href="tel:+8801773398308" className="text-lg text-blue-400 hover:underline">
                +880 1773398308
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-xl text-blue-500" />
              <a
                href="https://wa.me/8801773398308?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-500 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
            <FaComment className="mr-2" /> Comments
          </h3>

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-base font-medium">
              👤 Name *
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </label>

            <label className="block mb-2 text-base font-medium">
              📧 Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </label>

            <label className="block mt-3 mb-2 text-base font-medium">
              💭 Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
                rows="4"
              />
            </label>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
