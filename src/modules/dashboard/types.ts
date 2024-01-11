export type ShowModeText = {
  mode: "text";
  text: string;
  openModalText: string;
};

export type ShowModeButton = {
  mode: "button";
};

export type ShowMode = ShowModeText | ShowModeButton;
