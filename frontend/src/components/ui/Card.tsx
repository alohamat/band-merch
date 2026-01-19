import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  animate?: boolean;
} & MotionProps;

export default function Card({
  children,
  animate = false,
  ...motionProps
}: CardProps) {
  return (
    <motion.div
      initial={animate ? { y: 40, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 0.8 }}
      {...motionProps}
      className="
        self-start bg-zinc-900
  shadow-[0_0_60px_rgba(239,68,68,0.35)] w-fit h-52 text-white flex items-center rounded-2xl mt-10
      "
    >
      {children}
    </motion.div>
  );
}
