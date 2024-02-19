grammar Calculator;

expression: addExpr;

addExpr: mulExpr (('+' | '-') mulExpr)*;

mulExpr: atom (('*' | '/') atom)*;

atom: NUMBER | '(' addExpr ')' ;

NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
