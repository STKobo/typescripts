function reverse<T>(arr: readonly T[]):  T[] {
    return [...arr].reverse();
}

class A {
    private a = 3

    log () {
        console.log(this.a)
    }
}

const aInstance = new A()
aInstance.log()
