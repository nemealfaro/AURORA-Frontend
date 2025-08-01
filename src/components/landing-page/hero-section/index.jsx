import CTAHeroButton from '../../ui/buttons/CTAHeroButton';
import { heroContent } from '../call-to-action/Content';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#030712] px-6 py-12 overflow-hidden" aria-label="Hero Section">
      
      
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-evenly items-center text-white text-4xl font-light select-none opacity-5 whitespace-pre leading-[6rem]">
        <p className="opacity-[0.15]">AURORA    AURORA    AURORA    AURORA    AURORA    AURORA</p>
        <p className="opacity-[0.15]">AURORA    AURORA    AURORA    AURORA    AURORA    AURORA</p>
        <p className="opacity-[0.15]">AURORA    AURORA    AURORA    AURORA    AURORA    AURORA</p>
        <p className="opacity-[0.15]">AURORA    AURORA    AURORA    AURORA    AURORA    AURORA</p>
      </div>


      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-end text-right gap-4 max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-8">
        <h2 className="flex flex-col gap-2 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span>{heroContent.title.textOne}</span>
          <span>{heroContent.title.textTwo}</span>
        </h2>
        <p className="font-normal mt-3 text-[#D1D5DB] text-lg lg:text-base lg:max-w-[600px]">
          {heroContent.subtitle}
        </p>
        <div className="mt-5 flex flex-wrap justify-end gap-5">
          <CTAHeroButton variant="primary">
            {heroContent.buttons[0].text}
          </CTAHeroButton>
          <CTAHeroButton variant="outline">
            {heroContent.buttons[1].text}
          </CTAHeroButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
