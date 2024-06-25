import { useEffect } from 'react';
import UserProfile from '@/components/UserProfile';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Tech from '@/components/Tech';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import '@/App.css';

const App = () => {
	const user = 'Crayz310';
	const { t } = useTranslation();

	useEffect(() => {
		document.title = `${user} | GitProfile`;
	});

	return (
		<>
			<section id="content" className="px-5 lg:px-16">
				<UserProfile
					position={t('profile.position')}
					mailText={t('profile.mail')}
					username={user}
				/>
				<About sectionName={t('about.title')} text={t('about.description')} />
				<Projects sectionName={t('projects.title')} username={user} />
				<Tech sectionName={t('tech.title')} />
				<Footer />
			</section>
		</>
	);
};

export default App;
