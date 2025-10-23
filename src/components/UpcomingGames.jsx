import Container from "./Container";
import call from "../assets/call.jpg";
import rob from "../assets/rob.png";
import gun from "../assets/gun.jpg";
import cod from "../assets/video/cod.mp4";

const UpcomingGames = () => {
  return (
    <div>
      <Container>
        <div className="px-3 relative">
          <div>
            <h2 className="text-secondary lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold uppercase tracking-wider text-right">
              The Must Have Game
            </h2>
            <h2 className="text-success lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold uppercase tracking-wider text-right">
              2025. December Winter
            </h2>
            <div className="flex justify-end">
              {" "}
              <h4 className="lg:text-gray-200 text-white lg:text-2xl md:text-xl text-lg audiowide tracking-wider text-right my-4 lg:w-8/12">
                Gear up for the ultimate winter battlefield. This December,
                experience warfare like never before.
              </h4>
            </div>

            <div className="flex justify-end">
              <p className="lg:text-gray-400 text-white/85 text-right lg:w-8/12">
                Step into the boots of elite soldiers as Call of Duty brings the
                most intense, realistic combat of 2025. Winter Edition promises
                adrenaline-pumping action, new weapons, and seasonal events you{" "}
                <span className="text-success audiowide">can't miss.</span>
              </p>
            </div>
            <div className="flex justify-end my-4">
              <button className="btn btn-success text-black border-3 w-48 border-success  hover:bg-white rounded-md font-semibold transition-colors duration-300">
                Watch Trailer
              </button>
            </div>
          </div>
          <div>
            <div className="md:w-lg w-md absolute lg:-left-20 lg:top-50 lg:flex hidden z-10">
              <img
                src={call}
                alt="Call of Duty Winter"
                className="w-full h-full object-cover lg:brightness-125 brightness-75 drop-shadow-[0_0_30px_rgba(0,255,224,0.4)]"
              />
            </div>
            <div className="md:w-lg w-md absolute 2xl:left-240 left-180 justify-end -top-20 -z-10 lg:flex hidden">
              <img
                src={rob}
                alt="Call of Duty Winter"
                className="w-full h-full object-cover brightness-75 drop-shadow-[0_0_30px_rgba(108,99,255,0.4)]"
              />
            </div>

            <div className="flex lg:flex-row flex-col relative h-[331px] justify-end">
              <video
                src={cod}
                autoPlay
                loop
                muted
                className="lg:w-6/12 h-full object-cover"
              />
              <div
                className="lg:w-84 w-full h-[331px] lg:bg-cover bg-cover bg-no-repeat bg-center lg:flex justify-end items-end relative z-10 hidden"
                style={{ backgroundImage: `url(${gun})` }}
              >
                <div>
                  <button className="btn btn-success text-black border-3 w-32 border-success hover:bg-white font-semibold transition-colors duration-300 cursor-pointer">
                    Full Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpcomingGames;
