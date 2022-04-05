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
  openAlert: boolean;
  searchLog: string[];
  loading: boolean;
  isFocus: boolean;
};
