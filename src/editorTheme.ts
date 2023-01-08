import { EditorView } from "@codemirror/view";

export const editorTheme = EditorView.theme(
  {
    "&": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    ".cm-content": {
      maxWidth: "70ch",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "16px",
      lineHeight: "150%",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      caretColor: "var(--color-text-primary)",
      padding: "48px",
      color: "var(--color-text-primary)",
    },
    ".cm-editor": {
      height: "100%",
      width: "100%",
    },
    ".cm-placeholder": {
      color: "var(--color-text-tertiary)",
    },
    ".cm-line": {
      maxWidth: "70ch",
      width: "100%",
    },
    ".c1.cm-focused": {
      outline: "none",
    },
    ".cm-scoller": {
      width: "100%",
    },
  },
  { dark: true }
);
