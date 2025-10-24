import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import call from "../assets/call.jpg";
import rob from "../assets/rob.png";
import gun from "../assets/gun.jpg";
import cod from "../assets/video/cod.mp4";
import MyCountdown from "./MyCountDown";
import { Fade, Slide } from "react-awesome-reveal";

const UpcomingGames = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Container>
        <div className="px-3 relative">
          {/* Header & description */}
          <div>
            <Slide>
              <h2 className="text-secondary lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold uppercase tracking-wider text-right">
                The Must Have Game
              </h2>
            </Slide>
            <Slide direction="right">
              <h2 className="text-success lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold uppercase tracking-wider text-right">
                2025. December Winter
              </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <div className="flex justify-end">
                <h4 className="lg:text-gray-200 text-white lg:text-2xl md:text-xl text-lg audiowide tracking-wider text-right my-4 lg:w-8/12">
                  Gear up for the ultimate winter battlefield. This December,
                  experience warfare like never before.
                </h4>
              </div>

              <div className="flex justify-end">
                <p className="lg:text-gray-400 text-white/85 text-right lg:w-8/12">
                  Step into the boots of elite soldiers as Call of Duty brings
                  the most intense, realistic combat of 2025. Winter Edition
                  promises adrenaline-pumping action, new weapons, and seasonal
                  events you{" "}
                  <span className="text-success audiowide">can't miss.</span>
                </p>
              </div>
            </Fade>

            <div className="flex md:flex-row flex-col justify-end items-center gap-4 my-4">
              <span>
                <MyCountdown />
              </span>
              <a
                className="btn btn-success text-black border-3 w-36 border-success hover:bg-white rounded-md font-semibold transition-colors duration-300"
                href="https://www.youtube.com/watch?v=9txkGBj_trg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Trailer
              </a>
            </div>
          </div>

          {/* Media section with Full Story button untouched */}
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
              <Slide
                direction="up"
                className="lg:w-6/12 w-full h-full shrink-0"
              >
                <video
                  src={cod}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover shadow-md shadow-success"
                />
              </Slide>
              <Slide direction="down">
                <div
                  className="lg:w-84 w-full h-[331px] lg:bg-cover bg-cover bg-no-repeat bg-center lg:flex justify-end relative z-10 hidden shadow-md shadow-success"
                  style={{ backgroundImage: `url(${gun})` }}
                >
                  <div>
                    <button
                      className="btn btn-success text-black border-3 w-28 border-success hover:bg-white font-semibold transition-colors duration-300 cursor-pointer"
                      onClick={openModal} // modal trigger
                    >
                      Full Story
                    </button>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal Section */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal} // overlay click closes modal
            />

            {/* Centered Modal with polymorph & coloring style */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[80%] max-h-[90vh] p-6 bg-white/15 text-white backdrop-blur-2xl shadow-2xl rounded-2xl overflow-y-auto transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.8, opacity: 0, borderRadius: "1rem" }}
              animate={{ scale: 1, opacity: 1, borderRadius: "2xl" }}
              exit={{ scale: 0.8, opacity: 0, borderRadius: "1rem" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-cyan-500 font-bold text-2xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-success audiowide">
                Call of Duty Winter 2025
              </h3>
              <p className="mb-4">
                The ultimate winter battlefield returns! Experience new weapons,
                adrenaline-pumping action, and seasonal events. Join elite
                soldiers in epic combat missions across snowy terrains. Winter
                Edition brings realistic graphics, enhanced AI enemies, and
                multiplayer maps like never before.
              </p>
              <h4 className="font-semibold mb-2 text-cyan-300 audiowide">
                Gameplay Highlights:
              </h4>
              <ul className="list-disc pl-5 space-y-2 marker:text-cyan-400">
                <li>New weapons and gear for tactical advantage</li>
                <li>Seasonal multiplayer events</li>
                <li>Enhanced AI and combat mechanics</li>
                <li>Immersive winter environments</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4 text-cyan-300 audiowide">
                Visuals & Environment:
              </h4>
              <ul className="list-disc pl-5 space-y-2 marker:text-cyan-400">
                <li>Immersive snowy terrains and night combat scenarios</li>
                <li>Cinematic cut scenes and realistic sound effects</li>
                <li>Dynamic maps with interactive elements</li>
              </ul>

              <p className="mt-4 font-semibold text-success text-xl audiowide">
                Gear up, recruit! The battlefield awaits your strategy.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UpcomingGames;
