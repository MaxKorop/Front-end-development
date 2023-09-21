import Human from "./human";

class Woman extends Human{
    constructor(name, age, weight){
        super(name, age, weight, 'female');
    }
    greeting()
    {
        console.log(`${super.greeting()} My name ${this.name}.`)
    }
}

export default Woman;