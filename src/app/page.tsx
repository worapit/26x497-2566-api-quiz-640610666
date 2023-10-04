import { AddStudentSection } from "@/components/AddStudentSection";
import { EnrollmentSection } from "@/components/EnrollmentSection";
import { Footer } from "@/components/Footer";
import { StudentSection } from "@/components/StudentSection";
import { Container, Stack, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="sm">
      <Stack gap="lg">
        <Title ta="center" fs="italic" c="violet">
          Course Enrollment
        </Title>
        <StudentSection />
        <AddStudentSection />
        <EnrollmentSection />
        <Footer />
      </Stack>
    </Container>
  );
}
