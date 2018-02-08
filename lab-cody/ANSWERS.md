### Scope and Context
Given the code blocks below, answer the set of questions below. Please copy the
questions to your lab directory in a file called `ANSWERS.md`.

Explain how hoisting allows the `printGreeting` function to be called before
where it's actually written in the file.

```js
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```
### Answer 1
The reason that printGreeting can be hoisted is because it is a named function and when the page first loads it automatically "proof reads" the page looking for key words like function and it essentially preloads it so that when it actually starts to run the page it sees that printGreeting() is called first it recolects the function and is able to run it because it is a named function.




Explain why this function called `printGoodbye` can't be executed until after
it's actually written in the file.

```js
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```

### Answer 2 
This one wont run for two reasons the equal sign operator makes it so that on the first call it cant see past that because it only reads the const but cant go any further because of that so the second call would work.
but i think there was a copy paste typo and the printGreeting should be printGoodbye.