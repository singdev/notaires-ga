let editor = null;

async function loadEditor(content) {
    editor = new EditorJS({
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

async function saveContent() {
    const res = await editor.save();
    document.querySelector('#content').value = JSON.stringify(res);
}

function fetchArticle() {

}