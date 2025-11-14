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
      'With an early passion for business strategy and technology, Sathwik focuses on data-driven decision-making, digital transformation, and strategic expansion across sectors. He emphasises transparency, teamwork, and modern leadership, inspiring both young talents and experienced professionals within the SSS Group.\n\n' +
      'His mission is to scale SSS Group into a global business leader while upholding values of integrity, customer-centricity, and sustainable development.',
    tagline: 'Building businesses with vision, innovation, and leadership.',
    location: 'India',
  },

  seo: {
    title: "Sai Sathwik Sadasivapetkar - CEO of SSS Group of Companies",
    description:
      'Official portfolio of Sai Sathwik Sadasivapetkar, 19-year-old entrepreneur and CEO of SSS Group of Companies.',
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

  // Education (optional section for a young CEO)
  education: [
    {
      institution: 'SSS Group Internal Business Leadership Training',
      degree: 'Management & Leadership Development Program',
      year: '2023–2024',
      image: getAsset('images/education/leadership.png'),
      description: ['Focused on strategic planning, financial literacy, operational management, and digital tools for modern business scaling.'],
    },
  ],

  // Certifications (simple, relevant)
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
        'Managing leadership teams and strategic expansions',
      ],
    },
    {
      title: 'Founder',
      cardImage: getAsset('images/experience/startup.png'),
      place: 'Early Ventures',
      time: '(2021 – 2023)',
      desp: [
        'Started small-scale entrepreneurial ventures',
        'Gained experience in sales, branding, and business operations',
      ],
    },
  ],

  // Projects (business-focused)
  projects: [
    {
      title: 'SSS Digital Expansion Initiative',
      cardImage: getAsset('images/project/digital_expansion.png'),
      description:
        'A digitization project focused on improving operational efficiency and customer engagement across all SSS Group business units.',
      Githublink: '',
    },
    {
      title: 'Smart Supply Chain Optimization',
      cardImage: getAsset('images/project/supply_chain.png'),
      description:
        'Designed and supervised implementation of an optimized supply chain workflow to reduce cost and delivery time.',
      Githublink: '',
    },
  ],

  research: [], // Empty — not needed

  books: [], // Remove academic books

  contact: {
    email: 'saisathwik@s3scompany.com',
    linkedin: 'https://www.linkedin.com',
    github: '',
  },
};

export default siteConfig;
