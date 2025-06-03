// import skyProLogo from "/logo.png";
import harmbuger from '/src/assets/harmbuger.svg';
const navLink = [
  { title: 'Plans', link: '#' },
  { title: 'Installation', link: '#' },
  { title: 'About', link: '#' },
  { title: 'Client Portal', link: '#' },
];
export function Header() {
  return (
    <header className="flex mx-5 py-2 lg:py-6 lg:border-b-1 border-b-gray-border lg:mx-0 ">
      <div className="lg:max-w-[1440px] lg:mx-auto justify-between items-center flex w-full container-padding">
        {/* <img className="w-[10rem] test" src={skyProLogo} alt="skyPro" /> */}
        <p>LOGO</p>
        {/* come back */}
        <img className="lg:hidden" src={harmbuger} alt="menu" />
        <div className="hidden lg:flex gap-4">
          {navLink.map((item, i) => (
            <a className="text-[1.23rem] text-testimonnialText" key={i} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
