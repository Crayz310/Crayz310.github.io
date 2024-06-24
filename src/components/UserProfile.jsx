import { useGithubUser } from '@/hooks/useGithubData';
import telegram from '@/assets/telegram.svg';
import mail from '@/assets/mail.svg';

const UserProfile = ({ username }) => {
	const {
		data: user,
		error: userError,
		isLoading: userLoading,
		isSuccess: userSuccess
	} = useGithubUser(username);

	return (
		<>
			{userLoading ? (
				<div className="bg-erie text-smoke-white w-full mt-8 py-4 px-8 flex items-center rounded-2xl border-solid border border-jet shadow-xl">
					<div className="w-[120px] h-[120px] rounded-3xl mr-10 holder" />
					<div className="flex flex-col items-center gap-5">
						<h1 className="text-2xl w-[120px] h-[30px] font-semibold holder"></h1>
						<span className="bg-onyx text-sm text-center py-1 px-2 rounded-[5px]">....</span>
					</div>
				</div>
			) : (
				<>
					{userError ? (
						<div className="bg-erie text-center w-full mt-8 py-4 px-8 flex items-center justify-center rounded-2xl border-solid border border-jet shadow-xl">
							<p className="text-red text-lg">{userError.message}</p>
						</div>
					) : (
						<div className="bg-erie text-smoke-white w-full mt-8 py-4 px-8 flex lg:flex-row flex-col justify-between items-center rounded-2xl border-solid border border-jet shadow-xl">
							<div className="flex items-center">
								<img
									src={user.avatar_url}
									alt="Avatar"
									className="w-[120px] h-[120px] rounded-3xl mr-10"
								/>
								<div className="flex flex-col items-center gap-5">
									<h1 className="text-2xl font-semibold">{user.name}</h1>
									<span className="bg-onyx text-sm text-center py-1 px-2 rounded-[5px]">
										Web Developer
									</span>
								</div>
							</div>

							<span className="w-full h-[1px] m-8 border-solid border border-white opacity-10 lg:hidden"></span>

							<div className="flex flex-row justify-center items-center gap-3 lg:mt-5 lg:self-start">
								<a href="https://t.me/d3vourer" className="flex gap-2 hover:text-smoke-white">
									<img src={telegram} alt="telegram" className="w-[18px]" />
									<p className="text-sm lg:hidden">@d3vourer</p>
								</a>
								<a
									href="mailto:devourerbox@proton.me"
									className="flex gap-2 hover:text-smoke-white">
									<img src={mail} alt="mail" className="w-[18px]" />
									<p className="text-sm lg:hidden">Mail me</p>
								</a>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default UserProfile;
