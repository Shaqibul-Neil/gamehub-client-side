import { Play, TriangleRight, Medal, Award } from "lucide-react";
import AwardCard from "../components/AwardCard";

// Awards data
const awardsData = [
  {
    title: "Creative Genius Award",
    details:
      "Outstanding achievement in gaming innovation and creative strategy across global tournaments.",
    date: "10 DEC 2014",
    location: "LONDON",
    image:
      "https://i.postimg.cc/9MHHZCkV/andreea-avramescu-w-R56AUl-Es-E4-unsplash.jpg",
    featured: true,
  },
  {
    title: "Social Media Star Award",
    details:
      "Recognized for excellence in online gaming community engagement and content creation.",
    date: "18 SEP 2016",
    location: "INDIA",
    image: "https://i.postimg.cc/6QRD9FQ8/ai-generated-8921431-1280.jpg",
    featured: true,
  },
];

const About = () => {
  const mainImage =
    "https://i.postimg.cc/WzsScHDV/annie-spratt-h-Cb3l-IB8L8E-unsplash.jpg";
  const topImages = [
    "https://i.postimg.cc/CxR70DKR/product-school-XZkk5x-T8Xrk-unsplash.jpg",
    "https://i.postimg.cc/HkxnKkn9/ai-generated-8015427-640.jpg",
  ];

  const stats = [
    { number: "500+", label: "Popular Games Featured" },
    { number: "1M+", label: "Monthly Gamers" },
    { number: "50+", label: "Exclusive Reviews" },
    { number: "10+", label: "Global Gaming Events" },
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-5 md:px-10 lg:px-20">
      <title>GameHub - About</title>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-400 border-t border-gray-700 pt-2 w-24 audiowide">
              OUR STORY
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-1">
              Level Up Your Gaming Experience, Explore Latest Releases,
              <span className="text-success audiowide">
                {" "}
                Dominate the Leaderboards.
              </span>
            </h1>
          </div>

          <img
            src={mainImage}
            alt="Gaming team and gameplay"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col">
          <div className="flex space-x-4 mb-8">
            {topImages.map((imgSr, i) => (
              <div
                key={i}
                className="flex-1 relative overflow-hidden rounded-lg"
              >
                <img src={imgSr} alt="" className="w-full h-36 object-cover" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <span className="bg-black bg-opacity-50 text-xs px-2 py-0.5 rounded">
                    Gaming
                  </span>
                  <span className="bg-black bg-opacity-50 text-xs px-2 py-0.5 rounded">
                    Trends
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-gray-400 mb-8">
            Discover in-depth reviews, walkthroughs, and expert insights on your
            favorite games. From action-packed shooters to immersive RPGs, our
            team ensures you stay ahead of the competition and enjoy the latest
            trends in the gaming world.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 border-b border-gray-800 pb-5 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <h2 className="text-2xl font-bold text-success audiowide">
                  {stat.number}
                </h2>
                <p className="text-xs text-gray-400 mt-1 uppercase leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 border-t border-gray-700 pt-2 w-20 mx-auto mb-2 audiowide">
            HONORS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Prestigious <span className="text-success audiowide">Awards</span>
          </h2>
        </div>

        {/* Featured Awards */}
        {awardsData.map((award, i) => (
          <AwardCard key={i} award={award} />
        ))}
      </div>
    </section>
  );
};

export default About;
