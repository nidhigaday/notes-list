import * as React from "react";

import CardColumns from "react-bootstrap/CardColumns";

import AppHeader from "./components/app-header";
import PageHeader from "./components/page-header";
import AppContainer from "./components/container";
import AddNewItem from "./components/add-button";
import InfoCard from "./components/card";

class App extends React.Component<AppProps> {
  render() {
    return (
      <div id="App">
        <AppHeader />
        <PageHeader title="Dashboard" />
        <AppContainer>
          <CardColumns>
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
            <InfoCard
              title="sample entry"
              body="this is the body of the card!"
            />
          </CardColumns>
          <AddNewItem />
        </AppContainer>
      </div>
    );
  }
}

export interface AppProps {}

export default App;
