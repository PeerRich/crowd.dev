import { Logger } from '@crowd/logging'
import { SegmentData } from '../types/segmentTypes'
import { RedisClient } from '@crowd/redis'

export interface IServiceOptions {
  log: Logger
  language: string
  currentUser: any
  currentTenant: any
  currentSegments: SegmentData[]
  database: any
  redis: RedisClient
}
