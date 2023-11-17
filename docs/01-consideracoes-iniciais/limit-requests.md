# Considerações Iniciais > Limite de requisições
Todos os clientes possuem um limite de requisições simultâneas que podem ser enviadas para a api.

O limite é dado pelo número de requests a cada 10 segundos. Ou seja, você poderá enviar x requisições para a api em uma janela de 10 segundos.

Caso algum destes limite seja excedido você receberá uma resposta com um código HTTP 429 `(Too Many Requests).`

Para controlar o limite de requisições, toda resposta retornará os headers abaixo. Você poderá utilizá-los para medir o tempo de espera das próximas requisições.

| Header | Descrição |
| --- | --- |
| x-ratelimit-limit | O limite máximo de requisições. |
| x-ratelimit-remaining | A quantidade atual de requisições que podem ser enviadas. |
| x-ratelimit-reset | Tempo até o limite resetar. |
| retry-after | Tempo que a aplicação deverá esperar para enviar a próxima requisição, se recebeu um status 429. |