import Language from "../../../components/Language";

export default function PHP() {
  return (
    <Language
      resources={[
        {
          name: "TreeHouse Learn PHP",
          href: "https://teamtreehouse.com/learn-to-code/php",
        },
        {
          name: "learnphponline",
          href: "https://www.learn-php.org/",
        },
        {
          name: "PHP Manual",
          href: "https://www.php.net/manual/en/index.php",
        },
        {
          name: "PHP Tutorial",
          href: "https://www.tutorialspoint.com/php/index.htm",
        },
        {
          name: "PHP for Absolute Beginners Paperback",
          href: "https://www.amazon.com/PHP-Absolute-Beginners-Jason-Lengstorf/dp/1430268158/ref=dp_ob_title_bk",
        },
        {
          name: "PHP Solutions: Dynamic Web Design Made Easy Paperback – January 1, 2010",
          href: "https://www.amazon.com/PHP-Solutions-Dynamic-Design-Made/dp/1430232498/ref=dp_ob_title_bk",
        },
        {
          name: "Learn PHP Full Course for Beginners",
          href: "https://www.youtube.com/watch?v=m52ljs78S24&list=PL0eyrZgxdwhwwQQZA79OzYwl5ewA7HQih&ab_channel=DaniKrossing",
        },
      ]}
      text={
        "Note: While PHP can be very convenient, quick, and easy to use, it's also a language viewed negatively by many programmers. (See PHP: a fractal of bad design). If you do decide to learn PHP and adopt it as your language of choice, just be aware of the fact that people will probably make fun of you at one point or another.  Also, it's important to first learn HTML and CSS before attempting to learn PHP. PHP is a language which attempts to 'extend' and work with HTML, so may not fully make sense if you try and learn it before picking up basic web development."
      }
      h1={"PHP"}
    />
  );
}
