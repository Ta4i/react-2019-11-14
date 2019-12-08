import {CHANGE_DOWNLOAD_STATUS} from '../common'

/**
 * Обработчик события CHANGE_DOWNLOAD_STATUS
 * Записывает в store новое состояние загрузки для заданного URL
 * action.payload {
 *   downloadUrl: URL для загрузки
 *   downloadStatus: статус загрузки
 * }
 */
export const downloadStatusReducer = (downloadStatusState = [], action) => {
  switch (action.type) {
    case CHANGE_DOWNLOAD_STATUS: {
      return {
        ...downloadStatusState,
        [action.payload.downloadUrl]: action.payload.downloadStatus,
      }
    }
    default: {
      return downloadStatusState
    }
  }
}
