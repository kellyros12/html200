const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

for (const suit of suits){
  for (const card of cards){
   console.log(card + ' of ' + suit);
};
}
