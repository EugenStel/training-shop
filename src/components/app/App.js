import { useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { HomePage } from '../../pages/home/HomePage';

import './app.scss';

export const App = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app' data-test-id='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/women'>
          {/* <ProductsPage productType='women' /> */}
        </Route>
        <Route exact path='/men'>
          {/* <ProductsPage productType='men' /> */}
        </Route>
        <Route path='/women/:id'>
          {/* <ProductPage productType='women' /> */}
        </Route>
        <Route path='/men/:id'>
          {/* <ProductPage productType='men' /> */}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
