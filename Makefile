.PHONY: build-elpmp-staging
build-staging:
	@echo "Building staging environment..."
	docker compose -f docker/staging/docker-compose.yml build

.PHONY: start-elpmp-staging
start-staging:
	@echo "Starting staging environment..."
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-elpmp-staging
stop-staging:
	@echo "Stopping staging environment..."
	docker compose -f docker/staging/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-elpmp-staging
logs-staging:
	@echo "Tailing staging environment logs..."
	docker compose -f docker/staging/docker-compose.yml logs -f

.PHONY: healthcheck-elpmp-staging
healthcheck-staging:
	@echo "Running health check for staging environment..."
	docker compose -f docker/staging/docker-compose.yml ps

.PHONY: build-elpmp-production
build-production:
	@echo "Building production environment..."
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-elpmp-production
start-production:
	@echo "Starting production environment..."
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-elpmp-production
stop-production:
	@echo "Stopping production environment..."
	docker compose -f docker/production/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-elpmp-production
logs-production:
	@echo "Tailing production environment logs..."
	docker compose -f docker/production/docker-compose.yml logs -f

.PHONY: healthcheck-elpmp-production
healthcheck-production:
	@echo "Running health check for production environment..."
	docker compose -f docker/production/docker-compose.yml ps

.PHONY: clean-elpmp-secrets
clean-secrets:
	@echo "Cleaning up Docker secrets..."
	rm -rf ./secrets/*

.PHONY: prune
prune:
	@echo "Pruning unused Docker resources..."
	docker system prune -f --volumes

.PHONY: healthcheck
healthcheck:
	@echo "Running health check for all services..."
	docker compose ps

.PHONY: restart
restart:
	@echo "Restarting all services..."
	docker compose down --volumes --remove-orphans && docker compose up -d
