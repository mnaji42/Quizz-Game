import React from 'react'
import classes from './Modal.module.css'
import { Icon } from '@iconify/react';
import closeRectangleF from '@iconify/icons-jam/close-rectangle-f';


export const Modal = (props) => {

	return (
		<>
			<div className={classes.ModalContainer}>
	 			<div onClick={props.onClose} className={classes.ModalBackground}></div>
				 <div className={classes.ModalSubContainer}>
					<div className={classes.Modal}>
						<div className={classes.HeaderModal}>
							<div className={classes.ModalTitle}>{props.title}</div>
							<Icon className={classes.IconClose} onClick={props.onClose} icon={closeRectangleF} width="27px" color="#B00020" />
						</div>
						<div className={classes.ContentModal}>
							{props.children}
						</div>
					</div>
				</div>
	 		</div>
		</>
	);
}

export default Modal