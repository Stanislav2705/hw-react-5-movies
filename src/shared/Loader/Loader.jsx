import { RotatingLines } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";


export default function Loader() {
  return (
    <>
      <LoaderBox>
        <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
          />
      </LoaderBox>
    </>
  )
}
