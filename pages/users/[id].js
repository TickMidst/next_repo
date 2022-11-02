import {useRouter} from 'next/router'
import { MainContainer } from '../../components/MainContainer'
import styles from '../../styles/user.module.scss'

export default function User ({user}) {

    const {query} = useRouter()

    return (
        <MainContainer keywords={`user, profile` +  user.name} pageTitle={`Пользователь ` + user.name}>
        <div className={styles.user}>
            <h1>Пользователь с id {query.id}</h1>
            <div>Имя Пользователя: {user.name}</div>
        </div>
        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }
  