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
  paddingX: "mdx:px-16 px-6",
  paddingY: "mdx:py-16 py-6",
  padding: "mdx:px-16 px-6 mdx:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] mdx:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] mdx:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] mdx:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "mdx:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };

