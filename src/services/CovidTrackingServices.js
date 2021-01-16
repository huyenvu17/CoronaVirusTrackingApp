import axios from 'axios'
import {domain} from '../config/config'
import React, { Component } from 'react'

export class CovidTrackingServices extends Component {
  // get all countries
  countryList = () => {
    return axios({
      url: `${domain}/countries`,
      methodd: 'GET'
    })
  }

  // get covid status summary
  covidSummary = () => {
    return axios({
      url: `${domain}/summary`,
      method: 'GET',
    })
  }

}

export const covidTrackingServices = new CovidTrackingServices();
