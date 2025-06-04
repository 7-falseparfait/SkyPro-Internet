import FBicon from '/src/assets/fbicon.png';
import linkIcon from '/src/assets/linkedin.png';
import XIcon from '/src/assets/Twitter.png';

export function Footer() {
  const footerLinks = [
    { title: 'Home Internet', link: '#' },
    { title: 'Business Internet', link: '#' },
    { title: 'Coverage Areas', link: '#' },
    { title: 'Speed Test', link: '#' },
    { title: 'About Us', link: '#' },
    { title: 'Career', link: '#' },
    { title: 'Blog', link: '#' },
  ];
  const contact = [
    { title: 'Email', id: 'info@skypro.ng' },
    { title: 'Call', id: '+2342013306396' },
    { title: 'Whatsapp', id: '+2348081104449' },
    { title: 'location', id: 'Abuja,Nigeria' },
  ];
  const socialLinks = [
    { icon: FBicon, link: '#' },
    { icon: linkIcon, link: '#' },
    { icon: XIcon, link: '#' },
  ];
  return (
    <div>
      <footer className=" bg-footerBg section-spacing lg:pt-65 lg:max-w-[1440px] lg:mx-auto container-padding">
        <div className="lg:flex">
          <div className="mt-10 lg:w-[40%]">
            {' '}
            <p>LOGO</p>
          </div>
          <div className="lg:flex flex-1 justify-between">
            <div className=" flex justify-between lg:flex lg:w-[55%] lg:justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[1.2rem] text-white mb-2">Services</p>
                {footerLinks.slice(0, 4).map((item, i) => (
                  <a className="text-footerLink font-[500]" key={i} href={item.link}>
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1 mr-10">
                <p className="text-[1.2rem] text-white mb-2">Company</p>
                {footerLinks.slice(4, 7).map((item, i) => (
                  <a className="text-footerLink font-[500]" key={i} href={item.link}>
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-7 mb-8 lg:mt-0 lg:mb-0 flex-col flex">
              <p className="text-[1.2rem] text-white font-[500] mb-2">Contact Us</p>
              {contact.map((item, i) => (
                <span className="text-footerLink mb-2 font-[500]" key={i}>
                  {i !== contact.length - 1 ? (
                    <>
                      {item.title}:{' '}
                      <a href="#" className="underline">
                        {item.id}
                      </a>
                    </>
                  ) : (
                    <span className="font-[500]">{item.id}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-gray-50 border-t-1 lg:flex justify-between lg:pt-4">
          <p className="text-trademark place-self-center mt-3">
            © SkyPro Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex gap-4 lg:gap-10 justify-center lg:pr-3">
            {socialLinks.map((item, i) => (
              <a className="mt-4" key={i} href={item.link}>
                <img className="w-[2rem]" src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
