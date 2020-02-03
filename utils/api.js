import axios from 'axios'
import Papa from 'papaparse'
import sanityClient from '@sanity/client'
import { getPrev, getNext } from '../utils/index'

const client = sanityClient({
  projectId: 'a98bcom9', // string, required
  dataset: 'production', // string, required
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})
const query = '*[_type == "work"]{slug}'

const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

// Dynamicly generate routes for material pages
export default async function dynamicRoutes() {
  // currently a bot messy with 2 endpoints
  const [result1, result2] = await Promise.all([
    client.fetch(query),
    axios.get(URL)
  ])

  const { data } = Papa.parse(result2.data, {
    header: true,
    dynamicTyping: true
  })

  const outcomeRoutes = result1.map((d) => `/outcome/${d.slug.current}`)
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
