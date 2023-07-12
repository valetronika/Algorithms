const string ='частотный словарь букв русского (или английского) текста.'
const letters={}
function getfrequent(string) {
    for (const char of string) {
        if(char.match(/[a-zA-Zа-яА-Я]/) ){
            if (letters[`${char}`]) {
                letters[`${char}`]++
            }else{
                letters[`${char}`]=1
            }
        }
    }
}
getfrequent(string)

console.log(letters);
// {
//     'ч': 1,
//     'а': 4,
//     'с': 6,
//     'т': 4,
//     'о': 6,
//     'н': 2,
//     'ы': 1,
//     'й': 2,
//     'л': 3,
//     'в': 2,
//     'р': 2,
//     'ь': 1,
//     'б': 1,
//     'у': 2,
//     'к': 4,
//     'г': 3,
//     'и': 3,
//     'е': 1
//   }