<template>
  <div>
    <v-container>
      <v-card
          class="mx-auto mt-5 mb-12"
          max-width="1000"
      >
        <v-img
            class="align-end"
            height="200px"
            :src="blog.bannerPicture"
        >
        </v-img>
        <div class="px-2 pt-4 pb-8">
          <v-card-title class="text-h4">
            {{ blog.title }}
          </v-card-title>
          <v-card-subtitle class="py-2">
            {{ blog.createTime }}
          </v-card-subtitle>
          <v-card-text class="pb-0 text--primary">
            <div>{{ blog.digest }}</div>
          </v-card-text>
        </div>

        <v-divider></v-divider>
        <div class="mx-8 my-8">
          <article class="markdown-body" v-html="blog.renderedContent"></article>
        </div>
        <v-divider/>
        <v-row class="mt-4 pb-4" justify="center">
          <v-col cols="auto">
            <v-btn color="error" v-if="blog.appreciationOn">
              赞赏作者
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn color="success">
              分享到微信
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import marked from 'marked';
import 'github-markdown-css';
export default {
  name: "ArticleB",

  data () {
    return {
      blog: {
        title: '单调栈的用法',
        author: 'Euphonium',
        digest: '本文介绍数据结构中单调栈的用法',
        createTime: '2020-09-11',
        bannerPicture: 'https://coiggahou.gitee.io/cjpark/img/data_structure.png',
        renderedContent: '',
        mdContent: '# 下载和安装\n' +
            'Community Server 免费\n' +
            '\n' +
            'https://dev.mysql.com/downloads\n' +
            '\n' +
            '# 术语\n' +
            '\n' +
            '|Term|Description|Remarks|\n' +
            '|----|-----------|-------|\n' +
            '|DB|Database|\n' +
            '|DBMS|Database Management System|如 MySQL|\n' +
            '|RDBMS|Relational Database Management System|关系型数据库管理系统|\n' +
            '|DBA|Database Administrator|\n' +
            '|SQL|Structure Query Language|\n' +
            '|DDL|Data Definition Language|如 `CREATE`，`ALTER`，`DROP`|\n' +
            '|DML|Data Manipulation Language|如 `SELECT`，`INSERT`|\n' +
            '|DCL|Data Control Language||\n' +
            '\n' +
            '# 命令\n' +
            '## 检查安装状态\n' +
            '```powershell\n' +
            'mysql --version\n' +
            '```\n' +
            '\n' +
            '## 服务启动与停止\n' +
            '\n' +
            '启动服务\n' +
            '```sql\n' +
            'net start mysql0130  # your sql service name\n' +
            '```\n' +
            '停止服务\n' +
            '```sql\n' +
            'net stop mysql0130\n' +
            '```\n' +
            '\n' +
            '## 登录\n' +
            '\n' +
            '命令行\n' +
            '```powershell\n' +
            'mysql -h 主机名 -P 端口号 -u root -p\n' +
            '```\n' +
            '\n' +
            '## 基本操作\n' +
            '```sql\n' +
            '# 查看所有数据库\n' +
            'SHOW DATABASES\n' +
            '\n' +
            '# 打开指定数据库\n' +
            'USE 数据库名\n' +
            '\n' +
            '# 查看当前数据库的所有表\n' +
            'SHOW TABLES\n' +
            '\n' +
            '# 查看非当前库的所有表\n' +
            'SHOW TABLES FROM 数据库名\n' +
            '\n' +
            '# 查看表结构\n' +
            'DESC 表名\n' +
            '\n' +
            '# 在当前库中创建表\n' +
            'CREATE TABLE 表名\n' +
            '(\n' +
            '    列名 数据类型,\n' +
            '    列名 数据类型,\n' +
            '    ...\n' +
            ')\n' +
            '```\n' +
            '\n' +
            '## 常用数据类型\n' +
            '|DataType|Expression|\n' +
            '|---|---|\n' +
            '|整型|int|\n' +
            '|字符串|varchar(max_size)|\n' +
            '\n' +
            '## SELECT 语句\n' +
            '```sql\n' +
            '# 选择所有\n' +
            'SELECT * FROM 表名\n' +
            '\n' +
            '# 选择指定列\n' +
            'SELECT 列名1,列名2... FROM 表名\n' +
            '\n' +
            '# 选择所有互不相同的值\n' +
            'SELECT DISTINCT 列名 FROM 表名\n' +
            '\n' +
            '# 选择某字段满足一定条件的行\n' +
            'SELECT * FROM 表名 WHERE 与字段相关的条件表达式\n' +
            '\n' +
            '# 多条件选择\n' +
            'SELECT * FROM 表名 WHERE (条件1 AND 条件2) OR 条件三\n' +
            '\n' +
            '# 枚举范围内选择\n' +
            'SELECT * FROM 表名 WHERE 字段 IN (值1, 值2, ...)\n' +
            '\n' +
            '# 区间范围内选择\n' +
            'SELECT * FROM 表名 WHERE 字段 BETWEEN 值1 AND 值2\n' +
            '\n' +
            '# 模糊选择\n' +
            'SELECT * FROM 表名 WHERE 条件 LIKE 带通配符的表达式\n' +
            'SELECT * FROM 表名 WHERE 条件 NOT LIKE 带通配符的表达式\n' +
            '\n' +
            '# 限制选择的条目数\n' +
            'SELECT * FROM 表名 WHERE 条件 LIMIT 最多显示记录条数\n' +
            '\n' +
            '# 查询常量/表达式\n' +
            'SELECT 常量/表达式\n' +
            '\n' +
            '# 给查询字段起别名\n' +
            'SELECT 字段1 AS 字段1别名, 字段2 AS 字段2别名 ... FROM 表名 WHERE 条件\n' +
            '```\n' +
            '\n' +
            '## INSERT 语句\n' +
            '```sql\n' +
            '# 在指定表中插入完整新行\n' +
            'INSERT INTO 表名 VALUES(值1,值2...)\n' +
            '\n' +
            '# 在指定表中插入新行并指定某些列的数据\n' +
            'INSERT INTO 表名 (列1,列2...) VALUES(值1,值2...)\n' +
            '```\n' +
            '\n' +
            '## UPDATE 语句\n' +
            '```sql\n' +
            '# 更新指定位置数据\n' +
            'UPDATE 表名 SET 字段名 = 新值 WHERE 条件表达式\n' +
            '```\n' +
            '\n' +
            '## DELETE 语句\n' +
            '```sql\n' +
            '# 删除指定行\n' +
            'DELETE FROM 表名 WHERE 条件表达式\n' +
            '\n' +
            '# 删除所有行\n' +
            'DELETE * FROM 表名\n' +
            '```\n' +
            '\n' +
            '## 其他语句\n' +
            '```sql\n' +
            '# 查看 MySQL 版本\n' +
            'SELECT VERSION()\n' +
            '```\n' +
            '\n' +
            '## 通配符\n' +
            '\n' +
            '`%` 代替一串任意长度的字符\n' +
            '`_` 代替一个字符\n' +
            '`[ABC]` 代替“A或B或C”\n' +
            '`[!ABC]` 上述结果取反\n' +
            '>[charlist] 通配符在 MySQL 中不适用，若需要则必须使用正则表达式\n' +
            '\n' +
            '## 关于 + 号\n' +
            '+ 不像 Java 中那样，SQL 表达式中的 `+` 只充当运算符，没有连接符功能\n' +
            '+ 两个操作数都是数值型，则做加法运算\n' +
            '+ 若操作数中有字符型，则将字符型转换为数值，若转换不成功，就当作 0\n' +
            '+ 一旦操作数中有 `null` 则运算结果必定为 `null`\n' +
            '\n' +
            '## 常用函数\n' +
            '```sql\n' +
            '# 连接若干个字符串\n' +
            'COMCAT(字符串A, 字符串B, ...)\n' +
            '\n' +
            '/*\n' +
            ' * 例如，将 first_name 和 last_name 字段合并，中间加空格\n' +
            ' * SELECT COMCAT(first_name, \' \', last_name) FROM mytable\n' +
            ' */\n' +
            '```\n' +
            '\n' +
            '## 细节规范\n' +
            '+ SQL 对大小写不敏感，但建议关键字大写，具体数据名小写\n' +
            '+ 字符串由**单引号**包围\n' +
            '+ 单行注释用 `#`，多行注释与 java 相同\n' +
            '+ SQL 中不区分字符和字符串',
        tags: [
          {
            name: '栈'
          },
          {
            name: '单调栈'
          }
        ]
      }
    }
  },
  created() {
    this.blog.renderedContent = marked(this.blog.mdContent);
  },
  methods: {
  }
}
</script>



<style>

.markdown-body pre code {
  background-color: rgba(0,0,0,0) !important;
}
.markdown-body pre code {
  font-size: 1.2em
}
</style>