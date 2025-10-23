const GameDetailsLoading = () => {
  return (
    <div>
      <div className="animate-pulse">
        {/* Cover Image */}
        <div className="w-full h-[80vh] bg-gray-800 flex items-center justify-center">
          <div className="w-full h-full bg-gray-700"></div>
        </div>

        {/* Content */}
        <div className="md:py-24 py-12 lg:px-5 px-3 space-y-12">
          {/* Category & Ratings */}
          <div className="flex gap-4 justify-center">
            <div className="h-5 w-32 bg-gray-700 rounded"></div>
            <div className="h-5 w-32 bg-gray-700 rounded"></div>
          </div>

          {/* Title */}
          <div className="h-10 w-2/3 bg-gray-700 mx-auto rounded"></div>

          {/* Description section */}
          <div className="space-y-6">
            <div className="flex justify-center items-center gap-4">
              <div className="h-6 w-12 bg-gray-700 rounded"></div>
              <div className="h-6 w-32 bg-gray-700 rounded"></div>
              <div className="h-6 w-12 bg-gray-700 rounded"></div>
            </div>

            {/* Description lines */}
            <div className="space-y-3 mt-6">
              <div className="h-4 w-full bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-700 rounded"></div>
              <div className="h-4 w-3/6 bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Characters Section */}
          <div>
            <div className="flex flex-col mb-8 items-center">
              <div className="h-6 w-40 bg-gray-700 rounded"></div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-16">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-60 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <div className="h-40 w-40 bg-gray-700 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer & Download */}
          <div className="text-center space-y-6">
            <div className="h-5 w-56 bg-gray-700 mx-auto rounded"></div>
            <div className="h-10 w-40 bg-gray-700 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsLoading;
