import Code_Camp from "../../assets/Free_Code_Camp_Preview.png";
import IntroClasses from "../../components/Intro_Classes";

export default function Free_Code_Camp() {
  return (
    <IntroClasses
      paragraphText={[
        "Free Code Camp is a self-paced free online academy.",
        "Where you can earn certifications in a variety of coding languages.",
        "Code what you learn to advance to the next lesson.",
        "Explaining the concept(s), giving prompt(s), and the expected answer(s).",
      ]}
      h1={"Free Code Camp"}
      buttonHref={"https://www.freecodecamp.org/"}
      buttonLinkText="Free Code Camp Site"
      imageAlt="image preview of Free Code Camp current website"
      imageSrc={Code_Camp}
    />
  );
}
