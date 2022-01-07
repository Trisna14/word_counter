function atLeastTwoCharacters (text) {
    
    // console.log(text.length);
    const letters = text.match(/[a-z]/gi) || [];
   
    // console.log(letters);
    // console.log(letters.length); 
    console.log('this is atLeastTwoCharacters');
    return letters.length >= 2;

}

function abscenceOfThreeConsecutiveCharacters (text) {

    for (const character of text) {
        // console.log(character);
        const occurrences = Array.from(text).filter(v => v == character).length;

        // console.log(occurrences);
        if (occurrences >= 3) {
            return false;
        }

        console.log('this is abscenceOfThreeConsecutiveCharacters');
        console.log(occurrences);
    }

    return true;
}

const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector('.text-input');
const wordCountElement = document.querySelector('.word-count');
const letterCountElement = document.querySelector('.letter-count');
const spaceCountElement = document.querySelector('.space-count');

textInput.addEventListener ('input', () => {

    const splitted = textInput.value.trim().split(/[\s-]/);
    // const splitted = textInput.value;
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    // console.log(letterCount);

    // mencari banyak spasi
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    // console.log(spaceCount);

    let wordCount = 0;

    outer:
    for (const text of splitted) {
        // console.log(text);
        for (const check of checks) {
            // console.log(check);
            if (!check(text)) {
                //  console.log(!check);
                continue outer;
               
                // return false;
            }
        }

        wordCount++;
    }

    // console.log(splitted);
    // console.log('ok');

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
});