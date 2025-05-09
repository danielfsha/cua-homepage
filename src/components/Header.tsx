import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

import NumberFlow from "@number-flow/react";

const Header = () => {
  const [starCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/trycua/cua"
        );
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center justify-center space-x-2">
        <img width={43} height={43} src="./images/cua-logo.svg" />
        <span className="pb-2">trycua</span>
      </div>

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/trycua/cua"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Button variant="default" size="lg" className="pl-[2px] px-3">
            <svg
              className="w-6 h-6 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium">
              <NumberFlow value={starCount} />
            </span>
            <img src="/images/star.png" className="size-5" />
          </Button>
        </a>

        <Button size="icon" variant="secondary">
          <img width={26} height={26} src="./images/moon.svg" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
