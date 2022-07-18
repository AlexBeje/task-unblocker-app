import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Header() {
  const mobile = useMediaQuery('(min-width: 900px)');

  return (
    <Text
      className={`${
        mobile ? 'text-7xl' : 'text-5xl'
      } text-center font-bold m-8`}
    >
      Idea Generator
    </Text>
  );
}
