import React from 'react';
import { Col } from 'react-bootstrap';
import FilterItem from './FilterItem';

export default function Filters({
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
}) {
    return (
        <Col xs={3}>
            <h2 className="h4 pb-3 pt-4 fw-bold">Filter by</h2>
            <FilterItem
                content={'Show all'}
                numFilter={showAll}
                data-type={'all'}
            />
            <hr />
            <h3 className="h5 pb-3 py-2 fw-bold">Gender</h3>
            <FilterItem
                content={'Male'}
                numFilter={male}
                data-type={'gender'}
            />
            <FilterItem
                content={'Female'}
                numFilter={female}
                data-type={'gender'}
            />
            <hr />
            <h3 className="h5 pb-3 pt-2 fw-bold">Brand</h3>
            <FilterItem
                content={'LE GRAND BIKES'}
                numFilter={grand}
                data-type={'brand'}
            />
            <FilterItem
                content={'KROSS'}
                numFilter={kross}
                data-type={'brand'}
            />
            <FilterItem
                content={'EXPLORER'}
                numFilter={explorer}
                data-type={'brand'}
            />
            <FilterItem
                content={'VISITOR'}
                numFilter={visitor}
                data-type={'brand'}
            />
            <FilterItem content={'PONY'} numFilter={pony} data-type={'brand'} />
            <FilterItem
                content={'FORCE'}
                numFilter={force}
                data-type={'brand'}
            />
            <FilterItem
                content={'E-BIKES'}
                numFilter={eBikes}
                data-type={'brand'}
            />
            <FilterItem
                content={'IDEAL'}
                numFilter={ideal}
                data-type={'brand'}
            />
        </Col>
    );
}
