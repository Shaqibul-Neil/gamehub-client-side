import event from "../assets/events.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Events = () => {
  // Animate cards individually
  useScrollAnimation(".scroll-section");

  const upcomingEvents = [
    {
      title: "Valorant World Championship",
      image: "https://i.postimg.cc/02Zz5HBZ/14806.jpg",
      date: "Dec 15, 2025",
      location: "Seoul, South Korea",
      description:
        "Witness the best teams battle for glory in the ultimate Valorant showdown, featuring lightning-fast reflexes, team synergy, and tactical brilliance on full display.",
      chiefGuest: "TenZ (Sentinels)",
      attraction: "Live Agent Cosplay + Tactical Workshop",
      prize: "$500,000",
    },
    {
      title: "Fortnite Royale Summit",
      image:
        "https://i.postimg.cc/zXdfYHLG/fortnite-battle-3840x2160-21599.jpg",
      date: "Nov 10, 2025",
      location: "New York, USA",
      description:
        "Epic Games hosts an exclusive Fortnite fan event with concerts, creator battles, and a full immersive arena experience — complete with real-time live builds.",
      chiefGuest: "Ninja (Streamer)",
      attraction: "Live Music by Marshmello + VR Build Zone",
      prize: "$300,000",
    },
  ];

  const liveEvents = [
    {
      title: "Call of Duty: Global Ops League",
      image: "https://i.postimg.cc/prCLTpq5/22670.jpg",
      date: "Ongoing",
      location: "Berlin, Germany",
      description:
        "The elite Call of Duty squads are clashing head-to-head in a gritty, cinematic battle royale. Real soldiers, real tactics — and the ultimate fight for dominance.",
      chiefGuest: "Captain Price (Special Appearance)",
      attraction: "COD Warzone Experience Booth + Drone Demo",
      prize: "$800,000",
    },
  ];

  const pastEvents = [
    {
      title: "PUBG Mobile Global Invitational",
      image: "https://i.postimg.cc/ZqvncY55/21057.jpg",
      date: "Aug 2025",
      location: "Dubai, UAE",
      description:
        "A massive showdown where top squads from every region clashed for global domination. It was a thrilling week of tactical drops, clutch moments, and roaring crowds.",
      chiefGuest: "Mortal (Team SouL)",
      attraction: "Desert Arena Survival + Drone Show",
      prize: "$1 Million",
    },
  ];

  const renderEvents = (title, data) => (
    <div className="space-y-16 my-20 scroll-section">
      <h2 className="text-4xl text-white audiowide text-center underline underline-offset-8">
        {title}
      </h2>
      <div className="flex flex-col space-y-20 mt-12">
        {data.map((event, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row items-center gap-8 bg-base-100 shadow-lg shadow-cyan-600 p-6 rounded-2xl hover:shadow-success/50 transition-all duration-500"
          >
            {/* Left Image */}
            <div className="lg:w-1/2 w-full overflow-hidden rounded-xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              />
            </div>

            {/* Right Text */}
            <div className="lg:w-1/2 w-full space-y-4">
              <h2 className="text-3xl text-success audiowide">{event.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {event.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 pt-2">
                <p>
                  <span className="text-success font-semibold">Date:</span>{" "}
                  {event.date}
                </p>
                <p>
                  <span className="text-success font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
                <p>
                  <span className="text-success font-semibold">
                    Chief Guest:
                  </span>{" "}
                  {event.chiefGuest}
                </p>
                <p>
                  <span className="text-success font-semibold">
                    Main Attraction:
                  </span>{" "}
                  {event.attraction}
                </p>
                <p>
                  <span className="text-success font-semibold">
                    Prize Pool:
                  </span>{" "}
                  {event.prize}
                </p>
              </div>
              <button className="btn btn-success text-black border-success border-2 hover:bg-white hover:text-success transition-all mt-4">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-white">
      <title>GameHub - Events</title>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] bg-black scroll-section">
        <img
          src={event}
          alt="Game Events Banner"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="lg:text-5xl text-3xl font-bold audiowide text-success">
            Upcoming Game Events
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Discover tournaments, expos, and global gaming spectacles happening
            across the world — all in one place.
          </p>
        </div>
      </div>

      {/* Events Sections */}
      <div className="container mx-auto px-4 py-16">
        {renderEvents("Upcoming Events", upcomingEvents)}
        {renderEvents("Live Events", liveEvents)}
        {renderEvents("Past Events", pastEvents)}
      </div>
    </div>
  );
};

export default Events;
