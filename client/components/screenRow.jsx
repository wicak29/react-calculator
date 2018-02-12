import React from 'react';
import PropTypes from 'prop-types';


const ScreenRow = (props) => {
	return (
		<div className="screen-row">
			<input type="text" readOnly value={props.value}/>
		</div>
	)
}

ScreenRow.PropTypes = {
  	value: React.PropTypes.string.isRequired
}

export default ScreenRow;