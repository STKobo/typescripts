type User = {firstname : string, lastname: string}
type Identity<ArgType> = (arg: ArgType) => ArgType 
type Username = keyof User
const User = {
    firstname: "John",
    lastname: "Doe",
    age: 32
}
type User = typeof user


function consoleSize<Type extends {length: number}>(arg: Type): Type{
    console.log(arg.length)
    return arg
}

const abb = consoleSize(["3", 1])

function identity<ArgType>(arg: ArgType): ArgType{
    return arg;
}

function first<Type>(arg: Type[]): Type {
    return arg[0]
}

const aa: Array<string | number> = first(["aze", "bze", 3]);

const a: string = "Hello"
const b = 3
const c = true
const arr = ["aze", "lol", 3]
const user: User = {firstname: "Kim", lastname: "Karda"}
const date: Date = new Date()
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {    
    return 3
}
const compteur = <HTMLInputElement>document.querySelector('#compteur')

function printID(id: number | string) :void {
    console.log(id.toString());
}


/*
const compteur = document.querySelector('#compteur')!
let i = 0; 

const increment = (e: Event) => {
    e.preventDefault()
    i++;
    const span = compteur?.querySelector('span')
    if(span){
        span.innerText = i.toString()
    }
}

/*
function printId(id : string | number) {
    if(typeof id==="number"){
        console.log((id*3).toString())
    } else {
        console.log(id.toUpperCase())
    }
}

function example (a: string | Date){
    if(a instanceof Date){
        a
    }
}

function devine(a: MouseEvent | HTMLInputElement){
    if("value" in a ){
        a
    }
}

compteur?.addEventListener('click', increment)
