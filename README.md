# functionOfRegExp
正则表达式有关方法的使用

1.exec() 方法用于检索字符串中的正则表达式的匹配。

语法：
   RegExpObject.exex(string);
参数：
   string    必需。要检索的字符串。

返回值:
   返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

说明:
   如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。-----是否非全局调用主要是看是否含有 “g”

   非全局匹配结束时lastIndex为0。

   但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。





   重要事项：如果在一个字符串中完成了一次全局模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。





例子 见 exec.js
================================================================================
2. match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

语法:
   stringObject.match(searchvalue)
   stringObject.match(regexp)
参数:
   searchvalue    必需。规定要检索的字符串值。
   regexp         必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。

返回值:
   存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。

说明：
   match() 方法将检索字符串 stringObject，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。

   注意：在全局检索模式下，match() 即不提供与子表达式匹配的文本的信息，也不声明每个匹配子串的位置。如果您需要这些全局检索的信息，可以使用 RegExp.exec()。

例子 见 match.js


