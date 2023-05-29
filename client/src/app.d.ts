// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

export interface UpcomingGameInput {
  date: string;
  homeTeam: string;
  awayTeam: string;
  spread: number;
  total: number;
  moneyLine: number;
  pregame: boolean;
}

export interface PredictionInput {
  selectedTeam: 'home' | 'away';
  pastGameAmount: number;
}

export interface SpreadPrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'home' | 'away';
  spread: number;
}

export interface TotalPrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'over' | 'under';
  total: number;
}

export interface MoneyLinePrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'home' | 'away';
  moneyLine: number;
}

export interface Prediction {
  spreadPrediction: SpreadPrediction;
  totalPrediction: TotalPrediction;
  moneyLinePrediction: MoneyLinePrediction;
}
