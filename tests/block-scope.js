let someGlobal = "";

class Test {

	constructor() {

		this.someProperty = "";

	}

	someMethod() {

		return this.someProperty;

	}

	get someGetter() {

		return someGlobal;

	}

	set someSetter( value ) {

		someGlobal = value;

	}

}

console.log( new Test() );

function func() {}

func();
