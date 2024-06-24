import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUser = async (username) => {
	const response = await axios.get(`https://api.github.com/users/${username}`);

	return response.data;
};

const fetchRepos = async (username) => {
	const response = await axios.get(`https://api.github.com/users/${username}/repos`);

	return response.data;
};

export const useGithubUser = (username) => {
	return useQuery({
		queryKey: ['github-user', username],
		queryFn: () => fetchUser(username),
		enabled: !!username
	});
};

export const useGithubRepos = (username) => {
	return useQuery({
		queryKey: ['github-repos', username],
		queryFn: () => fetchRepos(username),
		enabled: !!username
	});
};
