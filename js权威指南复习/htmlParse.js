function variableParse(html) {
    const results = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const allElements = doc.querySelectorAll('*');

    allElements.forEach(el => {
        const meta2dId = el.getAttribute('data-meta2d-id');

        Array.from(el.attributes).forEach(attr => {
            const { name, value } = attr;
            let match;
            const variableRegex = /{{\s*([\w.+\-? :()']*)\s*}}/g;

            while ((match = variableRegex.exec(value)) !== null) {
                const variableName = match[1];
                if (name === 'style') {
                    const styleRules = value.split(';');
                    styleRules.forEach(rule => {
                        const [prop, val] = rule.split(':');
                        if (val && val.includes('{{')) {
                            const variableMatch = variableRegex.exec(val);
                            if (variableMatch) {
                                const styleValue = variableMatch[1];
                                results.push({
                                    prop: 'style',
                                    styleProp: prop.trim(),
                                    'meta2d-id': meta2dId,
                                    name: styleValue
                                });
                            }
                        }
                    });
                } else {
                    results.push({
                        prop: name,
                        name: variableName,
                        'meta2d-id': meta2dId
                    });
                }
            }
        });

        // 处理文本内容中的变量
        const childNodes = Array.from(el.childNodes);
        childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                let match;
                const variableRegex = /{{\s*([\w.+\-? :()']*)\s*}}/g;
                while ((match = variableRegex.exec(node.nodeValue)) !== null) {
                    const variableName = match[1];
                    results.push({
                        prop: 'textContent',
                        name: variableName,
                        'meta2d-id': meta2dId
                    });
                }
            }
        });
    });

    return results;
}


let html = `<div class="{{colorRed?'textRed' : 'textBlue'}}" id="text_" style="color:{{ colorRed ? 'red':'blue'}};transition:all 1s ease;transform: {{colorRed?'':'translateX(100px)'}};font-size: {{colorRed?'10px':'20px'}}" @click="updateColor()">
            {{ data.msg }}6666哈哈哈哈{{data.msg2}}
                <div style="color: {{colorRed?'blue':'red'}}">
                    {{data.msg }}
                </div>
                {{data.msg}}
        </div>`

console.log(variableParse(html));
