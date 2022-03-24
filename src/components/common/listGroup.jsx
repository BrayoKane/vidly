import React from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect} = props;

    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    textProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired
}

export default ListGroup;
