import React, {useEffect, useState} from 'react';
import classes from './Message.module.css'
import { Icon } from '@iconify/react';
import errorCircle16Regular from '@iconify-icons/fluent/error-circle-16-regular';
import successStandardLine from '@iconify-icons/clarity/success-standard-line';



export const Message = (props) => {

	const [showContainer, setShowContainer] = useState(false)

	useEffect(() => {
		let timer = null
		if (props.message.message !== '') {
			setShowContainer(true)
			timer = setTimeout(() => {setShowContainer(false)}, 7000)
		}

		return () => {
			clearTimeout(timer)
			setShowContainer(classes.false)
		}
	}, [props.message])

	const classContainer = [classes.MessageContainer]
	let icon = <></>

	if (props.message.type === 'success') {
		classContainer.push(classes.MessageContainerSuccess)
		icon = <Icon height="26px" icon={successStandardLine} color="#4BB543" />
	}

	if (props.message.type === 'error') {
		classContainer.push(classes.MessageContainerError)
		icon = <Icon width="26px" icon={errorCircle16Regular} color="#B00020" />
	}

	return (
		<div className={[...classContainer, showContainer ? classes.MessageContainerShow : classes.MessageContainerHide].join(' ')}>
			<div className={classes.IconContainer}>
				{icon}
			</div>
			{props.message.message}
		</div>
	);
};

export default Message;