// jest.setup.js
import { TextEncoder, TextDecoder } from 'util'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
