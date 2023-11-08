interface Styles {
  paddingX: string;
  paddingY: string;
  padding: string;
  heroHeadText: string;
  heroSubText: string;
  sectionHeadText: string;
  sectionSubText: string;
}

const styles: Styles = {
  paddingX: "px-6 mdx:px-16",
  paddingY: "py-6 mdx:py-16",
  padding: "px-6 py-10 mdx:px-16 mdx:py-16",

  heroHeadText:
    "font-black text-white text-[40px] xs:text-[50px] md:text-[60px] lg:text-[88px] leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium text-[16px] xs:text-[20px] md:text-[26px] lg:text-[30px] leading-[40px]",

  sectionHeadText:
    "text-white font-black text-[30px] xs:text-[40px] mdx:text-[50px] md:text-[60px]",
  sectionSubText:
    "text-secondary uppercase tracking-wider text-[14px] mdx:text-[18px]",
};

export { styles };


