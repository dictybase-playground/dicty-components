import { DesktopNavSubmenuProps } from "navbar/src/types"
import { Popper } from "@material-ui/core"
import { CustomMenu } from "navbar/src/components/desktop/CustomMenu"

export const DesktopNavSubmenu = ({
  open,
  anchorRef,
  handleClose,
  subItems,
}: DesktopNavSubmenuProps) => (
  <Popper
    open={open}
    anchorEl={anchorRef.current}
    transition
    disablePortal
    placement="bottom-start">
    {({ TransitionProps }) => (
      <CustomMenu
        handleClose={handleClose}
        subItems={subItems}
        TransitionProps={TransitionProps}
      />
    )}
  </Popper>
)
