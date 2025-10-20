import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
  FaMapMarkedAlt,
  FaHotel,
  FaPlane,
  FaHiking,
} from "react-icons/fa";

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeCard, setActiveCard] = useState(null); // 🆕 Track clicked journey card

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

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
  ];

  const reviews = [
    { name: "Kartik Sharma", message: "Amazing experience! Highly recommend WanderScape." },
    { name: "Renuka Vaidya", message: "The destinations were breathtaking and well organized. Loved it!" },
    { name: "Sahil Mehta", message: "Smooth booking process and friendly team. Five stars!" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
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
        <h1 className="text-3xl font-extrabold text-sky-700 cursor-pointer" onClick={() => scrollToSection("home")}>
          WanderScape
        </h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li onClick={() => scrollToSection("home")} className="hover:text-sky-600 cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("destinations")} className="hover:text-sky-600 cursor-pointer">Destinations</li>
          <li onClick={() => scrollToSection("gallery")} className="hover:text-sky-600 cursor-pointer">Gallery</li>
          <li onClick={() => scrollToSection("testimonials")} className="hover:text-sky-600 cursor-pointer">Testimonials</li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-sky-600 cursor-pointer">Contact</li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col justify-center items-center text-center pt-40 pb-24 overflow-hidden">
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
          onClick={() => {
            setJourneyStarted(true);
            setTimeout(() => scrollToSection("journey"), 300);
          }}
          className="mt-8 bg-sky-600 text-white px-10 py-4 rounded-full shadow-md hover:bg-sky-700 z-10"
        >
          Start Your Journey
        </motion.button>
      </section>

      {/* Journey Section */}
      {journeyStarted && (
        <motion.section
          id="journey"
          className="py-20 px-10 bg-white text-center"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-sky-700 mb-6">
            Welcome to Your Wander Journey 🌍
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Choose your travel style — explore destinations, plan adventures, and make your dream trip real.
          </p>

          {/* Journey Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <FaMapMarkedAlt size={40} />, title: "Explore Destinations", color: "from-sky-400 to-blue-500" },
              { icon: <FaPlane size={40} />, title: "Book Flights", color: "from-blue-400 to-indigo-500" },
              { icon: <FaHotel size={40} />, title: "Find Stays", color: "from-cyan-400 to-sky-500" },
              { icon: <FaHiking size={40} />, title: "Adventure Trips", color: "from-green-400 to-emerald-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${item.color} text-white hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCard(item.title)} // 🆕 Clickable
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Active Card Content */}
          {activeCard && (
            <motion.div
              className="mt-12 p-10 bg-sky-50 rounded-2xl shadow-lg max-w-4xl mx-auto text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                className="mb-4 text-sky-600 font-semibold underline"
                onClick={() => setActiveCard(null)}
              >
                ← Back
              </button>

              {activeCard === "Explore Destinations" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Destinations to Explore 🌍</h3>
                  <p>Discover top destinations around the world with amazing photos and tips!</p>
                </div>
              )}
              {activeCard === "Book Flights" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Book Your Flight ✈️</h3>
                  <p>Search for flights, compare prices, and plan your next trip efficiently.</p>
                </div>
              )}
              {activeCard === "Find Stays" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Find Hotels & Stays 🏨</h3>
                  <p>Check for hotels, hostels, or vacation rentals at your destination.</p>
                </div>
              )}
              {activeCard === "Adventure Trips" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Adventure Trips 🏞️</h3>
                  <p>Plan hiking, trekking, and outdoor adventures safely and fun!</p>
                </div>
              )}
            </motion.div>
          )}

          <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <p className="text-gray-700 mb-6">Ready for your personalized adventure plan?</p>
            <button
              onClick={() => alert("Feature coming soon! ✈️ Get ready to plan your journey.")}
              className="bg-sky-600 text-white px-10 py-3 rounded-full hover:bg-sky-700 shadow-lg"
            >
              Start Planning
            </button>
          </motion.div>
        </motion.section>
      )}



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

      {/* Gallery Section */}
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

      {/* Contact Section */}
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

          {/* Back to Top Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: showTopBtn ? 1 : 0, y: showTopBtn ? 0 : 20 }}
  transition={{ duration: 0.4 }}
  className="fixed bottom-8 right-8 z-50"
>
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 flex items-center justify-center"
    whileHover={{ rotate: 180, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaArrowUp />
  </motion.button>
</motion.div>


      
    </div>
  );
}
