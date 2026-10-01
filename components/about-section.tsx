"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Home, MapPin, Award, X, ZoomIn } from "lucide-react";

export default function AboutSection() {
  const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);

  // Sources: PSA 2020 Census (population) and 2015 Census (households),
  // via PhilAtlas / PSA. Officials count follows the Local Government Code
  // structure: 1 Punong Barangay + 7 Kagawads + 1 SK Chairperson (elected)
  // + Barangay Secretary + Barangay Treasurer (appointed).
  const stats = [
    {
      icon: Users,
      number: "42,000+",
      label: "Residents (2020 Census)",
    },
    {
      icon: Home,
      number: "8,600+",
      label: "Households (2015 Census)",
    },
    {
      icon: MapPin,
      number: "1 of 20",
      label: "Barangays in Las Piñas City",
    },
    {
      icon: Award,
      number: "11",
      label: "Barangay Officials & Staff",
    },
  ];

  // Based on the services available in the Talon Uno online system
  const highlights = [
    "Request barangay clearance, residency, indigency, and good moral certificates online",
    "Apply for cedula, business and building permits, and marriage licenses",
    "Get help with health certificates, medical assistance, and ambulance requests",
    "Report community issues, file a barangay blotter, and read the latest news and announcements",
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats Grid - Now on Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all border border-slate-100 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#1e40af] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Text Content - Now on Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-[#dc2626]">
                Our Community
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#1e40af]">
              Barangay Talon Uno
            </h2>

            <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-6" />

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Barangay Talon Uno is one of the 20 barangays of Las Piñas City,
              Metro Manila. It is part of the historic Talon area, now divided
              into five barangays: Talon Uno, Talon Dos, Talon Tres, Talon
              Kuatro, and Talon Singko. According to the 2020 Census, Talon Uno
              is home to 42,505 residents, about 7% of the city&apos;s
              population, and its population grew by around 22% from 2015.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Talon Uno Connect brings barangay services closer to every
              resident, so you can request documents, ask for assistance, and
              raise concerns without having to line up at the barangay hall.
              Through this platform, you can:
            </p>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 text-lg font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Picture Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-[#dc2626]">
                Meet Our Team
              </span>
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e40af]">
              The People Behind Our Community
            </h3>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your Punong Barangay, Kagawads, SK Chairperson, and staff, working
              together to serve Barangay Talon Uno
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <div className="aspect-[21/9] bg-[#eaf0fb] relative">
              <img
                src="/our-team2.jpg"
                alt="Barangay Talon Uno Officials and Staff"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                  <ZoomIn className="w-8 h-8 text-gray-800" />
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400/40 rounded-3xl transition-all duration-300" />
            </div>

            {/* Caption overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Barangay Talon Uno Officials & Staff 2023–2026
              </h4>
              <p className="text-white/90 text-lg">
                Serving the residents of Talon Uno, Las Piñas City
              </p>
            </motion.div>
          </motion.div>

          {/* Team stats reflecting the current (2023-2026) term */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="text-3xl font-bold text-[#1e40af] mb-2">9</div>
              <div className="text-gray-700 font-medium">Elected Officials</div>
              <div className="text-sm text-gray-500 mt-1">
                Punong Barangay, 7 Kagawads, SK Chairperson
              </div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="text-3xl font-bold text-[#1e40af] mb-2">2</div>
              <div className="text-gray-700 font-medium">Appointive Staff</div>
              <div className="text-sm text-gray-500 mt-1">
                Barangay Secretary and Barangay Treasurer
              </div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="text-3xl font-bold text-[#1e40af] mb-2">11</div>
              <div className="text-gray-700 font-medium">
                Officials & Staff in Total
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Serving Talon Uno, Las Piñas City
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group z-50"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/our-team2.jpg"
                alt="Barangay Talon Uno Officials and Staff - Full View"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />

              {/* Image caption */}
              <div className="mt-6 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Barangay Talon Uno Officials & Staff 2023–2026
                </h4>
                <p className="text-white/80 text-lg">
                  Serving the residents of Talon Uno, Las Piñas City
                </p>
              </div>
            </motion.div>

            {/* Click outside hint */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
