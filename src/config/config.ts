// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Sai Sathwik Sadasivapetkar',
    title: 'CEO | SSS Group of Companies',
    image: getAsset('images/profile.png'),
    description:
      'Sai Sathwik Sadasivapetkar is a dynamic young entrepreneur and the Chief Executive Officer of SSS Group of Companies, leading the organization at just 19 years of age. Sathwik is known for his vision, energy, and commitment to innovation, driving rapid growth and strong organizational culture within the company.\n\n' +
      'With an early passion for business strategy and technology, Sathwik focuses on data-driven decision-making, digital transformation, and strategic expansion across sectors. His mission is to scale SSS Group into a global business leader while upholding values of integrity, customer-centricity, and sustainable development.',
    tagline: 'Building businesses with vision, innovation, and leadership.',
    location: 'India',
  },

  seo: {
    title: 'Sai Sathwik Sadasivapetkar - CEO of SSS Group of Companies',
    description:
      'Official portfolio of Sai Sathwik Sadasivapetkar, a 19-year-old entrepreneur and CEO of SSS Group of Companies.',
  },

  animatedText: ['Entrepreneur', 'CEO', 'Innovator', 'Business Leader'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Companies', url: '/companies' },
    { name: 'Projects', url: '/projects' },
    { name: 'Media', url: '/media' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [
    {
      title: 'Leadership Lessons at 19',
      url: getAsset('static_page/leadership_blog.html'),
    },
  ],

  // Optional Education Section
  education: [
    {
      institution: 'SSS Group Leadership Training Program',
      degree: 'Management & Leadership Development',
      year: '2023–2024',
      image: getAsset('images/education/leadership.png'),
      description: [
        'Focused on strategic planning, financial literacy, operational management, and business scaling.',
      ],
    },
  ],

  // Certifications Section
  certifications: [
    {
      title: 'Entrepreneurship Fundamentals',
      file: getAsset('images/education/Certifications/entrepreneurship_fundamentals.pdf'),
    },
    {
      title: 'Business Strategy & Operations',
      file: getAsset('images/education/Certifications/business_strategy.pdf'),
    },
  ],

  // Experience
  experience: [
    {
      title: 'Chief Executive Officer',
      cardImage: getAsset('images/experience/sss_group_logo.png'),
      place: 'SSS Group of Companies',
      time: '(2023 – Present)',
      desp: [
        'Leading business operations across multiple verticals',
        'Driving digital transformation & modernization',
        'Managing senior leadership teams and strategic growth',
      ],
    },
    {
      title: 'Founder',
      cardImage: getAsset('images/experience/startup.png'),
      place: 'Early Entrepreneurial Ventures',
      time: '(2021 – 2023)',
      desp: [
        'Started small-scale business ventures',
        'Hands-on experience with branding, sales, and operations',
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: 'SSS Digital Expansion Initiative',
      cardImage: getAsset('images/project/digital_expansion.png'),
      description:
        'Digitization project focused on improving efficiency and customer engagement across SSS Group.',
      Githublink: '',
    },
    {
      title: 'Smart Supply Chain Optimization',
      cardImage: getAsset('images/project/supply_chain.png'),
      description:
        'Designed an optimized supply chain workflow to reduce costs and delivery times.',
      Githublink: '',
    },
  ],

  // Empty sections with forced typing to avoid "never[]" errors
  research: [] as any[],
  books: [] as any[],

  contact: {
    email: 'saisathwik@s3scompany.com',
    linkedin: 'https://www.linkedin.com',
    github: '',
  },
};

export default siteConfig;
