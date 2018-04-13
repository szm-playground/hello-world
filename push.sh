#!/usr/bin/env bash

docker build -t ihakula/hello-world .
docker push ihakula/hello-world:latest
