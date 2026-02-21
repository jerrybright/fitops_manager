// import Blog from '@/components/homepage-07/Blog';
// import FeatureList from '@/components/homepage-07/FeatureList';
// import Features from '@/components/homepage-07/Features';
// import FinanceIntro from '@/components/homepage-07/FinanceIntro';
// import Hero from '@/components/homepage-07/Hero';
// import Integration from '@/components/homepage-07/Integration';
// import Pricing from '@/components/homepage-07/Pricing';
// import PricingCard from '@/components/homepage-07/PricingCard';
// import TrustedByUsers from '@/components/homepage-07/TrustedByUsers';
// import TrustedByUser from '@/components/homepage-07/TrustedByUsers';
// import WhyChooseUs from '@/components/homepage-07/WhyChooseUs';

// import FooterOne from '@/components/shared/footer/FooterOne';
// import NavbarOne from '@/components/shared/header/NavbarOne';
// import { defaultMetadata } from '@/utils/generateMetaData';
// import { Metadata } from 'next';
// import { Fragment } from 'react';

// export const metadata: Metadata = {
//   ...defaultMetadata,
//   title: 'Jerrish Bright',
// };

// const Homepage07 = () => {
//   return (
//     <Fragment>
//       <NavbarOne
//         className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
//         btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
//       />
//       <main className="bg-background-2 dark:bg-background-5">
//         <Blog />
//         <FeatureList features={[]} />
//         <Features/>
//         <FinanceIntro />
//         <Hero/>
//         <Integration />
//         <Pricing />
//         <PricingCard plan={undefined} delay={0} />
//         <TrustedByUser title={''} description={''}  />
//         <TrustedByUsers title={''} description={''}/>
//         <WhyChooseUs />

        
//         {/* <TimelineIntegration { isAnnual: boolean; setIsAnnual: (isAnnual: boolean) => void; } /> */}
//         {/* <Work  /> */}
//         {/* <HowItWorks />
//         <OurServices />
//         <Faq />
//         <TimelineIntegration />
//         <Testimonial />
//         <Blog />
//         <CTAV1
//           className="dark:bg-background-6 bg-white"
//           badgeClass="hidden"
//           ctaHeading="Build a complete website using the"
//           spanText="assistance"
//           description="Start your free trial today and see your ideas come to life easily and creatively."
//           btnClass="hover:btn-secondary dark:hover:btn-white"
//           ctaBtnText="Get started"
//         /> */}
//       </main>
//       <FooterOne />
//     </Fragment>
//   );
// };
// Homepage07.displayName = 'Homepage07';
// export default Homepage07;

import Herolike from '@/components/homepage-12/Hero'
import Blog from '@/components/homepage-07/Blog';
import Features from '@/components/homepage-07/Features';
import FinanceIntro from '@/components/homepage-07/FinanceIntro';
import Hero from '@/components/homepage-07/Hero';
import Integration from '@/components/homepage-07/Integration';
import Pricing from '@/components/homepage-07/Pricing';
import TrustedByUsers from '@/components/homepage-07/TrustedByUsers';
import WhyChooseUs from '@/components/homepage-07/WhyChooseUs';
import Featuresbento from '@/components/homepage-21/Features'
import Benefits from '@/components/homepage-12/Benefits';
import Testimonial from '@/components/homepage-12/Testimonial';
// import FooterOne from '@/components/shared/footer/FooterOne';
import FooterFour from '@/components/shared/footer/FooterFour'
import NavbarOne from '@/components/shared/header/NavbarOne';
// import NavbarTwo from '@/components/shared/header/NavbarTwo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'FITOPS MANAGER',
};

const Homepage07 = () => {
  return (
    <Fragment>
      <NavbarOne
       //uncomment this for nav1,3,4,5
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />

      <main className="bg-background-2 dark:bg-background-5">
        <Herolike />
        {/* <Hero /> */}
        <Features />
        {/* <Featuresbento /> */}
        <FinanceIntro />
        <Integration />
        <Benefits/>
        <Testimonial />
        <Pricing />

        <TrustedByUsers
          title="Trusted by gyms over TamilNadu"
          description="20+ gyms rely on our platform."
        />

        <WhyChooseUs />
        {/* <Blog /> */}
      </main>

      <FooterFour />
    </Fragment>
  );
};

Homepage07.displayName = 'Homepage07';
export default Homepage07;
