import React from 'react';
import { Route, Switch as Routes } from 'react-router-dom';
import Home from './pages/Home';
import FeeInformation from './pages/feeInformation/FeeInformation';
import CompanyInfo from './pages/companyInfo/CompanyInfo';
import Layout from './components/presentation/Layout';
import NavigatorHeader from './components/NavigatorHeader';
import PI from './pages/PI';
import AppDownloadSection from './components/AppDownloadSection';
import Footer from './components/Footer';
import styled from 'styled-components';
import ToS from './pages/ToS';
import Employment from './pages/Employment.js';

const Router = () => {
  return (
    <Routes>
      <Route path='/' exact component={Home}></Route>
      <Route path='/fee' component={FeeInformation}></Route>
      <Route path='/company' component={CompanyInfo}></Route>
      <Route path='/employment' component={Employment}></Route>
      <Route path='/PI' component={PI}></Route>
      <Route path='/ToS' component={ToS}></Route>
    </Routes>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
function App() {
  return (
    <AppContainer>
      <NavigatorHeader />
      <Layout>
        <Router />
      </Layout>
      <AppDownloadSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
