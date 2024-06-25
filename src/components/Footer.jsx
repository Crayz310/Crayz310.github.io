const Footer = () => {
	const now = new Date();
	const year = now.getFullYear();

	return (
		<>
			<footer className="text-smoke-white text-sm text-center font-light mt-8 mb-3">
				<h4>© GitProfile | Netlify {year}</h4>
				<a
					href="https://github.com/Crayz310/Crayz310.github.io"
					className="flex flex-row items-center justify-center gap-3 mt-3 hover:opacity-90">
					<img src="/github.svg" alt="Github" width="15" height="15" />
					Source code
				</a>
			</footer>
		</>
	);
};

export default Footer;
