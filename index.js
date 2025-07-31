const isVowel = (ch) => {
    return "AEIOUaeiou".indexOf(ch) !== -1;
};

const isConsonant = (ch) => {
    return /^[a-zA-Z]$/.test(ch) && !isVowel(ch);
};

const isPalindrome=(str1,str2)=>{
   const rev=str1.split("").reverse().join("");
   return rev===str2
}

const isAnagram=(str1,str2)=>{
   const sorted1=str1.split("").sort().join("");
   const sorted2=str2.split("").sort().join("");
   return sorted1===sorted2;
}

const isPangram=(str)=>{
    let set = new Set(str.split(""));
    return set.size===26;
}
module.exports = {
    isVowel,
    isConsonant,
    isPalindrome,
    isAnagram,
    isPangram,
};