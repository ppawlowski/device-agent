# Makefile for the Go CLI application

.PHONY: build run test clean

build:
	go build -o go-cli-app ./cmd/main.go

run: build
	./go-cli-app

test:
	go test ./...

clean:
	go clean
