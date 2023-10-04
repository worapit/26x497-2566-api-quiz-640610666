"use client";
import { MeGetResponse } from "@/app/api/me/route";
import { Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

export const Footer: FC = () => {
  const { data } = useQuery({
    queryKey: ["MeGet"],
    queryFn: async () => {
      const response = await axios.get<MeGetResponse>("/api/me");
      return response.data;
    },
  });

  return (
    <Text c="gray" ta="center">
      {data?.firstName} {data?.lastName} {data?.studentId}
    </Text>
  );
};
