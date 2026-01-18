import DashboardLayout from "../components/layout/DashboardLayout";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <DashboardLayout bg="purple">
      <div className="flex justify-center items-center h-full">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="font-rubik text-7xl md:text-9xl leading-none tracking-tight neon-text">
            <motion.span className="text-white inline-block" initial={{ x:140, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 1.2 }}>TURN THE</motion.span>
            <br />
            <motion.span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)] inline-block" initial={{ x:-140, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 2.2 }}>VOLUME</motion.span>
            <br />
            <motion.span className="text-white inline-block" initial={{ x:140, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 1.2 }}>TO ELEVEN</motion.span>
          </h1>

          <p className="mt-6 text-zinc-300 font-mono tracking-widest text-sm">
            NO RULES. JUST NOISE.
          </p>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
