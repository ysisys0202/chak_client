import { media } from "@/constants/break-points";
import { background, shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    padding: 20,
    backgroundColor: background.ghost,
    border: `1px solid ${shades[100]}`,
    "@media": {
      [media.lg]: {
        padding: 40,
      },
    },
  }),
};
