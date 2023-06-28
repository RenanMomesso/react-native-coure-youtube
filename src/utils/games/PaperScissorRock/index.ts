export const chooseRandomPaperScissorRock = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return 'paper';
  if (random === 1) return 'scissor';
  if (random === 2) return 'rock';
};

export const comparePaperScissorRock = (
  userChoice: 'paper' | 'scissor' | 'rock',
  computerChoice: 'paper' | 'scissor' | 'rock',
  method: 'win' | 'lose',
) => {
  // method === win ===== win from the computer
  if (
    (userChoice === 'paper' &&
      computerChoice === 'scissor' &&
      method === 'win') ||
    (userChoice === 'scissor' &&
      computerChoice === 'rock' &&
      method === 'win') ||
    (userChoice === 'rock' && computerChoice === 'paper' && method === 'win')
  ) {
    return 'computer';
  } else if (
    (userChoice === 'paper' &&
      computerChoice === 'scissor' &&
      method === 'lose') ||
    (userChoice === 'scissor' &&
      computerChoice === 'rock' &&
      method === 'lose') ||
    (userChoice === 'rock' && computerChoice === 'paper' && method === 'lose')
  ) {
    return 'computer';
  } else {
    return 'player'
  }
};
