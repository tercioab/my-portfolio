import { FaBeer } from 'react-icons/fa';


export default function Steps() {
	return (
		<div class='flex justify-center'>
			<ol class='relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400'>
				<li class='mb-10 ml-6'>
					<span class='absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900'>
						<svg
							aria-hidden='true'
							class='w-5 h-5 text-green-500 dark:text-green-400'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clip-rule='evenodd'
							></path>
						</svg>
					</span>
					<h3 class='font-medium leading-tight'>Personal Info</h3>
					<p class='text-sm'>Step details here</p>
				</li>
			</ol>
		</div>
	);
}
