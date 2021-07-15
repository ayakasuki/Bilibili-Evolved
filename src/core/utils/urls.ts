/** 稍后再看页面 */
export const watchlaterUrls = [
  '//www.bilibili.com/medialist/play/watchlater/',
]
/** 收藏夹连播页面 */
export const favoriteListUrls = [
  '//www.bilibili.com/medialist/play/ml',
]
/** 合集类页面 */
export const mediaListUrls = [
  ...watchlaterUrls,
  ...favoriteListUrls,
]
/** 含有视频的页面 */
export const videoUrls = [
  '//www.bilibili.com/video/',
  ...mediaListUrls,
]
/** 含有番剧的页面 */
export const bangumiUrls = [
  '//www.bilibili.com/bangumi/',
]
/** 含有课程的页面 */
export const cheeseUrls = [
  '//www.bilibili.com/cheese/',
]
/** 视频和番剧页面 */
export const videoAndBangumiUrls = [
  ...videoUrls,
  ...bangumiUrls,
]
/** 主站及各分区页面 */
export const mainSiteUrls = [
  'https://www.bilibili.com/v/',
  /^https:\/\/www\.bilibili\.com\/$/,
  /^https:\/\/www\.bilibili\.com\/index.html$/,
]
/** 直播间页面 */
export const liveUrls = [
  /^https:\/\/live\.bilibili\.com\/(blanc\/)?[\d]+/,
]
/** 不支持夜间模式的页面 */
export const darkExcludes = [
  '//member.bilibili.com/v2',
  '//member.bilibili.com/video/upload.html',
  '//member.bilibili.com/article-text/home',
  '//www.bilibili.com/audio/submit/',
  '//member.bilibili.com/studio/bs-editor/projects',
  '//www.bilibili.com/s/video/',
]
/** 除动态详情页以外的含有动态的页面 */
export const feedsUrlsWithoutDetail = [
  /^https:\/\/t\.bilibili\.com\/$/,
  /^https:\/\/space\.bilibili\.com\//,
  /^https:\/\/live\.bilibili\.com\/(blanc\/)?[\d]+/,
]
/** 含有动态的页面 */
export const feedsUrls = [
  ...feedsUrlsWithoutDetail,
  /^https:\/\/t\.bilibili\.com\//,
]
/** 含有专栏的页面 */
export const columnUrls = [
  /^https:\/\/www\.bilibili\.com\/read\/cv/,
]
/** 含有播放器的页面 */
export const playerUrls = [
  '//player.bilibili.com',
  '//www.bilibili.com/html/player.html',
  ...videoUrls,
  ...bangumiUrls,
  ...cheeseUrls,
]
