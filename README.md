# github-actions

READMEで見たところメモ

https://help.github.com/ja/actions

## 用意されている環境変数

see [環境変数の利用](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/using-environment-variables)

## `{{ }}` ってなんぞ

コンテキストを参照する構文。

see [GitHub Actions のコンテキストおよび式の構文](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions)

## job間の参照

環境変数的なのでやりたいのだけど、jobは独立したコンテナなのでartifactを介するしかない？

see [ワークフローのジョブ間でデータを受け渡す](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts#passing-data-between-jobs-in-a-workflow)