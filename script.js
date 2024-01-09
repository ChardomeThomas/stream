//connexion à la chaine twitch
// ComfyJS.onChat = (user, message, flags, self, extra) => {
//     console.log(user, message);
// }


//envoyer les messages au DOM

var chat = document.querySelector("#chat>ul");

ComfyJS.onChat = (user, message, flags, self, extra) => { 
    var newMessage = document.createElement("li");
    var text = document.createElement("blockquote");


    newMessage.innerText = user;
    text.innerText = message;

    newMessage.append(text)
    chat.append(newMessage);


}

//connexion à la chaine twitch
ComfyJS.Init("W0rgrim");
