// import skyProLogo from "/logo.png";
import harmbuger from "/src/assets/harmbuger.svg";

export function Header() {
  return (
    <header className="section-spacing container-padding flex justify-between items-center">
      {/* <img className="w-[10rem] test" src={skyProLogo} alt="skyPro" /> */}
      <p>LOGO</p>
      <img src={harmbuger} alt="menu" />
    </header>
  );
}
