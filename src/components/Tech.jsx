import VueLogo from '@/assets/vue.svg';
import PiniaLogo from '@/assets/pinia.svg';
import ReactLogo from '@/assets/react.svg';
import ReactQueryLogo from '@/assets/react-query.svg';
import ReduxLogo from '@/assets/redux.svg';

const Tech = () => {
	return (
		<>
			<div className="bg-erie text-smoke-white w-full mt-8 py-4 px-8 flex flex-col justify-center rounded-2xl border-solid border border-jet shadow-xl">
				<h1 className="text-xl text-white font-semibold mb-5">Tech</h1>
				<div className="flex flex-row flex-wrap items-center justify-center gap-3 overflow-hidden">
					<div className="bg-vite min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src="/vite.svg" alt="Vite" width="25" height="25" />
						<span>Vite</span>
					</div>
					<div className="bg-vue min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src={VueLogo} alt="Vue" width="25" height="25" />
						<span>Vue</span>
					</div>
					<div className="bg-pinia min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src={PiniaLogo} alt="Pinia" width="20" height="20" />
						<span>Pinia</span>
					</div>
					<div className="bg-react min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src={ReactLogo} alt="React" width="25" height="25" />
						<span>React</span>
					</div>
					<div className="bg-query min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src={ReactQueryLogo} alt="React Query" width="25" height="25" />
						<span>React Query</span>
					</div>
					<div className="bg-redux min-w-36 min-h-9 flex flex-row items-center justify-center gap-2 rounded-lg py-0.5">
						<img src={ReduxLogo} alt="Redux" width="25" height="25" />
						<span>Redux</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tech;
