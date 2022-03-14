import { ApolloError } from "@apollo/client"
import {
  Callback,
  MockProvider,
  MockSuperuser,
} from "@dictyBase/authentication"
import { render, screen } from "@testing-library/react"
import { useLoginMutation, LoginMutation } from "dicty-graphql-schema"

describe("OAuth callback", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  jest.mock("dicty-graphql-schema", () => ({
    useLoginMutation: jest.fn(),
  }))

  test("show loading ui", () => {
    jest.doMock("dicty-graphql-schema", () => {
      return {
        useLoginMutation: (baseOptions?: any) => [
          () => {},
          {
            data: null,
            error: undefined,
            loading: false,
          },
        ],
      }
    })

    render(
      <MockProvider>
        <Callback provider={"google"} code={"123"} />
      </MockProvider>,
    )
    expect(screen.getByText("Logging in")).toBeDefined()
  })
})

// test("show data ui", () => {
//   jest.doMock("dicty-graphql-schema", () => ({
//     useLoginMutation: (baseOptions?: any) => [
//       async (options?: any) => ({}),
//       {
//         error: undefined,
//         data: {
//           __typename: "Mutation",
//           login: {
//             __typename: "Auth",
//             token: "235toijeorg8792",
//             user: MockSuperuser,
//             identity: { __typename: "Identity", provider: "google" },
//           },
//         } as LoginMutation,
//         loading: false,
//       },
//     ],
//   }))

//   render(
//     <MockProvider>
//       <Callback provider={"google"} code={"123"} />
//     </MockProvider>,
//   )
//   expect(screen.getByText("Redirecting")).toBeDefined()
// })

// test("show error ui", () => {
//   jest.doMock("dicty-graphql-schema", () => ({
//     useLoginMutation: (baseOptions?: any) => [
//       async (options?: any) => ({}),
//       {
//         error: new ApolloError({}),
//         data: undefined,
//         loading: false,
//       },
//     ],
//   }))

//   render(
//     <MockProvider validToken={false}>
//       <Callback provider={"google"} code={"123"} />
//     </MockProvider>,
//   )
//   expect(screen.getByText("Could not login")).toBeDefined()
// })
