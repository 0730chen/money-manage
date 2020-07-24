
1. 定义数据的Mongodb的Schema结构
    ```javascript 1.8
   export const BlogSchema = new mongoose.Schema({
       title: String,
       description: String,
       body: String,
       author: String,
       date_posted: String
       },{collection:'blog'}
   )
   ```
   第一个参数是数据库的表结构，相当于mysql的table
   