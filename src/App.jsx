import UserProfile from '@/components/UserProfile';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { useEffect } from 'react';
import Tech from '@/components/Tech';
import '@/App.css';

const App = () => {
	const usn = 'Crayz310';
	const about =
		"I'm Dave, a junior web developer with nearly a year of experience. My passion lies in crafting dynamic and responsive web applications using technologies like React and Vue. I enjoy tackling challenges and continuously expanding my skills in the ever-evolving world of web development. Let's connect and collaborate on exciting projects!";
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
			</section>
		</>
	);
};

export default App;
