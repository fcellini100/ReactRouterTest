import { RoutesEnum } from "../models/enums";
import { INavigation, IData } from "../models/interfaces";

const mockNav: INavigation[] = [
  {
    title: "Data",
    path: RoutesEnum.DATA,
  },
  {
    title: "About",
    path: RoutesEnum.ABOUT,
  },
];

const mockData: IData[] = [
  {
    id: 1,
    name: "Data 1",
    value1: "Value 1 for data 1",
    value2: "Value 2 for data 1",
    value3: "Value 3 for data 1",
  },
  {
    id: 2,
    name: "Data 2",
    value1: "Value 1 for data 2",
    value2: "Value 2 for data 2",
    value3: "Value 3 for data 2",
  },
  {
    id: 3,
    name: "Data 3",
    value1: "Value 1 for data 3",
    value2: "Value 2 for data 3",
    value3: "Value 3 for data 3",
  },
];

export const getNavigation = () => {
  return new Promise<INavigation[]>((resolve) => {
    const timeoutDuration = Math.random() * 1500;

    setTimeout(() => {
      resolve(mockNav);
    }, timeoutDuration);
  });
};

export const getData = () => {
  return new Promise<IData[]>((resolve) => {
    const timeoutDuration = Math.random() * 3000;

    setTimeout(() => {
      resolve(mockData);
    }, timeoutDuration);
  });
};
