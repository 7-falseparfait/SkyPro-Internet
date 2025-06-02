// import skyProLogo from "/logo.png";
import harmbuger from "/src/assets/harmbuger.svg";
const navLink = [
  { title: "Plans", link: "#" },
  { title: "Installation", link: "#" },
  { title: "About", link: "#" },
  { title: "Client Portal", link: "#" },
];
export function Header() {
  return (
    <header className="flex mx-5 py-2 justify-between items-center lg:max-w-[1440px] lg:mx-auto lg:py-6">
      {/* <img className="w-[10rem] test" src={skyProLogo} alt="skyPro" /> */}
      <p>LOGO</p>
      {/* come back */}
      <img className="lg:hidden" src={harmbuger} alt="menu" />
      <div className="hidden lg:flex gap-4">
        {navLink.map((item, i) => (
          <a
            className="text-[1.23rem] text-testimonnialText"
            key={i}
            href={item.link}
          >
            {item.title}
          </a>
        ))}
      </div>
    </header>
  );
}
