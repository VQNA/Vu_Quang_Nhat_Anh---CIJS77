function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}


const a = domainName("https://youtube.comr100")
console.log(a)