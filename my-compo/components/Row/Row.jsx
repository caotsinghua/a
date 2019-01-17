import './style/index.less';

export default {
    name: 'my-row',
    props: {
        gutter: Number,
        type: {
            type: String,
        },
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'start',
        },
        prefixCls: {
            type: String,
            default: 'my-row',
        },
    },
    render(h) {
        const { type, justify, align, gutter, prefixCls, $slots } = this;
        const classes = {
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${type}-align-${align}`]: type && align,
            [`${prefixCls}-${type}-justify-${justify}`]: type && justify,
        };

        const style =
            gutter > 0
                ? {
                      marginLeft: `-${gutter / 2}px`,
                      marginRight: `-${gutter / 2}px`,
                  }
                : {};
        return (
            <div class={classes} style={style}>
                {$slots.default}
            </div>
        );
    },
};
