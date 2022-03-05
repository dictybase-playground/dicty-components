import {} from "@testing-library/react"
import { generateParamString } from "@dictyBase/authentication/src/oauthHelpers"

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
})
