import { useContext } from "react"
import { PageContext } from "shared/PageContext/PageContext";
import { Button } from "./LoadMore.styled";


export default function LoadMore() {
  const { setPage } = useContext(PageContext);

  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <Button type="button" onClick={onLoadMore}>Load More</Button>
  )
}
