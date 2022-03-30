<h2 align="center">13 comandos (úteis) que vão salvar sua vida no git</h2>

### Dando push com apenas 2 códigos

### Ajustando a descrição do último commit publicado

### Comando Reverter um commit da árvore

### Comando para duplicar um commit

### Logando histórico no terminal

### Comando para unir todos os commits em um pr

### Comando armazenar alterações sem usar branch

6 Renomeando a branch principal para não ter erros

- git branch -M nameBranch

9 Comando para descobrir bugs na aplicação

- git biset

10 Comando para resetar a master para o estado inicial do repositório

- git reset --hard origin/master | git clean -df

11 Comando para voltar a ramificação anterior

- git checkout -

12 Abrindo um repo na web

- apertar . | terminal funciona normalmente para - alterar as informações

13 Comando para excluir commit

- git reset --hard HEAD~1

## Dando push com apenas 2 códigos

código que irá utilizar:

```
git commit -am "simples assim!"
```

Você também pode configurar um alias que irá auxiliar ainda mais a escrita de código, primeiro cofigure seu alias:

```
git config --global alias.ac "commit -am"
```

depois é só digitar seu commit

```
git ac "nice!"
```

## Ajustando a descrição do último commit publicado

código que irá utilizar:

```
git commit --amend -m "esse commit irá atualizar o último commit da árvore"
```

Se quiser atualizar o último commit sem usar mudar o nome é só utilizar a flag --no-edit

```
git commit --amend --no-edit
```

Não se esqueça que quando se utilzia ammend o push deve aplicar a flag

```
git push oringin master --force
```

pois o commit irá sobrescrever a branch principal.

## Comando Reverter um commit da árvore

Com toda certeza você já deve ter passado pelo desespero de subir algo na master e por algum motivo inusitado quebrou o ambiente de produção, bom para esses casos de desespero existe o `git revert`.

```
git revert #hash-your-commit
```

## Comando para duplicar um commit

Provavelmente você já deve ter passado pela situação de precisar duplicar um código de uma branch para outra, e então você com sua astucia foi la e literalemente replicou o código no ctrl+c e ctrl+v, para esses casos exite o `git cherry-pick`.

Primeiro vá até a branch que deseja colar seu commit e no terminal digite

```
git cherry-pick #hash-your-commit
```

## Logando histórico no terminal

Git log serve par você analisar commits, histórico e até a posição que está em uma determinada branch.

```
git log
```

Utilizando as flags abaixo você consegue ter uma maior comparação com as outras branchs

```
git log --graph --oneline --decorate
```

## Comando para unir todos os commits em um pr

Outra problema recorrete que você já deve ter enfrentado em suas perambulações no git é mergear uma branch com muitos commits na master e automaticamente sua raiz (branch master) fica suja com varios commits da sua ramificação anterior que não são necessários.
Existem duas formas de se fazer essa combinação a primeira é usando a [UI do gitHub](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)
E a segunda via terminal, primeiro você precisa digitar

```
git rebase master --interactive
```

Assim que você executar vai se deparar com uma tela como esta

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

Nesta tela está descrito tudo o que você poderá fazer para a sua fila de commit e aplicando o squash em todos os commits basicamente estará dizendo ao git para unificar todos eles, desta forma:

```
pick 1as20490 feature completed (ESTE É O COMMIT QUE SERÁ USADO)
squash 1w032423 refactor box
squash 3sw94599 refactor ui
```

depois é só utilizar o comando:

```
git push oringin master -f
```

E pronto seus commits foram unificados

## Comando armazenar alterações sem usar branch

Você já realizou alguma alteração e teve algum receio de publicar em uma branch, as vezes por motivos de vergonha ou até mesmo porque ainda não acha que seja o momento de expor isso ao time? Bom para esse tipo de caso o git tem o comando de [git stash](https://git-scm.com/docs/git-stash)

Primeiro termine sua alteração e digite

```
git stash pop
```

Automaticamente o git irá salvar essa alteração sem publicar na branch e para resgalar a qualquer momento ee só digitar

```
git stash save yourNameSave
```

Após isso você pode listar suas stashs assim:

```
git stash list
```

E para utilizar a stash basta apenas digitar:

```
git stash aplly yourNameSave
```

Após isso é só mandar o push para branch.
