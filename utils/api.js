import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'a98bcom9', // string, required
  dataset: 'production', // string, required
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

const query = `{
  "work": *[_type == "work"]{
    _id, title, slug, year, body,
    "embed": asset.embedUrl,
    "image": asset.image.asset->url,
    "video": asset.video.asset->url,
    "categories": categories[]->title
  },
  "axis": *[_type == "axis"]{_id, id, title, slug, text, "imageUrl": axisTot.asset->url}
}`

// Dynamicly generate routes
export default async function dynamicRoutes() {
  const { work, axis } = await client.fetch(query)

  const outcomeRoutes = work.map((d) => {
    if (d.slug)
      return {
        route: `/outcome/${d.slug.current}`,
        payload: d
      }
  })

  const materialRoutes = axis.map((d) => ({
    route: `/material/${d.id}`,
    payload: d
  }))

  const routes = materialRoutes.concat(outcomeRoutes)
  return routes
}
