import UserProfile from '@/components/UserProfile';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { useEffect } from 'react';
import Tech from '@/components/Tech';
import Footer from '@/components/Footer';
import '@/App.css';

const App = () => {
	const usn = 'Crayz310';
	const about = `👋 Hi, I'm an aspiring web developer with a year of experience in building web applications.

	🔭 I'm currently focusing on frontend development using React and Vue.js. 
	I enjoy creating intuitive and responsive user interfaces.

	🌱 I am constantly learning and growing in the web technology field. I'm currently deepening my knowledge 
	React and Vue, as well as starting to learn server-side rendering and GraphQL.

	💡 I strive to write clean, efficient and maintainable code.

	🤝 I am open for cooperation in interesting projects and always glad to share my experience with other developers. 
	with other developers.

	⚡ Interesting fact: When I'm not writing code, I'm sleeping.....

	📫 Feel free to contact me to discuss projects or just chat about web development!
`;

	useEffect(() => {
		document.title = `${usn} | GitProfile`;
	});

	return (
		<>
			<section id="content" className="px-5 lg:px-16">
				<UserProfile username={usn} />
				<About text={about} />
				<Projects username={usn} />
				<Tech />
				<Footer />
			</section>
		</>
	);
};

export default App;
