import Container from "./Container";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };

// Dummy testimonial data
const TESTIMONIALS = [
  {
    name: "Alex Hunter",
    avatar: "https://i.pravatar.cc/80?img=1",
    company: "Gaming Corp",
    designation: "Pro Player",
    testimonial:
      "This platform transformed my gaming sessions completely, making every match more exciting and immersive.",
  },
  {
    name: "Lara Croft",
    avatar: "https://i.pravatar.cc/80?img=2",
    company: "Adventure Ltd",
    designation: "Team Leader",
    testimonial:
      "A smooth, immersive experience with an incredible community. Playing here feels fun and collaborative every single time.",
  },
  {
    name: "Marcus Fenix",
    avatar: "https://i.pravatar.cc/80?img=3",
    company: "Warzone Inc",
    designation: "Gamer",
    testimonial:
      "Amazing graphics and fluid performance. I feel completely inside the game world every session. Truly next-level gaming!",
  },
  {
    name: "Samus Aran",
    avatar: "https://i.pravatar.cc/80?img=4",
    company: "Galaxy Games",
    designation: "Champion",
    testimonial:
      "Engagement and gameplay here are unmatched. Every mission and challenge keeps me hooked and wanting more.",
  },
  {
    name: "Nathan Drake",
    avatar: "https://i.pravatar.cc/80?img=5",
    company: "Treasure Hunters",
    designation: "Explorer",
    testimonial:
      "Every gaming session feels unique, packed with detail and adventure. Exploration and strategy keep it exciting always.",
  },
];

const Testimonials = () => {
  const slides = TESTIMONIALS.map((t, i) => (
    <div
      key={i}
      className="bg-[#1c1c1c] md:p-6 p-2 rounded-xl flex flex-col md:flex-row items-center gap-4 shadow-md shadow-success mb-2"
    >
      <img
        src={t.avatar}
        alt={t.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500"
      />
      <div>
        <p className="text-gray-400 mb-2 italic">"{t.testimonial}"</p>
        <h3 className="text-white font-semibold">{t.name}</h3>
        <p className="text-cyan-400 text-sm">
          {t.designation}, {t.company}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="text-gray-100 p-5 md:p-8 max-w-7xl mx-auto rounded-md">
      <Container>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold audiowide mb-5 pb-4 border-b-2 border-cyan-700/50 uppercase tracking-wider ml-2 md:ml-0 text-center"
          style={{ color: "#00FFE0", textShadow: "0 0 6px #00FFE0" }}
        >
          Player Voices
        </h2>
      </Container>
      <div className="py-16">
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Testimonials;
