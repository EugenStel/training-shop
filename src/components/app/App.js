import { useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { HomePage } from '../../pages/home/HomePage';
import { ProductsPage } from '../../pages/products/Products';
import { SinglePage } from '../../pages/product/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getErrorByFetch, getLoadingStatus } from '../../redux/products/productsSelectors';
import { fetchProducts } from '../../redux/products/productsActions';
import { Loader } from '../loader/Loader';
import { Error } from '../error/Error'

import './app.scss';

export const App = () => {
  const dispatch = useDispatch()
  // const products = useSelector(getProducts)
  const error = useSelector(getErrorByFetch)
  const loading = useSelector(getLoadingStatus)
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className='app' data-test-id='app'>
      <Header />
      {loading && <Loader />}
      {error && <Error />}

      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/women'>
          <ProductsPage productType='women' />
        </Route>
        <Route exact path='/men'>
          <ProductsPage productType='men' />
        </Route>
        <Route path='/women/:id'>
          <SinglePage productType='women' />
        </Route>
        <Route path='/men/:id'>
          <SinglePage productType='men' />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
