default: dev

.PHONY: cli-docs
cli-docs:
	cd contrib/morty-cli-docs && go run main.go

.PHONY: dev
dev: cli-docs
	pnpm dev
