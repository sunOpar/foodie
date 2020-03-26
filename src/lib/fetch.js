import axios from 'axios'

const fetch = axios.create({
  baseURL:
    'https://1480466305752483.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/foodie-service/api',
})

export default fetch