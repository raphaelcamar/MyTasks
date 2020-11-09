
export class changeName{

    static firstName(name) : string{
        const arr = name.split(' ');
        return arr[0];
    }

    static upperCaseName(name): string{
        var words = name.toLowerCase().split(" ");
        for (var a = 0; a < words.length; a++) {
            var w = words[a];
            words[a] = w[0].toUpperCase() + w.slice(1);
        }
        return words.join(" ");
    }
}