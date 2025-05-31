import FBicon from "/src/assets/fbicon.png";
import linkIcon from "/src/assets/linkedin.png";
import XIcon from "/src/assets/Twitter.png";

export function Footer() {
  const footerLinks = [
    { title: "Home Internet", link: "#" },
    { title: "Business Internet", link: "#" },
    { title: "Coverage Areas", link: "#" },
    { title: "Speed Test", link: "#" },
    { title: "About Us", link: "#" },
    { title: "Career", link: "#" },
    { title: "Blog", link: "#" },
  ];
  const contact = [
    { title: "Email", id: "info@skypro.ng" },
    { title: "Call", id: "+2342013306396" },
    { title: "Whatsapp", id: "+2348081104449" },
    { title: "location", id: "Abuja,Nigeria" },
  ];
  const socialLinks = [
    { icon: FBicon, link: "#" },
    { icon: linkIcon, link: "#" },
    { icon: XIcon, link: "#" },
  ];
  return (
    <footer className="container-padding bg-footerBg section-spacing">
      <div className="border-b-[0.5px] border-b-primary pb-7">
        <div className="mt-10">
          {" "}
          <p>LOGO</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[1.2rem] text-white mb-2">Support</p>
            {footerLinks.slice(0, 4).map((item, i) => (
              <a
                className="text-footerLink font-[500]"
                key={i}
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1 mr-10">
            <p className="text-[1.2rem] text-white mb-2">Company</p>
            {footerLinks.slice(4, 7).map((item, i) => (
              <a
                className="text-footerLink font-[500]"
                key={i}
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-7">
          <p className="text-[1.2rem] text-white mb-2">Contact Us</p>
          {contact.map((item, i) => (
            <p className="text-footerLink font-[500] mb-2" key={i}>
              {i !== contact.length - 1 ? (
                <>
                  {item.title}: <span className="underline">{item.id}</span>
                </>
              ) : (
                <span>{item.id}</span>
              )}
            </p>
          ))}
        </div>
      </div>
      <p className="text-trademark place-self-center mt-3">
        © SkyPro Copyright 2024. All Rights Reserved.
      </p>
      <div className="flex gap-4 justify-center">
        {socialLinks.map((item, i) => (
          <a className="mt-4" key={i} href={item.link}>
            <img className="w-[2rem]" src={item.icon} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}
