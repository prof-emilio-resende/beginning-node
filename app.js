// Ferramentas
// node, npm, nvm

function main() {
    console.log('main is running...')
    // Dynamic types
    
    text = 'text'
    integerNumber = 10
    decimalNumber = 10.3
    arr = []
    dictionary = {}

    console.log(typeof(text))
    console.log(typeof(integerNumber))
    console.log(typeof(decimalNumber))
    console.log(typeof(arr))
    console.log(typeof(dictionary))

    console.log(Object.getPrototypeOf(arr).constructor.name)
    console.log(Object.getPrototypeOf(dictionary).constructor.name)

    console.log(arr instanceof Array)

    // using a builder function
    loggerBuilder('[funny logs]')('business message...')
    new Logger('[funny logs]').log('business message...')

    // filters
}

function loggerBuilder(prefix) {
    return function(txt) { console.log(`${prefix}[customized functional logging]: ${txt}`) }
}

function Logger(prefix) {
    this._prefix = prefix;
    this.log = function(message) {
        console.log(prefix + "[customized oo logging]: " + message);
    }
}

main()
