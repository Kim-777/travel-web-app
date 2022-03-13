import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export interface ITrelloToDo {
  id: number;
  text: string;
}

interface ITrelloToDoState {
  [key: string]: ITrelloToDo[];
}

export const trelloToDoState = atom<ITrelloToDoState>({
  key: "trelloToDo",
  default: {
    to_do: [
      { id: 1, text: ">>>" },
      { id: 2, text: "asdasd" },
    ],
    doing: [{ id: 3, text: "ddddd" }],
    done: [],
  },
});
