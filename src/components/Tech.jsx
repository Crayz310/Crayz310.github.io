import VueLogo from '@/assets/vue.svg';
import PiniaLogo from '@/assets/pinia.svg';
import ReactLogo from '@/assets/react.svg';
import ReactQueryLogo from '@/assets/react-query.svg';
import ReduxLogo from '@/assets/redux.svg';
// import ViteLogo from '@/public/vite.svg';

const Tech = () => {
	return (
		<>
			<div className="bg-erie text-smoke-white w-full mt-8 py-4 px-8 flex flex-col justify-center rounded-2xl border-solid border border-jet shadow-xl">
				<h1 className="text-xl text-white font-semibold mb-5">Tech</h1>
				<div className="flex flex-row justify-center lg:gap-5 items-center overflow-hidden">
					<img src="/vite.svg" alt="Vite" className="w-[48px]" />
					<img src={VueLogo} alt="VueLogo" className="w-[48px]" />
					<img src={PiniaLogo} alt="PiniaLogo" className="w-[40px]" />
					<img src={ReactLogo} alt="ReactLogo" className="w-[48px]" />
					<img src={ReactQueryLogo} alt="ReactQueryLogo" className="w-[48px]" />
					<img src={ReduxLogo} alt="ReduxLogo" className="w-[53px]" />
				</div>
			</div>
		</>
	);
};

export default Tech;
