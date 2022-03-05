import {} from "@testing-library/react"
import {
  generateParamString,
  createOauthUrl,
  oauthConfig,
} from "@dictyBase/authentication"

describe("src/oauthHelpers.ts", () => {
  test("generateParamString", () => {
    {
      const data = [["1", "2"]]
      const result = generateParamString(data)
      expect(result).toBe("1=2")
    }

    {
      const data = [
        ["name", "Ayaan"],
        ["age", "22"],
      ]
      const result = generateParamString(data)
      expect(result).toBe("name=Ayaan&age=22")
    }

    {
      const data = [
        ["emoji", "🤢"],
        ["branch", "master"],
        ["type", "tweet"],
      ]
      const result = generateParamString(data)
      expect(result).toBe("emoji=🤢&branch=master&type=tweet")
    }

    {
      const data: Array<Array<string>> = []
      const result = generateParamString(data)
      expect(result).toBe("")
    }
  })

  test("createOauthUrl", () => {
    const config = oauthConfig("https://dictycr.org")
    const gConfig = config.google
    const url = createOauthUrl(gConfig)
    expect(url).toBe(
      `${gConfig.authorizationEndpoint}?client_id=${gConfig.clientId}&scope=email&response_type=code&redirect_uri=${gConfig.redirectUrl}`,
    )
  })
})
