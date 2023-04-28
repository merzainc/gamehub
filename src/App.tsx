import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav' bg='coral'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='blue'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='green'>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
