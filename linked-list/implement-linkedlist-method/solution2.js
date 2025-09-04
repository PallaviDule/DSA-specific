function createNewNode (value) {
    return {value, next: null}
}

function appendValue(list, value) {
    
}

const LinkedList = () => {
    return {
        head: null,
        append(value) {appendValue(this, value)}
    }
}