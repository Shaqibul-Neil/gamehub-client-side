const PopularGameCard = ({ game }) => {
  const { title, coverPhoto, category, ratings } = game || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={coverPhoto}
          alt={coverPhoto}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{ratings}</div>
          <div className="badge badge-outline">View Details</div>
        </div>
      </div>
    </div>
  );
};

export default PopularGameCard;
