import { store } from "../store";
import { getDefaultNotesData, randomIntFromInterval, Note } from "./utils";
import { LoremIpsum } from "lorem-ipsum";
import { useSettingsStore } from "../stores/store.settings";

export const saveAllNoteDataToLocalStorage = () => {
  localStorage.setItem("volon", JSON.stringify(store.loadedData));
};

export const saveAppSettingsToLocalStorage = () => {
  const settings = useSettingsStore();
  const localData = localStorage.getItem("volon");
  const localDataFound = !!localData;

  if (localDataFound) {
    const localDataParsed = JSON.parse(localData);
    localDataParsed.asideActive = settings.asideActive;
    localDataParsed.markdownPreviewActive = settings.markdownPreviewActive;

    localDataParsed.asideActive = settings.asideActive;

    localStorage.setItem("volon", JSON.stringify(localDataParsed));
  } else {
    createNewAppSettingsInLocalStorage();
  }
};

export const createNewAppSettingsInLocalStorage = () => {
  const settings = useSettingsStore();
  localStorage.setItem(
    "volon",
    JSON.stringify({
      asideActive: settings.asideActive,
      markdownPreviewActive: settings.markdownPreviewActive,
    })
  );
};

export const loadAppSettingsFromLocalStorage = () => {
  const settings = useSettingsStore();
  const localData = localStorage.getItem("volon");
  const localDataFound = !!localData;

  if (localDataFound) {
    const localDataParsed = JSON.parse(localData);
    settings.asideActive = localDataParsed.asideActive;
    settings.markdownPreviewActive = localDataParsed.markdownPreviewActive;
  } else {
    createNewAppSettingsInLocalStorage();
  }
};

export const loadExistingLocalStorageData = () => {
  const settings = useSettingsStore();
  const volonData = JSON.parse(localStorage.getItem("volon")!);

  settings.asideActive = volonData.asideActive;
  settings.markdownPreviewActive = volonData.markdownPreviewActive;

  store.loadedData.notes = volonData.notes.map((note: Note) => ({
    id: note.id,
    dateCreated: new Date(note.dateCreated),
    lastModified: new Date(note.lastModified),
    content: note.content,
  }));
};

export const generateLocalStorageNotesData = () => {
  localStorage.setItem("volon", JSON.stringify(getDefaultNotesData()));
};

export const intializeLocalStorageData = () => {
  const existingNotesDataFound = !!localStorage.getItem("volon");

  if (!existingNotesDataFound) {
    generateLocalStorageNotesData();
    loadExistingLocalStorageData();
  } else {
    loadExistingLocalStorageData();
  }
};

export const createSampleDataInLocalStorage = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  [...Array(50)].map(() => {
    const title = lorem.generateWords(randomIntFromInterval(2, 6));
    const bodyContent = lorem.generateParagraphs(randomIntFromInterval(1, 5));
    const noteContent = `# ${
      title.charAt(0).toUpperCase() + title.slice(1)
    } \n\n ${bodyContent}`;

    const newNoteData = new Note(noteContent);

    store.loadedData.notes.push(newNoteData);
    saveAllNoteDataToLocalStorage();
  });
};
