import { graphql } from "msw"
import { LoginInput, Auth, Identity, User } from "dicty-graphql-schema"

export const handlers = [
  graphql.mutation("Login", async (req, res, ctx) => {
    const {} = req.body.variables as { input: LoginInput }

    const auth: Auth = {
      identity: { provider: "google" } as Identity,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      user: {
        city: "Chicago",
        first_name: "John",
        last_name: "Doe",
        email: "user@example.com",
      } as User,
    } as Auth
    return res(ctx.data({ login: { ...auth } }))
  }),
]
