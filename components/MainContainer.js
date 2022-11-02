import Head from 'next/head'
import Link from 'next/link'
import A from './A'



export const MainContainer = ({children, keywords, pageTitle}) => {
    return (
        <>
            <Head>
                <meta keywords={'blur, nextjs' + keywords} ></meta>
                <title>{pageTitle}</title>
            </Head>

            <div className='navbar'>
                <A href='/' text='Главная' />
                <A href='/users' text='Пользователи' />
            </div>

            <div>
            {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>

        </>
    )
}