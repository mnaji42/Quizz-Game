import React from 'react';
import classes from './BlobButton.module.css'
import { Spinner } from '../Components'

export const BlobButton = (props) => {

	let content = props.children
	const classesBlobBtn = [classes.BlobBtn]

	if (props.spinner === true) {
		content = <Spinner type="simple" color="white" size="small" />
		classesBlobBtn.push(classes.BlobBtnHover)
	}

	if (props.size === 'long') {
		classesBlobBtn.push(classes.BlobBtnLong)
	}

	if (props.font === 'medium') {
		classesBlobBtn.push(classes.BlobBtnMediumFont)
	}

	return (
		<>
		<button disabled={props.spinner} className={classesBlobBtn.join(' ')}>
			{content}
			<span className={classes.BlobBtnInner}>
			<span className={classes.BlobBtnBlobs}>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
				<span className={classes.BlobBtnBlob}></span>
			</span>
			</span>
		</button>
		</>
	);
};

export default BlobButton;