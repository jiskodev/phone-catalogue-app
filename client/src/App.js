import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'


import { getPhones } from './actions/phones'
import Home from './pages/Home'
import Admin from './pages/Admin'
import ProductPage from './pages/ProductPage'

function App() {
  const [currentId, setCurrentId] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhones())
  }, [ dispatch])

  return (
    <Router>
    <ScrollToTop />
      <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/admin' exact>
        <Admin currentId={currentId} setCurrentId={setCurrentId} loading={loaded} setLoading={setLoaded} />
      </Route>
      <Route path='/:handle' exact>
        <ProductPage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
