


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";


export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  

  const destinations = [
    {
      name: "Santorini, Greece",
      desc: "White houses, blue domes, stunning sunsets.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Bali, Indonesia",
      desc: "Tropical paradise with beaches and rice terraces.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Paris, France",
      desc: "Romantic city with Eiffel Tower and charming streets.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Kyoto, Japan",
      desc: "Historic temples and stunning cherry blossoms.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Swiss Alps",
      desc: "Snow-capped mountains and breathtaking scenery.",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Maldives",
      desc: "Crystal clear waters and luxury overwater villas.",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  ];

  const reviews = [
    {
      name: "Kartik Sharma",
      message:
        "Amazing experience! Highly recommend WanderScape for adventure seekers.",
    },
    {
      name: "Renuka Vaidya",
      message:
        "The destinations were breathtaking and well organized. Loved it!",
    },
    {
      name: "Sahil Mehta",
      message:
        "Smooth booking process and friendly team. Five stars!",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-100 to-blue-50 min-h-screen text-gray-800 font-sans overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        className="flex justify-between items-center px-10 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-3xl font-extrabold text-sky-700 cursor-pointer"
          onClick={() =>
            document.getElementById("home").scrollIntoView({ behavior: "smooth" })
          }
        >
          WanderScape
        </h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li
            className="hover:text-sky-600 cursor-pointer"
            onClick={() =>
              document.getElementById("home").scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </li>
          <li
            className="hover:text-sky-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("destinations")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Destinations
          </li>
          <li
            className="hover:text-sky-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("gallery")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Gallery
          </li>
          <li
            className="hover:text-sky-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("testimonials")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Testimonials
          </li>
          <li
            className="hover:text-sky-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-center text-center pt-40 pb-24 overflow-hidden"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.h2
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 z-10 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore The World With Us 🌏
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mt-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover breathtaking destinations and make memories that last forever.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 bg-sky-600 text-white px-10 py-4 rounded-full shadow-md hover:bg-sky-700 z-10"
        >
          Start Your Journey
        </motion.button>
      </section>

      {/* Destinations Section */}
      <motion.section
        id="destinations"
        className="py-20 px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-10">
          Top Destinations 🗺️
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-sky-700">
                  {dest.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{dest.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        id="gallery"
        className="bg-sky-50 py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-10">
          Wander Moments 📸
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg relative"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedImg(img)}
              />
            </motion.div>
          ))}
        </div>

        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={selectedImg}
              className="max-h-[85%] max-w-[90%] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-20 px-10 bg-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-10">
          What Our Travelers Say ✨
        </h2>
        <div className="flex overflow-x-auto gap-6 p-4">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] bg-sky-50 p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700 mb-4">"{rev.message}"</p>
              <h4 className="font-semibold text-sky-700">{rev.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-10 bg-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-8">Get in Touch 💬</h2>
        <p className="text-gray-600 mb-8">
          Have a question or want to plan your next trip? We’d love to hear from you!
        </p>
        <form className="max-w-lg mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg w-full focus:outline-sky-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg w-full focus:outline-sky-500"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg w-full focus:outline-sky-500 h-32"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-700 to-blue-800 text-white text-center py-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-sky-300"></div>
        <p className="z-10 relative">
          © 2025 WanderScape. Built with 💙 by Renuka.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <FaInstagram className="hover:text-pink-500 cursor-pointer" size={24} />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" size={24} />
          <FaFacebook className="hover:text-blue-700 cursor-pointer" size={24} />
        </div>
      </footer>
    </div>
  );
}

