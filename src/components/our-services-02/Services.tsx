import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import balanceDark from '@public/images/home-page-10/balance-dark.png';
import balance from '@public/images/home-page-10/balance.png';
import controlCard from '@public/images/home-page-10/control-card.png';
import dailyPaymentDark from '@public/images/home-page-10/daily-payment-dark.png';
import dailyPayment from '@public/images/home-page-10/daily-payment.png';
import earningDark from '@public/images/home-page-10/earning-dark.png';
import earning from '@public/images/home-page-10/earning.png';
import revenueDark from '@public/images/home-page-10/revenue-dark.png';
import revenue from '@public/images/home-page-10/revenue.png';
import timeIncrease from '@public/images/home-page-10/time-increase.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-32 lg:pb-44 xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-5 mb-[70px] text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Features your gym needs today &amp; as it grow</h2>
          </RevealAnimation>
        </div>
        <div className="space-y-[42px] flex flex-wrap gap-4">
          <RevealAnimation delay={0.4}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Attendence tracking</h3>
                      <p className="max-w-[410px] w-full">
                        Automatically record member check-ins and monitor daily attendance in real time. Get clear visibility of active members and peak gym hours without manual registers.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/big-data-consulting"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[233px] w-full rounded-2xl overflow-hidden">
                      <Image src={timeIncrease} alt="time increase" className="w-full" />
                    </figure>
                    <figure className="max-w-[350px] w-full rounded-[20px] overflow-hidden">
                      <Image src={controlCard} alt="control car" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[326px] max-h-[317px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[255px] max-h-[178px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={balance} alt="balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Whatsapp notifications</h3>
                      <p className="max-w-[493px] w-full">
                        Send instant reminders for renewals, offers, and announcements directly to member's WhatsApp. Improve engagement and reduce missed payments effortlessly.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/machine-learning-and-ai"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Member &amp; plan Management</h3>
                      <p className="max-w-[380px] w-full">
                        Create member profiles, assign plans, and track subscriptions with ease. Manage renewals, expiries, and upgrades from a single organized system.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/business-analysis"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start gap-8">
                    <figure className="max-w-[350px] max-h-[345px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={earning} alt="earning" className="w-full h-full object-cover dark:hidden" />
                      <Image src={earningDark} alt="earning" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="max-w-[286px] max-h-[190px] h-full w-full rounded-2xl overflow-hidden">
                        <Image
                          src={dailyPayment}
                          alt="daily payment"
                          className="w-full h-full object-cover dark:hidden"
                        />
                        <Image
                          src={dailyPaymentDark}
                          alt="daily payment"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex -space-x-3.5 cursor-pointer">
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="inline-block size-11 rounded-full relative z-0 ring-4 ring-white bg-ns-green"
                              src={avatar3}
                              alt="Avatar 3"
                            />
                            <div className="inline-flex items-center relative z-10 justify-center size-11 bg-ns-green rounded-full ring-4 ring-white text-secondary/80 text-tagline-3 font-medium">
                              99+
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                            <p className="text-tagline-2 font-normal">Customers across the globe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start -space-x-20">
                    <figure className="max-w-[408px] w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[225px] w-full rounded-2xl overflow-hidden mt-4">
                      <Image src={balance} alt="balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Lead Management</h3>
                      <p className="max-w-[493px] w-full">
                        Capture new enquiries, follow up with prospects, and convert leads into active members. Keep track of every potential customer without losing opportunities.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/cloud-integration"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="space-y-[42px] flex flex-wrap gap-4">
          <RevealAnimation delay={0.4}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Finance &amp; staff management</h3>
                      <p className="max-w-[410px] w-full">
                        View revenue, attendance, and performance metrics instantly through visual reports. Make informed business decisions using live analytics and insights.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/big-data-consulting"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[233px] w-full rounded-2xl overflow-hidden">
                      <Image src={timeIncrease} alt="time increase" className="w-full" />
                    </figure>
                    <figure className="max-w-[350px] w-full rounded-[20px] overflow-hidden">
                      <Image src={controlCard} alt="control car" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[326px] max-h-[317px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[255px] max-h-[178px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={balance} alt="balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Real-time Dashboard</h3>
                      <p className="max-w-[493px] w-full">
                        View revenue, attendance, and performance metrics instantly through visual reports. Make informed business decisions using live analytics and insights.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/machine-learning-and-ai"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Bio-metric integration</h3>
                      <p className="max-w-[380px] w-full">
                        Integrate fingerprint or face scan devices for secure member entry. Eliminate manual attendance and prevent unauthorized access to your gym.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/business-analysis"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start gap-8">
                    <figure className="max-w-[350px] max-h-[345px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={earning} alt="earning" className="w-full h-full object-cover dark:hidden" />
                      <Image src={earningDark} alt="earning" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="max-w-[286px] max-h-[190px] h-full w-full rounded-2xl overflow-hidden">
                        <Image
                          src={dailyPayment}
                          alt="daily payment"
                          className="w-full h-full object-cover dark:hidden"
                        />
                        <Image
                          src={dailyPaymentDark}
                          alt="daily payment"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex -space-x-3.5 cursor-pointer">
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="inline-block size-11 rounded-full relative z-0 ring-4 ring-white bg-ns-green"
                              src={avatar3}
                              alt="Avatar 3"
                            />
                            <div className="inline-flex items-center relative z-10 justify-center size-11 bg-ns-green rounded-full ring-4 ring-white text-secondary/80 text-tagline-3 font-medium">
                              99+
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                            <p className="text-tagline-2 font-normal">Customers across the globe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start -space-x-20">
                    <figure className="max-w-[408px] w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[225px] w-full rounded-2xl overflow-hidden mt-4">
                      <Image src={balance} alt="balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Online Backup</h3>
                      <p className="max-w-[493px] w-full">
                        Your gym data is safely stored in the cloud with automatic backups. Access information anytime while ensuring protection against data loss.
                      </p>
                    </div>
                    <div>
                      {/* <LinkButton
                        href="/our-services/cloud-integration"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read more
                      </LinkButton> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
