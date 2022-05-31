import { MutableRefObject, useState, useEffect } from "react"
import { Box, FormControl, Select } from "@material-ui/core"
import { Observable } from "rxjs"

interface RightDropDownProps {
  element: MutableRefObject<HTMLInputElement>
  stream: Observable<string>
}

export function RightDropDown({ element, stream }: RightDropDownProps) {
  const [options, setOptions] = useState<string[]>([
    "tennis",
    "lacrosse",
    "baseball",
    "basketball",
    "swim",
    "golf",
  ])
  useEffect(() => {
    if (!stream) return
    const subscription = stream.subscribe((content) =>
      setOptions((opt) => [content, ...opt]),
    )
    return () => subscription.unsubscribe()
  }, [stream])
  return (
    <Box m={5}>
      <FormControl>
        <Select
          native
          id="club-id"
          defaultValue={"hackclub"}
          variant="outlined"
          ref={element}
        >
          {options.map((val, index) => (
            <option value={val} key={index}>
              {val}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
