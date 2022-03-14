import { useAuthStore } from "@dictyBase/authentication"
import { Container, Typography } from "@material-ui/core"

export default function Main() {
  const { state } = useAuthStore()
  return (
    <Container>
      {state.isAuthenticated ? (
        <Typography variant="h1">
          Welcome back, <b>{state.user.first_name}</b>
        </Typography>
      ) : (
        <h1>dictyBase Frontend</h1>
      )}
    </Container>
  )
}
