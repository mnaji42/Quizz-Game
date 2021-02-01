import React from 'react';
import classes from './BlobButton.module.css'

export const BlobButton = (props) => {
	return (
		<button className={classes.BlobBtn}>
			{props.children}
			<span className={classes.BlobBtnInner}>
			<span className={classes.BlobBtnBlobs}>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
			</span>
			</span>
		</button>
	);
};

export default BlobButton;