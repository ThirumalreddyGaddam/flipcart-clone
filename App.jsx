import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './components/Cart';
import AdminPage from './Pages/Adminpage';
import DummyPayment from './Pages/DummyPayment'; 
import FashionItems from './components/categories/FashionItems'; 
import BeautyItems from './components/categories/BeautyItems'; 
import ElectronicsItems from './components/categories/ElectronicsItems'; 
import HomeKitchenItems from './components/categories/Home&Kitchen';
import './App.css';


const App = () => {
    return (
        <Router>
            <Navbar />
        
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/dummy-payment" component={DummyPayment} />
                    <Route path="/payment" component={DummyPayment} />
                    <Route path="/electronics" component={ElectronicsItems} />
                    <Route path="/fashion" component={FashionItems} />
                    <Route path="/beauty" component={BeautyItems} />
                    <Route path="/home&kitchen"component={HomeKitchenItems}/>

                </Switch>
            </div>
        </Router>
    );
};

export default App;
