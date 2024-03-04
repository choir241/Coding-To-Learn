import HundredDevs from "../../assets/100_Devs_Preview.png";
import IntroClasses from "../../components/Intro_Classes";

export default function Devs() {
  return (
    <IntroClasses
      paragraphText={[
        "100 Devs is an online agency with a free online academy.",
        "With a supportive online community to help you along the way.",
        "Challenging you with tasks to help you in your journey as an Engineer.",
        "Providing free resources to push your career along the right path.",
      ]}
      h1={"100Devs"}
      buttonHref={"https://100devs.org"}
      buttonLinkText="100 Devs Site"
      imageAlt="image preview of 100 Devs current website"
      imageSrc={HundredDevs}
    />
  );
}
