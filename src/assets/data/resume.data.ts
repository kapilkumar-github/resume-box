type AddressDataType = {};

export type ResumeDataType = {
  basics: {
    intro: string;
    name: string;
    designation: string;
    avatar: string;
    email: string;
    phone: string;
    location: {
      address: string;
      postalCode: string;
      city: string;
      countryCode: string;
      region: string;
    };
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
    [key: string]: undefined | string | {};
  };
  work: {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
    location: string;
    current: boolean;
  }[];
  skills: { name: string; level: string; keywords: string[] }[];
  education?: {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate?: string;
    score: string;
    courses: string[];
    location: string;
  }[];
  interests?: {
    name: string;
    keywords: string[];
  }[];
  [key: string]: undefined | string | {} | [];
};

export const ResumeData: ResumeDataType = {
  basics: {
    intro:
      "As a results-driven and highly skilled Software Developer, I bring over 7 years of practical experience to the table, specializing in the design, development, and implementation of innovative software solutions..",
    name: "John Doe",
    designation: "Programmer",
    avatar: "",
    email: "john@gmail.com",
    phone: "(912) 555-4321",
    url: "https://johndoe.com",
    summary: "A summary of John Doe…",
    location: {
      address: "2712 Broadway St",
      postalCode: "CA 94115",
      city: "San Francisco",
      countryCode: "US",
      region: "California",
    },
    profiles: [
      {
        network: "Linkedin",
        username: "john",
        url: "https://linkedin.com/john",
      },

      {
        network: "GitHub",
        username: "john",
        url: "https://github.com/john",
      },
      {
        network: "OpenSource",
        username: "john",
        url: "https://github.com/john",
      },
      {
        network: "Twitter",
        username: "john",
        url: "https://twitter.com/john",
      },
    ],
  },
  work: [
    {
      organization: "HiLabs",
      position: "Senior Software Developer",
      url: "https://company.com",
      startDate: "2013-01-01",
      current: true,
      summary: `<p>
      <span style="font-family: Helvetica;"><span style="background-color: rgb(244, 244, 244);">Developed and maintained scalable web applications using modern frontend and backend technologies. Collaborated with cross-functional teams to gather and analyze requirements, and translate them into technical solutions. Implemented new features and enhancements, ensuring code quality, performance, and security best practices. <span style="font-weight: bold;">Conducted code reviews</span> to ensure adherence to coding standards and best practices. <br />
      <br />
      Worked closely with UX/UI designers to implement responsive and user-friendly interfaces. Utilized version control systems (e.g., Git) for code management and collaboration. Participated in Agile/Scrum methodologies for project planning, estimation, and execution. Troubleshooted and resolved technical issues in a timely manner to minimize downtime. Provided technical guidance and mentorship to junior developers.</span>
      <br />
      </span></p>`,
      highlights: ["Started the company"],
      location: "Bengaluru",
    },
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ],
  education: [
    {
      institution: "ITM University",
      url: "https://institution.com/",
      area: "Software Development",
      studyType: "Bachelor of Engineering",
      startDate: "2012-09-10",
      endDate: "2016-05-15",
      score: "4.0",
      courses: ["Computer Science"],
      location: "Gwalior",
    },
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon.",
    },
  ],
  certificates: [
    {
      name: "Certificate",
      date: "2021-11-07",
      issuer: "Company",
      url: "https://certificate.com",
    },
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Description…",
    },
  ],
  skills: [
    {
      name: "HTML & CSS, Javascript",
      level: "Master",
      keywords: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Bootstrap, Material UI",
      level: "Master",
      keywords: ["CSS Frameworks", "Bootstrap", "Material UI"],
    },
    {
      name: "Angular, React, Redux",
      level: "Master",
      keywords: ["JS Frameworks", "Angular", "React", "Redux"],
    },
    {
      name: "Node JS & Express",
      level: "Master",
      keywords: ["Node JS", "Express", "Backend Knowledge"],
    },
    {
      name: "Chrome Extension",
      level: "Master",
      keywords: ["Chromium", "Browser Engine", "Web Store", "Extensions"],
    },
    {
      name: "Building, publishing & managing NPM package",
      level: "Master",
      keywords: ["Library Building", "NPM Artifactory", "Frontend packages"],
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker",
    },
  ],
  interests: [
    {
      name: "Open Source Contributions",
      keywords: ["Community Building", "Building Features"],
    },
    {
      name: "Personal Coding Projects",
      keywords: ["Weekend Projects", "Coding"],
    },
    {
      name: "Dota 2",
      keywords: ["MOBA", "Gaming"],
    },
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference…",
    },
  ],
  projects: [
    {
      name: "Project",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      description: "Description...",
      highlights: ["Won award at AIHacks 2016"],
      url: "https://project.com/",
    },
  ],
};
