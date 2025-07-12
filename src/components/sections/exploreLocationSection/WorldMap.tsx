import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const markers = [
  {
    country: "Nigeria",
    style: "left-[54%] top-[56%]",
    link: "/nigeria",
  },
  {
    country: "Ghana",
    style: "left-[50%] top-[60%]",
    link: "/ghana",
  },
  // Add more markers as needed
];

export default function WorldMap() {
  return (
    <section className="mt-16 pb-16 pt-5 bg-white w-full flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 px-4"
      >
        <h2 className="font-semibold text-3xl md:text-4xl mb-2">
          Explore Our Active Locations. Watch the Progress
        </h2>
        <span className="font-normal text-sm text-gray-600">
          Click on the map pin and follow the link on the popup to go to the
          country portal
        </span>
      </motion.div>

      {/* World map with markers */}
      <div className="relative w-full max-w-5xl rounded-2xl shadow-lg bg-white overflow-hidden">
        <img
          src="/images/world-map.png"
          alt="world map"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        {/* Markers */}
        {markers.map((marker) => (
          <Link
            key={marker.country}
            to={marker.link}
            className={`absolute ${marker.style} z-10 group`}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded shadow-lg group-hover:bg-yellow-500 transition">
                {marker.country}
              </span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
