"use client";

import { EnrollmentGetResponse } from "@/app/api/enrollment/route";
import {
  Button,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { FC } from "react";

export const EnrollmentSection: FC = () => {
  const { isFetching, data, refetch } = useQuery({
    queryKey: ["EnrollmentGet"],
    queryFn: async () => {
      const response = await axios.get<EnrollmentGetResponse>(
        "/api/enrollment"
      );
      return response.data;
    },
  });
  const enrollments = data?.enrollments;

  return (
    <Paper withBorder p="xs">
      <Stack gap="xs">
        <Group justify="space-between">
          <Title order={4}>Enrollment(s)</Title>
          <Button onClick={() => refetch()} size="xs" variant="outline">
            Refresh
          </Button>
        </Group>
        {!isFetching &&
          enrollments &&
          enrollments.map((enrollment) => (
            <Group justify="space-between" key={enrollment.id}>
              <Text key={enrollment.id}>
                {enrollment.studentId} - {enrollment.student.firstName} 👉{" "}
                {enrollment.courseNo} {enrollment.course.title}
              </Text>
              <Text c="gray">
                {dayjs(enrollment.createdAt).format("YYYY/MM/DD HH:mm น.")}
              </Text>
            </Group>
          ))}
        {isFetching && <Loader mx="auto" />}
      </Stack>
    </Paper>
  );
};
