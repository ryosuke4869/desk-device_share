# nodeのstable版を公式ページから確認し、DockerHubからalpineベースのものを指定
FROM node:16.13.2-alpine

# docker-compose.ymlからWORKDIRの値を受け取る
ARG WORKDIR

# コンテナのホームディレクトリを設定する
ENV HOME=/${WORKDIR}

# コマンド実行する作業ディレクトリの設定する
WORKDIR ${HOME}

# Alpineのリポジトリから最新インデックスを取得し、npm自体も最新版に更新する
RUN apk update
COPY package.json .
RUN npm install

