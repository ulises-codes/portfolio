"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var Readline = __importStar(require("readline"));
var fs = __importStar(require("fs"));
var formatDate = function (date) {
    return date.toLocaleDateString('en-us', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
function createBlogPost(outDir) {
    if (outDir === void 0) { outDir = './blog'; }
    var answers = {
        title: '',
        author: 'Ulises Himely',
        publishDate: formatDate(new Date()),
        excerpt: ''
    };
    var readline = Readline.createInterface(process.stdin, process.stdout);
    readline.question('Title: ', function (title) {
        answers.title = title;
        readline.question('Author: ', function (author) {
            answers.author = author;
            readline.question('Publish Date: ', function (publishDate) {
                if (publishDate && new Date(publishDate)) {
                    answers.publishDate = formatDate(new Date(publishDate));
                }
                readline.question('Excerpt: ', function (excerpt) {
                    answers.excerpt = excerpt;
                    readline.question('Header Image Src: ', function (headerImageSrc) {
                        if (headerImageSrc) {
                            answers.headerImageSrc = headerImageSrc;
                        }
                        readline.question('Header Image Alt: ', function (headerImageAlt) {
                            if (headerImageAlt) {
                                answers.headerImageAlt = headerImageAlt;
                            }
                            readline.question('Header Image Caption: ', function (headerImageCaption) {
                                if (headerImageCaption) {
                                    answers.headerImageCaption = headerImageCaption;
                                }
                                var filename = answers.title
                                    .toLowerCase()
                                    .replace(/ /g, '-');
                                var fileContents = '---\n';
                                for (var _i = 0, _a = Object.entries(answers); _i < _a.length; _i++) {
                                    var _b = _a[_i], key = _b[0], value = _b[1];
                                    fileContents += "".concat(key, ": \"").concat(value, "\"\n");
                                }
                                fileContents += '---';
                                fs.writeFileSync("".concat(outDir, "/").concat(filename, ".mdx"), fileContents);
                                readline.close();
                            });
                        });
                    });
                });
            });
            readline.write(answers.publishDate);
        });
        readline.write('Ulises Himely');
    });
}
exports["default"] = createBlogPost;
