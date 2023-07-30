function phraseFunction() {
    let phrase = prompt("Your phrase for translation:");
    if (phrase === '') {
        prompt("Your phrase in any language you want")
    } else {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        let resultArray = []
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i] === 'e') {
                resultArray.push(phrase[i])
            }
            if (phrase[i] === 'u') {
                resultArray.push(phrase[i])
            }
            for (let j = 0; j < vowels.length; j++) {
                if (phrase[i] === vowels[j]) {
                    resultArray.push(phrase[i])
                }
            }
        }
    
    let resultString = resultArray.join('').toUpperCase()
    console.log(resultString)
    document.getElementById("yourPhrase").innerHTML = `Your phrase is: ${phrase}`;
    document.getElementById("whalePhrase").innerHTML = `Your phrase in whale language is: ${resultString}`;
    document.getElementById("explain").innerHTML = `Explanation: The whale language does not contain any consonants, only vowels, but excluding “y”. The "u" and "e" are extra long, so these vowels will be doubled! <br/> 
    Once the text is converted to the whale language, the result is sung slowly, as is a custom in the ocean. Now try to read the whale language!`;

    }
}




