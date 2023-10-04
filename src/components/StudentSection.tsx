"use client";

import { StudentGetResponse } from "@/app/api/student/route";
import {
  Anchor,
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
import { FC, useState } from "react";

export const StudentSection: FC = () => {
  const [seeAll, setSeeAll] = useState(false);
  const { isFetching, data, refetch } = useQuery({
    queryKey: ["StudentGet"],
    queryFn: async () => {
      const response = await axios.get<StudentGetResponse>("/api/student");
      return response.data;
    },
  });
  const students = data?.students ?? [];
  const firstFiveStudents = students.slice(0, 5);
  const computedStudents = seeAll ? students : firstFiveStudents;

  return (
    <Paper withBorder p="xs">
      <Stack gap="xs">
        <Group justify="space-between">
          <Title order={4}>Student(s)</Title>
          <Button
            onClick={() => {
              refetch();
              setSeeAll(false);
            }}
            size="xs"
            variant="outline"
          >
            Refresh
          </Button>
        </Group>
        {!isFetching &&
          computedStudents.map((student) => (
            <Text key={student.studentId}>
              {student.studentId} - {student.firstName} {student.lastName}
            </Text>
          ))}
        {isFetching && <Loader mx="auto" />}
        {!isFetching && students.length > 5 && !seeAll && (
          <Anchor onClick={() => setSeeAll(true)}>See All</Anchor>
        )}
      </Stack>
    </Paper>
  );
};
