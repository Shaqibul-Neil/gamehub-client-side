import { Play, TriangleRight, Medal } from "lucide-react";

const AwardCard = ({ award }) => (
  <div className="relative overflow-hidden rounded-lg shadow-2xl mb-10">
    <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
      <img
        src={award.image}
        alt={award.title}
        className="w-full h-full object-cover opacity-30"
      />
    </div>

    <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center z-10">
      {/* Left */}
      <div className="md:w-2/3 max-w-lg mb-6 md:mb-0">
        <div className="flex items-start mb-3">
          <TriangleRight className="h-6 w-6 mr-3 shrink-0 mt-1 text-success" />
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide audiowide">
            {award.title}
          </h3>
        </div>
        {award.details && (
          <p className="text-sm text-gray-300 ml-9">{award.details}</p>
        )}
      </div>

      {/* Right */}
      <div className="md:w-1/3 flex flex-col items-end space-y-6">
        <Medal className="h-12 w-12 text-success" />

        <div className="text-sm tracking-widest uppercase text-gray-400">
          <span>{award.date}</span> /{" "}
          <span className="text-white">{award.location}</span>
        </div>

        <button className="flex items-center space-x-2 py-2 px-4 border border-gray-700 hover:border-white transition-colors duration-300 rounded-full">
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gray-700 flex-shrink-0">
            <Play className="h-3 w-3 fill-current text-success" />
          </div>
          <span className="text-sm font-medium">Watch Video</span>
        </button>
      </div>
    </div>
  </div>
);

export default AwardCard;
