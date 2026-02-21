import image from '@public/images/home-page-2/about-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServicesV2 = () => {
  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <Image src={image} alt="about bg" className="w-full h-full object-cover" />
            </div>
            <div className="py-14 px-6 md:px-11 grid max-lg:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px]">
                <h5 className="text-accent mb-8">
                  Run your gym smoothly with one powerful management platform.
                </h5>
                <LinkButton href="/pricing-01" className="btn btn-md hover:btn-primary btn-accent">
                  Start Free Trial
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-5">
                  <li className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                        fill="#FCFCFC"
                        fillOpacity="0.17"
                      />
                      <path
                        d="M14.125 7.375L8.875 12.6248L6.25 10"
                        stroke=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-accent"
                      />
                    </svg>
                    <span className="text-accent">Set up your gym system quickly with an easy, user-friendly interface.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                        fill="#FCFCFC"
                        fillOpacity="0.17"
                      />
                      <path
                        d="M14.125 7.375L8.875 12.6248L6.25 10"
                        stroke=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-accent"
                      />
                    </svg>
                    <span className="text-accent">Track member renewals and payments to improve your monthly revenue.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                        fill="#FCFCFC"
                        fillOpacity="0.17"
                      />
                      <path
                        d="M14.125 7.375L8.875 12.6248L6.25 10"
                        stroke=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-accent"
                      />
                    </svg>
                    <span className="text-accent">Automate daily tasks like attendance, reminders, and billing.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                        fill="#FCFCFC"
                        fillOpacity="0.17"
                      />
                      <path
                        d="M14.125 7.375L8.875 12.6248L6.25 10"
                        stroke=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-accent"
                      />
                    </svg>
                    <span className="text-accent"> Built specifically for gyms, fitness studios, and personal trainers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ServicesV2;
