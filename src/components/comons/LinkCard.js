import GitHubButton from "./buttons/GitHubButton";

export default function LinkCard({ title, description, link }) {
	return (
		<>
			<div class='max-w-sm p-4 bg-gradient-to-r from-slate-300 to-slate-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<a href={link}>
					<h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
				</a>
				<p class='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>{description}</p>
          <GitHubButton link={link} text="GitHub" />
			</div>
		</>
	);
}
