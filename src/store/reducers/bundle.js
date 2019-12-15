import {bundle as bundleEn} from '../bundle/en/bundle'
import {bundle as bundleRu} from '../bundle/ru/bundle'

export const bundleReducer = (BundleState = {bundleEn, bundleRu}, action) => {
  return BundleState
}
