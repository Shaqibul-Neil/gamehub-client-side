import { Star } from "lucide-react";
import { Link } from "react-router";
import slugify from "slugify";

const PopularGameCard = ({ game }) => {
  const { id, title, coverPhoto, category, ratings, description } = game || {};
  const isEven = id % 2 === 0;

  return (
    <div
      className={`relative flex overflow-hidden group rounded-xl p-1 shadow-sm shadow-cyan-700`}
    >
      {/* === Animated Glow Border Layer (only md+) === */}
      <div className="hidden lg:block absolute inset-0 rounded-xl overflow-hidden">
        {/* Glow Blur */}
        <div className="absolute inset-0 blur-2xl">
          <div
            className="absolute inset-0 animate-[spin_8s_linear_infinite]"
            style={{
              backgroundImage:
                "conic-gradient(rgba(0,0,0,0), #00ffe0, rgba(0,0,0,0) 20%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Border Spinner */}
        <div
          className="absolute inset-0 animate-[spin_8s_linear_infinite]"
          style={{
            backgroundImage:
              "conic-gradient(rgba(0,0,0,0), #00ffe0, rgba(0,0,0,0) 20%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Inner Box */}
      <div
        className={`relative z-10 bg-gray-900 rounded-lg overflow-hidden flex flex-col md:flex-row  ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <figure className="md:w-1/2 overflow-hidden">
          <img
            src={coverPhoto}
            alt={title}
            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg-tr rounded-lg-br"
          />
        </figure>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
          <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center">
            <h2 className="text-3xl text-[#00ffe0] audiowide">{title}</h2>
            <div className="bg-warning text-black px-4 py-2 w-24 rounded-md font-bold audiowide">
              {category}
            </div>
          </div>

          <p className="text-gray-300">{description}</p>

          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <Star />
              <p className="text-xl text-white">{ratings}</p>
            </div>

            <Link
              className="btn bg-success text-black hover:bg-white border-2 border-success w-32 rounded-md font-semibold transition-colors duration-300"
              to={`/game-details/${slugify(title, {
                lower: true,
                strict: true,
              })}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularGameCard;
