# -----------------------------------------------------------------------------
# SETUP
# -----------------------------------------------------------------------------
.PHONY: network
network:
	@docker network create there > /dev/null 2> /dev/null || true

.PHONY: install
install:
	@docker build -f Dockerfile.installer -t therepm/installer:latest .

.PHONY: bootstrap
bootstrap: network install

# -----------------------------------------------------------------------------
# BUILD
# -----------------------------------------------------------------------------
.PHONY: all
all: install build

.PHONY: build
build:
	@docker-compose build

# -----------------------------------------------------------------------------
# SCRIPTS
# -----------------------------------------------------------------------------
# .PHONY: db-migrate
# db-migrate:
# 	@docker-compose run --rm api yarn db:migrate

# .PHONY: db-drop
# db-drop:
# 	@docker-compose run --rm api yarn db:drop

# .PHONY: db-seed
# db-seed:
# 	@docker-compose run --rm api yarn db:seed

# .PHONY: db-reset
# db-reset:
# 	@docker-compose run --rm api yarn db:reset

.PHONY: prisma-deploy
prisma-deploy:
	@docker-compose run --rm api yarn prisma deploy


# -----------------------------------------------------------------------------
# DEVELOPMENT
# -----------------------------------------------------------------------------
.PHONY: start
start:
	@docker-compose up

.PHONY: stop
stop:
	@docker-compose kill

.PHONY: restart
restart: stop start