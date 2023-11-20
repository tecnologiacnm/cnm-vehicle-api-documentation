# Previsão de execução

Toda requisição de `POST`, `DELETE` e `UPDATE` não é processada em tempo real, É enviada para uma fila, que por sua vez será processada conforme nossa infra estiver escalada e tamanho da fila. 

Para obtermos informações sobre o status de um item na fila e anteciparmos as ações que serão executadas, implementamos um cabeçalho denominado `x-status-queue`. Esse cabeçalho conterá detalhes sobre todas as etapas previstas para a mensagem, proporcionando uma visão abrangente do seu processamento. Por exemplo:

- cria um anúncio que ainda não existe, será retornado um http code 202
- ao fazer um GET desse anúncio, se ele ainda não foi processado, será retornado um http code 202 e no header irá conter oque irá acontecer com ele:

```json
[
    {
        "jobId": "create_vehicle-776-testecnm",
        "messageType": "create_vehicle",
        "endpoint": "/vehicles/2220231109222sa1",
        "timestamp": "2023-11-16T14:34:29.516Z"
    }
]
```

nesse caso, podemos interpretar que essa mensagem foi adicionada 16/11/2023 às 14:34,  e é referente a um cadastro, esse header poderia ter mais de uma ação, visto que é um array de objetos, abaixo os atributos desse header.

| Atributo | Tipo | Descrição |
| --- | --- | --- |
| jobId | string | Identificador único do trabalho (job). |
| messageType | ENUM | CREATE_VEHICLE - indica criação de um veículo.
| timestamp | number | Horário de adição da ação na fila em UTC-3, importante, se houver mais de uma ação, ela será executada por ordem de entrada. |
| endpoint | string | Endpoint associado à mensagem. |

# messageType ENUM 
| messageType                 | Descrição                                           |
|-----------------------------|-----------------------------------------------------|
| `UPDATE_VEHICLE`            | Indica alteração de um veículo.                     |
| `DELETE_VEHICLE`            | Indica exclusão de um veículo.                      |
| `UNPUBLISH_VEHICLE`         | Indica desativação de um anúncio.                   |
| `UPDATE_VEHICLE_PUBLICATION`| Indica inclusão de um destaque em um anúncio ativo. |
| `PUBLISH_VEHICLE`           | Ativa um anúncio.                                   |
