import Introduction from "@/components/Sections/Introduction";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Recomendations from "@/components/Sections/Recomendations";
export default function Home() {
	return (
		<main>
			<Introduction />
			<Skills />
			<About />
			<Projects />
			<Recomendations />
		</main>
	);
}
