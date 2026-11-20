import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'Something went wrong.'

  return (
    <>
      <h1>Something went wrong</h1>
      <p role="alert">{message}</p>
      <Link to="/">Back home</Link>
    </>
  )
}
