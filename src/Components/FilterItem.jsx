import React from 'react';
import { Badge } from 'react-bootstrap';

export default function FilterItem({ content, numFilter, type }) {
    return (
        <p className="filter-items pb-2" data-type={type}>
            <span>{content}</span>
            <Badge pill>{numFilter}</Badge>
        </p>
    );
}
