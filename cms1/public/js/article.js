let editor = null;

async function loadEditor(content){
    let json = null;
    let hasError;
    try {
        json = JSON.parse(content);
        hasError = false;
    } catch(err){
        hasError = true;
        console.log(err)
    }

    if(hasError){
        editor = new EditorJS({
        })
    } else {
        editor = new EditorJS({
            data: JSON.parse(content)
        })
    }
}

async function saveContent(){
    const res = await editor.save();
    document.querySelector('#content').value = JSON.stringify(res);
}

function fetchArticle(){

}