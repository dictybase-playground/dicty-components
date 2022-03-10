import { CircularProgress } from "@material-ui/core"

export const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: "20% 0px",
      }}>
      <CircularProgress />
      <p
        style={{
          marginTop: "20px",
        }}>
        Loading dictyBase
      </p>
    </div>
  )
}
