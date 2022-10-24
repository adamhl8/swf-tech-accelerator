# TypeScript Intro

**I highly recommend you take the code snippets here and paste them into both JavaScript (.js) and TypeScript (.ts) files (in VSCode) and see the kinds of errors/warnings you get.**

## What is TypeScript?

TypeScript is a strongly typed superset of JavaScript. There are 3 main aspects to TypeScript:

- The language itself
- The "compiler"
- The language server

### Type Annotations

Type annotations specify the types of variables, function parameters, etc.

In JavaScript:

```
const age = 30
const name = "Bob"

function foo(age, name) {
  // ...
}
```

In TypeScript:

```
const age: number = 30
const name: string = "Bob"

function foo(age: number, name: string) {
  // ...
}
```

In simple cases like this, you probably wouldn't add type annotations to the variables and instead let TypeScript infer the types. The function parameters _do_ need annotations because there is nothing to infer. More on that another day.

Also, there is much, much more to TypeScript than just type annotations.

### The "compiler"

TypeScript doesn't actually compile. It _transpiles_ into JavaScript.

- Compiling takes source code and translates it into machine code.
- Transpiling takes source code and translates it into other source code.

However, this TypeScript -> JavaScript translation is still generally referred to as compiling for ease of communication. The software that does this translation is called `tsc`, or TypeScript compiler.

This compliation is where type checking occurs. If there are errors in your code, TypeScript won't compile.

For example:

```
function printNameAndAge(name: string, age: number) {
  console.log(`${name} is ${age} years old.`);
}

const name = "Bob";
const age = "30";

printNameAndAge(name, age);
```

There will be an error on that last line because age is a string and `printNameAndAge` is expecting a number.

#### Type Erasure

To put it simply, TypeScript without types is just JavaScript. During compliation, type annotations and other type system constructs are removed to produce working JavaScript.

TypeScript:

```
const myNum: number = 10
const myString: string = "Hello"
```

Emitted JavaScript:

```
const myNum = 10;
const myString = "Hello";
```

By consequnce, this means that TypeScript does not (and cannot) add extra functionality on top of JavaScript. TypeScript has to end up as JavaScript, so it can't do anything "extra".

### The language server

The language server is the background process in your IDE that warns you of errors _before_ compilation. It would be pretty annoying to have to run `tsc` all the time just to check if there are errors.

## Why use TypeScript?

TypeScript provides two primary advantages:

- **Code saftey**
- **IDE integration**

## Code Saftey

Say you had the following JavaScript code:

```
const myString = "Hello";
console.log(myNumber);
```

This code will throw an error and crash because `myNumber` does not exist. In a normal JavaScript file, your IDE won't even warn you.

A more complex example:

```
const people = {
  person1: {
    firstName: "Bob",
    lastName: "Smith",
    age: 30
  },
  person2: {
    firstName: "Joe",
    age: 31
  }
}

console.log(people.person1.firstName)
console.log(people.person2.lastName)
console.log(people.person3.firstName)
```

If you run this with node, `console.log(people.person2.lastName)` will print undefined.

`console.log(people.person3.firstName)` will throw an error and cause your program to crash.

Both of these behaviors are probably unwanted. Fortunately, TypeScript won't allow you to compile this code until you fix the errors.

## IDE Integration

You've already seen some examples of how your IDE helps you out in the examples above. The following is a more specific example of how TypeScript interacts with libraries/modules.

Let's say you're using some library that provides a function called `getPeople()`. This function fetches some data from an endpoint and returns an object that looks like this:

```
{
  person1: {
    firstName: "Bob",
    lastName: "Smith",
    age: 30,
  },
  person2: {
    firstName: "Joe",
    age: 31,
  },
}
```

You could write some code that looks like this:

```
import getPeople from "./library.js";

const people = await getPeople();
console.log(people.person1.firstName);
```

Assuming that the library does _not_ provide types for its data, when you type `people.`, **your IDE gives you no hints as to what might exist on that object, and you could try to access some property that might not even exist.**

If the library does provide types, your IDE gives you autocomplete for what exists on the object and will warn you if you're trying to access something that doesn't exist.
