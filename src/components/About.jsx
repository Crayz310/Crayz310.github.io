import PropTypes from 'prop-types';

const About = ({ sectionName, text }) => {
	return (
		<>
			<div className="bg-erie text-smoke-white w-full mt-10 py-4 px-8 flex flex-col items-start justify-center rounded-2xl border-solid border border-jet shadow-xl">
				<h2 className="text-xl text-white font-semibold mb-3 border-b-4 border-violet">
					{sectionName}
				</h2>
				<div className="text-md">{text}</div>
			</div>
		</>
	);
};

About.propTypes = {
	sectionName: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default About;
