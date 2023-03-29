import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, BackgroundImage } from '@mantine/core';


export default function Home() {
  return (
    <BackgroundImage
        src="logo"
      >
    <a>Home page</a>
    </BackgroundImage>
  );
}