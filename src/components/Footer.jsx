// import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you ${formData.name.toUpperCase()} we will connect soon.`)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-gray-700 text-gray-300 pt-16 pb-8 overflow-hidden"
    >
      {/* Subtle Motion Blur Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(88,28,135,0.15),transparent_70%)] blur-3xl"
        animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* -------- Left: Contact Info -------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Let’s Connect
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            I’m always open to new opportunities and collaborations. Drop me a
            message — I’ll get back to you soon.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MdOutlineEmail className="text-purple-400 text-lg" />
              <a
                href="mailto:ytsafik2@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                ytsafik2@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <CiLinkedin className="text-blue-400 text-lg" />
              <a
                href="https://linkedin.com/in/mdsafik28/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                linkedin.com/in/mdsafik28
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-gray-400 text-lg" />
              <a
                href="https://github.com/safik-786"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                github.com/safik-786
              </a>
            </li>
          </ul>
        </motion.div>

        {/* -------- Center: Contact Form -------- */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700"
        >
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Message
          </h3>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold py-2 rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Send Message <FaPaperPlane className="w-3 h-3" />
          </motion.button>
        </motion.form>

        {/* -------- Right: Embedded Map -------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.3489471800904!2d85.81161057339955!3d20.02975622134336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19bbab51d6ffd5%3A0xadc298b04863a15b!2zTUFTSklELUFMLVFBU0lNIC8g2YXYs9is2K8g2KfZhNmC2KfYs9mF24w!5e1!3m2!1sen!2sin!4v1740899022821!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhubaneswar Location"
          />
        </motion.div>
      </div>

      {/* -------- Footer Bottom -------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 text-center mt-12 text-xs text-gray-500 border-t border-gray-700 pt-6"
      >
        © {new Date().getFullYear()} <span className="text-white font-semibold">Safik</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;




