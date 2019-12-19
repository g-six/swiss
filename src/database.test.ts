const spyEnd = jest.fn()
const $pool = {
  end: spyEnd,
}
jest.mock('massive', () => {
  return async (db_config: any): Promise<{}> => {
    return Promise.resolve({
      listTables: () => ['yes_i_do'],
      instance: { $pool },
    })
  }
})

import { disconnectDb, doesDbTableExists, getDatabase } from './database'

describe('Database connection util', () => {
  it('should return the database connection', async () => {
    const connection = await getDatabase()

    expect(connection).toBeTruthy()
  })

  describe('doesDbTableExists', () => {
    it('should return false if table does not exist', async () => {
      const actual = await doesDbTableExists('no_i_donut')
      expect(actual).toBeFalsy()
    })
  })

  describe('disconnectDb', () => {
    it('should be able to disconnect', async () => {
      await disconnectDb()
      expect(spyEnd).toHaveBeenCalled()
    })
  })
})
