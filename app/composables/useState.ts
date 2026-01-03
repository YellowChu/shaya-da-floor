export enum CurrentViewEnum {
  Preselection = "preselection",
  Bracket = "bracket",
  Battle = "battle",
}

export interface PreselectionDancer {
  id: number;
  name: string;
}

export interface IState {
  currentView: CurrentViewEnum;
  preselectionDancers: PreselectionDancer[];
}

const defaultState: IState = {
  currentView: CurrentViewEnum.Preselection,
  preselectionDancers: [],
};

export const useState = () => {
  const localStorageState = localStorage.getItem("appState");
  const state = localStorageState
    ? (JSON.parse(localStorageState) as IState)
    : defaultState;

  const updateState = (state: IState) => {
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return {
    state,
    updateState,
  };
}
