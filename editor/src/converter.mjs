
function template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

const BLOCK_TYPES_TEMPLATE = {
    Image: template`\tconst ${"id"} = new Blocks.Image("${"source"}", {x:${"x"},y:${"y"},width:${"width"},height:${"height"}});`,
    CellAnimation: template`\tconst ${"id"} = new Blocks.CellAnimation("${"source"}", {x:${"x"},y:${"y"},width:${"width"},height:${"height"}, loop:${"loop"}, auto:${"auto"}});`,
    Sound: template`\tconst ${"id"} = new Blocks.Sound("${"source"}", {loop:${"loop"}, auto:${"auto"}});`,
    Text: template`\tconst ${"id"} = new Blocks.Text("${"text"}", {style:"${"style"}", x:${"x"},y:${"y"},width:${"width"},height:${"height"}});`,
}

const Converter = (project, name) => {
    let sourceCode = `function ${name}()\n{\n\n`;
    sourceCode += "// Å gjøre: Gi bedre navn til alle tingene.\n\n";
    project.items.forEach(item => {
        sourceCode += BLOCK_TYPES_TEMPLATE[item.type](item);
        sourceCode += "\n";
    });

    sourceCode += "}";
    return sourceCode;
}

export default Converter