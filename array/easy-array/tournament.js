 
//  key words 
    // each team faces off against all other teams
      // plays every oppononect
    // no ties 
    // one team is designated the home team and the away team

    // array of pairs --> representing matches
      // the 1st team is the hometeam and the 2nd team is the away team

    // array of results   
      // 1 = home team won
      // 0 = away team won

    // results[i] = competitions[i]

// 0(n) time and 0(k) space 
    // where n = number of competitions
    // where k = number of teams
 
 const competitions = [
  ['HTML', 'Java'],
  ['Java', 'Python'],
  ['Python', 'HTML']
]
const results = [0, 1, 1]
const Home_Team_Won = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };
  console.log(scores);

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = result === Home_Team_Won ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
  console.log(scores)
}

console.log(tournamentWinner(competitions, results));
