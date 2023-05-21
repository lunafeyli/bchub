export interface IChallenge {
  element: () => JSX.Element;
  info: {
      name: string;
      figma: string;
      original: string;
  };
  id: number;
}