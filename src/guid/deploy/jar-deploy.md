# Jar 包部署

## 目录

[[toc]]

## 环境要求

1. Java 11+
2. Mysql 5.7+



::: tip

由于使用了 Java 11 以后提供的特性，所以至少需要 Java 11+

:::

## 部署流程

1. 在 [Github RELEASE](https://github.com/vran-dev/databasir/releases) 页面下载最新版应用 Databasir.jar (你也可以选择克隆项目后自行构建)
2. 将 Databasir.jar 上传到服务器

3. 执行启动命令

```java
java -jar databasir.jar --databasir.db.url=127.0.0.1:3306 --databasir.db.username=root --databasir.db.password=123456
```

系统启动完成以后，在浏览器中访问 [http://localhost:8080]( http://localhost:8080) 就可以进入登录压面，输入系统默认创建的管理员账号即可登入

- 用户名：databasir
- 密码：databasir



## 参数说明

| 参数名                        | 说明                  | 是否必传 | 默认值                         |
| ----------------------------- | --------------------- | -------- | ------------------------------ |
| databasir.db.url              | 数据库地址            | 是       |                                |
| databasir.db.username         | 数据库用户名          | 是       |                                |
| databasir.db.password         | 数据库密码            | 是       |                                |
| databasir.jwt.secret          | 生成登录 Token 的秘钥 | 否       | uuid                           |
| databasir.db.driver-directory | 自定义驱动的上传目录  | 否       | 项目所在位置的 `drivers/` 目录 |



::: warning

如果部署了多个 databasir 实例，一定要指定 `databasir.jwt.secret` 的值，并且保持多个实例之间的值一致

:::



## 配置文件

除了在命令行指定参数启动外，还可以通过配置文件来保存

在 Databasir.jar 所在目录创建 config 目录，并在目录下创建 `application.properties` 配置，配置中配置 MYSQL 的用户名、密码和连接

```properties
# 端口号，默认 8080
server.port=8080
# 数据库用户名
databasir.db.username=root
# 数据库密码
databasir.db.password=123456
# 数据库地址
databasir.db.url=127.0.0.1:3306
# 登录 token 生成秘钥，可选
databasir.jwt.secret=${random.uuid}
```

通过 `java -jar Databasir.jar` 启动应用即可







