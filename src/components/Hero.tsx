import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { RetroGrid } from "./magicui/retro-grid";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-8">
          <div className="flex items-center justify-centers space-x-4">
            <img src="/images/ycombinator.svg" width={40} height={40} />
            <p>Backed by Y Combinator</p>
          </div>

          <div className="flex justify-center items-center space-x-2 flex-wrap -mt-2">
            <h1 className="text-7xl text-[#161619] md:text-6xl font-geist-medium">
              Get started with
            </h1>
            <AnimatedText
              text="c/ua"
              className="text-7xl text-[#161619] md:text-6xl font-geist-medium"
            />
          </div>

          <p className="text-gray-500 max-w-sm">
            Run Docker Containers for Computer-Use AI Agents on Apple Silicon.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button size="lg" className="space-x-3 pr-4">
              Book a Call
              <img width={26} height={26} src="/images/calendar.svg" />
            </Button>

            <Button size="lg" variant="secondary" className="space-x-3 pr-4">
              Watch Demos
              <img width={26} height={26} src="/images/play.svg" />
            </Button>
          </div>
        </div>

        {/* Floating Element with Shadow */}
        <div className="relative max-w-lg mx-auto h-80 flex items-center justify-center -my-10">
          {/* background persective grid  */}
          <RetroGrid
            angle={23}
            cellSize={100}
            className="absolute bottom-0 left-[50%] object-cover -translate-x-1/2 w-screen bg-transparent"
          />

          {/* Shadow Element - Expands and retracts */}
          <motion.div
            initial={{ width: 200, height: "30px", opacity: 0.8 }}
            animate={{
              width: [200, 240, 200],
              height: ["20px", "30px", "20px"],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 rounded-full bg-purple-300 blur-xl"
          />

          {/* Floating Box */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img src="/images/cua-logo.svg" width={230} height={230} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
