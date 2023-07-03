import prisma from "../prisma";
import { User } from "./user.type";

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};

// CREATE
export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

// UPDATE
export const updateUser = async (email: string, updateData: User) => {
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (email: string) => {
  console.log(email)
  const user = await prisma.user.delete({
    where: {
      email,
    },
  });
  console.log(user)
  return user;
};
