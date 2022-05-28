---
home: true
actions:
  - text: Github
    link: https://github.com/vran-dev/databasir
    type: secondary
  - text: 快速开始
    link: /guid/index/
    type: primary
features:
  - title: 自动化
    details: 自动同步数据库结构并生成文档、UML.
  - title: 版本化
    details: 多版本文档存储，一键查看版本差异
  - title: 团队化
    details: 扁平化的角色管理，变更自动邮件通知
  - title: 适配广泛
    details: 除了熟知的传统 RDBMS 外，也支持 Hive、Clickhouse 等数仓
  - title: 简单易用
    details: 致力于提供一个简单易用的数据库文档管理平台！
  - title: 拥抱开源
    details: 前后端代码完全开源
footer: Apache2 Licensed | Copyright ©vran
---



## Docker Compose 快速启动

1. 创建 `docker-compose.yaml` 并粘贴以下内容

```yaml
version: "3.7"

services:
  mysql:
    image: mysql:latest
    ports:
      - 3306:3306
    environment: 
      MYSQL_ROOT_PASSWORD: 123456

  databasir:
    image: vrantt/databasir:latest
    links:
      - mysql
    ports:
      - 8888:8080
    environment:
      DATABASIR_DB_URL: mysql:3306
      DATABASIR_DB_USRNAME: root
      DATABASIR_DB_PASSWORD: 123456
      DATABASIR_JWT_SECRET: databasir
```

2. 启动

```shell
docker-compose up -d
```

3. 访问  `localhost:88888` 并使用 databasir / databasir 登录