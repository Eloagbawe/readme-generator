const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let questions = {
    name : "What is your name? ",
    project : "What is the name of your project? ",
    description: "What is your project about? ",
    version: "What version is your project? ",
    language : "What programming languages are used in your project? "
}

rl.question(questions.name, function(name) {
    rl.question(questions.project, function(project){
        rl.question(questions.description, function(description) {
            rl.question(questions.version, function(version){
                rl.question(questions.language, function(language){
                    fs.open("./README.md", "w", (err, fd) => {
                        if (err) throw err;   
       
                        fs.writeFile("./README.md", `# :information_source:${questions.name} \n${name}\n# :information_source:${questions.project} \n${project}\n# :memo:${questions.description} \n${description}\n# :black_nib:${questions.version} \n${version}\n# :black_nib:${questions.language} \n${language}`,(err, data) =>{
                            if (err) throw err;
                            console.log("README saved!");
       
                     
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});

rl.on("close", function() {
    console.log("\nThank you!");
    process.exit(0);
});