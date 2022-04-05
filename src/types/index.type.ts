export type SearchedData = {
  name: string;
  audio: string | null;
  phonetic: string;
  meaning: {
    partOfSpeech: string;
    definition: string;
  };
} | null;

export type StateType = {
  inputValue: string;
  searchedData: null | SearchedData;
  openAlert: false;
  searchLog: string[];
  loading: false;
  isFocus: false;
};
