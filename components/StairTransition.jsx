"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed inset-0 z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="pointer-events-none fixed inset-0 bg-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
