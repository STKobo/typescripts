
/*
const a: string = "Hello"
const b = 3
const c = true
const arr = ["aze", "lol", 3]
const user: {firstname: string, [key: string]: string} = {firstname: "Kim", lastname: "Karda"}
const date: Date = new Date()
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {    
    return 3
}
const compteur = <HTMLInputElement>document.querySelector('#compteur')

function printID(id: number | string) :void {
    console.log(id.toString());
}
*/

const compteur = document.querySelector('#compteur')
let i = 0; 

const increment = (e: Event) => {
    e.preventDefault()
    i++;
    const span = compteur?.querySelector('span')
    if(span){
        span.innerText = i.toString()
    }
}


compteur?.addEventListener('click', increment)
