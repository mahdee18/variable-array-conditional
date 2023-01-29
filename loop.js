// Foor loop(Practice-1)
for(var i=0; i<40; i++){
    console.log('Ajke amar mon valo nei!')
}
// Foor loop(Practice-2)
for(var i=58; i<=98; i++){
    console.log(i)
}
// Foor loop(Practice-3)
for(var i=412; i<=456; i+=2){
    console.log(i)
}
// Foor loop(Practice-4)
for(var i=581; i<=623; i+=2){
    console.log(i)
}
// For loop Syntax
// for(var i=0; i<20; i++){
//     console.log('Statement')
// }
// While loop syntax
// var i=0;
// while(i<20){
//     console.log('Statement')
//     i++
// }
// Practice -7
var technologies = ['HTML','CSS','Bootstrap','Tailwind',]
var i=0;
while(i<technologies.length){
    var tech = technologies[i]
    console.log(tech)
    i++
}

// Practice -8
var phoneName = ['Walton','Samsung','Lava','Nokia','Huawei','Motorala']
var i = 0;
while(i<phoneName.length){
    var phones = phoneName[i]
    console.log(phones)
    i++
}
// practice -9
var i = 36;
while(i<86){
    if(i==44){
        break
    }
    console.log(i)
    i++
}
// For loop
for(var i=36; i<86; i++){

    console.log(i)
    if(i==44){
        break
    }
}

// practice -10
var books = [200,120,300,340,420,280,100,199,180,155 ]
var i=0;
while(i<books.length){
    var bookPrice = books[i]
    if(bookPrice>200){
        console.log(bookPrice)

    }
    i++
}
// For loop
for(var i=0;i<books.length; i++){
    var bookPrice = books[i]
    if(bookPrice<200){
        console.log(bookPrice)
    }
}