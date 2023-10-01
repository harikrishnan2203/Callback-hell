// call back
//  g=>reet(user){
//     console.log(`Hello $(user) welcome to guvi`)
// }

//  f=>oo(cb){
//     res = prompt("Enter your name")
//     cb(res)
// }

// foo(greet)


let head = document.createElement("h1");
head.innerHTML = "";
head.style.color = "White";
head.style.textAlign = "center";
head.style.paddingTop = "15%";
head.style.fontSize = "3rem";

document.body.append(head);

setTimeout(()=> {
    document.querySelector('h1').innerText = `Counter: ${10}`;
    setTimeout(()=> {
        document.querySelector('h1').innerText = `Counter: ${9}`;
        setTimeout(()=> {
            document.querySelector('h1').innerText = `Counter: ${8}`;
            setTimeout(()=> {
                document.querySelector('h1').innerText = `Counter: ${7}`;
                setTimeout(()=> {
                    document.querySelector('h1').innerText = `Counter: ${6}`;
                    setTimeout(()=> {
                        document.querySelector('h1').innerText = `Counter: ${5}`;
                        setTimeout(()=> {
                            document.querySelector('h1').innerText = `Counter: ${4}`;
                            setTimeout(()=> {
                                document.querySelector('h1').innerText = `Counter: ${3}`;
                                setTimeout(()=> {
                                    document.querySelector('h1').innerText = `Counter: ${2}`;
                                    setTimeout(()=> {
                                        document.querySelector('h1').innerText = `Counter: ${1}`;
                                        setTimeout(()=> {
                                            document.querySelector('h1').innerText = `Welcome to Guvi`;
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

