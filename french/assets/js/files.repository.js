
let key = 'files';

function getFiles() {
    let files = localStorage.getItem(key);

    if (files) {
        return JSON.parse(files)
    } else {
        localStorage.setItem(key, JSON.stringify([]));
        files = [];
        return files;
    }
}

function getFile(id) {
    let files = getFiles()

    if (!files || !files.length) return null;

    return files.find(f => f.id == id)
}

function addFile(file) {
    let files = getFiles();
    files.push(file)
    localStorage.setItem(key, JSON.stringify(files));
}

function updateFile(model) {
    let files = getFiles()
    if (!files || !files.length) return null;
    let index = files.findIndex(m => m.id == model.id);

    if (index > -1) {
        files[index] = model;
        localStorage.setItem(key, JSON.stringify(files));
    }
}

function deleteFile(id) {
    let files = getFiles()
    if (!files || !files.length) return null;
    let files__ = files.filter(m => m.id != id);

    localStorage.setItem(key, JSON.stringify(files__));
}

function deleteAll() {
    localStorage.setItem(key, JSON.stringify([]));
}
