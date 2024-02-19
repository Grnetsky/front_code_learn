(function (root, factory) {
    var clone = factory(root);
    if(typeof define === 'function' && define.amd){
        //AMD规范
        define('clone',function () {
            return clone
        })
    }else if(typeof exports === 'object'){
        // CommonJS
        module.exports = clone
    }else {
        // 原始模块
        var _clone = root.clone;

        clone.onConflict = function () {
            if(root.clone === clone){
                root.clone = _clone
            }
            return clone
        };
        root.clone = clone;
    }
})(this,function (root) {
    function clone() {
        //...
    }
    return clone
})