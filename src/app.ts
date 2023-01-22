function reverse<T>(arr: readonly T[]):  T[] {
    return [...arr].reverse();
}

class Collection<T> {
    constructor (private items: T[]) {

    }

    add (item: T): this{
        this.items.push(item)
        return this 
    } 

    first (): T | null {
        return this.items[0] || null
    }
}


const a = new Collection<number>([1, 2])
const c = a.add(3)
const b = a.first()
