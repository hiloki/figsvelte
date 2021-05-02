'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jsCamelcase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toCamelCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
        .toLowerCase()
        .replace(/(\$)(\w)/g, function (m, a, b) { return b.toUpperCase(); });
}
exports.default = toCamelCase;
});

unwrapExports(jsCamelcase);

var jsSnakecase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toSnakeCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + '_' + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, '_')
        .toLowerCase();
}
exports.default = toSnakeCase;
});

unwrapExports(jsSnakecase);

var jsPascalcase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toPascalCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
        .toLowerCase()
        .replace(/(\$)(\w?)/g, function (m, a, b) { return b.toUpperCase(); });
}
exports.default = toPascalCase;
});

unwrapExports(jsPascalcase);

var jsDotcase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toDotCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, '.')
        .toLowerCase();
}
exports.default = toDotCase;
});

unwrapExports(jsDotcase);

var jsPathcase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toPathCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, '/')
        .toLowerCase();
}
exports.default = toPathCase;
});

unwrapExports(jsPathcase);

var jsTextcase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toTextCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + '_' + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
        .toLowerCase();
}
exports.default = toTextCase;
});

unwrapExports(jsTextcase);

var jsSentencecase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toSentenceCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    var textcase = String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
        .toLowerCase();
    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
}
exports.default = toSentenceCase;
});

unwrapExports(jsSentencecase);

var jsHeadercase = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function toHeaderCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
        .toLowerCase()
        .replace(/( ?)(\w+)( ?)/g, function (m, a, b, c) { return a + b.charAt(0).toUpperCase() + b.slice(1) + c; });
}
exports.default = toHeaderCase;
});

unwrapExports(jsHeadercase);

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.belongToTypes = exports.isValidObject = exports.isArrayObject = exports.validateOptions = exports.DefaultOption = void 0;
/**
 * Default options for convert function. This option is not recursive.
 */
exports.DefaultOption = {
    recursive: false,
    recursiveInArray: false,
    keepTypesOnRecursion: []
};
exports.validateOptions = function (opt) {
    if (opt === void 0) { opt = exports.DefaultOption; }
    if (opt.recursive == null) {
        opt = exports.DefaultOption;
    }
    else if (opt.recursiveInArray == null) {
        opt.recursiveInArray = false;
    }
    return opt;
};
exports.isArrayObject = function (obj) { return obj != null && Array.isArray(obj); };
exports.isValidObject = function (obj) { return obj != null && typeof obj === 'object' && !Array.isArray(obj); };
exports.belongToTypes = function (obj, types) { return (types || []).some(function (Type) { return obj instanceof Type; }); };
});

unwrapExports(utils);
var utils_1 = utils.belongToTypes;
var utils_2 = utils.isValidObject;
var utils_3 = utils.isArrayObject;
var utils_4 = utils.validateOptions;
var utils_5 = utils.DefaultOption;

var lowercaseKeysObject = createCommonjsModule(function (module, exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Convert string keys in an object to lowercase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function lowerKeys(obj, opt) {
    if (opt === void 0) { opt = utils.DefaultOption; }
    if (!utils.isValidObject(obj))
        return null;
    opt = utils.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = key.toLowerCase();
        if (opt.recursive) {
            if (utils.isValidObject(value)) {
                if (!utils.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = lowerKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils.isValidObject(v)) {
                        // object in array
                        if (!utils.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = lowerKeys(v, opt);
                        }
                    }
                    else if (utils.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = lowerKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = lowerKeys;
});

unwrapExports(lowercaseKeysObject);

var uppercaseKeysObject = createCommonjsModule(function (module, exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Convert string keys in an object to UPPERCASE format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function upperKeys(obj, opt) {
    if (opt === void 0) { opt = utils.DefaultOption; }
    if (!utils.isValidObject(obj))
        return null;
    opt = utils.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = key.toUpperCase();
        if (opt.recursive) {
            if (utils.isValidObject(value)) {
                if (!utils.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = upperKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils.isValidObject(v)) {
                        // object in array
                        if (!utils.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = upperKeys(v, opt);
                        }
                    }
                    else if (utils.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = upperKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = upperKeys;
});

unwrapExports(uppercaseKeysObject);

var camelcaseKeysObject = createCommonjsModule(function (module, exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });


/**
 * Convert string keys in an object to camelCase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function camelKeys(obj, opt) {
    if (opt === void 0) { opt = utils.DefaultOption; }
    if (!utils.isValidObject(obj))
        return null;
    opt = utils.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = jsCamelcase.default(key);
        if (opt.recursive) {
            if (utils.isValidObject(value)) {
                if (!utils.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = camelKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils.isValidObject(v)) {
                        // object in array
                        if (!utils.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = camelKeys(v, opt);
                        }
                    }
                    else if (utils.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = camelKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = camelKeys;
});

unwrapExports(camelcaseKeysObject);

var snakecaseKeysObject = createCommonjsModule(function (module, exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });


/**
 * Convert string keys in an object to snake_case format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function snakeKeys(obj, opt) {
    if (opt === void 0) { opt = utils.DefaultOption; }
    if (!utils.isValidObject(obj))
        return null;
    opt = utils.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = jsSnakecase.default(key);
        if (opt.recursive) {
            if (utils.isValidObject(value)) {
                if (!utils.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = snakeKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils.isValidObject(v)) {
                        // object in array
                        if (!utils.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = snakeKeys(v, opt);
                        }
                    }
                    else if (utils.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = snakeKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = snakeKeys;
});

unwrapExports(snakecaseKeysObject);

var pascalcaseKeysObject = createCommonjsModule(function (module, exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });


/**
 * Convert string keys in an object to PascalCase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function pascalKeys(obj, opt) {
    if (opt === void 0) { opt = utils.DefaultOption; }
    if (!utils.isValidObject(obj))
        return null;
    opt = utils.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = jsPascalcase.default(key);
        if (opt.recursive) {
            if (utils.isValidObject(value)) {
                if (!utils.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = pascalKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils.isValidObject(v)) {
                        // object in array
                        if (!utils.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = pascalKeys(v, opt);
                        }
                    }
                    else if (utils.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = pascalKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = pascalKeys;
});

unwrapExports(pascalcaseKeysObject);

var lib = createCommonjsModule(function (module, exports) {
/**
 * Author: <Ha Huynh> https://github.com/huynhsamha
 * Github: https://github.com/huynhsamha/js-convert-case
 * NPM Package: https://www.npmjs.com/package/js-convert-case
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalKeys = exports.snakeKeys = exports.camelKeys = exports.upperKeys = exports.lowerKeys = exports.toLowerCase = exports.toUpperCase = exports.toHeaderCase = exports.toSentenceCase = exports.toTextCase = exports.toPathCase = exports.toDotCase = exports.toPascalCase = exports.toSnakeCase = exports.toCamelCase = void 0;

exports.toCamelCase = jsCamelcase.default;

exports.toSnakeCase = jsSnakecase.default;

exports.toPascalCase = jsPascalcase.default;

exports.toDotCase = jsDotcase.default;

exports.toPathCase = jsPathcase.default;

exports.toTextCase = jsTextcase.default;

exports.toSentenceCase = jsSentencecase.default;

exports.toHeaderCase = jsHeadercase.default;

exports.lowerKeys = lowercaseKeysObject.default;

exports.upperKeys = uppercaseKeysObject.default;

exports.camelKeys = camelcaseKeysObject.default;

exports.snakeKeys = snakecaseKeysObject.default;

exports.pascalKeys = pascalcaseKeysObject.default;
var toLowerCase = function (str) { return String(str || '').toLowerCase(); };
exports.toLowerCase = toLowerCase;
var toUpperCase = function (str) { return String(str || '').toUpperCase(); };
exports.toUpperCase = toUpperCase;
var jsConvert = {
    toCamelCase: jsCamelcase.default,
    toSnakeCase: jsSnakecase.default,
    toPascalCase: jsPascalcase.default,
    toDotCase: jsDotcase.default,
    toPathCase: jsPathcase.default,
    toTextCase: jsTextcase.default,
    toSentenceCase: jsSentencecase.default,
    toHeaderCase: jsHeadercase.default,
    toUpperCase: toUpperCase,
    toLowerCase: toLowerCase,
    lowerKeys: lowercaseKeysObject.default,
    upperKeys: uppercaseKeysObject.default,
    camelKeys: camelcaseKeysObject.default,
    snakeKeys: snakecaseKeysObject.default,
    pascalKeys: pascalcaseKeysObject.default
};
exports.default = jsConvert;
});

unwrapExports(lib);
var lib_1 = lib.pascalKeys;
var lib_2 = lib.snakeKeys;
var lib_3 = lib.camelKeys;
var lib_4 = lib.upperKeys;
var lib_5 = lib.lowerKeys;
var lib_6 = lib.toLowerCase;
var lib_7 = lib.toUpperCase;
var lib_8 = lib.toHeaderCase;
var lib_9 = lib.toSentenceCase;
var lib_10 = lib.toTextCase;
var lib_11 = lib.toPathCase;
var lib_12 = lib.toDotCase;
var lib_13 = lib.toPascalCase;
var lib_14 = lib.toSnakeCase;
var lib_15 = lib.toCamelCase;

var jsConvertCase = lib;

// TODO: UIに応じて操作
// FIXME: replace func when add KebabCase to js-convert-case
const toKebabCase = (string) => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
figma.showUI(__html__, { width: 360, height: 360 });
figma.ui.onmessage = (message) => {
    if (message.type === "rename-layers") {
        const isSelection = message.data.isSelection;
        const layers = message.data.layers;
        const nameConvention = message.data.nameConvention;
        const layerTypes = layers.map((type) => type.toUpperCase());
        if (layerTypes.includes("COMPONENT")) {
            layerTypes.push("COMPONENT_SET");
        }
        const nodes = isSelection
            ? figma.currentPage.selection.filter((n) => layerTypes.includes(n.type))
            : figma.currentPage.findAll((n) => layerTypes.includes(n.type));
        console.log(nodes);
        for (let node of nodes) {
            if (node.parent.type !== "COMPONENT_SET") {
                let name = node.name;
                switch (nameConvention) {
                    case "camelCase":
                        node.name = jsConvertCase.toCamelCase(name);
                        break;
                    case "kebabCase":
                        node.name = toKebabCase(name);
                        break;
                    case "snakeCase":
                        node.name = jsConvertCase.toSnakeCase(name);
                        break;
                    default:
                        node.name = jsConvertCase.toPascalCase(name);
                        break;
                }
            }
        }
    }
    figma.closePlugin("Done");
};
