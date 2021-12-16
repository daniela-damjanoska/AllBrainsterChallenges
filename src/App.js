import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

function App() {
    return (
        <div className="App">
            <Container className="main">
                <Header />
                <MainContent />
                <Footer />
            </Container>
        </div>
    );
}

export default App;
