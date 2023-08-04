"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import RecomendCard from "../comons/RecomendCard";

export default function Recomendations() {
	const props = [
		{
			image:
				"https://media.licdn.com/dms/image/D4D35AQFfvu_eFx6yXw/profile-framedphoto-shrink_800_800/0/1686060665526?e=1691629200&v=beta&t=2KiOC8olsJ5Tn7PMYXN9TVn42tD4Asgf-cJCqkFnkno",
			name: "André Horman",
			title: "Desenvolvedor Web",
			text: `Walthercio é uma pessoa muito profissional, muito organizado com horário, tem excelente espírito de equipe.
            Tive a oportunidade de trabalhar junto com ele fiquei impressionado demais com o quão profissional ele é como desenvolvedor web e Soft Skills.
            Recomendo fortemente este profissional.`,
		},
		{
			image:
				"https://media.licdn.com/dms/image/C5603AQF_NQIysUd8AQ/profile-displayphoto-shrink_800_800/0/1650149083702?e=1696464000&v=beta&t=IS1TnOlBXr2atX63zkWUKQ-k-WrgFW4MMiJ4w8KQ_xI",
			name: "Diego Picoli ",
			title: "Desenvolvedor FullStack",
			text: `Trabalhei com o Tercio em um projeto FullStack, onde ele foi o responsável pelo desenvolvimento da parte Backend. Além de ser um baita programador, o Tercio é um colega de equipe nota 10! Sempre colaborou de forma eficaz com todos da equipe para que a gente alcançasse os resultados esperados.`,
		},
		{
			image:
				"https://media.licdn.com/dms/image/C4E03AQFS93T4c15cdg/profile-displayphoto-shrink_800_800/0/1646907968200?e=1696464000&v=beta&t=ai2iBHjItopntZYgdfxVquUbm4judmdwJGz9WAh-Ctg",
			name: "Vitor Marcelo",
			title: "Desenvolvedor FullStack",
			text: `Excelente profissional sempre cumpriu os prazos discutidos pelo grupo. Estava sempre disposta a discutir novas ideias e sempre propunha melhorias a serem implementadas no projeto. Um profissional completo, se saindo super bem no frontEnd e no BackEnd.`,
		},
		{
			image:
				"https://media.licdn.com/dms/image/D4D03AQFZKPRlBB7HmA/profile-displayphoto-shrink_800_800/0/1686025058083?e=1696464000&v=beta&t=WyS7wn-U3OeMfOt9mBaWXuaLt1_W9HXRwOQyIxbekcE",
			name: "Rayane Pacote",
			title: "Desenvolvedora Web",
			text: `Grande profissional, possui habilidades incríveis com o Back-end, pessoa altamente bem relacionado, dedicado e pé no chão. ótimo de se trabalhar e disposto a ajudar sempre que for preciso. possui todas as qualificações técnicas e interpessoais para entregar um trabalho de qualidade.`,
		},
	];

	useEffect(() => {
		new Swiper(".swiper-container", {
			slidesPerView: "auto",
			direction: "horizontal",
			loop: true,
		});
	}, []);

	return (
		<div className=' max-w-screen-xl mx-auto p-4  mb-10 overflow-x-hidden  '>
			<h1 className='text-3xl font-bold text-center mt-10 text-black'>
				{`< Recomendações />`}
			</h1>
			<div className=' overflow-x-hidden border-x-4 border-green-400 rounded-3xl p-10 mx-10 mb-8'>
				<div className='swiper-container border-x-2 border-gray-200 rounded-lg '>
					<div className='swiper-wrapper flex  '>
						{props.map((props, i) => (
							<div
								key={i}
								className='swiper-slide flex-shrink-0 p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/1 '
							>
								<RecomendCard {...props} />
							</div>
						))}
					</div>
					<div className='swiper-scrollbar'></div>
				</div>
			</div>
		</div>
	);
}
