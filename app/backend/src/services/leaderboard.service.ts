import Teams from '../database/models/teams';
import Matches from '../database/models/matches';
import { IMatchesLeaderboard } from '../interfaces/IMatches';
import { ITeams } from '../interfaces/ITeams';
import { IParams } from '../interfaces/IParams';

const finishedMatches = () => Matches.findAll({
  where: { inProgress: false },
});

const allTeams = () => Teams.findAll();

export const allMatches = (match: IMatchesLeaderboard, team: ITeams, params: IParams) => {
  let {
    totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws,
  } = params;
  if (team.id === match.homeTeam) {
    totalGames += 1;
    goalsFavor += match.homeTeamGoals;
    goalsOwn += match.awayTeamGoals;
    if (match.homeTeamGoals > match.awayTeamGoals) totalVictories += 1;
    if (match.homeTeamGoals === match.awayTeamGoals) totalDraws += 1;
  }
  if (team.id === match.awayTeam) {
    totalGames += 1;
    goalsFavor += match.awayTeamGoals;
    goalsOwn += match.homeTeamGoals;
    if (match.homeTeamGoals < match.awayTeamGoals) totalVictories += 1;
    if (match.homeTeamGoals === match.awayTeamGoals) totalDraws += 1;
  }
  return { totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws };
};

export const inHomeMatches = (match: IMatchesLeaderboard, team: ITeams, params: IParams) => {
  let {
    totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws,
  } = params;
  if (team.id === match.homeTeam) {
    totalGames += 1;
    goalsFavor += match.homeTeamGoals;
    goalsOwn += match.awayTeamGoals;
    if (match.homeTeamGoals > match.awayTeamGoals) totalVictories += 1;
    if (match.homeTeamGoals === match.awayTeamGoals) totalDraws += 1;
  }
  return { totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws };
};

export const atAwayMatches = (match: IMatchesLeaderboard, team: ITeams, params: IParams) => {
  let {
    totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws,
  } = params;
  if (team.id === match.awayTeam) {
    totalGames += 1;
    goalsFavor += match.awayTeamGoals;
    goalsOwn += match.homeTeamGoals;
    if (match.awayTeamGoals > match.homeTeamGoals) totalVictories += 1;
    if (match.homeTeamGoals === match.awayTeamGoals) totalDraws += 1;
  }
  return { totalGames, goalsFavor, goalsOwn, totalVictories, totalDraws };
};

export const lb = async (teamsParams: any) => {
  const all = await allTeams();
  const finished = await finishedMatches();
  return all.map((team) => {
    let params = {
      totalGames: 0, goalsFavor: 0, goalsOwn: 0, totalVictories: 0, totalDraws: 0,
    };
    finished.forEach((match) => {
      params = teamsParams(match, team, params);
    });
    return { name: team.teamName, ...params };
  });
};

export const finishedLeaderboard = async (object: object) => {
  const array = await lb(object);
  let goalsBalance = 0;
  let totalLosses = 0;
  let efficiency = 0;
  let totalPoints = 0;
  return array.map((team) => {
    totalPoints = (team.totalVictories * 3 + team.totalDraws);
    totalLosses = team.totalGames - team.totalVictories - team.totalDraws;
    goalsBalance = team.goalsFavor - team.goalsOwn;
    efficiency = (totalPoints / (team.totalGames * 3)) * 100;
    return {
      totalPoints,
      totalLosses,
      goalsBalance,
      efficiency: efficiency.toFixed(2),
      ...team };
  });
};

export const sortLeaderboard = async (arr: object) => {
  const object = await finishedLeaderboard(arr) || 0;
  const order = object.sort((a, b) => (
    (b.totalPoints - a.totalPoints
         || b.totalVictories - a.totalVictories
         || b.goalsBalance - a.goalsBalance
         || b.goalsFavor - a.goalsFavor
         || a.goalsOwn - b.goalsOwn)));
  return order;
};
