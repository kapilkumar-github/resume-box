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
  skills: { name: string; level: string; keywords: string[] }[];
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
      name: "Company",
      position: "President",
      url: "https://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description…",
      highlights: ["Started the company"],
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
      institution: "University",
      url: "https://institution.com/",
      area: "Software Development",
      studyType: "Bachelor",
      startDate: "2011-01-01",
      endDate: "2013-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
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
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
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
