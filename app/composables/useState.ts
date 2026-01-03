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
  preselectionDancers: [
    { id: 1, name: "Chu" },
    { id: 2, name: "Shami" },
    { id: 3, name: "Denky" },
    { id: 4, name: "Man with the Scarf" },
    { id: 5, name: "Vero" },
    { id: 6, name: "God is a Woman" },
    { id: 7, name: "Rex" },
    { id: 8, name: "Mika" },
    { id: 9, name: "Zane" },
    { id: 10, name: "Nova" },
    { id: 11, name: "Axel" },
    { id: 12, name: "Lyra" },
    { id: 13, name: "Jax" },
    { id: 14, name: "Cleo" },
    { id: 15, name: "Orin" },
    { id: 16, name: "Sage" },
    { id: 17, name: "Tia" },
    { id: 18, name: "Dax" },
    { id: 19, name: "Mira" },
    { id: 20, name: "Ryn" },
  ],
};

export const useState = () => {
  const localStorageState = localStorage.getItem("appState");
  // const state = localStorageState
  //   ? (JSON.parse(localStorageState) as IState)
  //   : defaultState;
  const state = defaultState;

  const updateState = (state: IState) => {
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return {
    state,
    updateState,
  };
}
