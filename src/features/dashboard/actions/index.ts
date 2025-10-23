"use server";
import { auth } from "@/auth";
import db from "../../../lib/db";
import { Templates } from "@prisma/client";
import { currentUser } from "@/features/auth/actions";
import { revalidatePath } from "next/cache";

export const createProject = async (data: {
  title: string;
  template: Templates;
  description: string;
  userId: string;
}) => {
  const { title, template, description } = data;

  const user = await currentUser();

  try {
    const project = await db.project.create({
      data: {
        title,
        description,
        template,
        userId: user?.id!,
      },
    });
    return project;
  } catch (error) {
    console.error(error);
  }
};

export const getAllProjectForUser = async () => {
  const user = await currentUser();
  try {
    const allProjects = await db.project.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        starredProjects: {
          where: { userId: user?.id },
          select: { isMarked: true },
        },
      },
    });
    return allProjects;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProjectByid = async (id: string) => {
  try {
    await db.project.delete({
      where: { id },
    });

    revalidatePath("/dashboard");
  } catch (error) {
    console.error(error);
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  try {
    await db.project.update({
      where: { id },
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
};

