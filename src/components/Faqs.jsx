import { useState } from 'react';
import star from '../assets/star.png';
import { Tags } from './Tags';
const FAQs = [
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
  {
    question: 'What areas does SkyPro currently cover?',
    answer:
      'We currently offer coverage in select areas across Abuja and expanding neighborhoods. You can check availability for your location by contacting our support or visiting our Coverage Checker page.',
  },
];
export function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  function toggleFAQ(index) {
    setOpenIndex(index === openIndex ? null : index);
  }
  return (
    <section className="mt-10 py-4">
      <div className="lg:max-w-[1440px] mx-auto container-padding">
        <Tags
          className="mx-auto"
          icon={
            <img src={star} className="w-4 h-4 flex items-center justify-center" alt="star icon" />
          }
        >
          {' '}
          FAQs
        </Tags>
        <div className="text-center section-spacing">
          <h2 className="mt-6 text-blackText text-2xl">Frequently asked questions</h2>
          <p className="mt-3 mx-auto text-center">
            Frequently asked questions and everything you need to know about SkyPro Internet. Can’t
            find the answer you are looking for? <span>Contact Us</span>
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 mt-9">
            {FAQs.map((faq, index) => (
              <div
                className="px-4 py-7 cursor-pointer border-[0.5px] border-gray-200 rounded-[0.3rem] "
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[#121212] font-[700] text-[0.9rem] lg:text-[1.3rem] leading-[21px]">
                    {faq.question}
                  </h4>
                  <span className="transition-transform duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8"
                        y="3"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#090909"
                        className={`faq-rect-animate ${openIndex === index ? 'open' : 'closed'}`}
                      />
                      <rect x="3" y="8" width="12" height="2" rx="1" fill="#090909" />
                    </svg>
                  </span>
                </div>
                <div className="w-[90%]">
                  {openIndex === index && (
                    <p className="text-left text-[0.9rem] text-black leading-[150%] mt-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
