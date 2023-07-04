import './globals.css'
import Header from '../components/layout/Header';


export const metadata = {
  title: 'Desenvolvedor Web - Walthércio ',
  description: 'Walthércio Almeida, Desenvolvedor Web Full-stack Node.js, Reactjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="web developer, front-end , back-end, full-stack, node.js, javascript, typescript" />
        <meta name="author" content="Walthercio Almeida" />
        <meta name="language" content="pt" />
        <meta name="robots" content="index, follow" />

    </head>
    <body>
      <Header />
      <>{children}</>
    </body>
  </html>
  )
}
