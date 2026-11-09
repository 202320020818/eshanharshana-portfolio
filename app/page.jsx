import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-150px)] flex-col overflow-hidden 2xl:min-h-[calc(100vh-168px)]">
      <div className="container mx-auto flex w-full flex-1 px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px] 2xl:px-12">
        <div className="flex w-full flex-col items-center justify-center gap-8 py-1 sm:py-2 md:gap-10 xl:-mt-6 xl:flex-row xl:items-center xl:justify-between xl:gap-3 xl:py-3 2xl:items-center 2xl:gap-6 2xl:py-5">
          {/* Left - Text */}
          <div className="order-2 max-w-[680px] text-center xl:order-none xl:flex-1 xl:text-left 2xl:max-w-[760px]">
            <span className="mt-2 block text-base sm:mt-3 sm:text-lg xl:mt-4 xl:text-xl 2xl:text-2xl">
              Software Developer
            </span>
            <h1 className="mt-2 text-[30px] leading-[0.88] font-semibold tracking-tight sm:mt-2 sm:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:mt-3 2xl:text-[88px]">
              <span className="block">Hello&nbsp;I&apos;m</span>
              <span className="-mt-1 block text-accent sm:-mt-0.5">
                Eshan Harshana
              </span>
            </h1>
            <p className="mt-4 max-w-sm text-white sm:mx-auto sm:max-w-md sm:text-lg xl:mx-0 xl:mt-5 xl:max-w-lg 2xl:max-w-[720px] 2xl:text-[26px] 2xl:leading-[1.7]">
              I design elegant digital experiences with expertise in a wide
              range of programming languages and technologies.
            </p>
            {/* Button and socials*/}
            <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start 2xl:mt-8 2xl:gap-6">
              <a href="/ESHAN HARSHANA.pdf" download>
                <Button
                  variant="outline"
                  className="flex h-12 items-center gap-2 rounded-full px-5 text-sm uppercase 2xl:h-14 2xl:px-7 2xl:text-base"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div>
                <Social
                  containerStyles="flex items-center gap-4 2xl:gap-5"
                  iconStyles="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent text-base transition-all duration-500 hover:bg-accent hover:text-primary 2xl:h-12 2xl:w-12 2xl:text-lg"
                />
              </div>
            </div>
          </div>
          {/* Right - Image */}
          <div className="order-1 xl:flex xl:w-[340px] xl:flex-none xl:justify-center xl:-ml-10 2xl:w-[440px] 2xl:-ml-20">
            <Photo />
          </div>
        </div>
      </div>
      <div className="pb-1 sm:pb-2">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
