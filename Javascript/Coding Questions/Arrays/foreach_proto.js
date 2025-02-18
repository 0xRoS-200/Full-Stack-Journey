if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (userFn) {
        const original_Array = this;
        for(let i = 0; i < original_Array.length; i++){
            userFn(original_Array[i], i);
        }
    }
}


const arr1 = [10, 20, 30, 50, 100, 200, 87];

const ret = arr1.myforEach((value, index) => console.log(`Value at Index ${index} is ${value}`));
console.log(ret);