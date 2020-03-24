import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './views/layout/Layout';
import AddNew from './views/pages/AddNew';
import Home from './views/pages/Home';
import Member from './views/pages/Member';
import Recent from './views/pages/RecentCustomers';
import Search from './views/pages/Search';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/add-new" component={AddNew}></Route>
          <Route path="/recent" component={Recent}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/member/:id" component={Member}></Route>

          <Route path="/" component={Home}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
