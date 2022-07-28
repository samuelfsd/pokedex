import { Box, Container, Flex, Spacer, Image, ButtonGroup, Button } from '@chakra-ui/react';

import logoPokemon from '../../assets/Logo.svg';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <Container maxW='100%' height='95px' className={styles.container}>
      <Flex justify='space-between' alignItems='center' margin='0 9rem'>
        <Box className={styles.imageContainer}>
          <Image boxSize='100px' alt='logo do pokemon' src={logoPokemon} />
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button>Home</Button>
          <Button>Home</Button>
          <Button>Home</Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};
