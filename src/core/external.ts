import { ERRORTYPES, BREADCRUMBTYPES } from '../common'
import { isError, extractErrorStack, getLocationHref, getTimestamp, unknownToString } from 'utils'
import { transportData } from './transportData'
import { breadcrumb } from './breadcrumb'
import { Severity } from '../utils/Severity'

interface LogTypes {
  message: string
  level: Severity
  ex: any
  tag: string
  type: ERRORTYPES
}

/**
 * 自定义上报事件
 */
export function log({ message = 'emptyMsg', tag = '', level = Severity.Low, ex = '' }: LogTypes): void {
  let errorInfo = {}
  if (isError(ex)) {
    errorInfo = extractErrorStack(ex, level)
  }
  const error = {
    ...errorInfo,
    type: ERRORTYPES.LOG_ERROR,
    level,
    message: unknownToString(message),
    name: 'MITO.log',
    customTag: unknownToString(tag),
    time: getTimestamp(),
    url: getLocationHref()
  }
  breadcrumb.push({
    type: BREADCRUMBTYPES.CUSTOMER,
    category: breadcrumb.getCategory(BREADCRUMBTYPES.CUSTOMER),
    data: message,
    level: Severity.fromString(level.toString())
  })
  transportData.send(error)
}
