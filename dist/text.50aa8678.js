const string = `
<style>
    body: {
        background: pink;
    }
</style>
`;
let n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
console.log(n);
let id = setInterval(()=>{
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    console.log(n);
}, 300);

//# sourceMappingURL=text.50aa8678.js.map
