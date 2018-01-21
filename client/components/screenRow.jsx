import React from 'react';


const ScreenRow = (props) => {
	return (
		<div className="screen-row">
			<input type="text" readOnly value={props.value}/>
		</div>
	)
}

ScreenRow.propType = {
	value: React.PropType.string.isRequired
}

export default ScreenRow;