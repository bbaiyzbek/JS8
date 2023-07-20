// 1) Дан массив с элементами [1, 2, 3, 4, 5].
// С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const array = [1, 2, 3, 4, 5]
// const handleSum = (arg) => {
//     let result = 0
//     for (let index = 0; index < arg.length; index++) {
//         result += array[index];
//     }
//     return result;
// }
// console.log(handleSum(array))

////////////////////////////////////////////////////////////
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => sum

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //
// const handleSum = (arg) => {
//     let sum = 0;
//     for (let index = 0; index < arg.length; index++) {
//         sum += array[index];
//     }
//     return sum;
// }
// console.log(handleSum(array))

///////////////////////////////////////////////////////////////
///3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10].
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - 'Нет!'

const array = [1, 2, 5, 9, 4, 13, 4, 10]
const findNumber = (arg) => {
    let res = ''
    for (let i = 0; i < arg.length; i++) {
        if (array[i] === 3) {
            return res = 'Есть!'
        }
    }
    if(res){
        return res
    } else {
        return 'Нет!'
    }
}
console.log(findNumber(array))
