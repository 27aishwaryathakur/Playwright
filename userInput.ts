let text;
  let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
  switch(favDrink) {
    case "Coca-Cola":
      text = "Excellent choice. Coca-Cola is good for your soul.";
      break;
    case "Pepsi":
      text = "Pepsi is my favorite too!";
      break;
    case "Sprite":
      text = "Really? Are you sure the Sprite is your favorite?";
      break;
    default:
      text = "I have never heard of that one..";
  }
  