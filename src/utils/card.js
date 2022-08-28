export const suitList = ['spade', 'heart', 'diamond', 'club'];

export const rankList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const randomize = () => {
  const suit = suitList[Math.floor(Math.random() * suitList.length)];
  const rank = rankList[Math.floor(Math.random() * rankList.length)];
  return {
    suit,
    rank,
  };
}