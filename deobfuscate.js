const ObfusRegex = /^([A-z]+)-(?![^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;

function deobfuscate() {
    var items = document.body.getElementsByTagName('*');
    var classes = [];

    for (let i of items) if (i.className != '') classes.push(i);
    classes = classes.filter(e => !(e.className instanceof SVGAnimatedString));
    classes.forEach(e => e.classList.forEach(c => {if (ObfusRegex.test(c) && !e.className.includes(' ' + c.match(ObfusRegex)[0].slice(0, -1))) e.className += ' ' + c.match(ObfusRegex)[0].slice(0, -1)}));
    
    console.log('%c[DiscordDeobfuscate] %cDeobfuscated DOM elements', 'color: #7289DA', 'color: inherit')
}

deobfuscate()