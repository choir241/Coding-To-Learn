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
      text={
        "Note: there are currently two versions of Python that are commonly taught and used -- Python 2, and Python 3. Python 3 is the most recent version, but for a variety of reasons Python 2 still is fairly popular among many developers.  If you're not sure which version to pick, my recommendation would be to pick the resource which looks like the best fit for you, and just use whatever version they're recommending. Luckily, the differences between the two are very minor (at least from the perspective of the beginner), so there's really no difference if you learn using Python 2 vs Python 3.  That said, when working on your own programs, I would always pick Python 3 unless you have good reason to otherwise. The Python community, with the exception of a few holdouts, is moving towards Python 3 and abandoning Python 2."
      }
      h1={"Python"}
    />
  );
}
