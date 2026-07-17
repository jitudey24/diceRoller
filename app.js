const btn = document.getElementById("btn"); //এটা HTML থেকে Button- খুঁজে বের করে।
btn.onclick = diceRoll;  //"যখন Button-এ Click হবে তখন নিচের Function চালাও।"
function diceRoll(){    //এটা একটি Function। Button-এ Click করলেই এই Function চলবে।
    const numberDice = document.getElementById('numberDice').value  //HTML থেকে <input id="numberDice"> এর Value নেওয়া হচ্ছে।
    const result = document.getElementById('result')   //এটা <div id="result"></div> এই div-টাকে ধরে রাখছে। পরে এখানে Result দেখানো হবে।
    const images = document.getElementById('images')    //এটা <div id="images"></div> এই div-টাকে ধরে রাখছে। পরে এখানে image দেখানো হবে।
    const values = []       //এটা একটি Empty Array। এখানে Dice-এর Number রাখা হবে।
    const imagess = []      //এটাও একটি Empty Array। এখানে Image-এর HTML রাখা হবে।

    for (let i = 0; i < numberDice; i++)    //এটা Loop। মানে যতগুলো Dice User চেয়েছে,ততবার Loop চলবে।
    {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        imagess.push(`<img src="img/${value}.png"> `)
    }
    result.textContent = `dice: ${values.join(', ')}`
    images.innerHTML = imagess.join('')
}
