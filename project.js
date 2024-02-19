const url ='https://api.dictionaryapi.dev/api/v2/entries/en/'
const result = document.querySelector(".result")
const btn = document.querySelector(".searchBtn")
const sound = document.querySelector(".sound")
btn.addEventListener('click', async ()=>{
    let inpword =document.querySelector('.inp-word').value
    const response = await fetch(url + inpword)
    let data = await response.json()
    console.log(data);
    if (response.ok) {
        const response =await fetch(url + inpword)
        let data = await response.json()
        console.log(data);
        result.innerHTML=` 
        <div class="word">
        <h3 class="input-word">${inpword}</h3>
        <button onclick="playSound("><i class="bi bi-volume-up-fill"></i></button>
    </div>
    <div class="detail">
   <p>${data[0].meanings[0].partOfSpeech}</p>
   <p>${data[0].phonetic}</p>
    </div>
    <div class="other-details">
        <p class="word-detail">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
    </div>
    `;
    sound.setAttribute("src",`https\\${data[0].phonetics[0].audio}`)
    }
    else{
        result.innerHTML`<h3>Could Not Find The Word</h3>`
    }
    function playSound() {
        sound.play();
    }
})