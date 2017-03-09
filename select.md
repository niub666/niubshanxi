1. 列是变量
每一行的列值在变，从上到下遍历，where是表达式,当值为真则取出该行。(表达式为真取出，为假不取)
```
select * from users where 1;//取出所有行
select * from users where 0; //一行都没取出来
```
2. 变量是可以计算的
计算存储人员明年多少岁？

查询本店的商品比市场价格便宜多少？


3. 投影概念

users表有3列，我们只取出2列(部分列),叫做投影运算。
就像手电筒，只照到两列，投出影子显示出来。
goods表查询出来，market_price-shop_price 两个列做运算,叫做广义投影。

## select

| 序号 | 查询 | select | 介绍 |
|-----|-----|--------|-------|
| 1  | 条件查询 | where | 1. 条件表达式为真，则取出改行<br> 2. 比较运算符= != < <= > >=<br> 3. like，not like (%匹配任意多个字符，_匹配任意单个字符)，in,not in,between and<br> 4. is null ,is not null|
| 2 | 分组 | groupby | 一般配合5个聚合函数使用 max,min,sum,avg,count |
| 3 | 筛选 | having | &nbsp;|
| 4 | 排序 | orderby | &nbsp;|
| 5 | 限制 | limit |   &nbsp; |

### 条件查询
1. 主键为32的商品

2. 不属于第3个栏目的所有商品

3. 本店价格高于3000的商品

4. 本店价格低于或等于100的商品

5. 取出第4个栏目或第11个栏目

6. 取出100<=价格<=500的商品
shop_price>=100 and shop_price<=500

between 100 and 500


7. 取出不属于第3个栏目，且不属于第11个栏目的商品(and 或 not in 分别实现)

8. 取出第3个栏目下价格<1000或>3000并且点击量>5的商品

9. 取出价格大于100且小于300,或大于4000且小于5000的商品

10. 取出名字以‘诺基亚’开头的商品

11. 取出名字为“诺基亚Nxx”的手机

12. 取出名字不以‘诺基亚’开头的商品

13. 取出第3个栏目下面价格在1000到3000之间，并且点击量>5"诺基亚"开头商品

14. 把goods表中的商品名为"诺基亚xxx"的商品改为"HTCxxx"
提示：把列看成变量，参与运算，甚至调用函数来处理

- substring(str,pos,len) 截取指定位置，指定长度字符
- concat(str,str,str,...) 连接字符串




### group分组与统计函数
|函数名 | 作用 |
|--------|------|
|count()| 计算行数|
|avg() |求平均值|
|sum() |求和|
|min() |求最小值|
|max() | 求最大值 |

1. 查询所有商品的评价价格
```
select avg(shop_price) from goods;
```
2. 查询最贵的商品
```
select max(shop_price) from goods;
```
3. 查询最便宜的商品
```
select min(shop_price) from goods;
```
4. 查询一共有多少种商品
```
select count(*) from goods;
```
5. 查询商品的总价格
```
select sum(shop_price) as allsum from goods;
```
6. 查询本店挤压的商品总货款
```
select sum(shop_price*goods_number) as all from goods;
```