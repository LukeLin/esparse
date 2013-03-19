
export class Script {

    constructor(statements, start, end) {
    
        this.type = "Script";
        this.statements = statements;
        this.start = start;
        this.end = end;
    }
}

export class Module {

    constructor(statements, start, end) {
    
        this.type = "Module";
        this.statements = statements;
        this.start = start;
        this.end = end;
    }
}

export class Identifier {

    constructor(value, context, start, end) {
    
        this.type = "Identifier";
        this.value = value;
        this.context = context;
        this.start = start;
        this.end = end;
    }
}

export class Number {

    constructor(value, start, end) {
    
        this.type = "Number";
        this.value = value;
        this.start = start;
        this.end = end;
    }
}

export class String {

    constructor(value, start, end) {
    
        this.type = "String";
        this.value = value;
        this.start = start;
        this.end = end;
    }
}

export class Template {

    constructor(value, isEnd, start, end) {
    
        this.type = "Template";
        this.value = value;
        this.templateEnd = isEnd;
        this.start = start;
        this.end = end;
    }
}

export class RegularExpression {

    constructor(value, flags, start, end) {
    
        this.type = "RegularExpression";
        this.value = value;
        this.flags = flags;
        this.start = start;
        this.end = end;
    }
}

export class Null {

    constructor(start, end) {
    
        this.type = "Null";
        this.start = start;
        this.end = end;
    }
}

export class Boolean {

    constructor(value, start, end) {
    
        this.type = "Boolean";
        this.value = value;
        this.start = start;
        this.end = end;
    }
}

export class ThisExpression {

    constructor(start, end) {
    
        this.type = "ThisExpression";
        this.start = start;
        this.end = end;
    }
}

export class SuperExpression {

    constructor(start, end) {
    
        this.type = "SuperExpression";
        this.start = start;
        this.end = end;
    }
}

export class SequenceExpression {

    constructor(list, start, end) {
    
        this.type = "SequenceExpression";
        this.expressions = list;
        this.start = start;
        this.end = end;
    }
}

export class AssignmentExpression {

    constructor(op, left, right, start, end) {
    
        this.type = "AssignmentExpression";
        this.operator = op;
        this.left = left;
        this.right = right;
        this.start = start;
        this.end = end;
    }
}

export class SpreadExpression {

    constructor(expr, start, end) {
    
        this.type = "SpreadExpression";
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class YieldExpression {

    constructor(expr, delegate, start, end) {
    
        this.type = "YieldExpression";
        this.delegate = delegate;
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class ConditionalExpression {

    constructor(test, cons, alt, start, end) {
    
        this.type = "ConditionalExpression";
        this.test = test;
        this.consequent = cons;
        this.alternate = alt;
        this.start = start;
        this.end = end;
    }
}

export class BinaryExpression {

    constructor(op, left, right, start, end) {
    
        this.type = "BinaryExpression";
        this.operator = op;
        this.left = left;
        this.right = right;
        this.start = start;
        this.end = end;
    }
}

export class UpdateExpression {

    constructor(op, expr, prefix, start, end) {
    
        this.type = "UpdateExpression";
        this.operator = op;
        this.expression = expr;
        this.prefix = prefix;
        this.start = start;
        this.end = end;
    }
}

export class UnaryExpression {

    constructor(op, expr, start, end) {
    
        this.type = "UnaryExpression";
        this.operator = op;
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class MemberExpression {

    constructor(obj, prop, computed, start, end) {
    
        this.type = "MemberExpression";
        this.object = obj;
        this.property = prop;
        this.computed = computed;
        this.start = start;
        this.end = end;
    }
}

export class CallExpression {

    constructor(callee, args, start, end) {
    
        this.type = "CallExpression";
        this.callee = callee;
        this.arguments = args;
        this.start = start;
        this.end = end;
    }
}

export class TaggedTemplateExpression {

    constructor(tag, template, start, end) {
    
        this.type = "TaggedTemplateExpression";
        this.tag = tag;
        this.template = template;
        this.start = start;
        this.end = end;
    }
}

export class NewExpression {

    constructor(callee, args, start, end) {
    
        this.type = "NewExpression";
        this.callee = callee;
        this.arguments = args;
        this.start = start;
        this.end = end;
    }
}

export class ParenExpression {
    
    constructor(expr, start, end) {
    
        this.type = "ParenExpression";
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class ObjectExpression {

    constructor(props, start, end) {
    
        this.type = "ObjectExpression";
        this.properties = props;
        this.start = start;
        this.end = end;
    }
}

export class PropertyDefinition {

    constructor(name, expr, start, end) {
    
        this.type = "PropertyDefinition";
        this.name = name;
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class CoveredPatternProperty {

    constructor(name, pattern, init, start, end) {
    
        this.type = "CoveredPatternProperty";
        this.name = name;
        this.pattern = pattern;
        this.init = init;
        this.start = start;
        this.end = end;
    }
}

export class MethodDefinition {

    constructor(modifier, name, params, body, start, end) {
    
        this.type = "MethodDefinition";
        this.modifier = modifier;
        this.name = name;
        this.params = params;
        this.body = body;
        this.start = start;
        this.end = end;
    }
}

export class ClassElement {

    constructor(isStatic, method, start, end) {
    
        this.type = "ClassElement";
        this.static = isStatic;
        this.method = method;
        this.start = start;
        this.end = end;
    }
}

export class ArrayExpression {

    constructor(elements, start, end) {
    
        this.type = "ArrayExpression";
        this.elements = elements;
        this.start = start;
        this.end = end;
    }
}

export class ArrayComprehension {

    constructor(qualifiers, expr, start, end) {
    
        this.type = "ArrayComprehension";
        this.qualifiers = qualifiers;
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class GeneratorComprehension {

    constructor(qualifiers, expr, start, end) {
    
        this.type = "GeneratorComprehension";
        this.qualifiers = qualifiers;
        this.expression = expr;
        this.start = start;
        this.end = end;
    }
}

export class ComprehensionFor {

    constructor(left, right, start, end) {
    
        this.type = "ComprehensionFor";
        this.left = left;
        this.right = right;
        this.start = start;
        this.end = end;
    }
}

export class ComprehensionIf {

    constructor(test, start, end) {
    
        this.type = "ComprehensionIf";
        this.test = test;
        this.start = start;
        this.end = end;
    }
}

export class TemplateExpression {

    constructor(lits, subs, start, end) {
    
        this.type = "TemplateExpression";
        this.literals = lits;
        this.substitutions = subs;
        this.start = start;
        this.end = end;
    }
}

export class Block {

    constructor(statements, start, end) {
    
        this.type = "Block";
        this.statements = statements;
        this.start = start;
        this.end = end;
    }
}

export class LabelledStatement {

    constructor(label, statement) {
    
        this.type = "LabelledStatement";
        this.label = label;
        this.statement = statement;
    }
}

export class ExpressionStatement {

    constructor(expr, start, end) {
    
        this.type = "ExpressionStatement";
        this.expression = expr;
        this.directive = null;
        this.start = start;
        this.end = end;
    }
}

export class EmptyStatement {

    constructor(start, end) {
    
        this.type = "EmptyStatement";
        this.start = start;
        this.end = end;
    }
}

export class VariableDeclaration {

    constructor(keyword, list, start, end) {
    
        this.type = "VariableDeclaration";
        this.keyword = keyword;
        this.declarations = list;
        this.start = start;
        this.end = end;
    }
}

export class VariableDeclarator {

    constructor(pattern, init, start, end) {
    
        this.type = "VariableDeclarator";
        this.pattern = pattern;
        this.init = init;
        this.start = start;
        this.end = end;
    }
}

export class ReturnStatement {

    constructor(arg, start, end) {
    
        this.type = "ReturnStatement";
        this.argument = arg;
        this.start = start;
        this.end = end;
    }
}

export class BreakStatement {

    constructor(label, start, end) {
    
        this.type = "BreakStatement";
        this.start = start;
        this.end = end;
    }
}

export class ContinueStatement {

    constructor(label, start, end) {
    
        this.type = "ContinueStatement";
        this.start = start;
        this.end = end;
    }
}