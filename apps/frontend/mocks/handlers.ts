import { graphql } from "msw"
import { LoginInput, Auth, Identity, User } from "dicty-graphql-schema"

export const handlers = [
  graphql.mutation("Login", (req, res, ctx) => {
    const variables = req.body.variables as { input: LoginInput }
    const auth: Auth = {
      identity: { provider: "google" } as Identity,
      token: "my-token",
      user: {} as User,
    } as Auth
    return res(ctx.data({ login: { ...auth } }))
  }),
]
