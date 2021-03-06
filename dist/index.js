/* vue-lazily v1.1.3 | (c) Taras Batenkov and contributors | https://github.com/enkot/vue-lazily/blob/master/LICENSE */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var obj;
var Vue = require('vue');

var DEFAULT_DELAY = 200;

var isVue3 = !!Vue.h;

var Lazily = ( obj = {
  props: {
    action: {
      type: [String, Function, Promise, Object],
      required: false
    },
    lazy: {
      type: Boolean,
      default: true
    },
    delay: {
      type: [Number, Boolean]
    },
    margin: {
      type: String
    },
    threshold: {
      type: Number
    },
    height: {
      type: String
    },
    tag: {
      type: String,
      default: 'div'
    },
    watch: {
      type: [Number, String, Array, Object, Function]
    },
    actionHandler: {
      type: Function
    }
  },
  data: function data() {
    return {
      resolved: false,
      error: null,
      data: null,
      observer: null,
      target: null,
      observed: false,
      isDelay: !!this.delay
    }
  },
  mounted: function mounted() {
    this.target = this.$el;

    if (this.lazy) { this.observe(); }
  },
  created: function created() {
    var this$1 = this;

    if (!this.lazy) { this.run(); }

    if (this.watch)
      { this.$watch(
        isFunction(this.watch) ? this.watch : function () { return this$1.watch; },
        this.run
      ); }
  }
}, obj[isVue3 ? 'unmounted' : 'destroyed'] = function () {
    this.unobserve();
  }, obj.methods = {
    run: function run() {
      var this$1 = this;

      this.observed = true;

      if (!this.action) {
        this.resolved = true;
        return
      }

      this.resolved = false;
      this.startDelay();

      try {
        var result = this.actionHandler
          ? this.actionHandler(this.action)
          : this.getData(this.action);

        if (isPromise(result))
          { return result
            .then(function (data) { return (this$1.data = data); })
            .catch(function (error) { return (this$1.error = error); })
            .finally(function () { return (this$1.resolved = true); }) }

        this.data = result;
      } catch (error) {
        this.error = error;
      }

      this.resolved = true;
    },
    getData: function getData(action) {
      switch (typeof action) {
        case 'string':
          return fetch(action).then(function (data) { return data.json(); })
        case 'function':
          return action()
        default:
          return action
      }
    },
    runFunction: function runFunction() {},
    observe: function observe() {
      var this$1 = this;

      this.observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].intersectionRatio <= 0) { return }
          this$1.unobserve();
          this$1.run();
        },
        {
          rootMargin: this.margin,
          threshold: this.threshold
        }
      );

      this.observer.observe(this.target);
    },
    unobserve: function unobserve() {
      if (this.observer && this.target) {
        this.observer.unobserve(this.target);
        this.target = null;
      }
    },
    startDelay: function startDelay() {
      var this$1 = this;

      if (this.delay) {
        var delayTimer = setTimeout(
          function () {
            this$1.isDelay = false;
            clearTimeout(delayTimer);
          },
          typeof +this.delay === 'number' ? this.delay : DEFAULT_DELAY
        );
      } else {
        this.isDelay = false;
      }
    }
  }, obj.render = function render(h) {
    if (isVue3) { h = Vue.h; }

    if (this.error) {
      return getSlot(this, h, 'error', { error: this.error })
    }

    if (this.resolved) {
      return getSlot(this, h, 'default', { data: this.data })
    }

    if (this.isDelay)
      { return h(
        this.tag,
        this.height
          ? {
              style: {
                height: this.height
              }
            }
          : null
      ) }

    return getSlot(this, h, 'pending', {
      data: this.data,
      observed: this.observed
    })
  }, obj );

function convertNodes(h, wrapperTag, nodes) {
  if (nodes.length > 1 || !nodes[0].tag) { return h(wrapperTag, {}, nodes) }
  return nodes[0]
}

function getSlot(vm, h, name, data) {
  var slot = vm.$slots[name];
  var scopedSlot = isVue3 ? vm.$slots[name] : vm.$scopedSlots[name];
  var node = scopedSlot ? scopedSlot(data) : slot;

  return Array.isArray(node) ? convertNodes(h, vm.tag, node) : node
}

function isPromise(value) {
  return value && isFunction(value.then) && isFunction(value.catch)
}

function isFunction(value) {
  return typeof value === 'function'
}

var index = {
  install: function install(app, ref) {
    if ( ref === void 0 ) ref = {};
    var name = ref.name;
    var props = ref.props;

    if (props)
      { Object.keys(props).forEach(function (name) {
        var prop = Lazily.props[name];
        if (prop) { prop.default = props[name]; }
      }); }

    app.component(name || 'Lazily', Lazily);
  }
};

exports.Lazily = Lazily;
exports.default = index;
