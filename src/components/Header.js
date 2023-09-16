import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Header = ({ toggleState, handleToggleDarkMode }) => {
	console.log(toggleState);
	let text = <span className='themeText'>Dark Mode</span>

	if(toggleState) text = <span className='themeText custom'>Light Mode</span>

	return (
		<div className='header'>
			<h1>Notes</h1>
			<div className='toggleSwitch'>
				<FormGroup>
					<FormControlLabel control={<Switch size="medium"/>}  
						onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
					/>
				</FormGroup>
				{text}
			</div>
			

			{/* <button
				onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
				className='save'
			>
				Toggle Mode
			</button> */}
		</div>
	);
};

export default Header;
