const Footer = () => {
	const now = new Date();
	const year = now.getFullYear();

	return (
		<>
			<footer className="text-smoke-white text-sm text-center font-light mt-8 mb-3">
				<h4>© GitProfile | Netlify {year}</h4>
			</footer>
		</>
	);
};

export default Footer;
