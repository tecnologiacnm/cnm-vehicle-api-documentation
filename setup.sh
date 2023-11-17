#!/bin/bash

# Criar diretórios
mkdir -p "docs/01-consideracoes-iniciais"
mkdir -p "docs/02-veiculos"
mkdir -p "docs/03-cliente"
mkdir -p "docs/04-publicacao"
mkdir -p "docs/05-previsao-execucao"
mkdir -p "docs/06-fluxograma"

# Criar arquivos dentro dos diretórios
touch "docs/01-consideracoes-iniciais/test-environment.md"
touch "docs/01-consideracoes-iniciais/production-environment.md"
touch "docs/01-consideracoes-iniciais/authentication.md"
touch "docs/01-consideracoes-iniciais/limit-requests.md"

touch "docs/02-veiculos/vehicle-endpoints.md"
touch "docs/02-veiculos/vehicle-object.md"
touch "docs/02-veiculos/vehicle-return-object.md"
touch "docs/02-veiculos/vehicle-accessories.md"
touch "docs/02-veiculos/vehicle-brands.md"

touch "docs/03-cliente/client-endpoints.md"
touch "docs/03-cliente/plan-information-object.md"

touch "docs/04-publicacao/publication-endpoints.md"
touch "docs/04-publicacao/publication-information-object.md"

touch "docs/05-previsao-execucao/status-queue.md"

touch "docs/06-fluxograma/flowchart.md"
