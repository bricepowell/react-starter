import { usePosts } from '../hooks/usePosts.ts'

export default function PostsPage() {
  const { data, isPending, isError, error } = usePosts()

  if (isPending) return <p>Loading...</p>
  if (isError) return <p role="alert">{error.message}</p>

  return (
    <>
      <h1>Posts</h1>
      <ul className="post-list">
        {data.map((post) => (
          <li key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
