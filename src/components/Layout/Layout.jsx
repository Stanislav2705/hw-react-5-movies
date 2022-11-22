import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import Loader from "shared/Loader"



export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}
