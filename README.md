# useful commands that will save your git life

- [Pushing with only 2 codes](#pushing-with-only-2-codes)
- [Adjusting the description of the last published commit](#adjusting-the-description-of-the-last-published-commit)
- [Command Revert a commit from the tree](#command-reverter-a-commit-from-the-tree)
- [Command to duplicate a commit](#command-to-duplicate-a-commit)
- [Logging history in terminal](#logging-history-in-terminal)
- [Command to merge all commits into one pr](#command-to-merge-all-commits-into-one-pr)
- [Command changes stored without using branch](#command-store-changes-without-branching)
- [Command to reset the master to the initial state of the repository](#command-to-reset-the-master-to-the-initial-state-of-the-repository)
- [Command to delete commit](#command-to-delete-commit)
- [Command to go back to previous branch](#command-to-go-back-to-previous-branch)
- [Opening a web repo](#opening-a-web-repo)
- [Comparing branches](#comparing-branches)
- [Command to discover application bugs](#command-to-discover-application-bugs)

# Let's go

## Pushing with only 2 codes

code you will use:

```
git commit -am "that simple!"
```

You can also set up an alias which will help writing code even more, first set up your alias:

```
git config --global alias.ac "commit -am"
```

then just type your commit

```
git ac "cool!"
```

## Adjusting the description of the last published commit

code you will use:

```
git commit --amend -m "this commit will update the last commit in the tree"
```

If you want to update the last commit without using rename just use the --no-edit flag

```
git commit --amend --no-edit
```

Don't forget that when using ammend the push must apply a flag

```
git push oringin master --force
```

because the commit will overwrite the main branch.

## Command Revert a tree commit

Surely you must have gone through the desperation of uploading something to the master and for some unusual reason it broke the production environment, good for these cases of desperation there is `git revert`.

```
git revert #hash-your-commit
```

## Command to duplicate a commit

probably you have already gone through the situation of needing to duplicate a code from one branch to another, and then you with your cunning went there and literally replicated the code in ctrl+c and ctrl+v, for these cases there is `git cherry-pick `.

First go to the branch where you want to paste your commit and in the terminal type

```
git cherry-pick #hash-your-commit
```

## Logging history in terminal

Git log is for you to analyze commits, history and the position in a given branch.

```
git log
```

Using the flags below you can have a greater comparison with other branches

```
git log --graph --oneline --decorate
```

## Command to merge all commits into one pr

Another recurring problem that you may have already faced in your wanderings in git is to merge a branch with many commits into master and automatically its root (branch master) becomes dirty with several commits from your previous branch that are not necessary.
There are two ways to do this combination the first is using the [gitHub UI](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull -request-merges/setting-commit-squashing-for-pull-requests)
And the terminal duplicate, first you need to type

```
git rebase master --interactive
```

Once you run it, you will see a screen like this one.

```
choose 1as20490 completed feature
choose refactoring box 1w032423
choose 3sw94599 refactor UI

# Commands:
# p, choose <commit> = use commit
# r, reword <commit> = use commit, but edit commit message
# e, edit <commit> = use commit, but stop to amend
# s, squash <commit> = use the commit, but match the previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = execute command (rest of line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = current HEAD label with a name
# t, reset <label> = reset HEAD for a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# . create a merge commit using the original merge commit
# . message (or the oneline, if no original merge commit was
# . specified). Use -c <commit> to rephrase the commit message.
#
# These lines can be reordered; they run from top to bottom.
#
# If you remove a line here THIS COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

This screen describes everything you can do for your commit queue and applying squash to all commits will basically be done.
