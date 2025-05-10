// direct method
const removeDuplicate1 = (arr) => {
    return [...new Set(arr)]; 
}

// using filter and index
const removeDuplicate2 = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index); 
}

// using reduce
const removeDuplicate = (arr) => {
    return arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []); 
}



// export function run(){
 console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
//} 