import { gray, white } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const recordListSectionStyles = {
  newButton: style({
    display: "block",
    marginLeft: "auto",
    marginBottom: 16,
    width: "fit-content",
  }),

  pagination: style({
    marginTop: 16,
  }),
};

export const recordDetailSectionStyles = {
  self: style({}),
  buttonGroup: style({
    marginTop: 40,
  }),
};
