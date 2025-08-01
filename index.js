export function isVowel(ch){
    return "AEIOUaeiou".indexOf(ch) !== -1;
};

export  function isConsonant(ch){
    return /^[a-zA-Z]$/.test(ch) && !isVowel(ch);
};

export function isPalindrome(str1,str2){
   const rev=str1.split("").reverse().join("");
   return rev===str2
}

export function isAnagram(str1,str2){
   const sorted1=str1.split("").sort().join("");
   const sorted2=str2.split("").sort().join("");
   return sorted1===sorted2;
}

export function isPangram(str){
    let set = new Set(str.split(""));
    return set.size===26;
}
