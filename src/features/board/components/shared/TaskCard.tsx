import React from 'react'
import { Card, Text, Badge, Button, Group } from '@mantine/core';


interface TaskCardProps {
  taskName: string,
}

const TaskCard = ({ taskName, }: TaskCardProps) => {
  return (
    <Card shadow="sm" p="md" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{taskName}</Text>
        <Badge color="pink" variant="light">
          High
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Task Description
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  )
}

export default TaskCard