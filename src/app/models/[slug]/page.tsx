import Image from "next/image"
import { FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { notFound } from "next/navigation";

const models = [
  { slug: "valeria", name: "Valeria", image: "/images/profile1.webp", rating: 4, location: "Available in Barking IG11, Outcall £130", age: 27, height: "5'6 (168cm)", phone: "0335 5343882", about1: "Looking for a breath of fresh air? I offer a premium companionship experience that feels natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.", about2: "As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual, and truly enjoys the company of others, I would be delighted to meet you.", },
  { slug: "zaria", name: "Zaria", image: "/images/profile1.webp", rating: 4, location: "Available in Barking IG11, Outcall £130", age: 27, height: "5'6 (168cm)", phone: "0335 5343882", about1: "Looking for a breath of fresh air? I offer a premium companionship experience that feels natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.", about2: "As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual, and truly enjoys the company of others, I would be delighted to meet you.", },
  { slug: "alexis", name: "Alexis", image: "/images/profile1.webp", rating: 4, location: "Available in Barking IG11, Outcall £130", age: 27, height: "5'6 (168cm)", phone: "0335 5343882", about1: "Looking for a breath of fresh air? I offer a premium companionship experience that feels natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.", about2: "As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual, and truly enjoys the company of others, I would be delighted to meet you.", },
  { slug: "maria", name: "Maria", image: "/images/profile1.webp", rating: 4, location: "Available in Barking IG11, Outcall £130", age: 27, height: "5'6 (168cm)", phone: "0335 5343882", about1: "Looking for a breath of fresh air? I offer a premium companionship experience that feels natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.", about2: "As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual, and truly enjoys the company of others, I would be delighted to meet you.", },
];


export default async function ModelDetailPage(context: { params: Promise<{ slug: string }> }) {
  const params = await context.params;
  const slug = params.slug; // Don't parse as integer - keep as string

  const model = models.find((m) => m.slug === params.slug);

  if (!model) return notFound();
  // Console logging
  console.log("Slug value:", slug);
  console.log("Slug type:", typeof slug);


  return (
    <>
      <section className="main-model-section pt-12 pb-15 px-7 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-start mt-20">
          <div className="model-profile-pic w-full md:w-110 lg:w-full lg:basis-[35%] border-3 border-white rounded-xl shadow-xl mt-5 md:mt-0 mb-5 lg:mb-0 lg:mt-0 mx-auto lg:mx-0">
            <div className="img1 relative w-full h-120 md:h-160 lg:h-150 rounded-md">
              <Image src="/images/profile1.webp" alt="" className="w-full h-auto lg:h-full rounded-md" fill priority={false} />
              <div className="image-overlay absolute bottom-0 left-0 right-0 w-full h-full bg-linear-to-t from-red-700/70 via-transparent to-transparent rounded-md"></div>
            </div>
          </div>
          <div className="model-profile-content w-full lg:basis-[64%] pl-0 lg:pl-10">
            <div className="profile-head flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center pb-3 border-b border-white/50">
              <div className="profile-left">
                <h5 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mt-1">{model.name}</h5>
                <div className="flex justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl lg:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-md lg:text-lg text-white/90">Available in London Escort, Outcall £150</p>
              </div>
              <div className="profile-right mt-2 lg:mt-0">
                <button className="bg-white/95 py-1 px-6 lg:py-2 lg:px-7 text-sm lg:text-base border lg:border-2 border-red-500 rounded-full text-red-500 font-medium
                  flex justify-center items-center transition-all duration-0.5 hover:bg-red-500 hover:text-white cursor-pointer">
                  <FiPhoneCall /> &nbsp; Call Now
                </button>
              </div>
            </div>
            <div className="profile-mid pt-3">
              <h3 className="text-md lg:text-xl text-white font-medium">About Me:</h3>
              <div className="profile-list mt-2 flex flex-col md:flex-col lg:flex-row justify-start items-start md:items-center lg:items-center gap-5">
                <p className="text-white text-sm lg:text-base inline-flex justify-start items-center"> <FaUser size={13} /> <span className="text-white/90 font-medium ml-1"> Age: </span> &nbsp; 27</p>
                <p className="text-white text-sm lg:text-base inline-flex justify-start items-center"> <GiBodyHeight size={15} /> <span className="text-white/90 font-medium ml-1"> Height: </span> &nbsp; 5&apos;6&quot; (168 cm)</p>
                <p className="text-white text-sm lg:text-base inline-flex justify-start items-center"> <IoLogoWhatsapp size={15} /> <span className="text-white/90 font-medium ml-1"> Whatsapp: </span> &nbsp; 0335 5343882</p>
                <p className="text-white text-sm lg:text-base inline-flex justify-start items-center"> <IoIosPin size={17} /> <span className="text-white/90 font-medium ml-1"> Location: </span> &nbsp; Kolkata, India</p>
              </div>
              <div className="profile pt-3">
                <p className="text-white/90 text-sm lg:text-base text-justify pb-1">Looking for a breath of fresh air? I offer a premium companionship experience that feels
                  natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.</p>
                <p className="text-white/90 text-sm lg:text-base text-justify pb-1">As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing
                  a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual,
                  and truly enjoys the company of others, I would be delighted to meet you.</p>
                <p className="text-white/90 text-sm lg:text-base text-justify pb-1">Looking for a breath of fresh air? I offer a premium companionship experience that feels
                  natural, effortless, and entirely focused on you. I believe the best moments come from genuine chemistry and a relaxed atmosphere.</p>
                <p className="text-white/90 text-sm lg:text-base text-justify pb-1">As a professional Indian companion available for outcall appointments, I bring a warm personality and a zest for life to every meeting. I am equally comfortable sharing
                  a laugh over a quiet drink as I am engaging in deep, meaningful conversation. If you value a companion who is attentive, punctual,
                  and truly enjoys the company of others, I would be delighted to meet you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
