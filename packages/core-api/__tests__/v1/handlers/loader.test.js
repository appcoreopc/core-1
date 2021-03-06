'use strict'

require('../../__support__/setup')

const utils = require('../utils')

describe('API 1.0 - Loader', () => {
  describe('GET /loader/status', () => {
    it('should be ok', async () => {
      const response = await utils.request('GET', 'loader/status')
      utils.expectSuccessful(response)

      expect(response.data).toBeObject()
      expect(response.data).toHaveProperty('loaded')
      expect(response.data).toHaveProperty('now')
      expect(response.data).toHaveProperty('blocksCount')
    })
  })

  describe('GET /loader/status/sync', () => {
    it('should be ok', async () => {
      const response = await utils.request('GET', 'loader/status/sync')
      utils.expectSuccessful(response)

      expect(response.data).toBeObject()
      expect(response.data).toHaveProperty('syncing')
      expect(response.data).toHaveProperty('blocks')
      expect(response.data).toHaveProperty('height')
      expect(response.data).toHaveProperty('id')
    })
  })

  describe('GET /loader/autoconfigure', () => {
    it('should be ok', async () => {
      const response = await utils.request('GET', 'loader/autoconfigure')
      utils.expectSuccessful(response)

      expect(response.data).toBeObject()
      expect(response.data.network).toBeObject()
      expect(response.data.network).toHaveProperty('nethash')
      expect(response.data.network).toHaveProperty('token')
      expect(response.data.network).toHaveProperty('symbol')
      expect(response.data.network).toHaveProperty('explorer')
      expect(response.data.network).toHaveProperty('version')
    })
  })
})
