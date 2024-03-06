import Language from "../../../components/Language";

export default function Python() {
  return (
    <Language
      resources={[
        {
          name: "Automate the Boring Stuff with Python",
          href: "https://automatetheboringstuff.com/",
        },
        {
          name: "Python Programming MOOC 2022",
          href: "https://programming-22.mooc.fi/",
        },
        {
          name: "A Gentle Introduction To Programming Using Python",
          href: "https://ocw.mit.edu/courses/6-189-a-gentle-introduction-to-programming-using-python-january-iap-2011/",
        },
        {
          name: "Programming for Everybody (Getting Started with Python)",
          href: "https://www.coursera.org/learn/python",
        },
        { name: "Invent With Python", href: "https://inventwithpython.com/" },
        {
          name: "Team Treehouse Learn Python",
          href: "https://teamtreehouse.com/learn-to-code/python",
        },
        { name: "learnpython", href: "https://learnpython.org/" },
        {
          name: "How to Think Like a Computer Scientist",
          href: "https://www.openbookproject.net/thinkcs/python/english2e/",
        },
        { name: "Dive Into Python 3", href: "https://diveintopython3.net/" },
      ]}
      h1={"Python"}
    />
  );
}
