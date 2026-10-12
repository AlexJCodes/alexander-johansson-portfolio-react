export type BallPosition = {
  x: number;
  y: number;
};

export type GameResult = {
  title: string;
  rating: number;
};

export const TOTAL_HITS = 5;

const MINIMUM_POSITION = 10;
const MAXIMUM_POSITION = 90;
const MINIMUM_DISTANCE = 25;

const MINIMUM_DELAY = 350;
const MAXIMUM_DELAY = 900;

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getDistance = (firstPosition: BallPosition, secondPosition: BallPosition) => {
  const xDistance = secondPosition.x - firstPosition.x;
  const yDistance = secondPosition.y - firstPosition.y;

  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
};

export const getRandomPosition = (previousPosition: BallPosition | null): BallPosition => {
  let newPosition: BallPosition;

  do {
    newPosition = {
      x: getRandomNumber(MINIMUM_POSITION, MAXIMUM_POSITION),
      y: getRandomNumber(MINIMUM_POSITION, MAXIMUM_POSITION),
    };
  } while (previousPosition && getDistance(previousPosition, newPosition) < MINIMUM_DISTANCE);

  return newPosition;
};

export const getRandomDelay = () => {
  return getRandomNumber(MINIMUM_DELAY, MAXIMUM_DELAY);
};

export const getGameResult = (reactionTime: number): GameResult => {
  if (reactionTime < 600) {
    return {
      title: "Okej… har du tränat på det här?",
      rating: 10,
    };
  }

  if (reactionTime < 900) {
    return {
      title: "Det där var faktiskt riktigt snabbt.",
      rating: 8,
    };
  }

  if (reactionTime < 1200) {
    return {
      title: "Inte illa. Du får vara med och spela.",
      rating: 6,
    };
  }

  if (reactionTime < 2000) {
    return {
      title: "Hmm… average. Men det finns potential.",
      rating: 4,
    };
  }

  return {
    title: "Reaktionen tog semester en stund där.",
    rating: 2,
  };
};
