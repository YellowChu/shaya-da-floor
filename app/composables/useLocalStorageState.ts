export enum CurrentViewEnum {
  Preselection = "preselection",
  Bracket = "bracket",
  Battle = "battle",
}

export interface Dancer {
  id: number;
  name: string;
  donePreselection: boolean;
  isInBattle: boolean;
  isLoser: boolean;
  image: string;
}

export interface Battle {
  title?: string;
  dancerAId?: number;
  dancerBId?: number;
}

export interface Bracket {
  hasTwoTop16: boolean;
  // Pre-16
  pre16Battle1: Battle;
  pre16Battle2: Battle;
  pre16Battle3: Battle;
  pre16Battle4: Battle;
  pre16Battle5: Battle;
  pre16Battle6: Battle;
  pre16Battle7: Battle;
  pre16Battle8: Battle;
  // Top 16
  top16Battle1: Battle;
  top16Battle2: Battle;
  top16Battle3: Battle;
  top16Battle4: Battle;
  top16Battle5: Battle;
  top16Battle6: Battle;
  top16Battle7: Battle;
  top16Battle8: Battle;
  // Top 8
  top8Battle1: Battle;
  top8Battle2: Battle;
  top8Battle3: Battle;
  top8Battle4: Battle;
  // Semi Finals & Final
  semiFinal1: Battle;
  semiFinal2: Battle;
  final: Battle;
}

export interface IState {
  currentView: CurrentViewEnum;
  dancers: Dancer[];
  bracket: Bracket;
  battle: Battle;
}

const defaultState: IState = {
  currentView: CurrentViewEnum.Preselection,
  dancers: [],
  bracket: {
    hasTwoTop16: true,
    pre16Battle1: { title: "" },
    pre16Battle2: { title: "" },
    pre16Battle3: { title: "" },
    pre16Battle4: { title: "" },
    pre16Battle5: { title: "" },
    pre16Battle6: { title: "" },
    pre16Battle7: { title: "" },
    pre16Battle8: { title: "" },
    top16Battle1: { title: "Top 16" },
    top16Battle2: { title: "Top 16" },
    top16Battle3: { title: "Top 16" },
    top16Battle4: { title: "Top 16" },
    top16Battle5: { title: "Top 16" },
    top16Battle6: { title: "Top 16" },
    top16Battle7: { title: "Top 16" },
    top16Battle8: { title: "Top 16" },
    top8Battle1: { title: "Top 8" },
    top8Battle2: { title: "Top 8" },
    top8Battle3: { title: "Top 8" },
    top8Battle4: { title: "Top 8" },
    semiFinal1: { title: "Semi Final" },
    semiFinal2: { title: "Semi Final" },
    final: { title: "Final" },
  },
  battle: { title: "" },
};

export const useLocalStorageState  = () => {
  const localStorageState = localStorage.getItem("appState");
  const state = defaultState;
  // const state = localStorageState
  //   ? (JSON.parse(localStorageState) as IState)
  //   : defaultState;

  const updateState = (state: IState) => {
    console.log(new Blob([JSON.stringify(state)]).size)
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return {
    state,
    updateState,
  };
}
