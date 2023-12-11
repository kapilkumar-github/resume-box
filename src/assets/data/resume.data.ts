type AddressDataType = {};

export type ResumeDataType = {
  name: string;
  designation: string;
  avatar: string;
  address: {
    line1: string;
    line2?: string;
    postalCode: number;
    city: string;
    countryCode: string;
    country: string;
    text?: string;
  };
  [key: string]: undefined | string | {};
};

export const ResumeData: ResumeDataType = {
  name: "Kapil Kumar",
  designation: "Senior Software Engineer",
  address: {
    line1: "22 Rue du Grenier Saint-Lazare",
    postalCode: 75003,
    city: "Paris",
    countryCode: "FRA",
    country: "France",
    text: "22 Rue du Grenier Saint-Lazare\n75003 Paris\nFrance",
  },
  avatar:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
