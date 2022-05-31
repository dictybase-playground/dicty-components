import React, { useRef } from "react"
import { useStreamManager } from "../../components/streamManager"
import { LeftDropdown } from "../../components/LeftDropdown"
import { RightDropDown } from "../../components/RightDropDown"
import { Box } from "@material-ui/core"

function Dropdowns() {
  const textFieldEl = useRef<HTMLInputElement>(null)
  const textFieldEl2 = useRef<HTMLInputElement>(null)
  const stream = useStreamManager({ element: textFieldEl })
  return (
    <>
      <Box m={2}>
        <LeftDropdown element={textFieldEl} />
      </Box>
      <Box m={2}>
        <RightDropDown stream={stream} element={textFieldEl2} />
      </Box>
    </>
  )
}

export default Dropdowns
