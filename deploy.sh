#!/usr/bin/env bash
git pull
yarn
yarn run build

kill $(lsof -t -i:4100)
serve -s build -l 4100 &