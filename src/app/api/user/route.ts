import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../../../../prisma/user/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (email) {
    const user = await getUser(email);
    if (!user) {
      return NextResponse.json(
        { data: "No user found with this emailId" },
        { status: 200 }
      );
    }
    return NextResponse.json({ data: user }, { status: 200 });
  } else {
    // Otherwise, fetch all users
    const users = await getAllUsers();
    return NextResponse.json({ data: users }, { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Create a new user
  if (body) {
    try {
      await createUser(body);
      return NextResponse.json(
        { data: "User created successfully" },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
  return NextResponse.json(
    { data: "Please add the required fields" },
    { status: 500 }
  );
}

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const { email, ...updateData } = body;
  const user = await updateUser(email, updateData);
  return NextResponse.json({ data: user }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (email) {
    try {
      await deleteUser(email);
      return NextResponse.json(
        { message: "User deleted successfully!" },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
  return NextResponse.json({ message: "Email Key Missing" }, { status: 400 });
}
