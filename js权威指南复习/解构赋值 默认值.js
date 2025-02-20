const rawProps = {}
const {
    name = 'v',
    type,
    duration,
    enterFromClass = `${name}-enter-from`,   //解构赋值能使用的原因
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`,
} = rawProps



