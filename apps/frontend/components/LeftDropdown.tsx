import { MutableRefObject, useState } from "react"
import { Box, FormControl, Select } from "@material-ui/core"

interface LeftDropdownProps {
  element: MutableRefObject<HTMLInputElement>
}

export function LeftDropdown({ element }: LeftDropdownProps) {
  const [options] = useState<string[]>([
    "hackclub",
    "mathclub",
    "chemistryclub",
    "hatclub",
    "bookclub",
  ])
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
