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
  posters: [
    "shaya.PNG",
    "sponsors.PNG",
    "sdk.jpg",
    "afrogang.PNG",
    "mogg.PNG",
    "akwaaba.PNG",
    "yoshi.PNG",
    "denisa-mzungu.PNG",
    "zizoe.PNG",
  ],
  currentPoster: "shaya.PNG",
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
        dancerA: { name: "Jazzy", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Adri", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Don", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Timna", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Leon V", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Teeny", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Sebastian", isLoser: false },
        dancerB: { name: "", isLoser: false },
      },
      {
        dancerA: { name: "Mishena", isLoser: false },
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
  battleDancers: [
    { name: "Jazzy", image: "" },
    { name: "Adri", image: "" },
    { name: "Sebastian", image: "" },
    { name: "Timna", image: "" },
    { name: "Leon V", image: "" },
    { name: "Teeny", image: "" },
    { name: "Don", image: "" },
    { name: "Mishena", image: "" },
  ],
  battle: {
    dancerA: { name: "", image: "" },
    dancerB: { name: "", image: "" },
    dancerX: { name: "", image: "" },
    dancerY: { name: "", image: "" },
    title: "",
    useXY: false,
    useImages: false,
  },
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
