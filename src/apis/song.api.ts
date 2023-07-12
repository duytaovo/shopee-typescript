import { List, Song } from 'src/types/types.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = '/api/get/home'

const songApi = {

  getSongs() {
    return http.get<SuccessResponse<List>>(URL, {
    })
  },
}

export default songApi
