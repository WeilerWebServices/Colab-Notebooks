// Fun Text

//letIABLES:

let tGetterName = "getForegroundColor"
let hGetterName = "getBackgroundColor"
let tSetterName = "setForegroundColor"
let hSetterName = "setBackgroundColor"

let white = "#ffffff"

let udChars = "¡„#$%⅋,)(*+‘-˙/0ƖᄅƐᔭϛ9ㄥ86:؛>=<¿@∀ᗺƆⱭƎℲ⅁HIſꓘ⅂WNOԀÒᴚS⊥∩ΛMX⅄Z]\\[ᵥ‾,ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz}|{~"
let enchantedChars = "ᎯᏰᏣᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᎡᏕᏖᏬᏉᏇＸᎽᘔ"
let asianChars = "卂乃⼖刀乇千ㄙ廾⼯丁⻓ㄥ爪几ㄖㄗ㔾尺丂ㄒㄩᐯ山ㄨㄚ乙"

let bbbChar = String.fromCharCode(55356)
let strikeChar = String.fromCharCode(55349)
let invisChar = String.fromCharCode(1161)

let wsExp = /\s*/
let nwsExp = /\S/
let csqExp = /[‘’]/g
let cdqExp = /[“”]/g

let letterExp = /[a-z]/
let vowelExp = /[aeiouy]/
let consExp = /[bcdfghjklmnpqrstvwxz]/
let wordExp = /(\s*)(\S+)(\s*)/g

let frontPadExp = /(\s*)\S+/g
let frontPadExp2nd = /\s?(.*)/
let backPadExp = /\s+$/
let backPadExp2nd = /\W+$/

let morseCodeExp = /([·\-]+)([^·\-]*)/g
let frontPadApExp = /([^\w’]*)([\w’]+)/g
let pigLatinExp = /([\w’]*)([\w’])ay/

let hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let colors = ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#9900ff", "#ff00ff"]

let charTypes = ["AEIOUY", "BCDFGHJKLMNPQRSTVWXZ", "0123456789"]
let ctMatches = [/[AEIOUY]/, /[BCDFGHJKLMNPQRSTVWXZ]/, /\d/]

let bGetterNames = ["isBold", "isItalic", "isUnderline", "isStrikethrough"]
let bSetterNames = ["setBold", "setItalic", "setUnderline", "setStrikethrough"]

let attGetterNames = [
  "getForegroundColor", "getBackgroundColor", "getFontFamily", "getFontSize", "isBold", "isItalic", "isUnderline", "isStrikethrough", "getTextAlignment"
]

let attSetterNames = [
  "setForegroundColor", "setBackgroundColor", "setFontFamily", "setFontSize", "setBold", "setItalic", "setUnderline", "setStrikethrough", "setTextAlignment"
]

let interList = [
  ["au", "ou", "ow"],
  ["aw", "o"],
  ["c", "k", "q"],
  ["ce", "se"],
  ["ch", "sh"],
  ["ew", "oo", "u"],
  ["f", "gh", "ph"],
  ["qu", "cw", "kw", "qw"],
  ["r", "wr"],
  ["x", "cs", "ks", "qs", "cz", "kz", "qz"],
]

let simList = [
  ["a", "e", "i", "y"],
  ["b", "p"],
  ["d", "t"],
  ["f", "v"],
  ["g", "k"],
  ["m", "n"],
  ["o", "u"],
  ["s", "z"],
]

let specialDSChars = {
  C: 8450,
  H: 8461,
  N: 8469,
  P: 8473,
  Q: 8474,
  R: 8477,
  Z: 8484,
}

let weirdChars = {
  A: "ꁲꋬꍏ",
  B: "ꃳꋰ",
  C: "꒝ꂅꇃꉓꊐꌓꏲꏳ",
  D: "꒭꒮ꀃꀷꀸꁕꂟꂽꃹꅠꅽꆀꋒꏼ",
  E: "ꆭꈼꏁꏅꑀꑿꒊ",
  F: "ꄐꄝꊯ",
  G: "ꁅꋤꍌꐄ",
  H: "ꀍꃅꃚꅿꆿꈚꌉꍬꎝꎧꑑꑛ",
  I: "ꃩꄽ",
  J: "꒻ꊈꎇ",
  K: "ꀘꈵ",
  L: "꒹",
  M: "ꂵꈴ",
  N: "ꁹꆴꊮꊲꋊꌸꐥꏤꑩ",
  O: "ꀖꀜꀽꁙꁤꂔꂦꂮꂳꂷꃪꄍꄱꅵꆧꆩꆪꆺꇎꇥꇩꇵꉍꉻꊙꊴꊶꊸꊿꌡꌷꍳꎔꎟꏨꏿꐋꐌꐎꐑꐷꑙ",
  P: "ꆃꉣꇚꇜꊹꎙꎚꑳ",
  Q: "ꁸꋠ",
  R: "ꌅ",
  S: "ꂢꇘꌗꌚꑄ",
  T: "ꋖ",
  U: "ꀀꂹꃮꄇꇴꉀꉅꉠꊀꊽꌂꌈꏵꐇꐴ",
  V: "꒥꒦ꀎꀱꃴ",
  W: "ꁁꂍꅏꍔ",
  X: "ꀻꄆꅢꇑꇓꉧꉼꊪꋌꋚꋛꏾ",
  Y: "ꂖꅍꇇꇠꈎꉃꊍꌎꌏꌥꌩꏃꐔꐕꐜꐞꐟꐯꐳꒀ",
  Z: "ꁴꂑꄸꆑꆓꈦꌙꑇ",
}

let hackerChars = {
  A: "4@",
  B: "8",
  E: "3",
  G: "6",
  I: "1!",
  O: "0",
  Q: "9",
  S: "5$",
  T: "7+",
  Z: "2",
}

let accentedChars = {
  A: "ĀĂĄȀȂȦÀÁÃÄÅǍǞǠǺȺӐӒ",
  B: "ƁɃḂḄḆ",
  C: "ĆĈƇÇĊČȻḈꞒ",
  D: "ĐƉĎƊḊḌḎḐḒ",
  E: "ĒĔĖĘȄȆȨɆÈÉÊËĚ",
  F: "ƑḞ",
  G: "ĠĢƓĜĞǤǦǴḠꞠ",
  H: "ĤĦȞḢḤḦḨḪⱧꞪ",
  I: "ĨİƗȈÌÍÎÏĪĬĮǏȊ",
  J: "ĴɈ",
  K: "ĶƘǨḰḲḴⱩꝀꝂꝄꞢ",
  L: "ĹŁĻĽĿȽḶḸḺḼⱠⱢꝈ",
  M: "ḾṀṂ",
  N: "ŃŅŇÑƝǸṄṆṈṊꞐꞤ",
  O: "ŐȰÒÓÔÕÖØŌŎƟƠǑǪǬǾȌȎȪȬȮӦӨӪ",
  P: "ƤṔṖⱣꝐꝒꝔ",
  Q: "ꝖꝘ",
  R: "ŔŖŘȐȒɌṘṚṜṞⱤꞦ",
  S: "ŠȘŚŜŞṠṢṤṦṨⱾꞨ",
  T: "ŢŤŦƬƮȚȾṪṬṮṰ",
  U: "ŨŰŲȔȖɄÙÚÛÜŪŬŮƯǓǕǗǙǛ",
  V: "ṼṾꝞ",
  W: "ŴẀẂẄẆẈⱲ",
  X: "ẊẌ",
  Y: "ŶŸȲÝƳɎẎỲỴỶỸ",
  Z: "ŹȤŻŽƵẐẒẔⱫⱿ",
}

let stackedCodes = {
  A: 867,
  B: 850,
  C: 872,
  D: 873,
  E: 868,
  F: 842,
  G: 786,
  H: 874,
  I: 869,
  J: 787,
  K: 783,
  L: 794,
  M: 875,
  N: 779,
  O: 870,
  P: 777,
  Q: 788,
  R: 876,
  S: 830,
  T: 877,
  U: 871,
  V: 878,
  W: 784,
  X: 879,
  Y: 780,
  Z: 859,
}

let morseCodeSeqs = {
  A: "·-",
  B: "-···",
  C: "-·-·",
  D: "-··",
  E: "·",
  F: "··-·",
  G: "--·",
  H: "····",
  I: "··",
  J: "·---",
  K: "-·-",
  L: "·-··",
  M: "--",
  N: "-·",
  O: "---",
  P: "·--·",
  Q: "--·-",
  R: "·-·",
  S: "···",
  T: "-",
  U: "··-",
  V: "···-",
  W: "·--",
  X: "-··-",
  Y: "-·--",
  Z: "--··",
  "1": "·----",
  "2": "··---",
  "3": "···--",
  "4": "····-",
  "5": "·····",
  "6": "-····",
  "7": "--···",
  "8": "---··",
  "9": "----·",
  "0": "-----",
}

//UTILITIES:

function clamp(num, min, max){
  return Math.min(Math.max(num, min), max)
}

function random(max){
  return Math.floor(Math.random()*(max + 1))
}

function randomR(min, max){
  return min + random(max - min)
}

function randomB(poss){
  return Math.floor(Math.random()*poss) == 0
}

function randomItem(list, ignore){
  return list[Math.floor(Math.random()*list.length)]
}

function round(number){
  return Math.ceil(number - 0.5)
}

function blackRGB(){
  return {r: 0, g: 0, b: 0}
}

function whiteRGB(){
  return {r: 255, g: 255, b: 255}
}

function randomHex(){
  let hex = "#"
  for(let i = 0; i < 6; i++){
    hex += hexChars[random(15)]
  }
  return hex
}

function toRGB(hex){
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  }
}

function add0(str){
  return str.length == 1 ? "0" + str : str
}

function toHex(rgb){
  return "#" + add0(rgb.r.toString(16)) + add0(rgb.g.toString(16)) + add0(rgb.b.toString(16))
}

function docColor(){
  return DocumentApp.getActiveDocument().getBody().getAttributes().BACKGROUND_COLOR || white
}

function hashFromList(list, hash){
  for(let i = 0; i < list.length; i++){
    let subList = list[i]
    for(let j = 0; j < subList.length; j++){
      let subItem = subList[j]
      hash[subItem] = []
      for(let k = 0; k < subList.length; k++){
        let otherSubItem = subList[k]
        if(otherSubItem != subItem){
          hash[subItem].push(otherSubItem)
        }
      }
    }
  }
}

function getAtts(text, index){
  let atts = []
  for(let j = 0; j < 9; j++){
    atts[j] = text[attGetterNames[j]](index)
  }
  atts[9] = index
  return atts
}

function getAttList(text, start, end){
  let attList = []
  let indices = text.getTextAttributeIndices()
  for(let i = 0; i < indices.length; i++){
    let index = indices[i]
    if(index >= start && index < end){
      attList.push(getAtts(text, index))
    }
  }
  return attList
}


function replaceText(text, newString, start, end, attList){
  try{
    text.deleteText(start, end - 1)
    text.insertText(start, newString)
    let lastAttI =  start + newString.length - 1
    for(let i = 0; i < attList.length; i++){
      let atts = attList[i]
      let index = atts[9]
      let nextAtts = attList[i + 1]
      let nextIndex = nextAtts ? nextAtts[9] : lastAttI
      for(let j = 0; j < 8; j++){
        text[attSetterNames[j]](index, nextIndex, atts[j])
      }
      text.setTextAlignment(index, index, atts[8] || DocumentApp.TextAlignment.NORMAL)
    }
  }catch(e){
    if(e.message.indexOf("index") == -1){
      throw e
    }
  }
}

function replaceIndices(attList, newIndices, start){
  for(let i = 0; i < attList.length; i++){
    attList[i][9] = newIndices[attList[i][9] - start] + start
  }
}

function newAttList(attList, newIndices, start){
  let newAttList = []
  for(let i = 0; i < attList.length; i++){
    let offsetNewIndex = newIndices[attList[i][9] - start]
    if(offsetNewIndex != null){
      attList[i][9] = offsetNewIndex + start
      newAttList.push(attList[i])
    }
  }
  return newAttList
}

function alert(message){
  DocumentApp.getUi().alert(message)
}

//DERIVED letIABLES:

let rgbColors = []
for(let i = 0; i < colors.length; i++){
  rgbColors[i] = toRGB(colors[i])
}

let interchangeable = {}
let similar = {}

hashFromList(interList, interchangeable)
hashFromList(simList, similar)

//COLOR:

function makeRainbow(text, string, start, end, ops){
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let colorCount = 0
  for(let i = start; i < end; i++){
    if(ops.spaces || nwsExp.exec(string.charAt(i))){
      text[mySetterName](i, i, colors[colorCount])
      colorCount = colorCount == 7 ? 0 : colorCount + 1
    }else{
      text[mySetterName](i, i, null)
    }
  }
}

function randomlyColor(text, string, start, end, ops){
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  for(let i = start; i < end; i++){
    if(ops.spaces || nwsExp.exec(string.charAt(i))){
      text[mySetterName](i, i, randomHex())
    }else{
      text[mySetterName](i, i, null)
    }
  }
}

function repeatColors(text, string, start, end, ops){
  if(string.length == 1) return
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let colorPattern = []
  let lastColor = false
  let patternEnd
  for(let i = 0; i < string.length; i++){
    if(ops.spaces || nwsExp.exec(string.charAt(i))){
      let color = text[myGetterName](start + i) || null
      if(color == lastColor){
        break
      }else{
        colorPattern.push(color)
        lastColor = color
        patternEnd = i
      }
    }
  }
  if(colorPattern.length == string.length){
    return
  }
  colorPattern.pop()
  if(colorPattern.length <= 1){
    alert("Must have at least two characters with different colors at start of text to create repeating pattern.")
    return
  }
  let colorNum = 0
  let maxColorNum = colorPattern.length - 1
  for(let i = patternEnd; i < string.length; i++){
    let textI = start + i
    if(ops.spaces || nwsExp.exec(string.charAt(i))){
      text[mySetterName](textI, textI, colorPattern[colorNum])
      colorNum = colorNum == maxColorNum ? 0 : colorNum + 1
    }else{
      text[mySetterName](textI, textI, null)
    }
  }
}

function makeSmoothRainbow(text, string, start, end, ops){
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  if(string.length == 1){
    text[mySetterName](0, 0, colors[0])
    return
  }
  let iFactor = 7/(string.length - 1)
  for(let i = start; i < end; i++){
    let colorI = (i - start)*iFactor
    let percent = colorI%1
    let prevRGB = rgbColors[Math.floor(colorI)] || rgbColors[0]
    let nextRGB = rgbColors[Math.ceil(colorI)] || rgbColors[7]
    text[mySetterName](i, i, toHex({
        r: round(prevRGB.r + (nextRGB.r - prevRGB.r)*percent),
        g: round(prevRGB.g + (nextRGB.g - prevRGB.g)*percent),
        b: round(prevRGB.b + (nextRGB.b - prevRGB.b)*percent)
    }))
  }
}

function fade(text, string, start, end, ops){
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let startHex = text[myGetterName](start)
  let startRGB = startHex ? toRGB(startHex) : blackRGB()
  let endHex = docColor()
  let endRGB = endHex ? toRGB(endHex) : whiteRGB()
  for(let i = 0; i < string.length; i++){
    let pos = start + i
    let percent = i/string.length
    text[mySetterName](pos, pos, toHex({
      r: round(startRGB.r + (endRGB.r - startRGB.r)*percent),
      g: round(startRGB.g + (endRGB.g - startRGB.g)*percent),
      b: round(startRGB.b + (endRGB.b - startRGB.b)*percent)
    }))
  }
}

function transitionColor(text, string, start, end, ops){
  if(string.length == 1) return
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let startHex = text[myGetterName](start)
  let endHex = text[myGetterName](end - 1)
  if(startHex == endHex){
    alert("Color of first character must be different from color of last character to create transition gradient.")
    return
  }
  let currentDocColor
  let startRGB
  if(startHex){
    startRGB = toRGB(startHex)
  }else if(myGetterName == tGetterName){
    startRGB = blackRGB()
  }else{
    currentDocColor = docColor()
    startRGB = currentDocColor ? toRGB(currentDocColor) : whiteRGB()
  }
  let endRGB
  if(endHex){
    endRGB = toRGB(endHex)
  }else if(myGetterName == tGetterName){
    endRGB = blackRGB()
  }else{
    currentDocColor = currentDocColor || docColor()
    endRGB = currentDocColor ? toRGB(currentDocColor) : whiteRGB()
  }
  let lastI = string.length - 1
  for(let i = 0; i < lastI; i++){
    let pos = start + i
    let percent = i/lastI
    text[mySetterName](pos, pos, toHex({
      r: round(startRGB.r + (endRGB.r - startRGB.r)*percent),
      g: round(startRGB.g + (endRGB.g - startRGB.g)*percent),
      b: round(startRGB.b + (endRGB.b - startRGB.b)*percent)
    }))
  }
}

function adjustBrightness(text, string, start, end, ops){
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let response = DocumentApp.getUi().prompt("What percent would you like to increase/decrease the text's brightness by?\n\n")
  let responseText = response.getResponseText()
  if(!responseText) return
  let percent = parseInt(responseText)
  if(percent || percent == 0){
    if(percent >= -500 && percent <= 500){
      percent = percent*0.01
      for(let i = start; i < end; i++){
        let color = null
        let hexColor = text[myGetterName](i)
        if(hexColor){
          color = toRGB(hexColor)
        }else if(myGetterName == tGetterName){
          color = blackRGB()
        }else{
          currentDocColor = docColor()
          color = currentDocColor ? toRGB(currentDocColor) : whiteRGB()
        }
        color.r = clamp(color.r + round((color.r + 255)*0.5*percent), 0, 255)
        color.g = clamp(color.g + round((color.g + 255)*0.5*percent), 0, 255)
        color.b = clamp(color.b + round((color.b + 255)*0.5*percent), 0, 255)
        text[mySetterName](i, i, toHex(color))
      }
    }else{
      alert("Percent must be between -500% and 500%.")
    }
  }else{
    alert("It would seem that \"" + responseText + "\" is not a valid percent.")
  }
}

function randomizeBrightness(text, string, start, end, ops){
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let response = DocumentApp.getUi().prompt("What maximum percent would you like to randomly increase/decrease the text's brightness by?\n\n")
  let responseText = response.getResponseText()
  if(!responseText) return
  let maxPercent = parseInt(responseText)
  if(maxPercent || maxPercent == 0){
    if(maxPercent >= 1 && maxPercent <= 500){
      for(let i = start; i < end; i++){
        let percent = randomR(-maxPercent, maxPercent)*0.01
        let color = null
        let hexColor = text[myGetterName](i)
        if(hexColor){
          color = toRGB(hexColor)
        }else if(myGetterName == tGetterName){
          color = blackRGB()
        }else{
          currentDocColor = docColor()
          color = currentDocColor ? toRGB(currentDocColor) : whiteRGB()
        }
        color.r = clamp(color.r + round((color.r + 255)*0.5*percent), 0, 255)
        color.g = clamp(color.g + round((color.g + 255)*0.5*percent), 0, 255)
        color.b = clamp(color.b + round((color.b + 255)*0.5*percent), 0, 255)
        text[mySetterName](i, i, toHex(color))
      }
    }else{
      alert("Percent must be between 1% and 500%.")
    }
  }else{
    alert("It would seem that \"" + responseText + "\" is not a valid percent.")
  }
}

function reverseColors(text, string, start, end, ops){
  let myGetterName = ops.highlight ? hGetterName : tGetterName
  let mySetterName = ops.highlight ? hSetterName : tSetterName
  let lastI = string.length - 1
  for(let i = 0; i < Math.floor(string.length*0.5); i++){
    let actIndex = start + i
    let oppIndex = start + lastI - i
    let color0 = text[myGetterName](actIndex)
    let color1 = text[myGetterName](oppIndex)
    text[mySetterName](actIndex, actIndex, color1)
    text[mySetterName](oppIndex, oppIndex, color0)
  }
}

//FONT SIZE:

function grow(text, string, start, end){
  let startSize = text.getFontSize(start) || 11
  for(let i = 0; i < string.length; i++){
    let pos = start + i
    text.setFontSize(pos, pos, startSize + i)
  }
}

function wobble(text, string, start, end){
  let startSize = text.getFontSize(start) || 11
  let change = startSize*0.25
  let phases = [startSize, Math.floor(startSize + change), startSize, Math.ceil(startSize - change)]
  let phase = 0
  for(let i = start; i < end; i++){
    text.setFontSize(i, i, phases[phase])
    phase = phase == 3 ? 0 : phase + 1
  }
}

function randomlySize(text, string, start, end){
  let size = text.getFontSize(start) || 11
  let lowestSize = Math.ceil(size*0.5)
  for(let i = start; i < end; i++){
    text.setFontSize(i, i, lowestSize + random(size))
  }
}

function repeatSizes(text, string, start, end){
  if(string.length == 1) return
  let sizePattern = []
  let lastSize = false
  for(let i = start; i < end; i++){
    let size = text.getFontSize(i)
    if(size == lastSize){
      break
    }else{
      sizePattern.push(size)
      lastSize = size
    }
  }
  if(sizePattern.length == string.length){
    return
  }
  sizePattern.pop()
  if(sizePattern.length <= 1){
    alert("Must have at least two characters with different sizes at start of text to create repeating pattern.")
    return
  }
  let sizeNum = 0
  let maxSizeNum = sizePattern.length - 1
  for(let i = start + sizePattern.length; i < end; i++){
    text.setFontSize(i, i, sizePattern[sizeNum])
    sizeNum = sizeNum == maxSizeNum ? 0 : sizeNum + 1
  }
}

function transitionSize(text, string, start, end){
  if(string.length == 1) return
  let startSize = text.getFontSize(start)
  let endSize = text.getFontSize(end - 1)
  if(startSize == endSize){
    alert("Size of first character must be different from size of last character to create transition gradient.")
    return
  }
  let delta = endSize - startSize
  let lastI = string.length - 1
  for(let i = 1; i < lastI; i++){
    let pos = start + i
    text.setFontSize(pos, pos, startSize + round(delta*(i/lastI)))
  }
}

function reverseSizes(text, string, start, end){
  let lastI = string.length - 1
  for(let i = 0; i < Math.floor(string.length*0.5); i++){
    let actIndex = start + i
    let oppIndex = start + lastI - i
    let size0 = text.getFontSize(actIndex)
    let size1 = text.getFontSize(oppIndex)
    text.setFontSize(actIndex, actIndex, size1)
    text.setFontSize(oppIndex, oppIndex, size0)
  }
}

//BIUS:

function sequenceBIUS(text, string, start, end){
  let BIUSCount = 0
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      text[bSetterNames[BIUSCount]](i, i, true)
      BIUSCount = BIUSCount == 3 ? 0 : BIUSCount + 1
    }
  }
}

function randomizeBIUS(text, string, start, end){
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      for(let j = 0; j < 4; j++){
        text[bSetterNames[j]](i, i, randomB(4))
      }
    }
  }
}

function invertBIUS(text, string, start, end){
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      for(let j = 0; j < 4; j++){
        text[bSetterNames[j]](i, i, !text[bGetterNames[j]](i))
      }
    }
  }
}

function reverseBIUS(text, string, start, end){
  let lastI = string.length - 1
  for(let i = 0; i < Math.floor(string.length*0.5); i++){
    let actIndex = start + i
    let oppIndex = start + lastI - i
    for(let j = 0; j < 4; j++){
      let buis0 = text[bGetterNames[j]](actIndex)
      let buis1 = text[bGetterNames[j]](oppIndex)
      text[bSetterNames[j]](actIndex, actIndex, buis1)
      text[bSetterNames[j]](oppIndex, oppIndex, buis0)
    }
  }
}

//SUPER/SUB:

function alternateSuperSub(text, string, start, end){
  let isSuper = true
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      if(isSuper){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUPERSCRIPT)
        isSuper = false
      }else{
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT)
        isSuper = true
      }
    }
  }
}

function bounceSuperSub(text, string, start, end){
  let ssNum = 0
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      if(ssNum == 1){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUPERSCRIPT)
      }else if(ssNum == 3){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT)
      }
      ssNum = ssNum == 3 ? 0 : ssNum + 1
    }
  }
}

function randomizeSuperSub(text, string, start, end){
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      if(randomB(2)){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUPERSCRIPT)
      }else{
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT)
      }
    }
  }
}

function sporadicizeSuperSub(text, string, start, end){
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      let chance = random(3)
      if(chance == 0){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUPERSCRIPT)
      }else if(chance == 1){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT)
      }
    }
  }
}

function invertSuperSub(text, string, start, end){
  for(let i = start; i < end; i++){
    if(nwsExp.exec(string.charAt(i - start))){
      let align = text.getTextAlignment(i)
      if(align == DocumentApp.TextAlignment.SUPERSCRIPT){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUBSCRIPT)
      }else if(align == DocumentApp.TextAlignment.SUBSCRIPT){
        text.setTextAlignment(i, i, DocumentApp.TextAlignment.SUPERSCRIPT)
      }
    }
  }
}

function reverseSuperSub(text, string, start, end){
  let lastI = string.length - 1
  for(let i = 0; i < Math.floor(string.length*0.5); i++){
    let actIndex = start + i
    let oppIndex = start + lastI - i
    let align0 = text.getTextAlignment(actIndex) || DocumentApp.TextAlignment.NORMAL
    let align1 = text.getTextAlignment(oppIndex) || DocumentApp.TextAlignment.NORMAL
    text.setTextAlignment(actIndex, actIndex, align1)
    text.setTextAlignment(oppIndex, oppIndex, align0)
  }
}

//CASE:

function alternateCase(text, string, start, end){
  let attList = getAttList(text, start, end)
  let toUpper = true
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let upper = char.toUpperCase()
    let lower = char.toLowerCase()
    if(char != upper || char != lower){
      if(toUpper){
        newString += upper
        toUpper = false
      }else{
        newString += lower
        toUpper = true
      }
    }else{
      newString += char
    }
  }
  replaceText(text, newString, start, end, attList)
}

function randomizeCase(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    if(random(1)){
      newString += string.charAt(i).toUpperCase()
    }else{
      newString += string.charAt(i).toLowerCase()
    }
  }
  replaceText(text, newString, start, end, attList)
}

function invertCase(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let upper = char.toUpperCase()
    let lower = char.toLowerCase()
    if(char != upper){
      newString += upper
    }else if(char != lower){
      newString += lower
    }else{
      newString += char
    }
  }
  replaceText(text, newString, start, end, attList)
}

function reverseCase(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let lastI = string.length - 1
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let oppChar = string.charAt(lastI - i)
    let lowered = oppChar.toLowerCase()
    if(lowered != oppChar){
      newString += char.toUpperCase()
    }else{
      newString += char.toLowerCase()
    }
  }
  replaceText(text, newString, start, end, attList)
}

//CHARACTERS:

function flip(text, string, start, end){
  let attList = getAttList(text, start, end)
  string = string.replace(csqExp, "'")
  string = string.replace(cdqExp, "\"")
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newString += udChars.charAt(string.charCodeAt(i) - 33) || string.charAt(i)
  }
  replaceText(text, newString, start, end, attList)
}

function doublestrike(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let code = string.charCodeAt(i)
    if(code >= 48 && code <= 57){
      newString += strikeChar
      totalAdded++
      code += 57256
    }else if(code >= 65 && code <= 90){
      let char = string.charAt(i)
      if(specialDSChars[char]){
        code = specialDSChars[char]
      }else{
        newString += strikeChar
        totalAdded++
        code += 56567
      }
    }else if(code >= 97 && code <= 122){
      newString += strikeChar
      totalAdded++
      code += 56561
    }
    newString += String.fromCharCode(code)
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function enchant(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i)
    if(code >= 65 && code <= 90){
      newString += enchantedChars.charAt(code - 65)
    }else if(code >= 97 && code <= 122){
      newString += enchantedChars.charAt(code - 97)
    }else{
      newString += string.charAt(i)
    }
  }
  replaceText(text, newString, start, end, attList)
}

function makeAsian(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i)
    if(code >= 65 && code <= 90){
      newString += asianChars.charAt(code - 65)
    }else if(code >= 97 && code <= 122){
      newString += asianChars.charAt(code - 97)
    }else{
      newString += string.charAt(i)
    }
  }
  replaceText(text, newString, start, end, attList)
}

function makeWeird(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let myWeird
  for(let i = 0; i < string.length; i++){
     let char = string.charAt(i)
     if(myWeird = weirdChars[char.toUpperCase()]){
       newString += myWeird.charAt(random(myWeird.length - 1))
     }else{
       newString += char
     }
  }
  replaceText(text, newString, start, end, attList)
}

function makeHacker(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let myHacker
  for(let i = 0; i < string.length; i++){
     let char = string.charAt(i)
     if((myHacker = hackerChars[char]) || (myHacker = hackerChars[char.toUpperCase()])){
       if(myHacker.length == 1){
         newString += myHacker
       }else{
         newString += myHacker.charAt(random(1))
       }
     }else{
       newString += char
     }
  }
  replaceText(text, newString, start, end, attList)
}

function randomlyAccent(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let myAccented
  for(let i = 0; i < string.length; i++){
     let char = string.charAt(i)
     if(myAccented = accentedChars[char]){
       newString += myAccented.charAt(random(myAccented.length - 1))
     }else if(myAccented = accentedChars[char.toUpperCase()]){
       newString += myAccented.charAt(random(myAccented.length - 1)).toLowerCase()
     }else{
       newString += char
     }
  }
  replaceText(text, newString, start, end, attList)
}

function makeInvisibleInk(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let char = string.charAt(i)
    if(nwsExp.exec(char)){
      newString += char + invisChar
      totalAdded++
    }else{
      newString += char
    }
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function stack(text, string, start, end){
  let attList = getAttList(text, start, end)
  let listIndices = {}
  for(let i = 0; i < attList.length; i++){
    listIndices[attList[i][9]] = i
  }
  let newAttList = []
  let newString = ""
  let canStack = false
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let stackedCode = stackedCodes[char.toUpperCase()]
    if(stackedCode){
      if(canStack){
        newString += String.fromCharCode(stackedCode)
      }else{
        canStack = true
        newString += char
        if(listIndices[i] != null){
          newAttList.push(attList[listIndices[i]])
        }
      }
    }else{
      canStack = false
      newString += char
      if(listIndices[i] != null){
        newAttList.push(attList[listIndices[i]])
      }
    }
  }
  replaceText(text, newString, start, end, newAttList)
}

function demonize(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    newString += string.charAt(i)
    let code = string.charCodeAt(i)
    if(code < 768 || code > 879){
      let toAdd = randomR(6, 12)
      for(let j = 0; j < toAdd; j++){
        newString += String.fromCharCode(randomR(768, 866))
      }
      totalAdded += toAdd
    }
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//SHAPES:

function circle(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i)
    if(code == 48){
      code = 9450
    }else if(code >= 49 && code <= 57){
      code += 9263
    }else if(code >= 65 && code <= 90){
      code += 9333
    }else if(code >= 97 && code <= 122){
      code += 9327
    }
    newString += String.fromCharCode(code)
  }
  replaceText(text, newString, start, end, attList)
}

function box(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let code = string.charCodeAt(i)
    if(code >= 65 && code <= 90){
      newString += bbbChar
      totalAdded++
      code += 56559
    }else if(code >= 97 && code <= 122){
      newString += bbbChar
      totalAdded++
      code += 56527
    }
    newString += String.fromCharCode(code)
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function bubble(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let code = string.charCodeAt(i)
    if(code >= 65 && code <= 90){
      newString += bbbChar
      totalAdded++
      code += 56591
    }else if(code >= 97 && code <= 122){
      newString += bbbChar
      totalAdded++
      code += 56559
    }
    newString += String.fromCharCode(code)
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function block(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let code = string.charCodeAt(i)
    if(code >= 65 && code <= 90){
      newString += bbbChar
      totalAdded++
      code += 56623
    }else if(code >= 97 && code <= 122){
      newString += bbbChar
      totalAdded++
      code += 56591
    }
    newString += String.fromCharCode(code)
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//PLACEMENT:

function reverse(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newString = string.charAt(i) + newString
  }
  text.deleteText(start, end - 1)
  text.insertText(start, newString)
  replaceText(text, newString, start, end, attList)
}

function reverseWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let matches = []
  let match
  while(match = wordExp.exec(string)){
    matches.push(match)
  }
  let newString = ""
  let lastI = matches.length - 1
  for(let i = 0; i < matches.length; i++){
    newString += matches[i][1] + matches[lastI - i][2] + matches[i][3]
  }
  replaceText(text, newString, start, end, attList)
}

function reverseCharsPerWord(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let match
  while(match = wordExp.exec(string)){
    let newWord = ""
    for(let i = 0; i < match[2].length; i++){
      newWord = match[2].charAt(i) + newWord
    }
    newString += match[1] + newWord + match[3]
  }
  replaceText(text, newString, start, end, attList)
}

function scramble(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let pos = Math.floor(Math.random()*(newString.length + 1))
    newString = newString.slice(0, pos) + string.charAt(i) + newString.slice(pos, newString.length)
  }
  replaceText(text, newString, start, end, attList)
}

function scrambleWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let matches = []
  let match
  while(match = wordExp.exec(string)){
    matches.push(match)
  }
  let randomized = []
  for(let i = 0; i < matches.length; i++){
    randomized.splice(random(randomized.length), 0, matches[i])
  }
  let newString = ""
  for(let i = 0; i < matches.length; i++){
    newString += matches[i][1] + randomized[i][2] + matches[i][3]
  }
  replaceText(text, newString, start, end, attList)
}

function scrambleCharsPerWord(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let match
  while(match = wordExp.exec(string)){
    let newWord = ""
    for(let i = 0; i < match[2].length; i++){
      let pos = Math.floor(Math.random()*(newWord.length + 1))
      newWord = newWord.slice(0, pos) + match[2].charAt(i) + newWord.slice(pos, newWord.length)
    }
    newString += match[1] + newWord + match[3]
  }
  replaceText(text, newString, start, end, attList)
}

function diffuse(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  let lastI = string.length - 1
  for(let i = 0; i < string.length; i++){
    newIndices.push(totalAdded + i)
    let toAdd = i + 1
    let newIndex = totalAdded + toAdd
    newString += string.charAt(i)
    if(i < lastI){
      for(let j = 0; j < toAdd; j++){
        newString += " "
      }
    }
    totalAdded = newIndex
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function diffuseWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let lastPos = 0
  let newString = ""
  let matches = string.match(wordExp)
  let lastI = matches.length - 1
  for(let i = 0; i < matches.length; i++){
    for(let j = 0; j < matches[i].length; j++){
      newIndices.push(j + lastPos)
    }
    newString += matches[i]
    if(i < lastI){
      for(let j = 0; j < i; j++){
        newString += " "
      }
    }
    lastPos += matches[i].length + i
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function double(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    newString += char + char
  }
  for(let i = 0; i < attList.length; i++){
    attList[i][9] = (attList[i][9] - start)*2 + start
  }
  replaceText(text, newString, start, end, attList)
}

function doubleWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  let match
  while(match = frontPadExp.exec(string)){
    if(match[1].length > 0){
      newString += match[0] + match[0]
    }else{
      newString += match[0] + " " + match[0]
    }
  }
  let backPad = backPadExp.exec(string)
  if(backPad){
    newString += backPad
  }
  let lastI = newString.length - 1
  for(let i = 0; i < attList.length; i++){
    attList[i][9] = (attList[i][9] - start)*2 + start
  }
  replaceText(text, newString, start, end, attList)
}

//LANGUAGE:

function makeGibberish(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let found = false
    for(let j = 0; j < 3; j++){
      let charType = charTypes[j]
      let lastPos = charType.length - 1
      if(ctMatches[j].exec(char)){
        newString += charType.charAt(random(lastPos))
        found = true
      }else if(ctMatches[j].exec(char.toUpperCase())){
        newString += charType.charAt(random(lastPos)).toLowerCase()
        found = true
      }
      if(found) break
    }
    if(!found){
      newString += char
    }
  }
  replaceText(text, newString, start, end, attList)
}

function misspell(text, string, start, end){

  let attList = getAttList(text, start, end)
  let newString = ""
  let lastChar = ""
  
  for(let i = 0; i < string.length; i++){
  
    let char = string.charAt(i)
    let lowerChar = char.toLowerCase()
    let toAdd = lowerChar
    
    if(letterExp.exec(lowerChar)){
    
      let usingNextChar = false
      
      prob: if(randomB(3)){       
      
        let nextChar = string.charAt(i + 1).toLowerCase()
        let notEndOfWord = letterExp.exec(nextChar)
      
        if(!randomB(4) && lowerChar == lastChar){
          toAdd = ""
          break prob
        }
        
        if(randomB(3) && !notEndOfWord && consExp.exec(lowerChar)){
          toAdd += "e"
          break prob
        }
        
        if(!randomB(3) && !notEndOfWord && lowerChar == "e" && consExp.exec(lastChar)){
          toAdd = ""
          break prob
        }
        
        if(randomB(4) && vowelExp.exec(lowerChar)){
          toAdd += "h"
          break prob
        }
        
        if(!randomB(4) && lowerChar == "h" && vowelExp.exec(lastChar)){
          toAdd = ""
          break prob
        }
        
        let myInter = null
        if(notEndOfWord){
          myInter = interchangeable[lowerChar + nextChar]
        }
        usingNextChar = true
        if(!myInter){
          myInter = interchangeable[lowerChar]
          usingNextChar = false
        }
        
        if(randomB(2) && myInter){
          toAdd = randomItem(myInter)
          break prob
        }else{
          usingNextChar = false
        }
        
        let mySim = similar[lowerChar]
        if(randomB(2) && mySim){
          if(mySim.indexOf(lastChar) != -1){
            toAdd = !randomB(3) ? "" : randomItem(mySim)
          }else{
            toAdd = (!randomB(3) ? "" : toAdd) + randomItem(mySim)
          }
          break prob
        }
        
        if(randomB(3)){
          toAdd += lowerChar
        }
        
      }
      
      if(usingNextChar){
        lastChar = nextChar
        i++
      }else{
        lastChar = lowerChar
      }
      
    }else{
    
      lastChar = ""
      
    }
    
    newString += char == lowerChar ? toAdd : toAdd.toUpperCase()
    
  }
  
  let lastI = start + newString.length - 2
  for(let i = 0; i < attList.length; i++){
    if(attList[i][9] > lastI){
      attList = attList.slice(0, i)
      break
    }
  }
  replaceText(text, newString, start, end, attList)
  
}

function translateToMorseCode(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let totalAdded = 0
  let newString = ""
  let lastI = string.length - 1
  for(let i = 0; i < string.length; i++){
    newIndices.push(i + totalAdded)
    let char = string.charAt(i)
    let myMorseCode = morseCodeSeqs[char] || morseCodeSeqs[char.toUpperCase()]
    if(myMorseCode){
      newString += myMorseCode
      if(i == lastI){
        totalAdded += myMorseCode.length - 1
      }else{
        newString += " "
        totalAdded += myMorseCode.length
      }
    }else{
      newString += char
    }
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function translateToPigLatin(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = []
  let lastPos = 0
  let newString = ""
  let match
  while(match = frontPadApExp.exec(string)){
    newString += match[1] + match[2].substring(1) + match[2].charAt(0) + "ay"
    for(i = 0; i < match[0].length; i++){
      newIndices.push(lastPos + i)
    }
    lastPos += match[0].length + 2
  }
  let backPad = backPadExp2nd.exec(string)
  if(backPad){
    newString += backPad[0]
    for(i = 0; i < backPad[0].length; i++){
      newIndices.push(lastPos + i)
    }
  }
  replaceIndices(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//UNDO EFFECTS:

function howToUse(){
  alert(
    "Select the text with the effect you want to remove and then select the corresponding counter-effect from this menu.\n\n\
    Note that not all effects have counter-effects. For example, the Gibberish effect does not have one because it modifies \
    the text randomly such that original text cannot be derived. It is recommended that you keep a spare copy of your text \
    when using effects with no counter.\n\n\
    Also note that all effects can be undone using the Google Docs undo button or Command/Control+Z."
  )
}

function actResetBIUS(text, string, start, end){
  for(let i = 0; i < 4; i++){
    text[bSetterNames[i]](start, end - 1, false)
  }
}

function actResetSuperSub(text, string, start, end){
  text.setTextAlignment(start, end - 1, DocumentApp.TextAlignment.NORMAL)
}

function actResetCase(text, string, start, end){
  let attList = getAttList(text, start, end)
  replaceText(text, string.toLowerCase(), start, end, attList)
}

//Characters:

function invFlip(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let index = udChars.indexOf(char)
    if(index == -1){
      newString += char
    }else{
      let newChar = String.fromCharCode(index + 33)
      if(udChars.indexOf(char, index + 1) != -1){
        newString += newChar.toLowerCase()
      }else{
        newString += newChar
      }
    }
  }
  replaceText(text, newString, start, end, attList)
}

function invDoublestrike(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices[i] = i - totalRemoved
    if(string.charAt(i) == strikeChar){
      i++
      totalRemoved++
    }
    let code = string.charCodeAt(i)
    if(code >= 57304 && code <= 57313){
      code -= 57256
    }else if(code >= 56632 && code <= 56657){
      code -= 56567
    }else if(code >= 56658 && code <= 56683){
      code -= 56561
    }else{
      for(let specialChar in specialDSChars){
        if(specialDSChars[specialChar] == code){
          code = specialChar.charCodeAt(0)
          break
        }
      }
      
    }
    newString += String.fromCharCode(code)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invEnchant(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let index = enchantedChars.indexOf(char)
    if(index == -1){
      newString += char
    }else{
      newString += String.fromCharCode(index + 97)
    }
  }
  replaceText(text, newString, start, end, attList)
}

function invMakeAsian(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let index = asianChars.indexOf(char)
    if(index == -1){
      newString += char
    }else{
      newString += String.fromCharCode(index + 97)
    }
  }
  replaceText(text, newString, start, end, attList)
}

function invMakeWeird(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let newChar = char
    setLoop: for(let weirdSetName in weirdChars){
      let weirdSet = weirdChars[weirdSetName]
      for(let j = 0; j < weirdSet.length; j++){
        let weirdSetChar = weirdSet.charAt(j)
        if(char == weirdSetChar){
          newChar = weirdSetName.toLowerCase()
          break setLoop
        }
      }
    }
    newString += newChar
  }
  replaceText(text, newString, start, end, attList)
}

function invMakeHacker(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let newChar = char
    for(let hackerSetName in hackerChars){
      let hackerSet = hackerChars[hackerSetName]
      if(char == hackerSet){
        newChar = hackerSetName.toLowerCase()
        break
      }else{
        if(char == hackerSet[0] ||  char == hackerSet[1]){
          newChar = hackerSetName.toLowerCase()
          break
        }
      }
    }
    newString += newChar
  }
  replaceText(text, newString, start, end, attList)
}

function invRandomlyAccent(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    let upper = char.toUpperCase()
    let newChar = char
    setLoop: for(let accentedSetName in accentedChars){
      let accentedSet = accentedChars[accentedSetName]
      for(let j = 0; j < accentedSet.length; j++){
        let accentedSetChar = accentedSet.charAt(j)
        if(char == accentedSetChar){
          newChar = accentedSetName
          break setLoop
        }else if(upper == accentedSetChar){
          newChar = accentedSetName.toLowerCase()
          break setLoop
        }
      }
    }
    newString += newChar
  }
  replaceText(text, newString, start, end, attList)
}

function invMakeInvisibleInk(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) == invisChar){
      i++
      totalRemoved++
    }
    newIndices[i] = i - totalRemoved
    newString += string.charAt(i)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invStack(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let newChar = string.charAt(i)
    let code = string.charCodeAt(i)
    for(char in stackedCodes){
      if(stackedCodes[char] == code){
        newChar = char.toLowerCase()
      }
    }
    newString += newChar
  }
  replaceText(text, newString, start, end, attList)
}

function invDemonize(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i)
    if(code >= 768 && code <= 866){
      totalRemoved++
      continue
    }
    newIndices[i] = i - totalRemoved
    newString += string.charAt(i)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//Shapes:

function invCircle(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newString = ""
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i)
    if(code == 9450){
      code = 48
    }else if(code >= 9312 && code <= 9320){
      code -= 9263
    }else if(code >= 9398 && code <= 9423){
      code -= 9333
    }else if(code >= 9424 && code <= 9449){
      code -= 9327
    }
    newString += String.fromCharCode(code)
  }
  replaceText(text, newString, start, end, attList)
}

function invBox(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices[i] = i - totalRemoved
    if(string.charAt(i) == bbbChar){
      i++
      totalRemoved++
    }
    let code = string.charCodeAt(i)
    if(code >= 56624 && code <= 56650){
      code -= 56527
    }
    newString += String.fromCharCode(code)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invBubble(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices[i] = i - totalRemoved
    if(string.charAt(i) == bbbChar){
      i++
      totalRemoved++
    }
    let code = string.charCodeAt(i)
    if(code >= 56656 && code <= 56681){
      code -= 56559
    }
    newString += String.fromCharCode(code)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invBlock(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let totalRemoved = 0
  let newString = ""
  for(let i = 0; i < string.length; i++){
    newIndices[i] = i - totalRemoved
    if(string.charAt(i) == bbbChar){
      i++
      totalRemoved++
    }
    let code = string.charCodeAt(i)
    if(code >= 56688 && code <= 56713){
      code -= 56591
    }
    newString += String.fromCharCode(code)
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//Placement:

function invDiffuse(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let newString = ""
  let lastI = string.length - 1
  let toRemove = 1
  let totalRemoved = 0
  for(let i = 0; i < string.length; i++){
    newString += string.charAt(i)
    newIndices[i] = i - totalRemoved
    if(i < lastI){
      let afterI = i + 1
      let removed = 0
      for(let j = 0; j < toRemove; j++){
        if(string.charAt(afterI + j) != " ") break
        removed++
      }
      i += removed
      totalRemoved += removed
      toRemove++
    }
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invDiffuseWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let newString = ""
  let lastI = string.length - 1
  let toRemove = 0
  let totalRemoved = 0
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    newString += char
    newIndices[i] = i - totalRemoved
    if(i < lastI && char == " "){
      let afterI = i + 1
      let removed = 0
      for(let j = 0; j < toRemove; j++){
        if(string.charAt(afterI + j) != " ") break
        removed++
      }
      i += removed
      totalRemoved += removed
      toRemove++
    }
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invDouble(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let newString = ""
  let totalRemoved = 0
  let lastChar
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    if(char == lastChar){
      totalRemoved++
      lastChar = null
    }else{
      newString += char
      newIndices[i] = i - totalRemoved
      lastChar = char
    }
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

function invDoubleWords(text, string, start, end){
  let attList = getAttList(text, start, end)
  let newIndices = {}
  let currentIndexSet = {}
  let newString = ""
  let totalRemoved = 0
  let currentWord = ""
  let lastWord
  let canEnd = true
  let removingWS = false
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    if(char == " "){
      if(canEnd){
        canEnd = false
        if(currentWord == lastWord){
          totalRemoved += currentWord.length
          lastWord = null
          removingWS = true
        }else{
          newString += currentWord
          for(let oldIndex in currentIndexSet){
            newIndices[oldIndex] = currentIndexSet[oldIndex]
          }
          lastWord = currentWord
        }
        currentWord = ""
        currentIndexSet = {}
      }
      if(removingWS){
        totalRemoved++
      }else{
        newString += char
        newIndices[i] = i - totalRemoved
      }
    }else{
      canEnd = true
      removingWS = false
      currentWord += char
      currentIndexSet[i] = i - totalRemoved
    }
  }
  attList = newAttList(attList, newIndices, start)
  replaceText(text, newString, start, end, attList)
}

//Language:

function invTranslateToMorseCode(text, string, start, end){
  let newAttList = []
  let lastPos1 = start
  let lastPos2 = start
  let newString = wsExp.exec(string)[0]
  let foundOnce = false
  let match
  while(match = morseCodeExp.exec(string)){
    foundOnce = true
    let foundLetter = null
    let afterLetter = null
    for(let letter in morseCodeSeqs){
      if(morseCodeSeqs[letter] == match[1]){
        foundLetter = letter.toLowerCase()
        afterLetter = frontPadExp2nd.exec(match[2])[1]
        break
      }
    }
    if(foundLetter){
      newString += foundLetter + afterLetter
      let letterAtts = getAtts(text, lastPos1)
      letterAtts[9] = lastPos2
      newAttList.push(letterAtts)
      lastPos1 += match[1].length
      lastPos2++
      for(let i = 0; i < afterLetter.length; i++){
        let atts = getAtts(text, lastPos1 + i + match[2].length - afterLetter.length)
        atts[9] = lastPos2 + i
        newAttList.push(atts)
      }
      lastPos1 += match[2].length
      lastPos2 += afterLetter.length
    }else{
      newString += match[0]
      for(let i = 0; i < match[0].length; i++){
        let atts = getAtts(text, lastPos1 + i)
        atts[9] = lastPos2 + i
        newAttList.push(atts)
      }
      lastPos1 += match[0].length
      lastPos2 += match[0].length
    }
  }
  if(!foundOnce) return
  replaceText(text, newString, start, end, newAttList)
}

function invTranslateToPigLatin(text, string, start, end){
  let newAttList = []
  let lastPos1 = start
  let lastPos2 = start
  let newString = ""
  let match
  while(match = frontPadApExp.exec(string)){
    let plMatch = pigLatinExp.exec(match[2])
    let toAdd = match[1] + (plMatch ? plMatch[2] + plMatch[1] : match[2])
    newString += toAdd
    for(let i = 0; i < toAdd.length; i++){
      let atts = getAtts(text, lastPos1 + i)
      atts[9] = lastPos2 + i
      newAttList.push(atts)
    }
    lastPos1 += match[0].length
    lastPos2 += toAdd.length
  }
  let backPad = backPadExp2nd.exec(string)
  if(backPad){
    newString += backPad
  }
  for(let i = 0; i < backPad; i++){
    let atts = getAtts(text, lastPos1 + i)
    atts[9] = lastPos2 + i
    newAttList.push(atts)
  }
  replaceText(text, newString, start, end, newAttList)
}

//EFFECT APPLIER:

function doToSelection(func, ops){
  try{
    let noText = true
    let selection = DocumentApp.getActiveDocument().getSelection()
    if(selection){
      let range = selection.getRangeElements()
      for(let i = 0; i < range.length; i++){
        let element = range[i]
        let actual = element.getElement()
        if(actual.editAsText){
          noText = false
          let text = actual.editAsText()
          let string = text.getText()
          if(string.length > 0){
            if(element.isPartial()){
              let start = element.getStartOffset()
              let end = element.getEndOffsetInclusive() + 1
              func(text, string.slice(start, end), start, end, ops)
            }else{
              func(text, string, 0, string.length, ops)
            }
          }
        }
      }
    }
    if(noText){
      if(ops != null && ops.counter){
        alert("You must select text to undo the effect for.")
      }else{
        alert("You must select text to apply this effect to.")
      }
    }
  }catch(e){
    alert("Whoops, looks like my code threw an error:\n\n" + e.stack + "\n\nYou can report this bug to me at thecodercatprojects@gmail.com.")
  }
}

//MORE:

function moreFromMe(){
  alert(
    "🐱 More from The Coder Cat:\n\n\
    •Want to see sneakpeeks of what I'm working on?\n\
    •Give feedback or ask questions about my projects?\n\
    •Suggest your own ideas of features or projects for me to make?\n\n\
    🐦 Follow me on Twitter: @TheCoderCat\n\n\
    ----------------------------------------------------------------\n\n\
    📱 Also try Fun Text Mobile!\n\n\
    •Fun Text Mobile is a mobile app based on Fun Text that features many of the same fun effects.\n\n\
    🤖 Android:\n\
    ➜ https://play.google.com/store/apps/details?id=com.gmail.thecodercatprojects.Fun_Text_Mobile\n\n\
    🍎 iOS:\n\
    ➜ https://apps.apple.com/us/app/fun-text-mobile/id1485134778\n\n\
    ----------------------------------------------------------------\n\n\
    ✨ Also try Text Themes!\n\n\
    •Text Themes is a simple add-on that applies fun visual themes to your text using a combination of \
    coloring, emoji particles, and other text attributes.\n\n\
    ➜ https://gsuite.google.com/marketplace/app/text_themes/495538979571\n\n\
    ----------------------------------------------------------------\n\n\
    🤪 Also try Bad Translator!\n\n\
    •Bad Translator is a simple add-on that abuses Google Translate by force-feeding your text \
    through the Translate algorithm into a random language multiple times, then back to your language.\n\n\
    ➜ https://gsuite.google.com/marketplace/app/bad_translator/306615442162\n\n"
  )
}

//MENU ITEMS:

//Text Color:

function rainbowT(){
  doToSelection(makeRainbow, {highlight: false, spaces: true})
}

function rainbowWordsT(){
  doToSelection(makeRainbow, {highlight: false, spaces: false})
}

function randomlyColoredT(){
  doToSelection(randomlyColor, {highlight: false, spaces: true})
}

function randomlyColoredWordsT(){
  doToSelection(randomlyColor, {highlight: false, spaces: false})
}

function repeatingColorsT(){
  doToSelection(repeatColors, {highlight: false, spaces: true})
}

function repeatingWordColorsT(){
  doToSelection(repeatColors, {highlight: false, spaces: false})
}

function smoothRainbowT(){
  doToSelection(makeSmoothRainbow, {highlight: false})
}

function fadingT(){
  doToSelection(fade, {highlight: false})
}

function transitioningColorT(){
  doToSelection(transitionColor, {highlight: false})
}

function adjustedBrightnessT(){
  doToSelection(adjustBrightness, {highlight: false})
}

function randomizedBrightnessT(){
  doToSelection(randomizeBrightness, {highlight: false})
}

function reversedColorsT(){
  doToSelection(reverseColors, {highlight: false})
}

//Highlight Color:

function rainbowH(){
  doToSelection(makeRainbow, {highlight: true, spaces: true})
}

function rainbowWordsH(){
  doToSelection(makeRainbow, {highlight: true, spaces: false})
}

function randomlyColoredH(){
  doToSelection(randomlyColor, {highlight: true, spaces: true})
}

function randomlyColoredWordsH(){
  doToSelection(randomlyColor, {highlight: true, spaces: false})
}

function repeatingColorsH(){
  doToSelection(repeatColors, {highlight: true, spaces: true})
}

function repeatingWordColorsH(){
  doToSelection(repeatColors, {highlight: true, spaces: false})
}

function smoothRainbowH(){
  doToSelection(makeSmoothRainbow, {highlight: true})
}

function fadingH(){
  doToSelection(fade, {highlight: true})
}

function transitioningColorH(){
  doToSelection(transitionColor, {highlight: true})
}

function adjustedBrightnessH(){
  doToSelection(adjustBrightness, {highlight: true})
}

function randomizedBrightnessH(){
  doToSelection(randomizeBrightness, {highlight: true})
}

function reversedColorsH(){
  doToSelection(reverseColors, {highlight: true})
}

//Font Size:

function growing(){
  doToSelection(grow)
}

function wobbly(){
  doToSelection(wobble)
}

function randomlySized(){
  doToSelection(randomlySize)
}

function repeatingSizes(){
  doToSelection(repeatSizes)
}

function transitioningSize(){
  doToSelection(transitionSize)
}

function reversedSizes(){
  doToSelection(reverseSizes)
}

//BIUS:

function sequentialBIUS(){
  doToSelection(sequenceBIUS)
}

function randomizedBIUS(){
  doToSelection(randomizeBIUS)
}

function invertedBIUS(){
  doToSelection(invertBIUS)
}

function reversedBIUS(){
  doToSelection(reverseBIUS)
}

//Super/Sub:

function alternatingSuperSub(){
  doToSelection(alternateSuperSub)
}

function bouncingSuperSub(){
  doToSelection(bounceSuperSub)
}

function randomizedSuperSub(){
  doToSelection(randomizeSuperSub)
}

function sporadicSuperSub(){
  doToSelection(sporadicizeSuperSub)
}

function invertedSuperSub(){
  doToSelection(invertSuperSub)
}

function reversedSuperSub(){
  doToSelection(reverseSuperSub)
}

//Case:

function alternatingCase(){
  doToSelection(alternateCase)
}

function randomizedCase(){
  doToSelection(randomizeCase)
}

function invertedCase(){
  doToSelection(invertCase)
}

function reversedCase(){
  doToSelection(reverseCase)
}

//Characters:

function upsideDown(){
  doToSelection(flip)
}

function doublestruck(){
  doToSelection(doublestrike)
}

function enchanted(){
  doToSelection(enchant)
}

function asian(){
  doToSelection(makeAsian)
}

function weird(){
  doToSelection(makeWeird)
}

function hacker(){
  doToSelection(makeHacker)
}

function randomlyAccented(){
  doToSelection(randomlyAccent)
}

function invisibleInk(){
  doToSelection(makeInvisibleInk)
}

function stacked(){
  doToSelection(stack)
}

function demonic(){
  doToSelection(demonize)
}

//Shapes:

function circled(){
  doToSelection(circle)
}

function boxed(){
  doToSelection(box)
}

function bubbled(){
  doToSelection(bubble)
}

function blocked(){
  doToSelection(block)
}

//Placement:

function reversed(){
  doToSelection(reverse)
}

function reversedWords(){
  doToSelection(reverseWords)
}

function reversedCharsPerWord(){
  doToSelection(reverseCharsPerWord)
}

function scrambled(){
  doToSelection(scramble)
}

function scrambledWords(){
  doToSelection(scrambleWords)
}

function scrambledCharsPerWord(){
  doToSelection(scrambleCharsPerWord)
}

function diffusing(){
  doToSelection(diffuse)
}

function diffusingWords(){
  doToSelection(diffuseWords)
}

function doubled(){
  doToSelection(double)
}

function doubledWords(){
  doToSelection(doubleWords)
}

//Language:

function gibberish(){
  doToSelection(makeGibberish)
}

function misspelled(){
  doToSelection(misspell)
}

function morseCode(){
  doToSelection(translateToMorseCode)
}

function pigLatin(){
  doToSelection(translateToPigLatin)
}

//Undo Effects:

function resetBIUS(){
  doToSelection(actResetBIUS, {counter: true})
}

function resetSuperSub(){
  doToSelection(actResetSuperSub, {counter: true})
}

function resetCase(){
  doToSelection(actResetCase, {counter: true})
}

function undoUpsideDown(){
  doToSelection(invFlip, {counter: true})
}

function undoDoublestruck(){
  doToSelection(invDoublestrike, {counter: true})
}

function undoEnchanted(){
  doToSelection(invEnchant, {counter: true})
}

function undoAsian(){
  doToSelection(invMakeAsian, {counter: true})
}

function undoWeird(){
  doToSelection(invMakeWeird, {counter: true})
}

function undoHacker(){
  doToSelection(invMakeHacker, {counter: true})
}

function undoRandomlyAccented(){
  doToSelection(invRandomlyAccent, {counter: true})
}

function undoInvisibleInk(){
  doToSelection(invMakeInvisibleInk, {counter: true})
}

function undoStacked(){
  doToSelection(invStack, {counter: true})
}

function undoDemonic(){
  doToSelection(invDemonize, {counter: true})
}

function undoCircled(){
  doToSelection(invCircle, {counter: true})
}

function undoBoxed(){
  doToSelection(invBox, {counter: true})
}

function undoBubbled(){
  doToSelection(invBubble, {counter: true})
}

function undoBlocked(){
  doToSelection(invBlock, {counter: true})
}

function undoDiffusing(){
  doToSelection(invDiffuse, {counter: true})
}

function undoDiffusingWords(){
  doToSelection(invDiffuseWords, {counter: true})
}

function undoDoubled(){
  doToSelection(invDouble, {counter: true})
}

function undoDoubledWords(){
  doToSelection(invDoubleWords, {counter: true})
}

function undoMorseCode(){
  doToSelection(invTranslateToMorseCode, {counter: true})
}

function undoPigLatin(){
  doToSelection(invTranslateToPigLatin, {counter: true})
}

//EVENTS:

function onOpen(){
  let ui = DocumentApp.getUi()
  ui.createAddonMenu().addSubMenu(ui.createMenu("Text Color")
    .addItem("Rainbow", "rainbowT")
    .addItem("Rainbow words", "rainbowWordsT")
    .addSeparator()
    .addItem("Randomly colored", "randomlyColoredT")
    .addItem("Randomly colored words", "randomlyColoredWordsT")
    .addSeparator()
    .addItem("Repeating colors", "repeatingColorsT")
    .addItem("Repeating word colors", "repeatingWordColorsT")
    .addSeparator()
    .addItem("Smooth rainbow", "smoothRainbowT")
    .addItem("Fading", "fadingT")
    .addItem("Transitioning color", "transitioningColorT")
    .addSeparator()
    .addItem("Adjusted brightness", "adjustedBrightnessT")
    .addItem("Randomized brightness", "randomizedBrightnessT")
    .addSeparator()
    .addItem("Reversed colors", "reversedColorsT")
  ).addSubMenu(ui.createMenu("Highlight Color")
    .addItem("Rainbow", "rainbowH")
    .addItem("Rainbow words", "rainbowWordsH")
    .addSeparator()
    .addItem("Randomly colored", "randomlyColoredH")
    .addItem("Randomly colored words", "randomlyColoredWordsH")
    .addSeparator()
    .addItem("Repeating colors", "repeatingColorsH")
    .addItem("Repeating word colors", "repeatingWordColorsH")
    .addSeparator()
    .addItem("Smooth rainbow", "smoothRainbowH")
    .addItem("Fading", "fadingH")
    .addItem("Transitioning color", "transitioningColorH")
    .addSeparator()
    .addItem("Adjusted brightness", "adjustedBrightnessH")
    .addItem("Randomized brightness", "randomizedBrightnessH")
    .addSeparator()
    .addItem("Reversed colors", "reversedColorsH")
  ).addSubMenu(ui.createMenu("Font Size")
    .addItem("Growing", "growing")
    .addItem("Wobbly", "wobbly")
    .addItem("Randomly sized", "randomlySized")
    .addSeparator()
    .addItem("Repeating sizes", "repeatingSizes")
    .addItem("Transitioning size", "transitioningSize")
    .addSeparator()
    .addItem("Reversed sizes", "reversedSizes")
  ).addSubMenu(ui.createMenu("BIUS")
    .addItem("Sequential BIUS", "sequentialBIUS")
    .addItem("Randomized BIUS", "randomizedBIUS")
    .addItem("Inverted BIUS", "invertedBIUS")
    .addSeparator()
    .addItem("Reversed BIUS", "reversedBIUS")
  ).addSubMenu(ui.createMenu("Super/Sub")
    .addItem("Alternating super/sub", "alternatingSuperSub")
    .addItem("Bouncing super/sub", "bouncingSuperSub")
    .addSeparator()
    .addItem("Randomized super/sub", "randomizedSuperSub")
    .addItem("Sporadic super/sub", "sporadicSuperSub")
    .addSeparator()
    .addItem("Inverted super/sub", "invertedSuperSub")
    .addSeparator()
    .addItem("Reversed super/sub", "reversedSuperSub")
  ).addSubMenu(ui.createMenu("Case")
    .addItem("Alternating case", "alternatingCase")
    .addItem("Randomized case", "randomizedCase")
    .addItem("Inverted case", "invertedCase")
    .addSeparator()
    .addItem("Reversed case", "reversedCase")
  ).addSubMenu(ui.createMenu("Characters")
    .addItem("Upside down", "upsideDown")
    .addItem("Doublestruck", "doublestruck")
    .addSeparator()
    .addItem("Enchanted", "enchanted")
    .addItem("Asian", "asian")
    .addItem("Weird", "weird")
    .addSeparator()
    .addItem("Hacker", "hacker")
    .addItem("Randomly accented", "randomlyAccented")
    .addSeparator()
    .addItem("Invisible ink", "invisibleInk")
    .addItem("Stacked", "stacked")
    .addItem("Demonic", "demonic")
    .addSeparator()
    .addSubMenu(ui.createMenu("Shapes")
      .addItem("Circled", "circled")
      .addItem("Boxed", "boxed")
      .addSeparator()
      .addItem("Bubbled", "bubbled")
      .addItem("Blocked", "blocked")
    )
  ).addSubMenu(ui.createMenu("Placement")
    .addItem("Reversed", "reversed")
    .addItem("Reversed words", "reversedWords")
    .addItem("Reversed chars per word", "reversedCharsPerWord")
    .addSeparator()
    .addItem("Scrambled", "scrambled")
    .addItem("Scrambled words", "scrambledWords")
    .addItem("Scrambled chars per word", "scrambledCharsPerWord")
    .addSeparator()
    .addItem("Diffusing", "diffusing")
    .addItem("Diffusing words", "diffusingWords")
    .addSeparator()
    .addItem("Doubled", "doubled")
    .addItem("Doubled words", "doubledWords")
  ).addSubMenu(ui.createMenu("Language")
    .addItem("Gibberish", "gibberish")
    .addItem("Misspelled", "misspelled")
    .addSeparator()
    .addItem("Morse code", "morseCode")
    .addItem("Pig latin", "pigLatin")
  ).addSeparator().addSubMenu(ui.createMenu("Undo Effects")
    .addItem("How to use", "howToUse")
    .addSeparator()
    .addItem("Reset BIUS", "resetBIUS")
    .addItem("Reset super/sub", "resetSuperSub")
    .addItem("Reset case", "resetCase")
    .addSeparator()
    .addSubMenu(ui.createMenu("Undo Character Effects")
      .addItem("Undo upside down", "undoUpsideDown")
      .addItem("Undo doublestruck", "undoDoublestruck")
      .addSeparator()
      .addItem("Undo enchanted", "undoEnchanted")
      .addItem("Undo asian", "undoAsian")
      .addItem("Undo weird", "undoWeird")
      .addSeparator()
      .addItem("Undo hacker", "undoHacker")
      .addItem("Undo randomly accented", "undoRandomlyAccented")
      .addSeparator()
      .addItem("Undo invisible ink", "undoInvisibleInk")
      .addItem("Undo stacked", "undoStacked")
      .addItem("Undo demonic", "undoDemonic")
    ).addSubMenu(ui.createMenu("Undo Shape Effects")
      .addItem("Undo circled", "undoCircled")
      .addItem("Undo boxed", "undoBoxed")
      .addSeparator()
      .addItem("Undo bubbled", "undoBubbled")
      .addItem("Undo blocked", "undoBlocked")
    ).addSubMenu(ui.createMenu("Undo Placement Effects")
      .addItem("Undo diffusing", "undoDiffusing")
      .addItem("Undo diffusing words", "undoDiffusingWords")
      .addSeparator()
      .addItem("Undo doubled", "undoDoubled")
      .addItem("Undo doubled words", "undoDoubledWords")
    ).addSubMenu(ui.createMenu("Undo Language Effects")
      .addItem("Undo morse code", "undoMorseCode")
      .addItem("Undo pig latin", "undoPigLatin")
    )
  ).addItem("More...", "moreFromMe")
  .addToUi()
}

function onInstall(){
  onOpen()
}
