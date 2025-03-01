import type { TestBase } from '@/test'

export interface Test extends TestBase {
  count: number
}

export { Decorator } from './decorator'
export { test, method } from './test'
export { addOne, add } from '@/js-test.js'

export type { User } from './types'
