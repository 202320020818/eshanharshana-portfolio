"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 18,
    text: "Projects Completed",
  },
  {
    num: 25,
    text: "Technologies Worked",
  },
  {
    num: 350,
    text: "Code contributions",
  },
];

const Stats = () => {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-4 xl:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-2 transition-all duration-300 hover:scale-105 hover:text-accent xl:p-4"
            >
              <CountUp
                end={item.num}
                duration={4}
                delay={1}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              {/* Horizontal line */}

              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
