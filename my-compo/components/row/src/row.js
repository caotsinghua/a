export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: Number,
    type: {
      type: String,
      default: 'flex',
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'start',
    },
  },
  computer: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = `-${this.gutter / 2}px`;
      }
      return style;
    },
  },
  render(h) {
    const { tag, type, justify, align } = this;
    return h(tag, {
      class: ['mc-row', { [`row-justify-${justify}`]: justify !== 'start' }, { [`row-align-${align}`]: align !== 'start' }, { 'row-flex': type === 'flex' }],
    });
  },
};
