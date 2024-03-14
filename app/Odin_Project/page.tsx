"use client";
import Odin from "../../assets/Odin_Project_Preview.png";
import IntroClasses from "../../components/Intro_Classes";

export default function Odin_Project() {
  return (
    <IntroClasses
      paragraphText={[
        "Odin Project is an online website for self-taught learners.",
        "With paths varying from HTML to Ruby on Rails.",
        "Open sourced, community driven, and resource rich.",
        "Strategically placed projects to encourage building while learning.",
      ]}
      h1={"Odin Project"}
      buttonHref={"https://www.theodinproject.com/"}
      buttonLinkText="Odin Project Site"
      imageAlt="image preview of 100 Devs current website"
      imageSrc={Odin}
    />
  );
}
