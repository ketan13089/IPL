// const fs = require('fs');

// fs.readFile('example.txt','utf8',(err,data) =>{
//     if(err){
//         console.log("There is error");
//         return;
//     }else{
//         console.log("File data:"+data);
//     }
// })


const fs = require('fs');


const inpt = "This is new text"


function writeFile(content) {
    fs.writeFile('example.txt', content, (err) => {
        if (err) {
            console.log("There is error:", err)
        } else {
            console.log("File written successfully with input!")
        }

    })
}

function readFile() {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.log("There is error");
            return;
        } else {
            console.log("File data:" + data);
        }
    })
} 

function appendFile(content){
    fs.appendFile("example.txt",content,(err)=>{
        if(err){
            console.log('Error appending file:',err)
            return;
        }else{
            console.log('Content has been appended!')
        }
    })
}

function fileExist(){
    console.log("does file exist? ")
    if(fs.existsSync('example.txt')){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

function createDirectory() {
    fs.mkdir('./newDir', { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            return;
        }
        console.log('Directory has been created!');
    });
}


// writeFile(inpt)
// setTimeout(() => readFile(),1000)
// setTimeout(() => appendFile(' This is appended text'),2000)
// setTimeout(() => readFile(),3000)
// setTimeout(() => fileExist(),4000)
// setTimeout(() => createDirectory,5000)
// createDirectory()
