import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skw3QjzFayHlrVkzgTbsofcQBfr7RUVkagwJv25XqGN8jW5kSk1jxLxzt1CUJRQiAucAronWOWp6c3csJq37PRXANnalWFAtFK0MI5BJUTi1pcLEOFktyLW69jIXwjgjciiE3RFOv6CCpHLaWqKSwPR9kF8CO5LbDYUdu3HGLGmGMvADjDZ7"
})
