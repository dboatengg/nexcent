export interface HeroSlideData {
    id:number;
    heading: string;
    text: string;
    btnText:string
  }
  
  const heroData: HeroSlideData[] = [
    {
        id:1,
      heading: "Lessons and insights from 8 years",
      text: "Where to grow your business as a photographer: site or social media?",
      btnText:'Register'
    },
    {
        id:2,
      heading: "Join Our Community",
      text: "Connect with fellow photographers and learn from each other in our vibrant community.",
      btnText:'Join Us'
    },
    {
        id:3,
      heading: "Explore New Horizons",
      text: "Step out of your comfort zone and explore new styles to expand your photography skills.",
      btnText:' Join Us Today'
    }
  ];
  
  export default heroData;
  