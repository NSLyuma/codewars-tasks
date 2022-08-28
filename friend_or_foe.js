const friend = (friends) =>
  friends.filter((fr) => /^[a-zA-Z]+$/.test(fr) && fr.length === 4);

console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "341", 346]));
