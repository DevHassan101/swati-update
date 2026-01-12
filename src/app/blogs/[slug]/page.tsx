import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";

export default function BlogDetails() {
  return (
    <>
      <section className="main-blog-section w-full pt-12 pb-25 px-7 md:px-10 lg:px-55">
        <div className="blog-details pt-20 flex flex-col justify-center items-start">
          <div className="blog-head mb-3 lg:mb-5">
            <span className="flex justify-start items-center text-white/90 text-md font-medium mb-2">
              <FaRegCalendarAlt /> &nbsp; 05 September, 2025
            </span>
            <h2 className="text-white text-2xl lg:text-3xl font-medium">
              Understand The Demand Of Call Girls In Noida
            </h2>
          </div>
          <div className="blog-image relative w-full h-75 md:h-105 lg:h-125 border-3 border-white rounded-lg mb-5">
            <Image
              src="/images/blog-1.jpeg"
              alt="blog-image"
              className="w-full h-auto lg:h-full rounded-md"
              fill
              priority={false}
            />
            <div
              className="blog-overlay absolute bottom-0 left-0 right-0 z-20 w-full h-full 
            bg-linear-to-t from-red-700/70 via-transparent to-transparent rounded-md"
            ></div>
          </div>
          <div className="blog-content">
            <h5 className="text-white text-lg lg:text-2xl font-medium mb-2">
              Category: Call Girl Noida
            </h5>
            <p className="text-white/90 text-sm lg:text-md text-justify font-medium mb-2">
              The need for call girls in Noida can be understood from various
              socio-economic factors that favor this. Noida is one of the
              fast-emerging urban centers in the country, located next to the
              capital city of India, New Delhi. The city harbors a very
              cosmopolitan population of professionals, expatriates, and
              students. Its growth in recent times has been synonymous with an
              increase in disposable income and a shift towards more liberal
              social attitudes by its residents. This gives an ideal market to
              the adult entertainment business.
            </p>
            <p className="text-white/90 text-sm lg:text-md text-justify font-medium mb-2">
              Moreover, the anonymity provided by digital platforms allows
              potential clients to seek discreet companionship without facing
              judgment from society. Many people are interested in call girls
              for various reasons: from lack of emotional satisfaction and
              companionship to exploring their fantasies and escaping the
              hassles of daily life. In fact, other marketing techniques used
              promise secrecy, professionalism, and satisfaction-all that
              clients who value privacy seek. In essence, economic prosperity,
              changing social norms, and technological advancement have greatly
              enhanced the demand for call girls in Noida.
            </p>
            <p className="text-white/90 text-sm lg:text-md text-justify font-medium mb-2">
              The need for call girls in Noida can be understood from various
              socio-economic factors that favor this. Noida is one of the
              fast-emerging urban centers in the country, located next to the
              capital city of India, New Delhi. The city harbors a very
              cosmopolitan population of professionals, expatriates, and
              students. Its growth in recent times has been synonymous with an
              increase in disposable income and a shift towards more liberal
              social attitudes by its residents. This gives an ideal market to
              the adult entertainment business.
            </p>
            <p className="text-white/90 text-sm lg:text-md text-justify font-medium mb-2">
              Moreover, the anonymity provided by digital platforms allows
              potential clients to seek discreet companionship without facing
              judgment from society. Many people are interested in call girls
              for various reasons: from lack of emotional satisfaction and
              companionship to exploring their fantasies and escaping the
              hassles of daily life. In fact, other marketing techniques used
              promise secrecy, professionalism, and satisfaction-all that
              clients who value privacy seek. In essence, economic prosperity,
              changing social norms, and technological advancement have greatly
              enhanced the demand for call girls in Noida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
