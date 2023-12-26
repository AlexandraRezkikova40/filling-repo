import config from './next.config'
const settings =
  typeof process.env.NEXT_PUBLIC_SETTINGS === 'string'
    ? JSON.parse(process.env.NEXT_PUBLIC_SETTINGS)
    : {}
const nextConfig = {
  compiler: {

    settings
  }
}
