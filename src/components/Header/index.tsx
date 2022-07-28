import { Box, Container, Flex, Spacer, Image, ButtonGroup, Button } from '@chakra-ui/react';

import logoPokemon from '../../assets/Logo.svg';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <Container maxW='100%' className={styles.container}>
      <Flex justify='space-around' alignItems='center' margin='0 9rem' gap='2'>
        <Box className={styles.imageContainer} p='2'>
          <Image boxSize='100px' alt='logo do pokemon' src={logoPokemon} />
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Home</Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};
