export interface IMatchesReturn {
  id: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchesDB {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchesFinished {
  homeTeamGoals: number;
  awayTeamGoals: number;
  homeTeam: number;
  awayTeam: number;
}

export interface IMatchesLeaderboard {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamHome?: {
    teamName: string;
  },
  teamAway?: {
    teamName: string;
  },
}
