#### 记账应用的后台服务

#### 登陆接口
#####  /user/create

* 方法：post

|参数名|类型|
|----|---------|
|name|string|
|password|string|number|

#### 获取全部用户账户
##### /user/pageList

* 方法：get

#### 更新用户标签（记账类型的标签）
##### /user/tags
* 方法：put

|参数|类型|含义|
|----|---|----|
|name|string|用户名|
|tags|array|改用的全部tags数据|

#### 添加一条记录
##### /user/record(用户的记录)

* 方法：post

|参数|类型|含义|
|----|---|----|
|name|string|用户名|
|tags|array|改用的全部tags数据|