import GitHubButton from "../comons/buttons/GitHubButton";
import LinkedinButton from "../comons/buttons/LinkedinButton";

export default function Introduction() {
	return (
		<section class="bg-slate-200 rounded-b-3xl  border-y-2 border-green-400 " >
			<div class='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
				<h2 class='mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-slate-500 to-black text-transparent bg-clip-text md:text-5xl lg:text-6xl'>
					Você Me Encontrou!
				</h2>
				<p class='mb-8 text-lg font-normal text-slate-600 lg:text-xl sm:px-16 lg:px-48'>
					Olá! Meu nome é Walthercio, Sou um desenvolvedor Web com ampla experiência em
					projetos variados. Atuo como freelancer e já participei de mais de 30 projetos,
					no desenvolvimento do front-end, back-end e projetos completos de ponta a ponta.
				</p>


				<GitHubButton link="https://github.com/tercioab" text="My Github" />
				<LinkedinButton link="https://www.linkedin.com/in/walthercio-almeida/" text="My Linkedin" />
				
			</div>
	
		</section>
	);
}
