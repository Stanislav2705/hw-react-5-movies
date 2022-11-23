import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Loader from "shared/Loader/Loader"
import { Container, Header, Main, NavList, NavListItem, NavListLink } from "./Layout.styled"



export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavList>
            <NavListItem>
              <NavListLink to={"/"}>Home</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink to={"/movies"}>Movies</NavListLink>
            </NavListItem>
          </NavList>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  )
}
