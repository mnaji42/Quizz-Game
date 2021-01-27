import React from 'react';
import classes from './BubbleEffect.module.css'

export const BubbleEffect = (props) => {

	return (
		<div className={classes.BubbleEffectContainer}>
			{props.children}
			<div className={[classes.Dot, classes.SlideUp, props.animate ? classes.SlideUpActive : ''].join(' ')}></div>
			<div className={[classes.Dot, classes.SlideLeft, props.animate ? classes.SlideLeftActive : ''].join(' ')}></div>
			<div className={[classes.Dot, classes.SlideRight, props.animate ? classes.SlideRightActive : ''].join(' ')}></div>
			<div className={[classes.Dot, classes.SlideDown, props.animate ? classes.SlideDownActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideTopRight, props.animate ? classes.SlideTopRightActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideTopLeft, props.animate ? classes.SlideTopLeftActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomRight, props.animate ? classes.SlideBottomRightActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomLeft, props.animate ? classes.SlideBottomLeftActive : ''].join(' ')}></div>
			
			<div className={[classes.Circle, classes.SlideTopRightSecond, props.animate ? classes.SlideTopRightSecondActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideTopLeftSecond, props.animate ? classes.SlideTopLeftSecondActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomRightSecond, props.animate ? classes.SlideBottomRightSecondActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomLeftSecond, props.animate ? classes.SlideBottomLeftSecondActive : ''].join(' ')}></div>

			<div className={[classes.Circle, classes.SlideTopRightThird, props.animate ? classes.SlideTopRightThirdActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideTopLeftThird, props.animate ? classes.SlideTopLeftThirdActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomRightThird, props.animate ? classes.SlideBottomRightThirdActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomLeftThird, props.animate ? classes.SlideBottomLeftThirdActive : ''].join(' ')}></div>

			<div className={[classes.Circle, classes.SlideTopRightFourth, props.animate ? classes.SlideTopRightFourthActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideTopLeftFourth, props.animate ? classes.SlideTopLeftFourthActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomRightFourth, props.animate ? classes.SlideBottomRightFourthActive : ''].join(' ')}></div>
			<div className={[classes.Circle, classes.SlideBottomLeftFourth, props.animate ? classes.SlideBottomLeftFourthActive : ''].join(' ')}></div>
		</div>
	);
};

export default BubbleEffect;