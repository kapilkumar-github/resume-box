import prisma from "../prisma";

// READ
export const createDefaultResume = async (userId: string) => {
  // Check if user has any default resume
  const resume = await prisma.resume.findFirst({
    where: {
      userId,
      default: true,
    },
  });

  if (resume) return "Default Resume Exists!!";
  return "Start Creating Default Resume";
};
