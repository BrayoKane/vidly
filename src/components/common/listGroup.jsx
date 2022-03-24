import React from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, onItemSelect} = props;

    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item[valueProperty]} className="list-group-item">
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    textProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired
}

export default ListGroup;
