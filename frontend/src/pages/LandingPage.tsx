import DashboardLayout from "../components/layout/DashboardLayout";
import NirvanaLogo from "../assets/nirvanalogo.jpg";
import HendrixLogo from "../assets/hendrixlogo.jpg";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";

export default function LandingPage() {
  return (
    <DashboardLayout bg="orange">
      <div className="flex flex-col justify-center items-center h-full">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mt-15 mb-25"
        >
          <h1 className="font-rubik text-7xl md:text-9xl leading-none tracking-tight neon-text">
            <motion.span
              className="text-white inline-block"
              initial={{ x: 140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              The
            </motion.span>
            <br />
            <motion.span
              className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)] inline-block"
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.2 }}
            >
              ROCK
            </motion.span>
            <br />
            <motion.span
              className="text-white inline-block "
              initial={{ x: 140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Experience
            </motion.span>
          </h1>

          <p className="mt-6 text-zinc-300 font-mono tracking-widest text-sm">
            NO <span className="text-yellow-300">RULES</span>. JUST{" "}
            <span className="text-red-500">NOISE</span>.
          </p>
        </motion.div>
       <Card>
          <img src={NirvanaLogo} alt="nirvanalogo" className="h-18 xl:h-48 rounded-l-2xl" />
          <div className="self-start">
            <h2 className="font-rubik text-4xl mt-4 ml-4">Nirvana</h2>
            <p className="font-mono text-sm mt-2 ml-4 mr-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, delectus corporis dolore voluptatibus officiis 
            </p>
          </div>
          <button className="bg-linear-to-br from-yellow-500 to-orange-500 h-fit mx-10 p-5 rounded-full cursor-pointer hover:from-yellow-700 hover:to-orange-800">
            SEE PAGE
          </button>
        </Card>
        <Card>
          <img src={HendrixLogo} alt="hendrixlogo" className="h-18 xl:h-48 rounded-l-2xl"/>
          <div className="self-start">
            <h2 className="font-rubik text-4xl mt-4 ml-4">Jimi Hendrix</h2>
            <p className="font-mono text-sm mt-2 ml-4 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error blanditiis asdwd afegfgh adasw fafkj adsf fkdfksl 
            </p>
          </div>
            <button className="bg-linear-to-br from-yellow-500 to-orange-500 h-fit mx-10 p-5 rounded-full cursor-pointer hover:from-yellow-700 hover:to-orange-800">
              SEE PAGE
            </button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
