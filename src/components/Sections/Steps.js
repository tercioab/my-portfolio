import { FaSuitcase, FaBook } from "react-icons/fa";

export default function Steps() {
	return (
		<section>
			<div class='px-4 mx-auto max-w-screen-xl py-12 '>
				<h1 class='mb-8 font-extrabold tracking-tight leading-none text-slate-900 text-4xl'>
					Experiencia e educação
				</h1>
				<ol class='relative text-slate-500 border-l border-slate-600'>
					<li class='mb-5 ml-6 '>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-white text-white'>
							<FaBook />
						</span>
						<h3 class='font-medium leading-tight'>Bachelor degree, Computer Science</h3>
						<p class='text-sm'>Jun 2023 - Jun 2027</p>
					</li>

					<li class='mb-5 ml-6'>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-sky-400 rounded-full -left-4 ring-4 ring-white text-white'>
							<FaSuitcase />
						</span>
						<h3 class='font-medium leading-tight'>Desenvolvedor full stack</h3>
						<p class='text-sm'>Jun 2022 - Present</p>
					</li>

					<li class='mb-5 ml-6'>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-white text-white'>
							<FaBook />
						</span>
						<h3 class='font-medium leading-tight'>Ensino Técnico, Desenvolvimento Web</h3>
						<p class='text-sm'>Apr 2022 - Apr 2023</p>
					</li>

					<li class='mb-5 ml-6'>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-sky-400 rounded-full -left-4 ring-4 ring-white text-white'>
							<FaSuitcase />
						</span>
						<h3 class='font-medium leading-tight'>
							Especialista em Criação de Landing Pages
						</h3>
						<p class='text-sm'>Feb 2021 - Apr 2022 </p>
					</li>

					<li class='mb-5 ml-6'>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-sky-400 rounded-full -left-4 ring-4 ring-white text-white '>
							<FaSuitcase />
						</span>
						<h3 class='font-medium leading-tight'>Gerente De Mídias Sociais</h3>
						<p class='text-sm'>feb 2018 feb 2019</p>
					</li>

					<li class=' ml-6'>
						<span class='absolute flex items-center justify-center w-8 h-8 bg-sky-400 rounded-full -left-4 ring-4 ring-white text-white'>
							<FaSuitcase />
						</span>
						<h3 class='font-medium leading-tight'>Designer Gráfico</h3>
						<p class='text-sm'>Apr 2017 - jul 2019</p>
					</li>
				</ol>
			</div>
		</section>
	);
}
