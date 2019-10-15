import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Audio extends Component {
	render() {

		const title = this.props.title ? this.props.title : this.props.src;

		return (
			<div className={this.props.className}>
				<audio
					controls={this.props.controls}
					crossOrigin={this.props.crossOrigin}
					loop={this.props.loop}
					muted={this.props.muted}
					autoPlay={this.props.autoPlay}
					preload={this.props.preload}
					id={this.props.id}
					title={title}
				>
					{this.props.audios.map((field) => {
						return <source src={field.audioSource} type={field.type} />
					})}
					{this.props.notSupportedText}
				</audio>
			</div>
		);
	}
}

Audio.propTypes = {
	className: PropTypes.string,
	controls: PropTypes.bool,
	crossOrigin: PropTypes.string,
	muted: PropTypes.bool,
	autoplay: PropTypes.bool,
	loop: PropTypes.bool,
	preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
	id: PropTypes.string,
	title: PropTypes.string,
	audios: PropTypes.arrayOf(
		PropTypes.shape({
			audioSource: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	notSupportedText: PropTypes.string.isRequired
}
