import USER_CONFIG from './index.cjs'

// const config = process.env.USER_INFO ? /* istanbul ignore next */ JSON.parse(process.env.USER_INFO) : USER_CONFIG
const config = USER_CONFIG
console.log(`获取config >>> ${config}`)
export default config
