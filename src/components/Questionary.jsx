import {
  Box,
  Text,
  Checkbox,
  Textarea,
  TextInput,
  Button,
} from '@mantine/core';

import { Database } from 'tabler-icons-react';

export default function Questionary({ placeholder, label, tasks }) {
  return tasks ? (
    <Box className="p-4 w-full flex flex-col">
      <Text className="font-semibold text-sm mb-2">{label}</Text>
      <Box className="flex">
        <Checkbox size="lg" className="mr-2" />
        <TextInput size="xs" className="w-full" />
      </Box>
      <Button leftIcon={<Database />} className="m-auto mt-4" />
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
