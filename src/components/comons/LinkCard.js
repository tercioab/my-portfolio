import GitHubButton from "./buttons/GitHubButton";

export default function LinkCard({ title, description, link }) {
	return (
		<>
			<div class='w-full h-full object-contain p-4 bg-black/80 rounded-lg shadow border-x-2  border-green-400 '>
				<a href={link}>
					<h5 class='mb-2 text-2xl font-bold tracking-tight text-white'>
						{title}
					</h5>
				</a>
				<p class='mb-3 font-normal text-sm text-white '>{description}</p>
          <GitHubButton link={link} text="GitHub" />
			</div>
		</>
	);
}
