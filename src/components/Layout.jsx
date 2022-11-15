import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"



export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </>
  )
}
