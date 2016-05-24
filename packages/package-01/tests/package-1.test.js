import { add } from '../src'
import { expect } from 'chai'

describe('package 1 should work', () => {
  it('add', () => {
    const result = add(1, 3)
    expect(result).to.equal(4)
  })
})
