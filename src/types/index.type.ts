export type SearchedData = {
  name: string;
  audio: string | null;
  phonetic: string;
  meaning: {
    partOfSpeech: string;
    definition: string;
  };
};

export type StateType = {
  inputValue: string;
  searchedData: null | SearchedData;
  openAlert: false;
  searchLog: [];
  loading: false;
  isFocus: false;
};
