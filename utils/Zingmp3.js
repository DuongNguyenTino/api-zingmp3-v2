
const axios = require('axios');
const { FileCookieStore } = require('tough-cookie-file-store');
const { wrapper } = require('axios-cookiejar-support')
const { CookieJar } = require('tough-cookie')
const fs = require('fs');
const encrypt = require('./encrypt');

const URL_API = process.env.ZINGMP3_BASE_URL;
const API_KEY = process.env.ZINGMP3_API_KEY;
const SECRET_KEY = process.env.ZINGMP3_SECRET_KEY;

const cookiePath = 'ZingMp3.json';

if (!fs.existsSync(cookiePath)) fs.closeSync(fs.openSync(cookiePath, 'w'));

const cookiejar =  new CookieJar(new FileCookieStore(cookiePath))

const axiosInstance = axios.create({
  baseURL: URL_API,
  params: {
    apiKey: API_KEY,
  },
  timeout: 1000,
})

wrapper(axiosInstance)

class ZingMp3 {
  constructor() {
    this.time = null;
  }
  async getHubHome() {
    try {
      return await this.axiosZing({
        path: '/api/v2/page/get/hub-home',
      });
    } catch (error) {
      throw error;
    }
  }

  async getRadio() {
    try {
      return await this.axiosZing({
        path: '/api/v2/page/get/radio',
      });
    } catch (error) {
      throw error;
    }
  }

  async getCookie() {
    try {
			if (cookiejar.getCookiesSync(URL_API)) await axiosInstance.get('/')
			else console.log(cookiejar.getCookiesSync(URL_API));
    } catch (error) {
      throw error;
    }
  }

  async axiosZing({ path, params, haveParam }) {
    try {
      await this.getCookie();
      const param = new URLSearchParams(params).toString();
      const sig = this.hashParam(path, param, haveParam);

      const { data } = await axiosInstance.get(path, {
        params: {
          ...param,
          ctime: this.time,
          sig,
        },
				jar: cookiejar,
      });

      if (data.err) {
        return data
      }
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  hashParam(path, param, haveParam = 0) {
    this.time = Math.floor(Date.now() / 1000);
    let strHash = `ctime=${this.time}`;
    if (haveParam === 0) strHash += param;
    const hash256 = encrypt.getHash256(strHash);
    return encrypt.getHmac512(path + hash256, SECRET_KEY);
  }
}

module.exports = new ZingMp3();
