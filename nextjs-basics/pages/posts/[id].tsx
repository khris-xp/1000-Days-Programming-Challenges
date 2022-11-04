import { useRouter, NextRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Post {
    id: string,
    title: string
}

interface Props {
    posts: Post[]
}

const Post: NextPage<Props> = ({ posts }) => {
    const router: NextRouter = useRouter()
    const { id } = router.query

    return (
        <div>
            Posts {id}
            <Link href="/">Back</Link>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '1' } }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos' + params.id)
    let result = await response.json()

    return {
        props: {
            posts:result
        }
    }
}

export default Post;