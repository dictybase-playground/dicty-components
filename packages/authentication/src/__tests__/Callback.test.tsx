import { ApolloError } from "@apollo/client"
import { Callback, MockProvider } from "@dictyBase/authentication"
import { render, screen } from "@testing-library/react"
import { User } from "dicty-graphql-schema"

const mockUser = {
  id: "1",
  first_name: "john",
  last_name: "doe",
  email: "user@example.com",
} as User

jest.mock("dicty-graphql-schema", () => {
  const originalModule = jest.requireActual("dicty-graphql-schema")
  return {
    ...originalModule,
    useLoginMutation: [
      async (variables: any) => ({
        data: {
          login: {
            token: "my-token",
            user: mockUser,
            provider: "google",
          },
        },
      }),
      { error: ApolloError },
    ],
  }
})

describe("OAuth callback", () => {
  it("should update state", () => {
    let val = 1
    render(
      <MockProvider>
        <Callback
          provider={"google"}
          code={"123"}
          callback={(state) => {
            val++
          }}
        />
      </MockProvider>,
    )
    expect(screen.getByText("Logging in")).toBeDefined()
    expect(val).toBe(2)
  })
})
