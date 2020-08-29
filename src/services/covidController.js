import api from './apiService'
import querystring from 'querystring'

export const covidController = () => {
    return {
      getHistory: (lastdays) => {
        const qs = querystring.stringify({
            lastdays: lastdays
          })
        return api.get(`/historical?${qs}`)
      }
    }
  }
  