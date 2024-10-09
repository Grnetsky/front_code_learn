// Generated from C:/Users/Andy/Desktop/蔡豪/front_code_learn/antlr4/src/parser/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(CalculatorParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(CalculatorParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#addExpr}.
	 * @param ctx the parse tree
	 */
	void enterAddExpr(CalculatorParser.AddExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#addExpr}.
	 * @param ctx the parse tree
	 */
	void exitAddExpr(CalculatorParser.AddExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#mulExpr}.
	 * @param ctx the parse tree
	 */
	void enterMulExpr(CalculatorParser.MulExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#mulExpr}.
	 * @param ctx the parse tree
	 */
	void exitMulExpr(CalculatorParser.MulExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterAtom(CalculatorParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitAtom(CalculatorParser.AtomContext ctx);
}