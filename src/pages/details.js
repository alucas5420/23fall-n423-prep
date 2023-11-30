import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatDetails from '@/components/CatDetails';

export default function Favorites() {
  const appState = useAppState();

  return (
    <>
      <Grid columns={1}>
      <Header as='h1'>Details</Header>
        <Grid.Row columns='5'>
          {appState.favoriteCats.map((cat) => {
            return <CatDetails key={cat.id} src={cat.url} />;
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}
