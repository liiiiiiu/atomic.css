module.exports = {
  decorator: {
    use: {
      // CSS Normalize
      normalize: true,
    },
    class: {
      // CSS 公共前缀
      // prefix: 'my';
      // => .my-w-screen { width: 100vw; }
      prefix: '',

      // CSS 多连接符
      // separators: ['_', '-'];
      // => .max_w-full { max-width: 100%; }
      separators: ['-'],
    },
    // CSS 样式名缩写
    abbr: {
      container: 'container',
      'box-decoration-break': 'decoration',
      'box-sizing': 'box',
      float: 'float',
      clear: 'clear',
      'object-fit': 'object',
      'object-position': 'object',
      overflow: 'overflow',
      'overscroll-behavior': 'overscroll',
      position: 'position',
      inset: 'inset',
      top: 'top',
      right: 'right',
      bottom: 'bottom',
      left: 'left',
      visible: 'visible',
      'z-index': 'z',
      flex: 'flex',
      order: 'order',
      grid: 'grid',
      'grid-column': 'col',
      'grid-row': 'row',
      'grid-auto': 'auto',
      gap: 'gap',
      'justify-content': 'justify',
      'justify-items': 'justify-items',
      'justify-self': 'justify-self',
      'align-content': 'content',
      'align-items': 'items',
      'align-self': 'self',
      'place-content': 'place-content',
      'place-items': 'place-items',
      'place-self': 'place-self',
      padding: 'p',
      margin: 'm',
      width: 'w',
      height: 'h',
      'font-family': 'font',
      'font-size': 'text',
      'font-smoothing': 'antialiased',
      'font-style': 'italic',
      'font-weight': 'font',
      'letter-spacing': 'tracking',
      'line-height': 'leading',
      'list-style': 'list',
      'text-align': 'text',
      'text-color': 'text',
      'text-opacity': 'text-opacity',
      'text-overflow': 'overflow',
      'text-indent': 'text-indent',
      'line-clamp': 'line-clamp',
      'vertical-align': 'align',
      'white-space': 'whitespace',
      'word-break': 'break',
      'background-attachment': 'bg',
      'background-clip': 'bg-clip',
      'background-color': 'bg',
      'background-opacity': 'bg-opacity',
      'background-origin': 'bg-origin',
      'background-position': 'bg',
      'background-repeat': 'bg',
      'background-size': 'bg',
      'background-image': 'bg',
      'background-image-gradient-from': 'from',
      'background-image-gradient-via': 'via',
      'background-image-gradient-to': 'to',
      'border-radius': 'rounded',
      'border-width': 'border',
      'border-color': 'border',
      'border-opacity': 'border-opacity',
      'border-style': 'border',
      'divide-width': 'divide',
      'divide-color': 'divide',
      'divide-opacity': 'divide-opacity',
      'divide-style': 'divide',
      'box-shadow': 'shadow',
      opacity: 'opacity',
      'mix-blend-mode': 'mix-blend',
      'background-blend-mode': 'bg-blend',
      'transition-property': 'transition',
      'transition-duration': 'duration',
      'transition-timing-function': 'ease',
      'transition-delay': 'delay',
      animation: 'animate',
      transform: 'transform',
      'transform-origin': 'origin',
      scale: 'scale',
      rotate: 'rotate',
      translate: 'translate',
      skew: 'skew',
      skew: 'skew',
      appearance: 'appearance',
      cursor: 'cursor',
      outline: 'outline',
      'pointer-events': 'pointer-events',
      resize: 'resize',
      'user-select': 'select'
    }
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      // brand 代表品牌色
      brand: '#1890ff',
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: '#111827',
      red: '#f5222d',
      yellow: '#fadb14',
      green: '#52c41a',
      blue: '#1890ff',
      indigo: '#312e81',
      purple: '#722ed1',
      pink: '#eb2f96',
    },
    spacing: {
      px: '1px',
      0: '0px',
      '0.5': '0.125rem',
      1: '0.25rem',
      '1.5': '0.375rem',
      2: '0.5rem',
      '2.5': '0.625rem',
      3: '0.75rem',
      '3.5': '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    inset: theme => ({
      auto: 'auto',
      ...theme.spacing,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      // 会出现 sass 除法语法错误
      // 'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      // 'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    gap: theme => theme.spacing,
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    margin: theme => ({
      auto: 'auto',
      ...theme.spacing,
    }),
    padding: theme => theme.spacing,
    width: theme => ({
      auto: 'auto',
      ...theme.spacing,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme.spacing,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxHeight: theme => ({
      ...theme.spacing,
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxWidth: {
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
    },
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontSizeLineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': 1,
      '6xl': 1,
      '7xl': 1,
      '8xl': 1,
      '9xl': 1,
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    textIndent: theme => ({
      ...theme.spacing,
    }),
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    textColor: theme => theme.colors,
    textOpacity: theme => theme.opacity,
    backgroundColor: theme => theme.colors,
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-stops))',
    },
    backgroundOpacity: theme => theme.opacity,
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => theme.colors,
    borderOpacity: theme => theme.opacity,
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderSpacing: theme => theme.spacing,
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    divideColor: theme => theme.borderColor,
    divideOpacity: theme => theme.borderOpacity,
    divideWidth: theme => theme.borderWidth,
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: theme => ({
      ...theme.spacing,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
  }
}



// module.exports = {
//   theme: {
//   //   columns: {
//   //     auto: 'auto',
//   //     1: '1',
//   //     2: '2',
//   //     3: '3',
//   //     4: '4',
//   //     5: '5',
//   //     6: '6',
//   //     7: '7',
//   //     8: '8',
//   //     9: '9',
//   //     10: '10',
//   //     11: '11',
//   //     12: '12',
//   //     '3xs': '16rem',
//   //     '2xs': '18rem',
//   //     xs: '20rem',
//   //     sm: '24rem',
//   //     md: '28rem',
//   //     lg: '32rem',
//   //     xl: '36rem',
//   //     '2xl': '42rem',
//   //     '3xl': '48rem',
//   //     '4xl': '56rem',
//   //     '5xl': '64rem',
//   //     '6xl': '72rem',
//   //     '7xl': '80rem',
//   //   },

//   //   aspectRatio: {
//   //     auto: 'auto',
//   //     square: '1 / 1',
//   //     video: '16 / 9',
//   //   },
//   //   caretColor: ({ theme }) => theme('colors'),
//   //   accentColor: ({ theme }) => ({
//   //     ...theme('colors'),
//   //     auto: 'auto',
//   //   }),
//   //   contrast: {
//   //     0: '0',
//   //     50: '.5',
//   //     75: '.75',
//   //     100: '1',
//   //     125: '1.25',
//   //     150: '1.5',
//   //     200: '2',
//   //   },
//   //   content: {
//   //     none: 'none',
//   //   },
//   //   dropShadow: {
//   //     sm: '0 1px 1px rgb(0 0 0 / 0.05)',
//   //     DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
//   //     md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
//   //     lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
//   //     xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
//   //     '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
//   //     none: '0 0 #0000',
//   //   },
//   //   grayscale: {
//   //     0: '0',
//   //     DEFAULT: '100%',
//   //   },
//   //   hueRotate: {
//   //     0: '0deg',
//   //     15: '15deg',
//   //     30: '30deg',
//   //     60: '60deg',
//   //     90: '90deg',
//   //     180: '180deg',
//   //   },
//   //   invert: {
//   //     0: '0',
//   //     DEFAULT: '100%',
//   //   },
//   //   flexBasis: ({ theme }) => ({
//   //     auto: 'auto',
//   //     ...theme('spacing'),
//   //     '1/2': '50%',
//   //     '1/3': '33.333333%',
//   //     '2/3': '66.666667%',
//   //     '1/4': '25%',
//   //     '2/4': '50%',
//   //     '3/4': '75%',
//   //     '1/5': '20%',
//   //     '2/5': '40%',
//   //     '3/5': '60%',
//   //     '4/5': '80%',
//   //     '1/6': '16.666667%',
//   //     '2/6': '33.333333%',
//   //     '3/6': '50%',
//   //     '4/6': '66.666667%',
//   //     '5/6': '83.333333%',
//   //     '1/12': '8.333333%',
//   //     '2/12': '16.666667%',
//   //     '3/12': '25%',
//   //     '4/12': '33.333333%',
//   //     '5/12': '41.666667%',
//   //     '6/12': '50%',
//   //     '7/12': '58.333333%',
//   //     '8/12': '66.666667%',
//   //     '9/12': '75%',
//   //     '10/12': '83.333333%',
//   //     '11/12': '91.666667%',
//   //     full: '100%',
//   //   }),
//   //   placeholderColor: ({ theme }) => theme('colors'),
//   //   placeholderOpacity: ({ theme }) => theme('opacity'),
//   //   scrollMargin: ({ theme }) => ({
//   //     ...theme('spacing'),
//   //   }),
//   //   scrollPadding: ({ theme }) => theme('spacing'),
//   //   sepia: {
//   //     0: '0',
//   //     DEFAULT: '100%',
//   //   },
//   //   space: ({ theme }) => ({
//   //     ...theme('spacing'),
//   //   }),
//   //   textDecorationColor: ({ theme }) => theme('colors'),
//   //   textDecorationThickness: {
//   //     auto: 'auto',
//   //     'from-font': 'from-font',
//   //     0: '0px',
//   //     1: '1px',
//   //     2: '2px',
//   //     4: '4px',
//   //     8: '8px',
//   //   },
//   //   textUnderlineOffset: {
//   //     auto: 'auto',
//   //     0: '0px',
//   //     1: '1px',
//   //     2: '2px',
//   //     4: '4px',
//   //     8: '8px',
//   //   },
//   //   willChange: {
//   //     auto: 'auto',
//   //     scroll: 'scroll-position',
//   //     contents: 'contents',
//   //     transform: 'transform',
//   //   },
//   },
//   // variantOrder: [
//   //   'first',
//   //   'last',
//   //   'odd',
//   //   'even',
//   //   'visited',
//   //   'checked',
//   //   'empty',
//   //   'read-only',
//   //   'group-hover',
//   //   'group-focus',
//   //   'focus-within',
//   //   'hover',
//   //   'focus',
//   //   'focus-visible',
//   //   'active',
//   //   'disabled',
//   // ]
// }