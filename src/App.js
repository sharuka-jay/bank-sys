/* import logo from './logo.svg'; */
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBankComponent from './components/ListBankComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBank from './components/CreateBank';
import ListCustomers from './components/ListCustomers';
import AddCustomer from './components/AddCustomer';
import home from './components/home';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
              
              <Route path="/banks" component={ListBankComponent}></Route>
              <Route path= "/addbanks" component={CreateBank}></Route>
              <Route path="/add" component={CreateBank}></Route>
              <Route path="/customers" component={ListCustomers}></Route>
              <Route path="/addcustomer" component={AddCustomer}></Route>
              <Route path="/bank" component={ListBankComponent}></Route>
              <Route path="/" component={home}></Route>
            </Switch>

          </div>

          <FooterComponent />
      
      </Router>
    </div>

  );
}

export default App;
