# Conditional Operators & Short-Circuiting

## Conditional Operators

- There are 3 conditional operators in Java: `&&`, `||`, and `?:` (aka the ternary operator).
- Conditional operators work on boolean expressions, but the values themselves don't need to be booleans (primitive).

```
boolean bool1 = true;
boolean bool2 = true;
if (bool1 && bool2) {
  // do stuff
}

// What happens if num1 = 5?

int num1 = 1;
int num2 = 2;
if (num1 == 1 || num2 == 2) {
  // do stuff
}
```

- `bool1` and `bool2` are booleans, so they can be used directly.
- `num1` and `num2` are ints, but by using a comparison operator, the comparison evaluates to a boolean. `num1 == 1` is `true`.
- In the following, will the code in the if statement run?

```
boolean bool1 = true;
boolean bool2 = true;
if (!bool1 || bool2) {
  // do stuff
}
```

- Yes, `!bool1` is saying "if `bool1` is false", which it's not, so the `||` operator checks the next condition. `bool2` is true, so the code runs.

## Short-Circuiting

- What is the following doing exactly?
- `if (bool1 && bool2)`
- It is _not_ checking if `bool1` and `bool2` are true _at the same time_.
- Short-circuiting is a programming concept where conditions are checked only if needed.
- `if (bool1 && bool2)` first checks if `bool1` is true, and if it is, it then checks `bool2`.
- The if statement is really only looking at the last condition that was evaluated.
- What is printed to the console in the following code?

```
public class App {
  public static void main(String[] args) {
    if (foo() && bar() && foobar()) {
      System.out.println("done");
    }
  }

  private static boolean foo() {
    System.out.println("foo");
    return true;
  }

  private static boolean bar() {
    System.out.println("bar");
    return false;
  }

  private static boolean foobar() {
    System.out.println("foobar");
    return true;
  }
}
```

- `foo()` returns true, so it then checks `bar()`, but `bar()` returns false.
- Since the `&&` operator requires the previous condition to be true, `foobar()` never runs.
- So you would see:

```
foo
bar
```

- Because of short-circuiting, you can't rely on every method in your if statement being called.
