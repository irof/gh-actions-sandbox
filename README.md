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

## step間の参照

> 各ステップは、ランナー環境のそれ自体のプロセスで実行され、ワークスペースとファイルシステムにアクセスします。 ステップはそれ自体のプロセスで実行されるため、環境変数を変更しても、ステップ間では反映されません。

see [GitHub Actionsのワークフロー構文](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)の `jobs.<job_id>.steps`

環境変数は直接は使えない。

ワークスペースとファイルシステムを共有しているのでファイル経由でもいいかもだけれどそれも大袈裟なので、[GitHub Actionsの開発ツール](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions)を使う。

`set-env` で環境変数。 `set-output` で出力パラメータに設定。

```
echo "::set-env name=ENV_HOGE::hoge"
echo "::set-output name=OUTPUT_FUGA::fuga"
```

他のstepからの読み方は次の通り。

```
echo "${ENV_HOGE}"
echo "${{ steps.<outputしたstepのid>.outputs.OUTPUT_FUGA }}"
```

stepのidはコンテキスト参照をしなければ使用する必要はないので、小さいものなら環境変数が手軽に思える。


