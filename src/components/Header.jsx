import { useState } from 'react';
import harmbuger from '/src/assets/harmbuger.svg';
import cancel from '/src/assets/cancel.png';
import logo from '/src/assets/logo.svg';

const navLink = [
  { title: 'Plans', link: '#' },
  { title: 'Installation', link: '#' },
  { title: 'About', link: '#' },
  { title: 'Client Portal', link: '#' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white flex py-0 lg:py-1 lg:border-b-1 border-b-gray-border z-50">
      <div className=" justify-between items-center py-3 flex w-full lg:py-0 container-padding lg:max-w-[1440px] lg:mx-auto">
        <img className="lg:w-[14rem]" src={logo} alt="" />
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <img className="w-[25px]" src={menuOpen ? cancel : harmbuger} alt="menu" />
        </button>
        <div className="hidden lg:flex gap-4">
          {navLink.map((item, i) => (
            <a className="text-[1.23rem] text-testimonnialText" key={i} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
        <>
          {menuOpen && (
            <div
              className="fixed lg:hidden inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              onClick={() => setMenuOpen(false)}
            />
          )}
          <nav
            className={`
    fixed right-0 left-auto
    top-1/2
    w-[90vw] max-w-[400px] bg-white z-[101] rounded-l-2xl shadow-lg flex flex-col p-8
    transition-transform duration-300 ease-in-out lg:hidden
    ${menuOpen ? 'translate-x-0 -translate-y-1/2' : 'translate-x-full -translate-y-1/2'}
    h-[96svh]
  `}
            style={{ maxWidth: 400 }}
          >
            <button
              className="absolute top-6 right-6 z-[102]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <img className="w-[25px]" src={cancel} alt="close" />
            </button>
            <div className="flex-1 flex flex-col justify-between items-center relative overflow-y-auto w-full">
              <div className="flex flex-col gap-6 mt-22 w-full">
                {navLink.map((item, i) => (
                  <a
                    className="text-xl font-[500] text-blackText"
                    key={i}
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="mb-4 w-full flex justify-center absolute bottom-0 left-0">
                <img src={logo} alt="logo" className="mx-auto" />
              </div>
            </div>
          </nav>
        </>
      </div>
    </header>
  );
}
