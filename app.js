window.onload = function () {
    const excuse = document.querySelector("#excuse");

    let pronoum = ["The", "Our", "My"];
    let adj = ["big", "smart", "beautiful", "great"];
    let noum = ["dog", "cat", "brother", "friend"];
    let act = ["eat", "broke", "destroyed", "lost"]
    let obj = ["my key", "my house", "my car", "my boat"]

    
    let randomPronoum = Math.floor(Math.random() * 3);
    let randomAdj = Math.floor(Math.random() * 4);
    let randomNoum = Math.floor(Math.random() * 4);
    let randomAct = Math.floor(Math.random() * 4);
    let randomObj = Math.floor(Math.random() * 4);

    excuse.innerHTML = pronoum[randomPronoum] + " " + adj[randomAdj] + " " + noum[randomNoum] + " " + act[randomAct] + " " + obj[randomObj]
}