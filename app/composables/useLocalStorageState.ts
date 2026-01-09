export enum CurrentViewEnum {
  Poster = "poster",
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
  hasTwoTop16: boolean;
  top16A: BracketBattle[];
  top16B: BracketBattle[];
  top8: BracketBattle[];
  top4: BracketBattle[];
  final: BracketBattle;
}

export interface BattleDancer {
  name: string;
  image: string;
}

export interface Battle {
  dancerA: BattleDancer;
  dancerB: BattleDancer;
  dancerX: BattleDancer;
  dancerY: BattleDancer;
  title: string;
  useXY: boolean;
  useImages: boolean;
}

export interface Poster {
  image: string;
}

export interface IState {
  currentView: CurrentViewEnum;
  preselectionDancers: PreselectionDancer[];
  bracket: Bracket;
  battle: Battle;
  battleDancers: BattleDancer[];
  posters: string[];
  currentPoster: string;
}

const defaultState: IState = {
  currentView: CurrentViewEnum.Poster,
  preselectionDancers: [],
  bracket: {
    hasTwoTop16: true,
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
  },
  battle: {
    dancerA: { name: "", image: "" },
    dancerB: { name: "", image: "" },
    dancerX: { name: "", image: "" },
    dancerY: { name: "", image: "" },
    title: "",
    useXY: false,
    useImages: false,
  },
  battleDancers: [],
  posters: [
    "shaya.PNG",
    "afrogang.PNG",
    "mogg.PNG",
    "akwaaba-1.PNG",
    "akwaaba-2.PNG",
    "yoshi.PNG",
    "denisa-mzungu.PNG",
    "zizoe.PNG",
  ],
  currentPoster: "shaya.PNG",
};

export const useLocalStorageState  = () => {
  const localStorageState = localStorage.getItem("appState");
  // const state = defaultState;
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
