export interface IItemOnboarding {
  id: number;
  title: string;
  description: string;
  image: number;
}

export default [
  {
    id: 1,
    title: 'We provide high quality products for you',
    description: 'We help you finding the best partners for work',
    image: require('../../assets/images/onboarding1.jpg'),
  },
  {
    id: 2,
    title: 'Your satisfaction is our top priority',
    description: 'We help you finding the best partners for work',
    image: require('../../assets/images/onboarding2.jpg'),
  },
  {
    id: 3,
    title: "Let's fullfill your daily needs with Evira right now",
    description: 'We help you finding the best partners for work',
    image: require('../../assets/images/onboarding3.jpg'),
  },
  {
    id: 4,
    title: 'Your dream company or job are one click far from you',
    description: 'We help you finding the best partners for work',
    image: require('../../assets/images/onboarding4.jpg'),
  },
];
