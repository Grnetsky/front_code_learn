import antlr4 from "antlr4";
import CalculatorLexer from "./src/parser/CalculatorLexer.mjs";
import CalculatorParser from "./src/parser/CalculatorParser.mjs";

// 输入表达式
const input = '3 * (2 + 4)';

// 创建词法分析器
const chars = new antlr4.InputStream(input);
const lexer = new CalculatorLexer(chars);

// 创建词法记号流
const tokens = new antlr4.CommonTokenStream(lexer);

// 创建语法解析器
const parser = new CalculatorParser(tokens);

// 解析语法规则
const tree = parser.expression();

console.log(tree.toStringTree(parser.ruleNames));
