function getNext(haystack, needle) {
  // loop until we find and axis with content
  let i = Number(needle)
  while (i < haystack.length - 1) {
    const axis = haystack[i]
    if (axis.text || axis.hasTot) {
      return axis
    }
    i++
  }
}

function getPrev(haystack, needle) {
  // loop until we find and axis with content
  let i = Number(needle) - 1
  while (i > 0) {
    const axis = haystack[i - 1]
    if (axis.text || axis.hasTot) {
      return axis
    }
    --i
  }
}

export { getPrev, getNext }
