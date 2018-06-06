import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) =>(
    <span style={{color: "#ae5856"}}>{text}</span>
);

InlineError.PropTypes = {
    text: PropTypes.string.isRuired
}

export default InlineError;