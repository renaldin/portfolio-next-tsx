import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head title='d'>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <title>Profile & Portfolio Renaldi Noviandi</title>
                <link rel="shortcut icon" href="/images/avatar.jpeg" type="image/x-icon" />
            </Head>
            <body className='bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}