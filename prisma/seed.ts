import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("start seeding");
  //clear all collections
  await prisma.enrollment.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.student.deleteMany({});

  await prisma.course.createMany({
    data: [
      {
        courseNo: "001101",
        title: "FUNDAMENTAL ENGLISH 1",
      },
      {
        courseNo: "261103",
        title: "BASIC COMPUTER ENGINEERING",
      },
    ],
  });

  await prisma.student.createMany({
    data: [
      {
        studentId: "650610001",
        firstName: "Peanut",
        lastName: "Butter",
      },
      {
        studentId: "650610003",
        firstName: "Winnie",
        lastName: "Pooh",
      },
      {
        studentId: "650610002",
        firstName: "Charlie",
        lastName: "Brown",
      },
    ],
  });

  await prisma.enrollment.createMany({
    data: [
      {
        studentId: "650610001",
        courseNo: "001101",
        createdAt: new Date("2023-06-02T07:23:27.767Z"),
      },
      {
        studentId: "650610001",
        courseNo: "261103",
        createdAt: new Date("2023-10-03T08:23:27.767Z"),
      },
      {
        studentId: "650610002",
        courseNo: "001101",
        createdAt: new Date("2023-09-03T08:23:27.767Z"),
      },
    ],
  });
  console.log("seeding is complete");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
