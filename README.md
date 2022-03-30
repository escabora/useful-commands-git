# Comandos (úteis) que vão salvar sua vida no git

- [Dando push com apenas 2 códigos](#dando-push-com-apenas-2-códigos)
- [Ajustando a descrição do último commit publicado](#ajustando-a-descrição-do-último-commit-publicado)
- [Comando Reverter um commit da árvore](#comando-reverter-um-commit-da-árvore)
- [Comando para duplicar um commit](#comando-para-duplicar-um-commit)
- [Logando histórico no terminal](#logando-histórico-no-terminal)
- [Comando para unir todos os commits em um pr](#comando-para-unir-todos-os-commits-em-um-pr)
- [Comando armazenar alterações sem usar branch](#comando-armazenar-alterações-sem-usar-branch)
- [Comando para resetar a master para o estado inicial do repositório](#comando-para-resetar-a-master-para-o-estado-inicial-do-repositório)
- [Comando para excluir commit](#comando-para-excluir-commit)
- [Comando para voltar a ramificação anterior](#comando-para-voltar-a-ramificação-anterior)
- [Abrindo um repo na web](#abrindo-um-repo-na-web)
- [Comparando Branchs](#comparando-branchs)
- [Comando para descobrir bugs na aplicação](#comando-para-descobrir-bugs-na-aplicação)

# Vámos la

## Dando push com apenas 2 códigos

código que irá utilizar:

```
git commit -am "that simple!"
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
git stash
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

## Comando para resetar a master para o estado inicial do repositório

Sabe quando você faz algo que não sabe o que fez e precisa urgente voltar a master para seu estado inicial, ou seja o estado do commit atual do publicado no repo:

```
git reset --hard origin/master
```

se sobre algum arquivo que precise esxcluir apenas use:

```
git clean -df
```

## Comando para excluir commit

Esse comando requer muita atenção e certeza do que está faznedo uma vez realizado não poderá voltar a exclusão.
Para executar a exclusão do último commit, basta escrever:

```
git reset --hard HEAD~1
```

Primeiro, o github trabalha com ramificações e commits e a declaração de HEAD significa que é a ramificação (branch) atual já o "~" significa a "até" do commit e o número a posição do commit. Traduzindo: exclua sem questionamento da branch que estou os commits até 1.

Quanto mais adições, mais commits ele irá excluir, excluindo os últimos dois commits da master.

```
git reset --hard HEAD~2
```

Exclua sem questionamento da branch que estou os commits até 2.

## Comando para voltar a ramificação anterior

Você já criou uma branch depois foi para a master e precisou voltar para sua branch e se esqueceu o nome e teve a maior dor de cabeça? Pois, o comando abaixo é para você:

```
git checkout -
```

Este comando sempre irá voltar a branch anterior que você estava.

### Abrindo um repo na web

Este é muito simples. Apenas aperte "." em qualquer repositório na web no github e ele irá virar um visual studio code, o mais legal é que você pode abrir o terminal e escrever sem problema algum, inclusive commitar seus projetos.

### Comparando Branchs

Você já teve o problema de precisar analisar dois códigos que foram refatoras para entender o que aconteceu? Pois é quando o código é pequeno tudo bem, agora quando é gigante ai ta o problema, bom para esses casos o github tem o [github compare](https://docs.github.com/pt/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)
Ele nada mais faz que criar uma ramificação temporária para analisar duas branchs com vários commits.

## Comando para descobrir bugs na aplicação

Se você já teve algum erro com a sua aplicação depois de alguns commits e não sabe qual foi. Esse código pode te ajudar. Basicamente o github realiza uma busca binária para dizer se o commit está bom ou ruim e com isso o git vai fechando até encontrar qual commit inseriu o erro.

Para iniciar a leitura digite:

```
git bisect
```

Com isso ele te retornará suas opções

```
usage: git bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|view|replay|log|run]
```

Depois iniciar a analise digitando:

```
git bisect start
```

Neste momento o github te apresentará o commit atual e com ele você dira ao github se aquele commit está bom ou ruim, se o commit tiver ruim (aplicação continua quebrada) digite:

```
git bisect bad
```

Logo após o git irá executando um rollback de commit à commit na sua árvore até que você diga para ele que o commit que ele está é de fato um commit sem erro, digitando:

```
git bisect good
```

Neste momento o github irá descrever a quantidade de revisões necessárias para encontrar o commit com erro. E a cada linha você irá dizer se aquele comiit está como `git bisect bad` ou `git bisect good`.
No final ele irá exibir didaticamente o commit que lhe causou o erro.
