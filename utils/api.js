import axios from 'axios'
import Papa from 'papaparse'
import { getPrev, getNext } from '../utils/index'
const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

// Staticly generate routes for outcome pages
const outcomeRoutes = Array.from(Array(16)).map((e, i) => `/outcome/${i}`)

// Dynamicly generate routes for material pages
export default async function dynamicRoutes() {
  // console.log('Hitting the API whie generating routes')
  const res = await axios.get(URL)
  const { data } = Papa.parse(res.data, {
    header: true,
    dynamicTyping: true
  })

  const materialRoutes = data.map((c, i, a) => {
    const payload = {
      prev: getPrev(a, c.id),
      current: c,
      next: getNext(a, c.id)
    }
    return {
      route: `/material/${c.id}`,
      payload
    }
  })
  return materialRoutes.concat(outcomeRoutes)
}
