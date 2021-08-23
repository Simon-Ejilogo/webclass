var database = [
  {
    username: "Paul",
    password: "23456",
  },
  {
    username: "John",
    password: "2333",
  },
];

var newsFeeds = {
  Bob: "The current sports team are just too good",
  Jerry: "I am here to rule the game",
};

var namePrompt = prompt("Enter your username");
var passPrompt = prompt("Enter your password");

var signIn = function (user, pass) {
  if (
      (user == database[0].username && pass == database[0].password) || 
      (user == database[1].username && pass == database[1].password) )
      
      {
    console.log(newsFeeds);
  } else {
    alert("Invalid username and password");
  }
};
signIn();