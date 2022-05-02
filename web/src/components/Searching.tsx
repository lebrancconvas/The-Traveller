import React from 'react';
import {TextField} from '@mui/material';
import {Box} from '@mui/system';

const Searching = () => {
	return(
		<div>
			<Box m="auto">
				<TextField>
					<input type="text" placeholder="Search" />
				</TextField>
			</Box>
		</div>
	)
}

export default Searching;