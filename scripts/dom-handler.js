const DOMHANDLER= function(parentSelect){
    const parent = document.querySelector(parentSelect)

    if (!parent) throw new Error("Parent not found")

    return {
        load(module){
            parent.innerHTML=module;
        }
    }
}

