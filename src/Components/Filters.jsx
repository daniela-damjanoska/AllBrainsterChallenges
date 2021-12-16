import React from 'react';
import { Col, Badge } from 'react-bootstrap';

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
    filterGender,
    filterBrand,
    showAllProducts,
    // handleActive,
    isActive,
}) {
    return (
        <Col xs={3}>
            <h2 className="h4 pb-3 pt-4 fw-bold">Filter by</h2>
            <p
                className="filter-items pb-2 active"
                onClick={() => showAllProducts()}
            >
                <span>Show all</span>
                <Badge pill>{showAll}</Badge>
            </p>
            <hr />
            <h3 className="h5 pb-3 py-2 fw-bold">Gender</h3>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                // onClick={() => {
                //     filterGender('MALE'), handleActive();
                // }}
                onClick={() => filterGender('MALE')}
            >
                <span>Male</span>
                <Badge pill>{male}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterGender('FEMALE')}
            >
                <span>Female</span>
                <Badge pill>{female}</Badge>
            </p>
            <hr />
            <h3 className="h5 pb-3 pt-2 fw-bold">Brand</h3>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('LE GRAND BIKES')}
            >
                <span>LE GRAND BIKES</span>
                <Badge pill>{grand}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('KROSS')}
            >
                <span>KROSS</span>
                <Badge pill>{kross}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('EXPLORER')}
            >
                <span>EXPLORER</span>
                <Badge pill>{explorer}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('VISITOR')}
            >
                <span>VISITOR</span>
                <Badge pill>{visitor}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('PONY')}
            >
                <span>PONY</span>
                <Badge pill>{pony}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('FORCE')}
            >
                <span>FORCE</span>
                <Badge pill>{force}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('E-BIKES')}
            >
                <span>E-BIKES</span>
                <Badge pill>{eBikes}</Badge>
            </p>
            <p
                className={
                    isActive ? 'filter-items pb-2 active' : 'filter-items pb-2'
                }
                onClick={() => filterBrand('IDEAL')}
            >
                <span>IDEAL</span>
                <Badge pill>{ideal}</Badge>
            </p>
        </Col>
    );
}
