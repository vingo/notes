// 
let arr = [5, 3, 2, 7, 1, 6, 5]
//桶排序 要求：从高到底 ,值最大是10

let tong = new Array(11) //ar.length 个空桶

for(let i= 0; i <= 10; i++){
    tong[i] = 0
}
arr.forEach((v) => {
    tong[v] = tong[v] ? tong[v] + 1 : 1 
})
tong.forEach((v, i) => {
        v ? console.log('>>>order: >>>:', i) : ''  //升序
})
//----冒泡排序-------
/**
 *1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 *2.第一轮的时候最后一个元素应该是最大的一个。
 *1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。 
 *3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
 */
let score =  [4, 23, 2, 0, 3]
let len = score.length
console.log('>>>>>>>>>>>>冒泡排序---------------------------')
console.log('冒泡排序 before：', score)
for(let i = 0; i < len; i++) {
    // console.log(`>>>>>>:i= ${i}`)
    for(let j = 0; j < len-i-1; j++) {
        // console.log(`>>>>>>:j= ${j},score[i]= ${score[i]}, score[j]= ${score[j]}, score[j]= ${score[j+1]}`)
        if(score[j] < score[j+1]) {
            let x = score[j]
            score[j] = score[j+1]
            score[j+1] = x
        }
    }
    // console.log(`>>>>>>:i = ${i}, `, score)
}
console.log('冒泡排序 after：', score)

//----快速排序-------解析：快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。

function quickSort(elements) {
    if(elements.length <= 1) {
        return elements
    }
    let midIndex = Math.floor(elements.length/2) // 中间点 索引
    let midVal = elements.splice(midIndex, 1)[0] ;//中间点 值
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < elements.length; i++) {
        if(elements[i] < midVal) {
            leftArr.push(elements[i])
        } else {
            rightArr.push(elements[i])
        }
    }
    console.log(`mid: ${midVal}, midIndex: ${midIndex}, left : ${leftArr}, right: ${rightArr}`)
    return quickSort(leftArr)
}
let quicky_arr =   [4, 23, 2, 9, 20, 3, 5, 10]
console.log('>>>>>>>>>>>>快速排序---------------------------')

console.log('快速排序 before', quicky_arr)
console.log('快速排序 after：', quickSort(quicky_arr))
console.log('>>>>>>>>>>>>插入排序---------------------------')
/**
 * （1） 从第一个元素开始，该元素可以认为已经被排序

 （2） 取出下一个元素，在已经排序的元素序列中从后向前扫描

 （3） 如果该元素（已排序）大于新元素，将该元素移到下一位置

 （4） 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置

 （5）将新元素插入到下一位置中

 （6） 重复步骤2
 */
function insertSort(elements) {
    for (let i = 1; i < elements.length; i++) {
        //console.log(`i= ${i}, elements[i-1]= ${elements[i-1]}, elements[i]= ${elements[i]} `, elements[i]< elements[i-1])
        if(elements[i] < elements[i-1]) {
            let guard = elements[i]
            let j = i - 1
            elements[i] = elements[j]
            while(j >= 0 && guard < elements[j]) {
                elements[j+1] = elements[j]
                j--
                //console.log('arr: ', elements)
            }
            elements[j+1] = guard
        }
    }
    return elements
}
let elements =   [4, 23, 2, 9, 5]
console.log('插入排序 before', elements)
console.log('插入排序 after：', insertSort(elements))
console.log(`---------------------------------------`)
function removeDumpVal(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        console.log('...: ', nums, 'cur i: ',i,j)
    }
    console.log('end: ',nums)
    return i + 1;
}
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        
        // if (nums[j] != nums[i]) {
        //     i++;
        //     nums[i] = nums[j];
        // } else {
        console.log(1,nums, `i=${i}, j=${j}`)
            if(j - i == 2) {
                i=j+1
                nums.splice(j,1)
            }
            console.log(2,nums, `i=${i}, j=${j},len=${nums.length}`)
        // }
    }
    console.log('end.', nums)
    return i + 1;
};
/*
let numbers = [0,0,1,1,1,2,2,3,3,4]
console.log('start arr: ', numbers)
removeDumpVal(numbers)
*/

removeDuplicates('111223'.split('').map(s=>+s))

