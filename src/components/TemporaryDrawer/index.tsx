import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";

type Anchor = "top" | "left" | "bottom" | "right";

interface IProps {
  position: Anchor;
  content: JSX.Element;
}

const TemporaryDrawer: React.FC<IProps> = ({ position, content }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <Button onClick={toggleDrawer(position, true)}>
        <span className={styles.buttonText}>GO</span>
      </Button>
      <Drawer
        anchor={position}
        open={state[position]}
        onClose={toggleDrawer(position, false)}
      >
        {content}
      </Drawer>
    </Box>
  );
};

export default TemporaryDrawer;
