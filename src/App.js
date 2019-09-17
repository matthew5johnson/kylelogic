import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';

import Main from './components/main';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <div className="demo-big-content">
    <Layout>
      <Header href="/" className="header-color" title="The Crew Fantasy" scroll>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/media">Media</Link>
        </Navigation>
      </Header>
      <Drawer title="The Crew Fantasy">
        <Navigation>
          <a href="/">Home</a>
          <a href="/competitions">Competitions</a>
          <a href="/media">Media</a>
        </Navigation>
      </Drawer>
      
      <Content>
        <div className="page-content" />
        <Main/>
      </Content>
      
      <Footer size="mini">
        <FooterSection type="left" logo="The Crew Fantasy">
          <FooterLinkList>
            <a href="/">Home</a>
            <a href="/competitions">Competitions</a>
            <a href="/media">Media</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </Layout>
    </div>
    </div>
  );
}

export default App;
