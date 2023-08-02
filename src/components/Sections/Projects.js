'use client'
import { useEffect } from "react";
import LinkCard from "../comons/LinkCard";
import Swiper from "swiper";

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
	useEffect(() => {
		if (typeof window !== "undefined") {
		  new Swiper(".swiper-container", {
			slidesPerView: "auto",
			spaceBetween: 1, // Espaçamento entre os slides
			  direction: "horizontal",
			  loop: true,
			// scrollbar: {
			//   el: ".swiper-scrollbar",
			//   hide: true, // Oculta a barra de rolagem inferior
			// },
		  });
		}
	  }, []);
	
	  return (
		<div className="max-w-screen-lg mx-auto p-4 mt-8 mb-10 overflow-x-hidden">
		  <h1 className="text-3xl font-bold text-center mb-8">Meus Projetos</h1>
		  <div className="swiper-container">
			<div className="swiper-wrapper flex">
			  {props.map((prop, i) => (
				<div
				  key={i}
				  className="swiper-slide flex-shrink-0 p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/1"
				>
				  <LinkCard {...prop} />
				</div>
			  ))}
			</div>
			<div className="swiper-scrollbar"></div>
		  </div>
		</div>
	  );
	}