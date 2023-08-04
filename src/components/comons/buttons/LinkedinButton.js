export default function LinkedinButton({ link, text }) {
    return (
        <a
        href={link}
        target="_blank"
        class='text-white bg-[#0077B5] hover:bg-[#00669D]/90 focus:ring-4 focus:outline-none focus:ring-[#00669D]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-20 '
    >
        <svg
            class='w-4 h-4 mr-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 25 25'
        >
            <path
                 fill-rule='evenod'
                 d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
        </svg>




            
        {text}
    </a>
    )
}