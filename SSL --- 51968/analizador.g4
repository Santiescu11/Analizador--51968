grammar analizador;

prog: comando+ EOF;

comando: prefijoComando nombreComando argumento* NEWLINE?;

prefijoComando: '!' | '/' | '#' | '&';

nombreComando: ID;

argumento
    : argumentoPosicional
    | argumentoOpcional
    ;

argumentoPosicional
    : AT ID         // para @ana
    | TEXTO
    | ID
    | INT
    ;

argumentoOpcional
    : '--' nombreArgumento (EQ valorArgumento)?
    | '-' LETRA (EQ valorArgumento)?
    ;

nombreArgumento: ID;

valorArgumento
    : TEXTO
    | INT
    | ID
    ;

MUL : '*' ;
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;
EQ  : '=' ;
ID  : [a-zA-Z]+ ;
INT : [0-9]+ ;
LPAREN : '(' ;
RPAREN : ')' ;
TEXTO: '"' ( ~["\\\r\n] | '\\' . )* '"' ;
LETRA: [a-zA-Z] ;
AT   : '@' ;
NEWLINE: '\r'? '\n' ;
WS: [ \t]+ -> skip ;
