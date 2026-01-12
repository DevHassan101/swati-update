import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";

export default function BlogCards() {
  const blogsdata = [
    {
      slug: "detailblog",
      blogtitle: "Understand The Demand Of Call Girls In Noida",
      blogdesc:
        "Discover why SEO is essential for business growth in 2025. Learn how Samarix SEO services can boost..",
      blogimg: "/images/blog-1.jpeg"
    },
    {
      // slug: "detailblog",
      blogtitle: "Google Ads vs Meta Ads: Which Delivers Better ROI in 2025?",
      blogdesc:
        "Discover the ultimate comparison of Google Ads vs Meta Ads in 2025. Learn which platform delivers high..",
      blogimg: "/images/blog-1.jpeg",
    },
    {
      // slug: "detailblog",
      blogtitle: "Understand The Demand Of Call Girls In Noida",
      blogdesc:
        "Discover the top web development trends in 2025 that every business should know. From AI, PWAs, Web3..",
      blogimg: "/images/blog-1.jpeg",
    },
    {
      // slug: "detailblog",
      blogtitle: "Top Web Development Trends in 2025 Every Business Should Know.",
      blogdesc:
        "Discover the top web development trends in 2025 that every business should know. From AI, PWAs, Web3..",
      blogimg: "/images/blog-1.jpeg",
    }
  ];

  return (
    <section className="blogs-section w-full pt-12 pb-15 px-7 md:px-10 lg:px-14">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl inline-flex items-center text-white font-semibold">
          Our Latest Blogs &nbsp; <span className="text-red-200"><IoNewspaper size={45} /></span>
        </h2>
      </div>
      <div className="grid gap-5 md:gap-2 lg:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogsdata.map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index} className="blog-card rounded-xl shadow-lg bg-white border-2 border-white hover:shadow-2xl transition duration-300 flex flex-col h-full">
            {/* Image */}
            <div className="blog-img relative w-full h-50">
              <Image
                src={blog.blogimg}
                alt={blog.blogtitle}
                fill
                className="object-cover rounded-t-xl"
              />
              <div className="absolute top-0 left-0 bg-red-700/30 red-700 w-full h-full rounded-t-lg" />
            </div>

            {/* Content */}
            <div className="blog-content bg-white border-t-2 border-white py-4 px-5 flex-1 flex flex-col">
              <p className="text-base sm:text-md md:text-lg font-medium text-red-600 hover:text-red-700 transition mb-2">
                {blog.blogtitle}
              </p>
              <p className="text-sm text-black/80 leading-relaxed flex-1">
                {blog.blogdesc}
              </p>
            </div>

            {/* Footer */}
            <div className="blog-details bg-red-700 text-white rounded-b-xl flex justify-between items-center py-3 px-5 text-xs sm:text-sm">
              <span className="flex items-center">
                <FaRegCalendarAlt className="w-4 h-4 mr-1" /> 23 March 2025
              </span>
              <span className="flex items-center">
                <MdOutlineModeComment className="w-4 h-4 mr-1" /> 15 Comments
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
