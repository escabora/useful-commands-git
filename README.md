# Comandos (úteis) que vão salvar sua vida no git

- [Pushing with only 2 codes](#pushing-with-only-2-codes)
- [Adjusting the description of the last published commit](#adjusting-the-description-of-the-last-published-commit)
- [Command Revert a tree commit](#command-revert-a-tree-commit)
- [Command to duplicate a commit](#command-to-duplicate-a-commit)
- [Logging history in the terminal](#logging-history-in-the-terminal)
- [Command to merge all commits into one pr](#command-to-merge-all-commits-into-one-pr)
- [Command store changes without using branch](#command-store-changes-without-using-branch)
- [Command to reset the master to the initial state of the repository](#command-to-reset-the-master-to-the-initial-state-of-the-repository)
- [Command to delete commit](#command-to-delete-commit)
- [Command to go back to previous branch](#command-to-go-back-to-previous-branch)
- [Opening a repo on the web](#opening-a-repo-on-the-web)
- [Comparing Branchs](#comparing-branchs)
- [Command to discover application bugs](#command-to-discover-application-bugs)

# Let's go

## Pushing with only 2 codes

code you will use:

```
git commit -am "that simple!"
```

You can also set up an alias that will further assist in writing code, first set up your alias:

```
git config --global alias.ac "commit -am"
```

then just type your commit

```
git ac "nice!"
```

## Adjusting the description of the last published commit

code you will use:

```
git commit --amend -m "esse commit irá atualizar o último commit da árvore"
```

If you want to update the last commit without renaming it, just use the --no-edit flag

```
git commit --amend --no-edit
```

Don't forget that when using ammend push you must apply the

```
git push oringin master --force
```

because the commit will overwrite the main branch.

## Command Revert a tree commit

Surely you must have been desperate to upload something to the master and for some unusual reason it broke the production environment, well for these desperate cases there is `git revert`.

```
git revert #hash-your-commit
```

## Command to duplicate a commit

You've probably been in the situation where you need to duplicate code from one branch to another, and then you cunningly went there and literally replicated the code in ctrl+c and ctrl+v, for these cases there is `git cherry-pick`.

First go to the branch you want to paste your commit into and in the terminal type

```
git cherry-pick #hash-your-commit
```

## Logging history in the terminal

Git log is for you to analyze commits, history, and even where you are in a given branch.

```
git log
```

Using the flags below you can get a better comparison with the other branches

```
git log --graph --oneline --decorate
```

## Command to merge all commits into one pr

Another recurring problem that you may have faced in your git wanderings is merge a branch with many commits into the master and automatically your root (master branch) gets dirty with many commits from your previous branch that are not needed.
There are two ways to do this merge, the first is using the [gitHub UI](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)
And the second via terminal, first you need to type

```
git rebase master --interactive
```

As soon as you run it you will get a screen like this

```
pick 1as20490 feature completed
pick 1w032423 refactor box
pick 3sw94599 refactor ui

# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

On this screen is described everything that you can do for your commit queue and by applying squash to all commits you are basically telling git to unify them all, like so:

```
pick 1as20490 feature completed (THIS IS THE COMMIT THAT WILL BE USED)
squash 1w032423 refactor box
squash 3sw94599 refactor ui
```

then just use the command:

```
git push oringin master -f
```

And now your commits have been unified

## Command store changes without using branch

Have you ever made a change and had some fear of publishing it in a branch, sometimes for reasons of shame or even because you don't think it's the right time to expose it to the team? Well, for this kind of case, git has a [git stash](https://git-scm.com/docs/git-stash) command 

```
git stash
```

Automatically git will save this change without publishing it to the branch and to rebuild at any time just type

```
git stash save yourNameSave
```

After that you can list your stashs like this:

```
git stash list
```

And to use the stash all you have to do is type:

```
git stash aplly yourNameSave
```

After that just send the push to branch.

## Command to reset the master to the initial state of the repository

You know when you do something that you don't know what you have done and you urgently need to get the master back to its initial state, i.e. the state of the current commit published in the repo:

```
git reset --hard origin/master
```

if there is a file you need to delete, just use it:

```
git clean -df
```

## Command to delete commit

This command requires a lot of attention and certainty of what you are doing.
To do the deletion of the last commit, just write

```
git reset --hard HEAD~1
```

First, github works with branches and commits and the HEAD statement means that it is the current branch and the "~" means the "until" of the commit and the number the position of the commit. Translating: delete without question from the branch I am the commits up to 1.

The more additions, the more commits it will delete, excluding the last two commits of the master.

```
git reset --hard HEAD~2
```

Delete without question from the branch I am in commits up to 2.

## Command to go back to previous branch

Have you ever created a branch then went to the master and had to go back to your branch and forgot the name and had a big headache? Well, the command below is for you:

```
git checkout -
```

This command will always return to the previous branch you were on.

### Opening a repo on the web

This one is very simple. Just hit "." on any github web repository and it will turn into visual studio code, the cool thing is that you can open the terminal and write without any problems, including commiting your projects.

### Comparing Branchs

Have you ever had the problem of needing to analyze two codes that were refactored to understand what happened? Well, when the code is small it's ok, now when it's giant that's the problem, well for these cases github has the [github compare](https://docs.github.com/pt/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)
It does nothing more than create a temporary branch to analyze two branches with multiple commits.

## Command to discover application bugs

If you have ever had an error with your application after a few commits and you don't know what it was. This code can help you. Basically github performs a binary search to tell you if the commit is good or bad and with that git will close until it finds which commit inserted the error.

To start reading, type:

```
git bisect
```

With this it will return your options

```
usage: git bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|view|replay|log|run]
```

Then start the analysis by typing:

```
git bisect start
```

At this point github will present you with the current commit and with it you will tell github if that commit is good or bad, if the commit is bad (application is still broken) type:

```
git bisect bad
```

Then git will perform a commit-to-commit rollback in your tree until you tell it that the commit it is actually a commit without error by typing:

```
git bisect good
```

At this point, github will describe how many revisions are needed to find the commit with error. And on each line you will say whether that commit is as `git bisect bad` or `git bisect good`.
At the end it will didactically display the commit that caused you the error.
