import { cn } from '@/utils/cn';
import featureAsset1 from '@public/images/home-page-7/feature-asset-1.png';
import featureAsset2 from '@public/images/home-page-7/feature-asset-2.png';
import featureAsset3 from '@public/images/home-page-7/feature-asset-3.png';
import featureAsset4 from '@public/images/home-page-7/feature-asset-4.png';
import featureAsset5 from '@public/images/home-page-7/feature-asset-5.png';
import featureAsset6 from '@public/images/home-page-7/feature-asset-6.png';
import featureAssetDark1 from '@public/images/home-page-7/feature-asset-dark-1.png';
import featureAssetDark2 from '@public/images/home-page-7/feature-asset-dark-2.png';
import featureAssetDark3 from '@public/images/home-page-7/feature-asset-dark-3.png';
import featureAssetDark4 from '@public/images/home-page-7/feature-asset-dark-4.png';
import featureAssetDark5 from '@public/images/home-page-7/feature-asset-dark-5.png';
import featureAssetDark6 from '@public/images/home-page-7/feature-asset-dark-6.png';
import Image from 'next/image';
import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface FeaturesProps {
  className?: string;
}

const data = [
  {
    id: 1,
    title: 'Member/Staff Management',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset1,
    darkImage: featureAssetDark1,
  },
  {
    id: 2,
    title: 'Plan Management',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset2,
    darkImage: featureAssetDark2,
  },
  {
    id: 3,
    title: 'Finance Management',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset3,
    darkImage: featureAssetDark3,
  },
  {
    id: 4,
    title: 'Whatsapp Notifications',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset4,
    darkImage: featureAssetDark4,
  },
  {
    id: 5,
    title: 'Lead Management',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset5,
    darkImage: featureAssetDark5,
  },
  {
    id: 6,
    title: 'Automatic Attendence Tracking',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset6,
    darkImage: featureAssetDark6,
  },
];

const Features: FC<FeaturesProps> = ({ className }) => {
  return (
    <section className={cn('bg-white dark:bg-background-6 ', className)}>
      <div className="main-container">
        <div className="text-center mb-8 md:mb-[52px]">
          {/* <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">More Features</span>
          </RevealAnimation> */}
          <RevealAnimation delay={0.2}>
            <h2>
              Managing your gym has
              <br className="hidden md:block" />
              never been easier
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>with our advance tracking system and stunning dashboards</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <Image
                    src={item.lightImage}
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <Image
                    src={item.darkImage}
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
