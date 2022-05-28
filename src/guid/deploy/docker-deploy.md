# Docker 部署

::: tip

[Databasir](https://github.com/vran-dev/databasir) 已经准备好了开箱即用的 Docker Image，只需要三步就能完成 Databasir  的部署

:::

## 目录

[[toc]]



## 环境要求

1. Docker
2. Mysql 5.7+



## 部署流程

1.  拉取镜像（更多版本[点击这里](https://registry.hub.docker.com/r/vrantt/databasir)查看）

```shell
docker pull vrantt/databasir:latest
```

2. 在 Mysql 中创建数据库 databasir

```sql
create database databasir;
```

3. 启动镜像，需要指定可用的 Mysql 的连接信息

```shell
docker run -p 8888:8080 --name my-databasir -e DATABASIR_DB_URL=127.0.0.1:3306 -e DATABASIR_DB_USERNAME=root -e DATABASIR_DB_PASSWORD=123456 vrantt/databasir:latest
```

其中的 `-e` 命令是传递配置信息给 databasir

- **DATABASIR_DB_PASSWORD**：数据库地址
- **DATABASIR_DB_USERNAME**：数据库用户名
- **DATABASIR_DB_PASSWORD**：数据库密码

启动完成后，通过 [http://localhost:8888](http://localhost:8888) 使用用户名密码登录系统

- 用户名：`databasir`
- 密码：`databasir`



## 完整参数

### DATABASIR_DB_URL

说明：数据库地址

示例：127.0.0.1:3306

必填：是



### DATABASIR_DB_USERNAME

说明：连接数据库的用户名

示例：root

必填：是



### DATABASIR_DB_PASSWORD

说明：连接数据库的密码

示例：127.0.0.1:3306

必填：是



### DATABASIR_JWT_SECRET

说明：生成用户登录凭证的秘钥

示例：abcd-1234-abcd-1234

必填：

- 单实例部署非必填，应用启动时会默认生成 UUID
- 多实例部署下一定得指定该配置值，并且多个实例需要保持一致



### PARAMS

必填：否

说明：

通过指定该参数可以实现覆盖任意内置配置的作用，使用该参数需要用户对 Databasir 的应用源码有一定的了解。

示例：

下面的命令就通过 `PARAMS` 参数覆盖了系统预置的 `spring.datasource.url` 配置，从而实现了在数据库连接 URL 后添加参数 `useSSL=false`

```shell
docker run -it -d --name my-databasir -e DATABASIR_DB_USERNAME=root -e DATABASIR_DB_PASSWORD=123456 -e PARAMS='--spring.datasource.url=jdbc:mysql://127.0.0.1:3306/databasir?useSSL=false' vrantt/databasir:latest -p 8888:8080
```



## 多实例部署

如果需要部署多个 Databasir 实例，有几点需要额外注意

**一、实例之间的 DATABASIR_JWT_SECRET 值需要保持一直**

Dataabsir 会使用该秘钥来生成、校验登录凭证，如果多个实例之间的值不一致就极有可能出现下面的情况

- 用户在实例 1登录成功后，使用 A 秘钥签发了凭证
- 用户请求实例 2接口，使用 B 秘钥验证凭证失败



**二、将多实例的驱动目录映射到同一个 Volume** 

用户上传的数据库连接驱动会保存到项目所在目录的 `drivers/` 文件夹下，如果多个实例之间不共享 Volume，就会出现

- 上传到了实例 1  的 `drivers/` 目录
- 实例 2 同步数据库时在当前目录差找不到驱动文件，就出现同步失败



## 测活接口

:::tip

如果你使用 K8s 部署，可能需要使用该接口

:::

```shell
GET /live
```

返回 200 即表示启动成功