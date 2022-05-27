# 如何构建并启动项目？

[Databasir](https://github.com/vran-dev/databasir) 项目的前后端是独立仓库维护的，分别位于

- 后端：https://github.com/vran-dev/databasir
- 前端：https://github.com/vran-dev/databasir-frontend

在开发阶段采用的是前后端分离的模式进行，但最终发行的应用是一个单体，这是为了最大程度的减少用户的部署复杂度。



## 后端

### 环境准备

- Java 11+
- Mysql 5.7+



### 项目构建

1. clone 项目

```shell
git clone https://github.com/vran-dev/databasir.git
```

2. 进入项目所在目录

```shell
cd databasir
```

3. 构建项目

```shell
./gradlew api:build
```



### 项目启动
1. 在 MYSQL 中创建数据库
```sql

create database databasir;

```

2. 在 `api/src/main/resources/application-local.properties`  中修改以下配置

```properties
# 默认端口
server.port=8080
# 数据库连接
databasir.db.url=localhost:3306
# 数据库用户名
databasir.db.username=root
# 数据库密码
databasir.db.password=123456
```

3. 启动项目

```shell
./gradlew api:run -Dspring.profiles.active=local
```



启动完成以后在控制台将看到以下信息

```shell
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.5.11)
 ---
2022-05-26 09:37:41.353  INFO 9512 --- [           main] c.d.c.i.e.s.SystemStartedEventSubscriber : system data init finished
2022-05-26 09:37:41.411  INFO 9512 --- [           main] com.databasir.DatabasirApplication       : Started DatabasirApplication in 9.265 seconds (JVM running for 10.055)
```

启动完成以后就可以通过 `http://localhost:8080` 访问应用，默认的用户名/密码为 databasir/databasir