function displayHobbies(){
    document.getElementById('hobbybox').classList = "Box2";
    document.getElementById('button');
    document.getElementById('button').innerHTML = /*html*/`
    <button class = "button" onclick = "removeHobbies()">Fjern hobbyer</button>`
    
    document.getElementById('hobbybox');
    document.getElementById('hobbybox').innerHTML = /*html*/` <h2 class = "Header">Spill</h2>
    <div class = "HobbyText">På fritiden bruker jeg for det meste tid på spill. Jeg har spillt siden jeg bar liten og det er en stor del av livet mitt. For det meste spiller jeg på PC. Noen av mine mest spilte spill er: Minecraft, Dark Souls, Elden Ring, Lethal Company, Skyrim, The Witcher og Fallout. Jeg er også glad i tabletop spill som DnD. Jeg har litt erfaring som dungeon master liker best den rollen når jeg spiller dnd, men sier aldri nei till DnD som spiller  ;)</div><br>
    <div><img class = "DND" src="https://mtgproshop.com/wp-content/uploads/2020/12/DnD-Header.jpg"/></div>
    <h3 class = "Header">Minifigurer</h3>
    <div class = "HobbyText">Som et komplement til DnD 3D printer jeg og maler miniatyrfigurer som brukes i spillet. Jeg har alltid drevet med litt kreativt her og der som maleri og tegning, men det er maling av minifigurer jeg liker best. Jeg har drevet med hobbyen i noen år nå, men har fortsatt veldig mye å lære.
Nedenfor er det noen eksempler på minifigurer jeg har malt selv.
</div><br>
<div class = "DND"><img class = "DND" src = "https://cdn.discordapp.com/attachments/733586866502107150/1201525455803654246/20240129_145239.jpg?ex=65ca22c7&is=65b7adc7&hm=08618714d8bfac678c2795736701c741817c93f919fa22c4d2d24ab0e2ae4110&"/></div> `

}
function removeHobbies(){
    document.getElementById('hobbybox').classList = "";
    document.getElementById('button');
    document.getElementById('button').innerHTML = /*html*/`
    <button class = "button" onclick = "displayHobbies()">Mine hobbyer</button>`
    document.getElementById('hobbybox');
    document.getElementById('hobbybox').innerHTML = "";

}
function showsocials(){
    document.getElementById('showsoc');
    document.getElementById('showsoc').innerHTML = /*html*/`
    <button onclick="hidesocials()" class="button">Hide Socials</button>`
    document.getElementById('socials');
    document.getElementById('socials').innerHTML = /*html*/`
    <div class = "socialtext">Steam</div>
    <div class = "img"><img class = "img" onclick = "Steam()" src="https://cdn.discordapp.com/attachments/733586866502107150/1201511562507190302/image.png?ex=65ca15d7&is=65b7a0d7&hm=37781835d4f2c7920cae073fc3a426ea1996abd1c6a1986e07dbea9d84930480&"/></div>
    <div class = "socialtext">Github</div>
    <div class = "img"><img class = "img" onclick = "Github()" src="https://cdn.discordapp.com/attachments/733586866502107150/1201512646587973802/Github.png?ex=65ca16d9&is=65b7a1d9&hm=552dba936418abb5c89d7b8ca8c83a132f780145431553985966cf12ccf177ee&"/></div>
    <div id = "partybutt"><button class = "button" onclick = "party()">Party?</button></div>`
    
}
function hidesocials(){
    document.getElementById("showsoc");
    document.getElementById("showsoc").innerHTML = /*html*/`
    <button onclick="showsocials()" class="button">Socials</button>`
    document.getElementById('socials');
    document.getElementById('socials').innerHTML = "";
    
}
function party(){
    document.getElementById('partybutt');
    document.getElementById('partybutt').innerHTML = /*html*/`
    <button class = "button" onclick = "stopparty()">Stop Party</button>`
    document.getElementById('background');
    document.getElementById('background').classList = "background";
}
function stopparty(){
    document.getElementById('partybutt');
    document.getElementById('partybutt').innerHTML = /*html*/`
    <button class = "button" onclick = "party()">Party?</button>`
    document.getElementById('background');
    document.getElementById('background').classList = "";
}
function Steam(){
    location.href = "https://steamcommunity.com/id/WILTHORK/";
}
function Github(){
    location.href = "https://github.com/xEdgeLordx"
}