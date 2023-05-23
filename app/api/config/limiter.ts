import { RateLimiter } from 'limiter'

export const limiter: RateLimiter = new RateLimiter({
    tokensPerInterval: 3,
    interval: 'min',
    fireImmediately: true
})