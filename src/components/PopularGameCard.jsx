import { Star } from "lucide-react";

const PopularGameCard = ({ game }) => {
  const { title, coverPhoto, category, ratings, description } = game || {};
  return (
    <div className="card bg-base-100 shadow-md shadow-cyan-600 overflow-hidden group">
      <figure className="overflow-hidden">
        <img
          src={coverPhoto}
          alt={coverPhoto}
          className="h-48 w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </figure>
      <div className="card-body space-y-8">
        <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center">
          <h2 className="text-3xl text-secondary">{title}</h2>
          <div className="badge badge-warning">{category}</div>
        </div>
        <p className="poppins">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <span>
              <Star />
            </span>
            <p className="text-xl text-primary">{ratings}</p>
          </div>
          <button className="btn btn-success text-black border-3 w-32 border-rounded-lg border-success hover:bg-white rounded-md font-semibold transition-colors duration-300 poppins">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularGameCard;
