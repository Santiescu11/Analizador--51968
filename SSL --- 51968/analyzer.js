import antlr4 from 'antlr4';
import { analizadorLexer } from './grammar/analizadorLexer.js';
import { analizadorParser } from './grammar/analizadorParser.js';
import { Translator } from './translator.js';
import fs from 'fs';

function analyze(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new analizadorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new analizadorParser(tokens);

    const syntaxErrors = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            syntaxErrors.push(`Línea ${line}:${column} - ${msg}`);
        }
    });

    const tree = parser.prog();

    const tokenTable = tokens.getTokens().map(token => ({
        Lexema: token.text,
        Token: lexer.symbolicNames[token.type] || `TOKEN_${token.type}`
    }));

    const translator = new Translator();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);

    return {
        syntaxErrors,
        tokenTable,
        syntaxTree: tree.toStringTree(parser.ruleNames, parser),
        translatedCode: translator.jsCode
    };
}

export { analyze };
