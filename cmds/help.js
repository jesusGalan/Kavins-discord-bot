module.exports.run = (message, err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        return;
    }
    let namelist = "";
    let desclist = "";
    let usage = "";

    let result = jsfiles.forEach((f, i) => {
        let props = require(`./${f}`);
        namelist = props.help.name;
        desclist = props.help.description;
        usage = props.help.usage;

        message.author.send(`**${namelist}** \n${desclist} \nusage: ${usage}`);
    });
}

module.exports.help = {
    name: "help",
    description: "Reenvia la lista de comandos posibles.",
    usage: "$help"
}