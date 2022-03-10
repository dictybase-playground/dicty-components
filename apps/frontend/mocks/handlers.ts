import { graphql } from "msw"
import { LoginInput } from "dicty-graphql-schema"

export const handlers = [
  // Handles the Gene query: https://github.com/dictyBase/dicty-graphql-schema/blob/develop/src/queries/gene.graphql
  // Implementation details here: https://github.com/dictyBase/genomepage/pull/825#issuecomment-977246804
  graphql.query("Login", (req, res, ctx) => {
    const variables = req.body.variables as { input: LoginInput }
    console.log(variables.input)
    res(ctx.data({}))
  }),
]
