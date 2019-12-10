<template>
  <span v-html="result"></span>
</template>

<script>

export default {
  props: {
    phrases: {
      type: Array,
      default() {
        return [
          'Neo,',
          'sooner or later',
          'you\'re going to realize',
          'just as I did',
          'that there\'s a difference',
          'between knowing the path',
          'and walking the path'
        ]
      }
    },
    interval: {
      type: Number,
      default: 800
    }
  },
  data() {
    return {
      result: "",
      chars: '!<>-_\\/[]{}—=+*^?#________'
    }
  },
  methods: {
    setText(newText) {
      const oldText = this.result;
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    },
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="pink--text1">${char}</span>`
        } else {
          output += from
        }
      }
      this.result = output;
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    },
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  },
  mounted() {
    let counter = 0
    const next = () => {
      this.setText(this.phrases[counter]).then(() => {
        setTimeout(next, this.interval)
      })
      counter = (counter + 1) % this.phrases.length
    }

    next()
  }
}
</script>