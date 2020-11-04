const checkBtn = document.getElementById('checkBtn');
const input = document.getElementById('input');


checkBtn.addEventListener('click', function(e) {    
    const vowels = ["a", "e", "i", "o", "u"];
    
    function checkVowels(str) {
        let count = 0;
        
        for (let letter of str.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++;
            }
        }
        return count;
        
    }
    
    let string = input.value;
    
    let result = checkVowels(string);
    
    alert(result);
    
    if (e.target == checkBtn) {
        input.value = '';
    }
});





