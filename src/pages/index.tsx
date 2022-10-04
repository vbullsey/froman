import type { NextPage } from "next";
import { AboutMe } from "~/components/AboutMe";
import { Contact } from "~/components/Contact";
import { Hero } from "~/components/Hero";
import { Me } from "~/components/Me";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Me />
      <Contact />
      <div className="flex flex-col  md:flex-row justify-between gap-y-8 md:gap-0 md:items-start pt-44"></div>
    </div>
  );
};

export default Home;
