var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prepend-selector', function (opts) {
    opts = opts || {};
    return function (css) {
        css.walkRules(function (rule) {
            rule.selectors = rule.selectors.map( function (selector) {
                if(/^\d*\%$|^from$|^to$/.test(selector)) {
                    // This is part of a keyframe
                    return selector;
                }

                if (selector.startsWith(opts.selector.trim())) {
                    return selector;
                }

                if(selector.startsWith('body')) {
                    return selector;
                }

                if(selector.startsWith('html')) {
                    return selector;
                }

                return opts.selector + selector;
            });
        });
    };
});
