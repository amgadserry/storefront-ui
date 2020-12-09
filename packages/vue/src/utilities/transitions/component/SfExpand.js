export default {
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "sf-expand",
    },
    group: {
      type: Boolean,
      default: false,
    },
    hasDynamicHeightContent: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement, { data, children, props }) {
    const isOff = props.transition === false;
    let resizeObserver;
    const listeners = {
      beforeEnter: function (el) {
        el.style.setProperty("height", "auto");
        if (props.hasDynamicHeightContent) {
          const content = el.children[0];
          resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
              el.style.setProperty(
                "height",
                content.getBoundingClientRect().height + "px"
              );
            });
          });
          resizeObserver.observe(content);
        }
      },
      enter: function (el) {
        el.style.setProperty("height", "auto");
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", "0");
        requestAnimationFrame(() => {
          el.style.setProperty("height", height);
        });
      },
      leave: function (el) {
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", height);
        requestAnimationFrame(() => {
          el.style.setProperty("height", "0");
        });
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      },
    };
    return createElement(
      "transition",
      {
        ...data,
        attrs: { name: isOff ? "" : props.transition },
        on: props.transition === "sf-expand" && listeners,
      },
      children
    );
  },
};
