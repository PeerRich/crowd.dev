import { Logger } from '@crowd/logging'
import { SegmentData } from '../../types/segmentTypes'
import { RedisClient } from '@crowd/redis'

export interface IRepositoryOptions {
  log: Logger
  redis: RedisClient
  language: string
  currentUser: any
  currentTenant: any
  currentSegments: SegmentData[]
  database: any
  transaction?: any
  bypassPermissionValidation?: any
  opensearch?: any
}
