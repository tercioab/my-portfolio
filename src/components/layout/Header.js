"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 right-0 z-10 text-white'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mb'
				aria-label='Global'
			>
				<div className='flex items-center'>
					{/* <a href="/" className="-m-1.5 p-1.5 mr-0">
            <img
              className="h-8 w-auto"
              alt="ultracar logo"
              src=""
            />
          </a> */}
					<p className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						WALTHERCIO
					</p>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					
						<ul class='font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800'>
							<li>
								<a
									href='#'
									class='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
									aria-current='page'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#'
									class='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#'
									class='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									Services
								</a>
							</li>
							<li>
								<a
									href='#'
									class='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href='#'
									class='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									Contact
								</a>
							</li>
						</ul>
				
				</Popover.Group>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='/' className='-m-1.5 p-1.5'>
							{/* <img
                className="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s"
                alt="ultracar logo"
              /> */}
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<a
									href='https://wa.me/557582094528?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+APVS'
									target='_blank'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Solicitar cotação
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
