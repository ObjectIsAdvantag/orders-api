
DOCKER_ACCOUNT=objectisadvantag

dimage:
	docker build -t $(DOCKER_ACCOUNT)/ordersapi .

drun:
	docker run -it -p 8080:1337 $(DOCKER_ACCOUNT)/ordersapi:latest
