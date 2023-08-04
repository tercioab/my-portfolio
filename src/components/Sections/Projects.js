"use client";
import Carousel from "react-material-ui-carousel";
import LinkCard from "../comons/LinkCard";

export default function Projects() {
	const props = [
		{
			title: "Car Shop",

			description:
				"Este é um projeto de uma loja de veículos que utiliza Node.js e Express para construir as APIs, bem como o Mongoose como ODM para lidar com o banco de dados MongoDB. Além disso, o projeto usa o mocha e chai para testes unitarios fazendo stubs com sinon.",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Tfc Project",

			description:
				"API RESTful que se conecte a um banco de dados mySQL via Sequelize para ler, criar, filtrar, atualizar os dados, entre outros. As seguintes rotas foram criadas: login, partidas, equipes e líder de placar.",
			link: "https://github.com/tercioab/TFC-PROJECT-POO",
		},
		{
			title: "Blogs Api",

			description:
				"API RESTful para um sistema de blogs. Ele foi construído usando Node.js e Express, e utiliza um banco de dados MySQL para armazenar informações sobre usuários, categorias de postagens e postagens propriamente ditas.",
			link: "https://github.com/tercioab/blogs-api",
		},
		{
			title: "Star Wars search planet",

			description:
				"Uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.",
			link: "https://github.com/tercioab/StarWars-search-planets",
		},
		{
			title: "Trybewallet",

			description:
				"Uma carteira de controle de gastos com conversor de moedas, com estado goblal controlado pelo redux",
			link: "https://github.com/tercioab/Trybewallet-",
		},
		{
			title: "Truck Flow",

			description:
				"Projeto em andamento, consiste em uma aplicação que ira ajudar caminhoneiros a calcular os custos de uma viagem",
			link: "https://github.com/tercioab/carflow-truck",
		},
	];

	return (
		<div className=' max-w-screen-xl mx-auto p-4  mb-10 overflow-x-hidden '>
			<h1 className='text-3xl font-bold text-center mt-10 text-black'>
				{`< Meus Projetos />`}
			</h1>
			<div className=' overflow-x-hidden border-x-4 border-green-400 rounded-3xl p-10 mx-10 mb-8'>
				<div className='flex items-center justify-center  '>
					<div className='w-full max-w-screen-lg border-x-2 border-gray-200 rounded-lg flex'>
						<Carousel
							className='w-full h-full object-cover '
							autoPlay={2000}
							animation='slide'
							PaperProps={{
								style: {
								  transition: 'transform 2s ease', // Adjust the duration here (e.g., 2s for 2 seconds)
								},
							  }}
						>
							{props.map((props, i) => (
								<div key={i} className='flex justify-center p-2'>
									<div
										key={i}
										className='swiper-slide flex-shrink-0 p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/1 '
									>
										<LinkCard {...props} />
									</div>
								</div>
							))}
						</Carousel>
					</div>
					<div className='swiper-scrollbar'></div>
				</div>
			</div>
		</div>
	);
}
