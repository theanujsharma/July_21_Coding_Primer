function count() {
    let num = 2;
    return function add(){
        return num = num + 2;
    }
}
console.log(count());
console.log(count());
console.log(count());

