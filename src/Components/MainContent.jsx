import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cards from './Cards';
import Filters from './Filters';
import { v4 as uuid } from 'uuid';

export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            showAll: 0,
            male: 0,
            female: 0,
            grand: 0,
            kross: 0,
            explorer: 0,
            visitor: 0,
            pony: 0,
            force: 0,
            eBikes: 0,
            ideal: 0,
            cards: [],
        };
    }

    componentDidMount() {
        fetch('https://json-project3.herokuapp.com/products')
            .then(res => res.json())
            .then(cards => {
                this.setState({
                    cards,
                    showAll: (this.state.showAll = cards.length),
                    male: (this.state.male = cards.filter(
                        product => product.gender === 'MALE'
                    ).length),
                    female: (this.state.female = cards.filter(
                        product => product.gender === 'FEMALE'
                    ).length),
                    grand: (this.state.grand = cards.filter(
                        product => product.brand === 'LE GRAND BIKES'
                    ).length),
                    kross: (this.state.kross = cards.filter(
                        product => product.brand === 'KROSS'
                    ).length),
                    explorer: (this.state.explorer = cards.filter(
                        product => product.brand === 'EXPLORER'
                    ).length),
                    visitor: (this.state.visitor = cards.filter(
                        product => product.brand === 'VISITOR'
                    ).length),
                    pony: (this.state.pony = cards.filter(
                        product => product.brand === 'PONY'
                    ).length),
                    force: (this.state.force = cards.filter(
                        product => product.brand === 'FORCE'
                    ).length),
                    eBikes: (this.state.eBikes = cards.filter(
                        product => product.brand === 'E-BIKES'
                    ).length),
                    ideal: (this.state.ideal = cards.filter(
                        product => product.brand === 'IDEAL'
                    ).length),
                });
            });
    }

    filterArr = (filterName, type) => {
        this.setState({
            cards: this.state.cards.filter(
                product => product[type] === filterName
            ),
        });
        return filterName;
    };

    render() {
        const {
            cards,
            showAll,
            male,
            female,
            grand,
            kross,
            explorer,
            visitor,
            pony,
            force,
            eBikes,
            ideal,
        } = this.state;
        
        return (
            <Row>
                <Filters
                    showAll={showAll}
                    male={male}
                    female={female}
                    grand={grand}
                    kross={kross}
                    explorer={explorer}
                    visitor={visitor}
                    pony={pony}
                    force={force}
                    eBikes={eBikes}
                    ideal={ideal}
                />
                <Col xs={9}>
                    <Row className="pt-3 px-3">
                        {cards.map(({ name, price, image }) => (
                            <Cards
                                key={uuid()}
                                name={name}
                                price={price}
                                image={image}
                            />
                        ))}
                    </Row>
                </Col>
            </Row>
        );
    }
}
