import Post from '@/template/post'
import { getNewsPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const news = await getNewsPostBySlug(params)
  const title = news[0] ? news[0].title : '404'

  return {
    title: title,
  }
}

export default async function AktualnosciPost({ params }) {
  const news = await getNewsPostBySlug(params)

  return <Post data={news} params="aktualnosci" />
}
