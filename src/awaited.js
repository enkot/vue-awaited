export default {
  props: {
    action: {
      type: String,
      required: false
    },
    storeData: {
      type: String,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    resolved: false,
    error: null,
    observer: null,
    target: null
  }),
  mounted() {
    if (!this.action) return
    this.target = this.$refs.target

    if (this.lazy)
      this.observe()
    else
      this.run()
  },
  destroyed() {
    this.unobserve()
  },
  methods: {
    async run() {
      this.resolved = false

      try {
        await this.$store.dispatch(this.action)
      } catch(error) {
        this.error = error
      } finally {
        this.resolved = true
      }
    },
    observe() {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0) return
        this.unobserve()
        this.run()
      })
      this.observer.observe(this.target)
    },
    unobserve() {
      this.observer.unobserve(this.target)
    }
  },
  render(h) {
    const key = this.storeData

    if (this.error) {
      return getSlot(this, h, 'error', this.error)
    }

    if (this.resolved) {
      return getSlot(this, h, 'default', this.$store.state[key])
    }

    return getSlot(this, h, 'pending', this.$store.state[key])
  }
}

function getSlot(vm, h, name, data) {
  if (vm.$scopedSlots[name]) {
    return h('div', [
      vm.$scopedSlots[name]({ data }),
      h('div', {
        ref: 'target'
      })
    ])
  }
}