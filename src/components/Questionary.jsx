import { useState } from 'react';

import {
  Box,
  Text,
  Checkbox,
  Textarea,
  TextInput,
  Button,
} from '@mantine/core';

import { CirclePlus } from 'tabler-icons-react';

export default function Questionary({ placeholder, label, tasks }) {
  const [tasksList, setTasksList] = useState([
    {
      checked: false,
      value: '',
    },
  ]);

  const handleOnClick = () => {
    setTasksList([
      ...tasksList,
      {
        checked: false,
        value: '',
      },
    ]);
  };

  return tasks ? (
    <Box className="p-4 w-full flex flex-col">
      <Text className="font-semibold text-sm mb-2">{label}</Text>
      {tasksList.map(() => (
        <Box className="flex mb-2">
          <Checkbox size="lg" className="mr-2" />
          <TextInput size="xs" className="w-full" placeholder="Sub task name" />
        </Box>
      ))}
      <Button
        leftIcon={<CirclePlus />}
        className="m-auto mt-1"
        onClick={handleOnClick}
      >
        Add new sub task
      </Button>
    </Box>
  ) : (
    <>
      <Textarea
        className="p-4"
        placeholder={placeholder}
        label={label}
        autosized
        minRows={2}
      />
    </>
  );
}
