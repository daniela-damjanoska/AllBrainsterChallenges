import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Browse from './Components/Browse';
import ArtistPage from './Components/ArtistPage';
import ErrorPage from './Components/ErrorPage';
import ScrollToTop from './Components/ScrollToTop';

class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Browse} />
                            <Route
                                path="/ArtistPage/:id"
                                component={ArtistPage}
                            />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
