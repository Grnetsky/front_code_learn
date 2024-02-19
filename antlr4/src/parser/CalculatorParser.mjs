// Generated from Calculator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.mjs';
const serializedATN = [4,1,8,34,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,1,1,1,1,1,5,1,14,8,1,10,1,12,1,17,9,1,1,2,1,2,1,2,5,2,22,8,2,10,2,12,2,
25,9,2,1,3,1,3,1,3,1,3,1,3,3,3,32,8,3,1,3,0,0,4,0,2,4,6,0,2,1,0,1,2,1,0,
3,4,32,0,8,1,0,0,0,2,10,1,0,0,0,4,18,1,0,0,0,6,31,1,0,0,0,8,9,3,2,1,0,9,
1,1,0,0,0,10,15,3,4,2,0,11,12,7,0,0,0,12,14,3,4,2,0,13,11,1,0,0,0,14,17,
1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,3,1,0,0,0,17,15,1,0,0,0,18,23,3,6,
3,0,19,20,7,1,0,0,20,22,3,6,3,0,21,19,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,
0,23,24,1,0,0,0,24,5,1,0,0,0,25,23,1,0,0,0,26,32,5,7,0,0,27,28,5,5,0,0,28,
29,3,2,1,0,29,30,5,6,0,0,30,32,1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,32,7,
1,0,0,0,3,15,23,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "NUMBER", 
                             "WS" ];
    static ruleNames = [ "expression", "addExpr", "mulExpr", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.addExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addExpr() {
	    let localctx = new AddExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_addExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.mulExpr();
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 11;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 12;
	            this.mulExpr();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mulExpr() {
	    let localctx = new MulExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_mulExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.atom();
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 19;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 20;
	            this.atom();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_atom);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.match(CalculatorParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(CalculatorParser.T__4);
	            this.state = 28;
	            this.addExpr();
	            this.state = 29;
	            this.match(CalculatorParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.NUMBER = 7;
CalculatorParser.WS = 8;

CalculatorParser.RULE_expression = 0;
CalculatorParser.RULE_addExpr = 1;
CalculatorParser.RULE_mulExpr = 2;
CalculatorParser.RULE_atom = 3;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expression;
    }

	addExpr() {
	    return this.getTypedRuleContext(AddExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpression(this);
		}
	}


}



class AddExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_addExpr;
    }

	mulExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulExprContext);
	    } else {
	        return this.getTypedRuleContext(MulExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAddExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAddExpr(this);
		}
	}


}



class MulExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_mulExpr;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterMulExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitMulExpr(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_atom;
    }

	NUMBER() {
	    return this.getToken(CalculatorParser.NUMBER, 0);
	};

	addExpr() {
	    return this.getTypedRuleContext(AddExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAtom(this);
		}
	}


}




CalculatorParser.ExpressionContext = ExpressionContext; 
CalculatorParser.AddExprContext = AddExprContext; 
CalculatorParser.MulExprContext = MulExprContext; 
CalculatorParser.AtomContext = AtomContext; 
