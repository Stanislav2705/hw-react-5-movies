import { useContext } from "react"
import { PageContext } from "shared/PageContext/PageContext";


export default function LoadMore() {
  const { setPage } = useContext(PageContext);

  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <button type="button" onClick={onLoadMore}>Load More</button>
  )
}
