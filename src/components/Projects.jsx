import PropTypes from 'prop-types';
import { useGithubRepos } from '@/hooks/useGithubData';
import Book from '@/assets/book.svg';

const Projects = ({ sectionName, username }) => {
	const { data: repos, error: reposError, isLoading: reposLoading } = useGithubRepos(username);

	return (
		<>
			<div className="bg-erie text-white w-full mt-8 py-4 px-8 flex flex-col justify-center rounded-2xl border-solid border border-jet shadow-xl">
				<h1 className="text-xl font-semibold mb-5">{sectionName}</h1>
				{reposLoading ? (
					<div className="bg-dark-erie h-12 mb-5 py-2 px-5 flex flex-row items-center gap-5 rounded-xl holder"></div>
				) : (
					<>
						{reposError ? (
							<p className="text-red">{reposError.message}</p>
						) : (
							repos.map((repo) => (
								<a key={repo.id} href={repo.html_url}>
									<div className="bg-dark-erie mb-5 py-2 px-5 flex flex-row items-center gap-5 rounded-xl">
										<img src={Book} alt="repo" />
										<div className="flex flex-col justify-center">
											<h3 className="text-xl">{repo.name}</h3>
											<p className="text-sm text-smoke-white">{repo.description}</p>
										</div>
									</div>
								</a>
							))
						)}
					</>
				)}
			</div>
		</>
	);
};

Projects.propTypes = {
	sectionName: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};

export default Projects;
