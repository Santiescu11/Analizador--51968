// Generated from ./analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,18,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,1,3,1,35,8,1,1,2,1,2,1,3,1,3,1,4,1,
4,3,4,43,8,4,1,5,1,5,1,5,1,5,1,5,3,5,50,8,5,1,6,1,6,1,6,1,6,3,6,56,8,6,1,
6,1,6,1,6,1,6,3,6,62,8,6,3,6,64,8,6,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,
10,12,14,16,0,2,2,0,1,3,6,6,2,0,10,11,14,14,70,0,19,1,0,0,0,2,25,1,0,0,0,
4,36,1,0,0,0,6,38,1,0,0,0,8,42,1,0,0,0,10,49,1,0,0,0,12,63,1,0,0,0,14,65,
1,0,0,0,16,67,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,3,4,2,
0,26,30,3,6,3,0,27,29,3,8,4,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,
30,31,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,33,35,5,17,0,0,34,33,1,0,0,0,34,
35,1,0,0,0,35,3,1,0,0,0,36,37,7,0,0,0,37,5,1,0,0,0,38,39,5,10,0,0,39,7,1,
0,0,0,40,43,3,10,5,0,41,43,3,12,6,0,42,40,1,0,0,0,42,41,1,0,0,0,43,9,1,0,
0,0,44,45,5,16,0,0,45,50,5,10,0,0,46,50,5,14,0,0,47,50,5,10,0,0,48,50,5,
11,0,0,49,44,1,0,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,11,1,0,
0,0,51,52,5,4,0,0,52,55,3,14,7,0,53,54,5,9,0,0,54,56,3,16,8,0,55,53,1,0,
0,0,55,56,1,0,0,0,56,64,1,0,0,0,57,58,5,8,0,0,58,61,5,15,0,0,59,60,5,9,0,
0,60,62,3,16,8,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,51,1,0,0,0,
63,57,1,0,0,0,64,13,1,0,0,0,65,66,5,10,0,0,66,15,1,0,0,0,67,68,7,1,0,0,68,
17,1,0,0,0,8,21,30,34,42,49,55,61,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'!'", "'#'", "'&'", "'--'", "'*'", "'/'", 
                            "'+'", "'-'", "'='", null, null, "'('", "')'", 
                            null, null, "'@'" ];
    static symbolicNames = [ null, null, null, null, null, "MUL", "DIV", 
                             "ADD", "SUB", "EQ", "ID", "INT", "LPAREN", 
                             "RPAREN", "TEXTO", "LETRA", "AT", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "prog", "comando", "prefijoComando", "nombreComando", 
                         "argumento", "argumentoPosicional", "argumentoOpcional", 
                         "nombreArgumento", "valorArgumento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.comando();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 78) !== 0));
	        this.state = 23;
	        this.match(analizadorParser.EOF);
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



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.prefijoComando();
	        this.state = 26;
	        this.nombreComando();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 85264) !== 0)) {
	            this.state = 27;
	            this.argumento();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 33;
	            this.match(analizadorParser.NEWLINE);
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



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 78) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(analizadorParser.ID);
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



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_argumento);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 14:
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.argumentoPosicional();
	            break;
	        case 4:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.argumentoOpcional();
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



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_argumentoPosicional);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(analizadorParser.AT);
	            this.state = 45;
	            this.match(analizadorParser.ID);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(analizadorParser.TEXTO);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.match(analizadorParser.ID);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.match(analizadorParser.INT);
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



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_argumentoOpcional);
	    var _la = 0;
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.match(analizadorParser.T__3);
	            this.state = 52;
	            this.nombreArgumento();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 53;
	                this.match(analizadorParser.EQ);
	                this.state = 54;
	                this.valorArgumento();
	            }

	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(analizadorParser.SUB);
	            this.state = 58;
	            this.match(analizadorParser.LETRA);
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 59;
	                this.match(analizadorParser.EQ);
	                this.state = 60;
	                this.valorArgumento();
	            }

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



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(analizadorParser.ID);
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



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_valorArgumento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 19456) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.T__2 = 3;
analizadorParser.T__3 = 4;
analizadorParser.MUL = 5;
analizadorParser.DIV = 6;
analizadorParser.ADD = 7;
analizadorParser.SUB = 8;
analizadorParser.EQ = 9;
analizadorParser.ID = 10;
analizadorParser.INT = 11;
analizadorParser.LPAREN = 12;
analizadorParser.RPAREN = 13;
analizadorParser.TEXTO = 14;
analizadorParser.LETRA = 15;
analizadorParser.AT = 16;
analizadorParser.NEWLINE = 17;
analizadorParser.WS = 18;

analizadorParser.RULE_prog = 0;
analizadorParser.RULE_comando = 1;
analizadorParser.RULE_prefijoComando = 2;
analizadorParser.RULE_nombreComando = 3;
analizadorParser.RULE_argumento = 4;
analizadorParser.RULE_argumentoPosicional = 5;
analizadorParser.RULE_argumentoOpcional = 6;
analizadorParser.RULE_nombreArgumento = 7;
analizadorParser.RULE_valorArgumento = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(analizadorParser.EOF, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(analizadorParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_prefijoComando;
    }

	DIV() {
	    return this.getToken(analizadorParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrefijoComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrefijoComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_nombreComando;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNombreComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNombreComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_argumentoPosicional;
    }

	AT() {
	    return this.getToken(analizadorParser.AT, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	TEXTO() {
	    return this.getToken(analizadorParser.TEXTO, 0);
	};

	INT() {
	    return this.getToken(analizadorParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterArgumentoPosicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitArgumentoPosicional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitArgumentoPosicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_argumentoOpcional;
    }

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	EQ() {
	    return this.getToken(analizadorParser.EQ, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	SUB() {
	    return this.getToken(analizadorParser.SUB, 0);
	};

	LETRA() {
	    return this.getToken(analizadorParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterArgumentoOpcional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitArgumentoOpcional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitArgumentoOpcional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_nombreArgumento;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNombreArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNombreArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_valorArgumento;
    }

	TEXTO() {
	    return this.getToken(analizadorParser.TEXTO, 0);
	};

	INT() {
	    return this.getToken(analizadorParser.INT, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterValorArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitValorArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitValorArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgContext = ProgContext; 
analizadorParser.ComandoContext = ComandoContext; 
analizadorParser.PrefijoComandoContext = PrefijoComandoContext; 
analizadorParser.NombreComandoContext = NombreComandoContext; 
analizadorParser.ArgumentoContext = ArgumentoContext; 
analizadorParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
analizadorParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
analizadorParser.NombreArgumentoContext = NombreArgumentoContext; 
analizadorParser.ValorArgumentoContext = ValorArgumentoContext; 
