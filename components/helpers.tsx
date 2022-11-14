export function updateImageUrl (url: string): string {
  return url.replace('https://topwork.uk/', 'https://revolancer.com/')
}

const htmlEntities: { [key: string]: string } = {
  nbsp: ' ',
  cent: '¢',
  pound: '£',
  yen: '¥',
  euro: '€',
  copy: '©',
  reg: '®',
  lt: '<',
  gt: '>',
  quot: '"',
  amp: '&',
  apos: '\''
}

export function unescapeHTML (str: string): string {
  return str.replace(/&([^;]+);/g, function (entity, entityCode: string) {
    let match
    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode]
      /* eslint no-cond-assign: 0 */
    } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/)) != null) {
      return String.fromCharCode(parseInt(match[1], 16))
      /* eslint no-cond-assign: 0 */
    } else if ((match = entityCode.match(/^#(\d+)$/)) != null) {
      return String.fromCharCode(~~match[1])
    } else {
      return entity
    }
  })
};
