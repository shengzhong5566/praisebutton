(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './PraiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./PraiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.PraiseButton);
        global.ThumbButton = mod.exports;
    }
})(this, function (exports, _PraiseButton2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ThumbButton = function (_PraiseButton) {
        _inherits(ThumbButton, _PraiseButton);

        function ThumbButton(selector) {
            _classCallCheck(this, ThumbButton);

            var _this = _possibleConstructorReturn(this, (ThumbButton.__proto__ || Object.getPrototypeOf(ThumbButton)).call(this));

            _this.initNode = $('\n             <div class="praise-button">\n                <div class="thumb-one"></div>\n                <div class="thumb-two"></div>\n                <div class="thumb-three"></div>\n                <div class="thumb-four"></div>\n                <div class="thumb-five"></div>\n                <div class="thumb-six"></div>\n            </div>\n            ');
            _this.numNode = $('<div class="num">\u5F53\u524D\u6B21\u6570\uFF1A<span>' + _this.praiseNum + '</span></div>');
            $(selector).append(_this.initNode).append(_this.numNode);
            _this.initNode.on('click', _this.changeNum.bind(_this));
            return _this;
        }

        _createClass(ThumbButton, [{
            key: 'changeNum',
            value: function changeNum() {
                this.addPraise();
                this.numNode.find('span').html('' + this.praiseNum);
            }
        }]);

        return ThumbButton;
    }(_PraiseButton3.default);

    exports.default = ThumbButton;
});