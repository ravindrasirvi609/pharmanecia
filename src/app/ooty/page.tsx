"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Camera,
  Map,
  Coffee,
  Trees,
  Sun,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBus, FaCar, FaPlane, FaRoad, FaTrain } from "react-icons/fa";

const attractions = [
  {
    name: "Ooty Botanical Gardens",
    icon: <Trees className="w-6 h-6" />,
    description:
      "Spread over 22 hectares, these gardens are home to over 650 species of plants and trees. The Garden also houses a fossilized tree trunk estimated to be 20 million years old.",
    image: "/ooty/rose-garden-ooty.jpg",
  },
  {
    name: "Doddabetta Peak",
    icon: <Sun className="w-6 h-6" />,
    description:
      "At 2,637 meters, Doddabetta is the highest peak in the Nilgiri mountains. It offers breathtaking views of the surrounding landscape and houses a telescope house for visitors.",
    image: "/ooty/Doddabetta.jpg",
  },
  {
    name: "Ooty Lake",
    icon: <Camera className="w-6 h-6" />,
    description:
      "This artificial lake was created in 1824 and is a popular spot for boating. Surrounded by Eucalyptus trees, it offers a serene environment for visitors.",
    image: "/ooty/lake.webp",
  },
  {
    name: "Tea Factory Visit",
    icon: <Coffee className="w-6 h-6" />,
    description:
      "Visit a tea factory to learn about the process of tea production, from plucking to packaging. Don't forget to taste and purchase some of the famous Nilgiri tea.",
    image: "/ooty/e7.jpg",
  },
  {
    name: "Nilgiri Mountain Railway",
    icon: <Sun className="w-6 h-6" />,
    description:
      "This UNESCO World Heritage Site offers a picturesque journey through the Nilgiri mountains. The toy train ride is a must-experience attraction in Ooty.",
    image: "/ooty/nilgiri-main.jpeg",
  },
  {
    name: "Rose Garden",
    icon: <Trees className="w-6 h-6" />,
    description:
      "Home to over 20,000 varieties of roses, this garden is a colorful spectacle. It's the largest rose garden in India and the first in South Asia to be awarded the Garden of Excellence Award.",
    image: "/ooty/rose.webp",
  },
];

const ImageSlider = ({ images, currentIndex, onClose }: any) => {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={prevImage}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={images[index]}
          alt={`Attraction ${index + 1}`}
          width={800}
          height={600}
          objectFit="contain"
          className="rounded-lg shadow-2xl border-4 border-white"
        />
      </motion.div>
      <button
        onClick={nextImage}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </motion.div>
  );
};

const OotyTourismPage: React.FC = () => {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlider = (index: number) => {
    setCurrentImageIndex(index);
    setSliderOpen(true);
  };

  useEffect(() => {
    if (sliderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sliderOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-300 text-gray-800">
      <header className="bg-blue-700 text-white py-20 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Welcome to Ooty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl italic"
          >
            The Queen of Hill Stations
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold mb-8 text-blue-800"
          >
            Getting Here
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg mb-6 leading-relaxed">
                <FaRoad className="inline-block mr-2 text-blue-600" /> Ooty is
                well-connected by road and rail, making it accessible from
                various parts of South India. The nearest airport is Coimbatore
                International Airport, about 88 km away. From there, you can
                take a scenic drive through the winding ghat roads or experience
                the famous Nilgiri Mountain Railway to reach Ooty.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                <FaPlane className="inline-block mr-2 text-blue-600" />
                <strong>By Air:</strong> The nearest airport is Coimbatore
                International Airport, which is approximately 88 km from Ooty.
                From the airport, you can hire a taxi or take a bus to reach
                Ooty.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                <FaTrain className="inline-block mr-2 text-blue-600" />
                <strong>By Train:</strong> The Nilgiri Mountain Railway, a
                UNESCO World Heritage Site, offers a unique and picturesque
                journey from Mettupalayam to Ooty. This toy train winds its way
                through 108 curves and 16 tunnels, providing stunning views of
                the Nilgiri landscape. It&apos;s not just a mode of transport,
                but an attraction in itself.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                <FaBus className="inline-block mr-2 text-blue-600" />
                <strong>By Bus:</strong> Regular bus services are available from
                major cities like Bangalore, Mysore, and Coimbatore. The journey
                offers breathtaking views of the Nilgiri mountains and forests.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                <FaCar className="inline-block mr-2 text-blue-600" />
                <strong>By Private Vehicle:</strong> If you prefer more
                flexibility, you can drive to Ooty. The roads are
                well-maintained, and the scenic views make the drive enjoyable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-96 md:h-auto rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/ooty/walpaper-1.jpg"
                alt="Map to Ooty"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => openSlider(attractions.length + 1)}
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold mb-8 text-blue-800"
          >
            Discover Ooty
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg mb-6 leading-relaxed">
                Ooty, short for Ootacamund, is a picturesque hill station
                nestled in the Nilgiri Hills of Tamil Nadu, India. Known for its
                lush green tea gardens, misty landscapes, and colonial charm,
                Ooty offers a perfect retreat for nature lovers and adventure
                seekers alike.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Founded in the early 19th century by the British as a summer
                retreat, Ooty still retains much of its colonial architecture
                and ambiance. The town is surrounded by rolling hills covered in
                eucalyptus and pine forests, interspersed with vast tea estates
                that produce the famous Nilgiri tea.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                With its year-round pleasant climate, Ooty is a haven for those
                looking to escape the heat of the plains. Visitors can enjoy a
                variety of activities, from boating on Ooty Lake and hiking in
                the Nilgiri Biosphere Reserve to exploring the vibrant local
                markets and savoring the unique Nilgiri cuisine. The town is
                also famous for its chocolate and homemade cheeses, adding a
                delightful culinary dimension to your visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-96 md:h-auto rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/ooty/ooty-wallpaper.jpg"
                alt="Ooty Landscape"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => openSlider(0)}
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold mb-8 text-blue-800"
          >
            Top Attractions
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => openSlider(index + 1)}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    {attraction.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {attraction.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {attraction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold mb-8 text-blue-800"
          >
            Travel Tips
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Sun className="w-6 h-6 mr-3 text-yellow-500" />
                <span>Best time to visit: March to June</span>
              </li>
              <li className="flex items-center">
                <Coffee className="w-6 h-6 mr-3 text-brown-500" />
                <span>Don&apos;t forget to try the famous Nilgiri tea</span>
              </li>
              <li className="flex items-center">
                <Info className="w-6 h-6 mr-3 text-blue-500" />
                <span>Carry warm clothes as evenings can be chilly</span>
              </li>
              <li className="flex items-center">
                <Map className="w-6 h-6 mr-3 text-green-500" />
                <span>Book accommodations in advance during peak season</span>
              </li>
            </ul>
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {sliderOpen && (
          <ImageSlider
            images={[
              "/ooty/ooty-wallpaper.jpg",
              ...attractions.map((a) => a.image),
              "/ooty/walpaper-1.jpg",
            ]}
            currentIndex={currentImageIndex}
            onClose={() => setSliderOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OotyTourismPage;
