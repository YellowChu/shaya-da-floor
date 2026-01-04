export enum CurrentViewEnum {
  Preselection = "preselection",
  Bracket = "bracket",
  Battle = "battle",
}

export interface PreselectionDancer {
  id: number;
  name: string;
  archived: boolean;
}

export interface BracketDancer {
  name: string;
  isLoser: boolean;
}

export interface BracketBattle {
  dancerA: BracketDancer;
  dancerB: BracketDancer;
}

export interface Bracket {
  winner: string;
  hasTwoTop16: boolean;
  top16A: BracketBattle[];
  top16B: BracketBattle[];
  top8: BracketBattle[];
  top4: BracketBattle[];
  final: BracketBattle;
}

export interface IState {
  currentView: CurrentViewEnum;
  preselectionDancers: PreselectionDancer[];
  bracket: Bracket;
}

const defaultState: IState = {
  currentView: CurrentViewEnum.Preselection,
  preselectionDancers: [],
  bracket: {
    winner: "",
    hasTwoTop16: false,
    top16A: [
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
    ],
    top16B: [
      {
        dancerA: { name: "Guest A", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest B", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest C", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest D", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest E", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest F", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest G", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Guest H", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
    ],
    top8: [
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
    ],
    top4: [
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
    ],
    final: {
      dancerA: { name: "", isLoser: false },
      dancerB: { name: "", isLoser: false },
    },
  }
};

export const useState = () => {
  const localStorageState = localStorage.getItem("appState");
  const state = localStorageState
    ? (JSON.parse(localStorageState) as IState)
    : defaultState;

  const updateState = (state: IState) => {
    console.log(new Blob([JSON.stringify(state)]).size)
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return {
    state,
    updateState,
  };
}
