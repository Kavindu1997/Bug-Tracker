import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
    color: "grass" | "amber" | "red";
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN", color: "grass" },
    {
      label: "In-Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      color: "amber",
    },
    { label: "Cloesd Issues", value: closed, status: "CLOSED", color: "red" },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold" color={container.color}>
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
