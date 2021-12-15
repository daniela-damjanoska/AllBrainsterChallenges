import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Container className="main">
                    <Header />
                    <MainContent />
                    <Footer />
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
