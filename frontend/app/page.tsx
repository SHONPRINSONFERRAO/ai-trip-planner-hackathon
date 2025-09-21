"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [aiResponse, setAiResponse] = useState(
    "Your trip plan will appear here..."
  );

  const generatePlan = async () => {
    // Provide instant feedback to the user
    setAiResponse("Generating your personalized trip plan... please wait 🤖");

    try {
      const response = await fetch('http://127.0.0.1:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the state variables as a JSON string in the request body
        body: JSON.stringify({
          destination,
          budget,
          interests,
        }),
      });

      if (!response.ok) {
        // Handle HTTP errors like 400 or 500
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Update the state with the plan received from the Python backend
      setAiResponse(data.plan);

    } catch (error) {
      console.error("Failed to generate plan:", error);
      setAiResponse("😞 Sorry, something went wrong. Please check if the backend server is running and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <Image
          src="/travel-bg.jpg"
          alt="Travel background"
          fill
          className="object-cover brightness-75"
          priority
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Rotating Globe */}
          <motion.div
            className="text-7xl mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🌍
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            GoGlobe
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100">
            Smarter Paths to Every Destination ✨
          </p>

          <a
            href="#preferences"
            className="inline-block mt-10 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            Start Planning
          </a>
        </div>
      </section>

      {/* Preferences Section */}
      <section
        id="preferences"
        className="py-20 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Add Your Preferences
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6">
          {[
            {
              label: "🌍 Destination",
              state: destination,
              setState: setDestination,
              color: "blue",
            },
            {
              label: "💰 Budget (inr)",
              state: budget,
              setState: setBudget,
              color: "pink",
            },
            {
              label: "🎯 Interests",
              state: interests,
              setState: setInterests,
              color: "yellow",
            },
          ].map((field, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl cursor-pointer group"
            >
              {/* Glow behind preference box */}
              <div
                className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-${field.color}-400 via-pink-300 to-yellow-400 opacity-70 blur-xl group-hover:opacity-100 transition`}
              ></div>

              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <h3
                  className={`text-xl font-semibold mb-3 text-${field.color}-600`}
                >
                  {field.label}
                </h3>
                <input
                  type="text"
                  placeholder={`Enter ${field.label}`}
                  value={field.state}
                  onChange={(e) => field.setState(e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-${field.color}-400`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={generatePlan}
            className="px-6 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition"
          >
            Generate Plan ✨
          </button>
        </div>

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow-xl border border-indigo-200 text-left whitespace-pre-line"
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            AI Trip Plan
          </h3>
          <p className="text-gray-700">{aiResponse}</p>
        </motion.div>
      </section>

      {/* How it Works Timeline Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 px-6"
      >
        <h2 className="text-3xl font-bold mb-16 text-indigo-600 text-center">
          How GoGlobe Works 🚀
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-300"></div>

          {[
            {
              step: "1️⃣",
              title: "Enter Preferences",
              text: "Tell us your destination, budget, and interests.",
            },
            {
              step: "2️⃣",
              title: "AI Generates Plan",
              text: "Our smart AI builds a personalized trip itinerary.",
            },
            {
              step: "3️⃣",
              title: "Enjoy Your Journey",
              text: "Get recommendations, routes & activities instantly!",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`mb-12 flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-5/12 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="text-3xl mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Preferred Itinerary */}
      <section
        id="itinerary"
        className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
          Preferred Itineraries 🌍
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 px-6">
          {[
            {
              type: "National Trips",
              places: [
                {
                  name: "Jaipur, Rajasthan",
                  img: "/jaipur.jpg",
                  activities:
                    "🏰 Explore Amber Fort and City Palace, enjoy a traditional Rajasthani dinner, and shop at vibrant local bazaars.",
                  mustVisit:
                    "✨ Hawa Mahal, Jal Mahal, and the colorful streets of Johari Bazaar.",
                  budget: "💰 Avg. Budget: ₹15,000 – ₹25,000 for 4 days",
                },
                {
                  name: "Kerala, Backwaters",
                  img: "/kerala.jpg",
                  activities:
                    "🛶 Relax on a houseboat ride, watch Kathakali performances, and taste authentic Kerala cuisine.",
                  mustVisit:
                    "✨ Alleppey backwaters, Munnar tea plantations, and Kovalam beaches.",
                  budget: "💰 Avg. Budget: ₹18,000 – ₹30,000 for 5 days",
                },
              ],
            },
            {
              type: "International Trips",
              places: [
                {
                  name: "Paris, France",
                  img: "/paris.jpg",
                  activities:
                    "🗼 Visit the Eiffel Tower, explore the Louvre Museum, stroll through romantic streets, and enjoy French pastries.",
                  mustVisit:
                    "✨ Montmartre, Seine River cruises, and Champs-Élysées shopping.",
                  budget: "💰 Avg. Budget: ₹85,000 – ₹1,20,000 for 6 days",
                },
                {
                  name: "Bali, Indonesia",
                  img: "/bali.jpg",
                  activities:
                    "🏝️ Relax on beaches, surf waves, visit temples, hike volcanoes, and indulge in Balinese spa therapies.",
                  mustVisit:
                    "✨ Ubud Monkey Forest, Tanah Lot Temple, and Nusa Penida island.",
                  budget: "💰 Avg. Budget: ₹60,000 – ₹90,000 for 5 days",
                },
              ],
            },
          ].map((category, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
                {category.type}
              </h3>
              <div className="grid gap-6">
                {category.places.map((place, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.02 }}
                    className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white"
                  >
                    {/* Image + Name (always visible) */}
                    <Image
                      src={place.img}
                      alt={place.name}
                      width={500}
                      height={300}
                      className="object-cover w-full h-56"
                    />
                    <div className="p-4 text-center font-semibold text-indigo-700 text-lg">
                      {place.name}
                    </div>

                    {/* Hidden details (slide up on hover) */}
                    <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center p-6 text-gray-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <h4 className="text-xl font-bold mb-3 text-indigo-600">
                        {place.name}
                      </h4>
                      <p className="mb-3">{place.activities}</p>
                      <p className="mb-3">{place.mustVisit}</p>
                      <p className="font-semibold text-green-600">
                        {place.budget}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-12 text-indigo-600">About Us</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              img: "/about2.jpg",
              title: "Tell us your dream, we’ll shape the journey",
              text: "Add your destination, budget, and interests, and let our AI craft a customized travel plan just for you. GoGlobe adapts to all preferences.",
            },
            {
              img: "/about1.jpg",
              title: "Helps You Travel smart, not expensive",
              text: "Our AI finds the best routes, stays, and activities within your budget. Making your beautiful trips better, stress-free and cost-effective .",
            },
            {
              img: "/about3.jpg",
              title: "From ideas to itineraries, all in one place",
              text: "Get destinations, trip plans, recommendations, and must-do activities in seconds with your very own personal AI travel buddy.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group rounded-2xl cursor-pointer"
            >
              {/* Glow like preferences */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-400 opacity-70 blur-xl group-hover:opacity-100 transition"></div>

              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-10">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-200 text-center">
        © {new Date().getFullYear()} My Trip Planner Hackathon Project 🚀
      </footer>
    </div>
  );
}
