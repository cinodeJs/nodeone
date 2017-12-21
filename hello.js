// console.log("我的第一个node应用")
var str="也没来的及告别那"
var str1="hehehe"
//const strnode=str.charAt(1)                          //获取字符串中指定的字符
//const strnode=str.charCodeAt(1)                     //获取字符串中指定的字符的Unicode值
//const strnode=str.concat("#","你就离开了我")       //连接字符串
//const strnode=str.indexOf("的")                   //查找指定字符的索引
//const strnode=str.lastIndexOf("的")              //获取要查找字符串在指定字符串中最后出现的位置
//const strnode=str.substr(2)                     //从指定字符串中获取子串 从第一个参数起索引 获取第二个参数个, 如果第二个字符不传则获取到最后
//const strnode=str.substring(5)                 //从指定字符串中获取字符串 从第一个参数的位置起 获取到第二个参数的位置 不包括第二个参数的位置
//const strnode=str.slice(3,5)                  //在指定字符串里获取子字符串
//const strnode=str1.toUpperCase()             //将指定字符串转换为大写
//const strnode=str1.toLowerCase()            //将指定字符串转换为小写
//const strnode=str.split("的")              //以指定字符分割成数组
const strnode=str.localeCompare("也没来的及告别那")   //比较两个字符串的大小
                                            //如果比目标字符串小 返回一个小于零的数，
                                           //如果等于目标字符串则返回零 
                                          //如果大于目标字符串返回一个大于零的数
console.log(strnode)