# Programming Habits

## Naming Conventions

- Classes start with a capital letter: `class BankAccount`
- Variables and methods start with a lowercase letter: `int accountBalance`, `int getAccountBalance()`
- Instances of a class are not capitalized since they are ultimately a variable.

```
// class
public class BankAccount {

  // variable
  private int accountBalance;

  // class method
  public int getAccountBalance() {
    return this.accountBalance;
  }

  public void setAccountBalance(int accountBalance) {
    this.accountBalance = accountBalance;
  }
}

public class MyProgram {

  public static void main(String[] args) {

    // instance of BankAccount called myBankAccount (variable)
    BankAccount myBankAccount = new BankAccount();
  }
}
```

![Naming conventions in Java](https://cdn.ttgtmedia.com/rms/onlineimages/naming_conventions_in_java-f.png)

## DRY Principle - Don't Repeat Yourself

- Also known as DIE: Duplication is Evil
- DRY is NOT the end-all be-all of good programming. You can overdo DRY.
- Say you wanted to change the error message in the following code. You'd have to edit each line individually, which is tedious and error-prone.

```
public class myProgram {

  public static void main(String[] args) {

    if (someError) {
      System.out.println("The following error occured: " + someError + " Please email michael.a.grinston.mil@army.mil for further support.");
    }

    if (someError) {
      System.out.println("The following error occured: " + someError + " Please email michael.a.grinston.mil@army.mil for further support.");
    }

    if (someError) {
      System.out.println("The following error occured: " + someError + " Please email michael.a.grinston.mil@army.mil for further support.");
    }

    if (someError) {
      System.out.println("The following error occured: " + someError + " Please email michael.a.grinston.mil@army.mil for further support.");
    }
  }
}
```

- Instead, we can put the error message in a method. Thay way, if we want to update the message, we only have to edit one thing.

```
public class myProgram {

  public static void main(String[] args) {

    if (someError) {
      logError(someError);
    }

    if (someError) {
      logError(someError);
    }

    if (someError) {
      logError(someError);
    }

    if (someError) {
      logError(someError);
    }
  }

  void logError(Error someError) {
    System.out.println("The following error occured: " + someError + " Please email michael.a.grinston.mil@army.mil for further support.");
  }
}
```

## "Flatten" your if statements

- If you are checking many conditions in a row, you may end up with many nested if statements.
- This makes your code hard to read and hard to maintain.
- In the following example, we're assuming that check2 is dependent on check1 and so on. Otherwise, there would be no need to nest them.

```
public static void main(String[] args) {

  boolean check1 = true;
  boolean check2 = true;
  boolean check3 = true;
  boolean check4 = true;
  boolean check5 = true;

  if (check1 == true) {
    System.out.println("check1 passed.");

    if (check2 == true) {
      System.out.println("check2 passed.");

      if (check3 == true) {
        System.out.println("check3 passed.");

        if (check4 == true) {
          System.out.println("check4 passed.");

          if (check5 == true) {
            System.out.println("check5 passed.");
          }
        }
      }
    }
  }
}
```

- Instead of nesting your if statements, you can "flatten" your code by checking if your conditions are NOT true.
- The following code does the exact same thing, but is easier to read and maintain.

```
public static void main(String[] args) {

  boolean check1 = true;
  boolean check2 = true;
  boolean check3 = true;
  boolean check4 = true;
  boolean check5 = true;

  if (check1 == false) {
    return;
  }

  System.out.println("check1 passed.");

  if (check2 == false) {
    return;
  }

  System.out.println("check2 passed.");

  if (check3 == false) {
    return;
  }

  System.out.println("check3 passed.");

  if (check4 == false) {
    return;
  }

  System.out.println("check4 passed.");

  if (check5 == false) {
    return;
  }

  System.out.println("check5 passed.");
}
```

- Depending on the code, you might return void, return some value, or throw an error.
- The main takeaway is that if you ever find yourself nesting a lot of code, see if there is a way to flatten it.

Further reading: [Top 18 Best Practices for Writing Super Readable Code](https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)
