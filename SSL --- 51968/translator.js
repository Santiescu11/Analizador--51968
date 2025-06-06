// translator.js - Versión corregida
import antlr4 from 'antlr4';
import analizadorListener from './generated/analizadorListener.js';

export class Translator extends analizadorListener {
    constructor() {
        super();
        this.jsCode = '';
    }

    enterComando(ctx) {
        const nombre = ctx.nombreComando().getText();

        const args = ctx.argumento().map(arg => {
            const pos = arg.argumentoPosicional?.();
            if (pos) {
                if (pos.AT()) return `"${pos.ID().getText()}"`;
                if (pos.TEXTO()) return pos.TEXTO().getText();
                if (pos.ID()) return `"${pos.ID().getText()}"`;
                if (pos.INT()) return pos.INT().getText();
            }
            return null;
        }).filter(x => x != null);

        // Generar función base saludar(nombre) para ejemplo
        if (nombre === 'saludar') {
            this.jsCode += `function saludar(nombre) {
    console.log("Hola", nombre);
}

`;
        } else if (nombre === 'despedir') {
            this.jsCode += `function despedir(nombre) {
    console.log("Adiós", nombre);
}

`;
        }

        this.jsCode += `${nombre}(${args.join(', ')});
`;
    }
}