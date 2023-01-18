import { EditorView } from "@codemirror/view";
import { reactive } from "vue";

export const store = reactive({
  activeNoteContents: "",
  activeNoteId: <string | null>"",
  commandPaletteActive: false,
  matchingNotes: <Note[] | null>null,
  searchJustCreatedNote: false,
  session: <any>null,
  loadedData: <LoadedNotesData>{
    notes: [
      {
        id: null,
        content: "",
        dateCreated: new Date(),
        lastModified: new Date(),
      },
    ],
  },
});
