import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'


function App() {
    return ( 
        <Router>
            <Header />
            {/* className="py-3" is bootstrap padding */}
            <main className="py-3"> 
                <Container>
                    
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    {/* ? after id makes it optional */}
 
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;