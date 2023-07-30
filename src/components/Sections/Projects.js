'use client'
import { useEffect } from "react";
import LinkCard from "../comons/LinkCard";
import Swiper from "swiper";

export default function Projects() {
	const props = [
		{
			title: "Car Shop",

			description:
				"Este projeto consiste no desenvolvimento de uma API para uma concessionária automotiva, utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:
				"Este projeto consiste no desenvolvimento de uma API para uma concessionária automotiva, utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:
				"Este projeto consiste no desenvolvimento de uma API para uma concessionária automotiva, utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:
				"Este projeto consiste no desenvolvimento de uma API para uma concessionária automotiva, utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:
				"Este projeto co], utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:" Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
		{
			title: "Car Shop",

			description:
				"Este projeto consiste no desenvolvimento de uma API para uma concessionária automotiva, utilizando Node.js, Express e Mongoose. A API é responsável por gerenciar os dados relacionados aos veículos disponíveis na concessionária",
			link: "https://github.com/tercioab/car_shop_POO",
		},
	];
	useEffect(() => {
		if (typeof window !== "undefined") {
		  new Swiper(".swiper-container", {
			slidesPerView: "auto",
			spaceBetween: 3, // Espaçamento entre os slides
			direction: "horizontal", // Definindo a direção do slide como horizontal
			scrollbar: {
			  el: ".swiper-scrollbar",
			  hide: true, // Oculta a barra de rolagem inferior
			},
		  });
		}
	  }, []);
	
	  return (
		<div className="max-w-screen-lg mx-auto p-4 mt-8 mb-10 overflow-x-hidden">
		  <h1 className="text-3xl font-bold text-center mb-8">PROJETOS</h1>
		  <div className="swiper-container">
			<div className="swiper-wrapper flex">
			  {props.map((prop, i) => (
				<div
				  key={i}
				  className="swiper-slide flex-shrink-0 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
				>
				  <LinkCard {...prop} />
				</div>
			  ))}
			</div>
			<div className="swiper-scrollbar"></div> {/* Barra de rolagem */}
		  </div>
		</div>
	  );
	}