let editor = null;

async function loadEditor(content) {
    console.log("Editor");
    editor = new EditorJS({
        readonly: true,
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            embed: {
                class: Embed,
                inlineToolbar: false,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    },
                },
            },
        },
        data: content
    })
}

