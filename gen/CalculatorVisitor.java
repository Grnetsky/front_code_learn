// Generated from C:/Users/Andy/Desktop/蔡豪/front_code_learn/antlr4/src/parser/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link CalculatorParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface CalculatorVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link CalculatorParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(CalculatorParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link CalculatorParser#addExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddExpr(CalculatorParser.AddExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link CalculatorParser#mulExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMulExpr(CalculatorParser.MulExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link CalculatorParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtom(CalculatorParser.AtomContext ctx);
}