# Shell Scripting

## "How do I chain commands?"

- You can use the `&&` operator.
- For example, `echo hello && echo goodbye`
- Anything after the `&&` will only run if the previous command ran successfully.
- Try running `ehco hello && echo goodbye`. (The first `echo` is misspelled.)

## Variables

- Just like in programming, within your shell you can store values (mainly strings) in variables. (Also, shell scripting _is_ programming.)
- Create a variable: `hello="Hello World!"`
- You must reference variables with the `$` character.
- `echo $hello` will work. `echo hello` will not. (It prints "hello", but not your variable.)

## "How do I write a script?"

- Create a new file called `hello.sh`: `nano hello.sh`
  - Generally scripts will end in `.sh`, but file extensions don't matter to the shell and most shell programs.

```
my_message="Hello World!"
echo $my_message
my_message="Goodbye!"
echo $my_message
```

- Try running your script: `./hello.sh`
  - Remember, `./hello.sh` is saying "look inside the current directory for `hello.sh`". `hello.sh` is looking for a globally available command named `hello.sh`.
- By default, files are not executable.
- Make it executable using `chmod`: `chmod +x hello.sh`
  - `chmod` is a program that allows you to change file permissions.
  - `+x` allows the file to be executed.
- You should be able to run your script now.
- Your output should be:

```
Hello World!
Goodbye!
```

## "What if I want to be able to run my script from anywhere?"

- Create a directory called `scripts`: `mkdir scripts`
- Move `hello.sh` into `scripts`: `mv hello.sh scripts/`
- Try running your script.
- Your script isn't on path, so your shell can't find it.
- Look at your current path: `echo $PATH`
- Add your `scripts` directory to path: `PATH=$PATH:~/scripts`
  - We are setting `PATH` equal to itself and adding our directory.
- You should see your directory appended to path: `echo $PATH`
- Try running your script again.
- Changing your path like this is not permanent, it only applies to the current shell session.
- If you wanted your `scripts` directory to always be on path, you can add the above command to your `.zshrc` or equivalent.

**Further reading:**

- [Shell Scripting for Beginners](https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux)
- [How to Add a Directory to PATH in Linux](https://linuxize.com/post/how-to-add-directory-to-path-in-linux)
