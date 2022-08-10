# Command Line "Magic"

## "What's the difference between a terminal and a shell?"

- A **terminal is the computer application** you open (e.g. macOS Terminal, iTerm, etc). Also known as a terminal emulator. You need some kind of terminal app to be able to interact with a shell.
- A **shell is the actual program that interprets/processes your input**. e.g. zsh, bash, ash, sh, etc. On your MacBook, you are using the zsh shell within the Terminal (or maybe iTerm) application.

## "Where do commands like `cat` and `less` come from?"

- `cat`, `less`, and most of the commands you run are programs.
- Enter `type cat` into your terminal. This will tell you the location of the given program.
- Point being, these programs don't just magically exist, they are actual files/programs that you are executing by typing the name of the file.
- Shells are just programs too. `type zsh` will tell you the location of the zsh file/executable/program.
- `cd` into the folder that contains `cat` (usually something like `/usr/bin/`). You should see a bunch of other programs, some of which you will probably recognize.

## "What about `type`? Is that a program?"

- See what happens if you enter `type type`. It should tell you it's a shell built-in.
- A shell built-in is a function of a given shell (e.g. zsh). It exists within the zsh program itself.
- For example, `cd` is also a shell built-in. That means every shell (zsh, bash, etc) technically has its own implementation of `cd`.
- A "command" is a bit of a misnomer; pretty much anything you run in a command line is either a program or a shell built-in.

## "Wait, so why can I run `cat` from anywhere?"

- `cat` is (usually) in the `/usr/bin/` directory. This directory is on your path.
- Enter `echo $PATH`. This is your system's path, which is simply a list of directories.
- Any executable within any directory on your path is accessible from anywhere.
- You can add directories to your path, so you could have your own `bin` directory somewhere and if you wanted executables within that directory to be globally available, all you have to do is add your new `bin` directory to the path. (Lots of ways to do this, I recommend you google it.)

## How to figure out how to use command line programs/tools

- Most programs have a `--help` flag. For example, enter `cat --help`. It will tell you how you can use `cat`.
- Not every program has a `--help` flag.
- Use `man` (short for manual) instead. e.g. `man cat`.
- `man` can sometimes be more comprehensive, but generally `--help` and `man` will contain the same info.

**Further reading: https://seb.jambor.dev/posts/cd-is-not-a-program/** (I highly recommend you read this, it has some really good info.)
