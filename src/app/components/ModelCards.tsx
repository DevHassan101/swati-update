// import Image from 'next/image';

// const models = [
//     {
//         name: "Valeria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11, Outcall £130",
//         badge: "Top 10",
//     },
//     {
//         name: "Zaria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11 Outcall, N/A",
//         badge: null,
//     },
//     {
//         name: "Alexis",
//         image: "/images/profile1.webp",
//         rating: 5,
//         location: "Available in London Escort, Outcall £150",
//         badge: "Top 10",
//     },
//     {
//         name: "Maria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11, N/A",
//         badge: null,
//     },
//     {
//         name: "Valeria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11, Outcall £130",
//         badge: "Top 10",
//     },
//     {
//         name: "Zaria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11 Outcall, N/A",
//         badge: null,
//     },
//     {
//         name: "Alexis",
//         image: "/images/profile1.webp",
//         rating: 5,
//         location: "Available in London Escort, Outcall £150",
//         badge: "Top 10",
//     },
//     {
//         name: "Maria",
//         image: "/images/profile1.webp",
//         rating: 4,
//         location: "Available in Barking IG11, N/A",
//         badge: null,
//     }
// ];

// export default function ModelCards() {
//     return (
//         <section className="profile-section py-10 pb-20 px-10 cursor-pointer">
//             <div className="flex flex-col justify-center items-center mb-8">
//                 <h1 className='text-3xl lg:text-4xl text-white font-extrabold mb-2 text-shadow-black'>Models Profiles 💋</h1>
//                 <p className='w-full lg:w-220 text-xs lg:text-sm text-center text-white text-shadow-black'>In a city where luxury often comes with a hefty price tag, Lollipop Escorts stands as a beacon of affordability. We firmly believe that everyone deserves access to quality companionship without having to empty their wallets. While other agencies may charge a premium of £250 or more for outcall services, our commitment to inclusivity allows us to offer our exquisite girls for just $150 per hour, making memorable encounters accessible to all.</p>
//             </div>
//             <div className="grid gap-6 sm:gap-8 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {models.map((model, index) => (
//                     <div key={index} className="profile-card relative rounded-xl overflow-hidden border-3 border-white group cursor-pointer">
//                         {/* model-image-section  */}
//                         <div className="relative w-full aspect-2/3">
//                             <Image src={model.image} alt={model.name} fill className="object-cover" priority={false} />
//                             <div className="absolute inset-0 bg-black/5" />
//                         </div>
//                         {/* model-content-section  */}
//                         <div className="model-content w-full absolute bottom-0 left-0 right-0 bg-linear-to-t from-red-700/70 via-transparent to-transparent transition-all duration-500 
//                              ease-in-out group-hover:top-0 group-hover:bottom-0 group-hover:h-full group-hover:bg-red-800/90 flex flex-col justify-end group-hover:justify-center py-4">
//                             <div className="transition-all duration-500">
//                                 <h3 className="text-2xl font-semibold text-white bg-linear-to-l to-red-600 from-red-750 rounded-tr-xl rounded-br-xl px-5 mb-2 mr-10">
//                                     {model.name}
//                                 </h3>
//                                 <div className="flex gap-1 px-5 mb-1">
//                                     {[...Array(model.rating)].map((_, i) => (
//                                         <span key={i} className="text-yellow-400 text-xl text-shadow-sm text-shadow-black/30">★</span>
//                                     ))}
//                                 </div>
//                                 <p className="text-sm text-white text-shadow-sm text-shadow-black/30 px-5 mb-3">
//                                     {model.location}
//                                 </p>
//                             </div>
//                             <div className="model-details px-5 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 max-h-0 group-hover:max-h-52">
//                                 <div className="border-t border-white/40 pt-4 mt-2">
//                                     <h4 className="text-xl font-semibold text-white text-shadow-sm text-shadow-black/40 mb-1">About Me</h4>
//                                     <p className='text-md text-shadow-sm text-white text-shadow-black/30 mb-2'>Age: 27</p>
//                                     <p className="text-sm text-shadow-sm text-white text-shadow-black/30 leading-relaxed mb-4">
//                                         Professional and friendly service. Available for outcall appointments.
//                                         Providing premium companionship experience.
//                                     </p>
//                                     <div className="model-buttons flex flex-wrap justify-between items-center">
//                                         <button className="basis-[53%] bg-red-400 text-white border border-white rounded-full py-1
//                                                 text-md font-medium hover:shadow-lg transition-all duration-300 hover:bg-red-600 cursor-pointer">
//                                             View Profile
//                                         </button>
//                                         <button className="basis-[45%] bg-red-500 text-white border border-white rounded-full py-1 
//                                                 text-md font-medium hover:shadow-lg transition-all duration-300 hover:bg-red-600 cursor-pointer">
//                                             Call Now
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {model.badge && (
//                             <div className="absolute top-3 right-3 bg-white text-pink-500 px-4 py-1 border border-pink-500 rounded-full text-sm font-bold z-10">
//                                 {model.badge}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsHearts } from "react-icons/bs";

const models = [
  {
    slug: "valeria",
    name: "Valeria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11, Outcall £130",
    badge: "Top 10",
  },
  {
    slug: "zaria",
    name: "Zaria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11 Outcall, N/A",
    badge: null,
  },
  {
    slug: "alexis",
    name: "Alexis",
    image: "/images/profile1.webp",
    rating: 5,
    location: "Available in London Escort, Outcall £150",
    badge: "Top 10",
  },
  {
    slug: "maria",
    name: "Maria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11, N/A",
    badge: null,
  },
  {
    slug: "valeria",
    name: "Valeria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11, Outcall £130",
    badge: "Top 10",
  },
  {
    slug: "zaria",
    name: "Zaria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11 Outcall, N/A",
    badge: null,
  },
  {
    slug: "alexis",
    name: "Alexis",
    image: "/images/profile1.webp",
    rating: 5,
    location: "Available in London Escort, Outcall £150",
    badge: "Top 10",
  },
  {
    slug: "maria",
    name: "Maria",
    image: "/images/profile1.webp",
    rating: 4,
    location: "Available in Barking IG11, N/A",
    badge: null,
  }
];


export default function ModelCards() {

  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section className="profile-section pt-12 pb-15 px-7 md:px-10 lg:px-15">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl inline-flex items-center text-white font-semibold text-shadow-black mb-2">
          Our Models Profiles &nbsp; <span className="text-red-300"><BsHearts size={45} /></span>
        </h1>
        <p className="w-full lg:w-220 text-sm md:text-md lg:text-lg text-center text-white/90 text-shadow-black">
         In a city where luxury often comes with a hefty price tag, Lollipop Escorts stands as a beacon of affordability redefining
          what it means to enjoy premium companionship without the gatekeeping of exorbitant fees.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model, index) => (
          <div key={index} className="profile-card relative rounded-xl overflow-hidden border-2 border-white group cursor-pointer"
            onClick={() => setOpenCard(openCard === index ? null : index)}>
            {/* model-image-section */}
            <div className="relative w-full aspect-2/3">
              <Image src={model.image} alt={model.name} fill className="object-cover rounded-md" priority={false} />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            {/* model-content-section */}
            <div className={`model-content w-full absolute bottom-0 left-0 right-0 bg-linear-to-t from-red-700/70 via-transparent to-transparent transition-all duration-500 ease-in-out flex flex-col justify-end py-4
              /* Desktop hover (existing behaviour) */ group-hover:top-0 group-hover:bottom-0 group-hover:h-full group-hover:bg-red-800/90 group-hover:justify-center
              /* Mobile tap (new behaviour) */ ${openCard === index ? ` top-0 bottom-0 pb-12 h-full bg-red-800/90 justify-center` : ""}`}>
              <div className="transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white bg-linear-to-l to-red-600 from-red-750 rounded-tr-xl rounded-br-xl px-5 mb-2 mr-10">
                  {model.name}
                </h3>
                <div className="flex gap-1 px-5 mb-1">
                  {[...Array(model.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl text-shadow-sm text-shadow-black/30">★</span>
                  ))}
                </div>
                <p className="text-sm text-white text-shadow-sm text-shadow-black/30 px-5 mb-3">
                  {model.location}
                </p>
              </div>
              <div className={`model-details px-5 opacity-0 transition-all duration-500 ease-in-out 
                max-h-0 group-hover:opacity-100 group-hover:max-h-52 ${openCard === index ? "opacity-100 max-h-52" : ""}`}>
                <div className="border-t border-white/40 pt-4 mt-2">
                  <h4 className="text-xl font-semibold text-white text-shadow-sm text-shadow-black/40 mb-1">About Me</h4>
                  <p className="text-md text-shadow-sm text-white text-shadow-black/30 mb-2">Age: 27</p>
                  <p className="text-sm text-shadow-sm text-white text-shadow-black/30 leading-relaxed mb-4">
                    Professional and friendly service. Available for outcall appointments.
                    Providing premium companionship experience.
                  </p>
                  <div className="model-buttons flex flex-wrap justify-between items-center">
                    <Link href={`/models/${model.slug}`} className="basis-[53%] text-center bg-red-400 text-white border border-white rounded-full py-1 text-md font-medium hover:shadow-lg transition-all duration-300 hover:bg-red-600 cursor-pointer">
                      View Profile
                    </Link>
                    <Link href="tel:+923402690068" className="basis-[45%] text-center bg-red-500 text-white border border-white rounded-full py-1 text-md font-medium hover:shadow-lg transition-all duration-300 hover:bg-red-600 cursor-pointer">
                      Call Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {model.badge && (
              <div className="absolute top-3 right-3 bg-white text-pink-500 px-4 py-1 border border-pink-500 rounded-full text-sm font-bold z-10">
                {model.badge}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
