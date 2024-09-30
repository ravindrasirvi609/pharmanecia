"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Camera, Map, Coffee, Trees, Sun, Info, X } from "lucide-react";

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
      "Visit a tea factory to learn about the process of tea production, from plucking to packaging. Dont forget to taste and purchase some of the famous Nilgiri tea.",
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
      "Home to over 20,000 varieties of roses, this garden is a colorful spectacle. Its the largest rose garden in India and the first in South Asia to be awarded the Garden of Excellence Award.",
    image: "/ooty/rose.webp",
  },
];

const ImageSlider = ({ images, currentIndex, onClose }: any) => {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X className="w-8 h-8" />
      </button>
      <button onClick={prevImage} className="absolute left-4 text-white">
        &lt;
      </button>
      <Image
        src={images[index]}
        alt={`Attraction ${index + 1}`}
        width={800}
        height={600}
        objectFit="contain"
      />
      <button onClick={nextImage} className="absolute right-4 text-white">
        &gt;
      </button>
    </div>
  );
};

const OotyTourismPage: React.FC = () => {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlider = (index: number) => {
    setCurrentImageIndex(index);
    setSliderOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-darkgray">
      <header className="bg-primary text-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Welcome to Ooty</h1>
          <p className="text-xl">The Queen of Hill Stations</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Discover Ooty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Ooty, short for Ootacamund, is a picturesque hill station
                nestled in the Nilgiri Hills of Tamil Nadu, India. Known for its
                lush green tea gardens, misty landscapes, and colonial charm,
                Ooty offers a perfect retreat for nature lovers and adventure
                seekers alike.
              </p>
              <p className="text-lg mb-4">
                Founded in the early 19th century by the British as a summer
                retreat, Ooty still retains much of its colonial architecture
                and ambiance. The town is surrounded by rolling hills covered in
                eucalyptus and pine forests, interspersed with vast tea estates
                that produce the famous Nilgiri tea.
              </p>
              <p className="text-lg mb-4">
                With its year-round pleasant climate, Ooty is a haven for those
                looking to escape the heat of the plains. Visitors can enjoy a
                variety of activities, from boating on Ooty Lake and hiking in
                the Nilgiri Biosphere Reserve to exploring the vibrant local
                markets and savoring the unique Nilgiri cuisine. The town is
                also famous for its chocolate and homemade cheeses, adding a
                delightful culinary dimension to your visit.
              </p>
            </div>

            <div className="relative h-80 md:h-auto">
              <Image
                src="/ooty/ooty-wallpaper.jpg"
                alt="Ooty Landscape"
                layout="fill"
                objectFit="cover"
                className="rounded-lg cursor-pointer"
                onClick={() => openSlider(0)}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg cursor-pointer"
                    onClick={() => openSlider(index + 1)}
                  />
                </div>
                <div className="flex items-center mb-4">
                  {attraction.icon}
                  <h3 className="text-xl font-semibold ml-2 text-primary">
                    {attraction.name}
                  </h3>
                </div>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Travel Tips
          </h2>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Best time to visit: March to June</li>
              <li>Don&apos;t forget to try the famous Nilgiri tea</li>
              <li>Carry warm clothes as evenings can be chilly</li>
              <li>Book accommodations in advance during peak season</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Getting Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <p className="text-lg mb-4 text-gray-600">
                  Ooty is well-connected by road and rail, making it accessible
                  from various parts of South India. The nearest airport is
                  Coimbatore International Airport, about 88 km away. From
                  there, you can take a scenic drive through the winding ghat
                  roads or experience the famous Nilgiri Mountain Railway to
                  reach Ooty.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  By Road: Regular bus services are available from major cities
                  like Bangalore, Mysore, and Coimbatore. The journey offers
                  breathtaking views of the Nilgiri mountains and forests.
                  Private taxis and self-drive options are also available for
                  those who prefer more flexibility.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  By Rail: The Nilgiri Mountain Railway, a UNESCO World Heritage
                  Site, offers a unique and picturesque journey from
                  Mettupalayam to Ooty. This toy train winds its way through 108
                  curves and 16 tunnels, providing stunning views of the Nilgiri
                  landscape. It&apos;s not just a mode of transport, but an
                  attraction in itself.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  Once in Ooty, local transportation options include taxis,
                  auto-rickshaws, and rental bikes or cars for exploring the
                  town and its surrounding areas. Many hotels also offer shuttle
                  services to popular attractions.
                </p>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/ooty/walpaper-1.jpg"
                alt="Map to Ooty"
                layout="fill"
                objectFit="cover"
                className="rounded-lg cursor-pointer"
                onClick={() => openSlider(attractions.length + 1)}
              />
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default OotyTourismPage;
