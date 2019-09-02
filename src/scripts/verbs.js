const irregularVerbs = [
  ['be', 'were', 'been'],
  ['is', 'was', 'been'],
  ['am', 'was', 'been'],
  ['are', 'were', 'been'],
  ['beat', 'beat', 'beaten'],
  ['become', 'became', 'become'],
  ['begin', 'began', 'begun'],
  ['bend', 'bent', 'bent'],
  ['bet', 'bet', 'bet'],
  ['bid', 'bid', 'bid'],
  ['bite', 'bit', 'bitten'],
  ['blow', 'blew', 'blown'],
  ['break', 'broke', 'broken'],
  ['bring', 'brought', 'brought'],
  ['build', 'built', 'built'],
  ['burn', 'burned', 'burned'],
  ['buy', 'bought', 'bought'],
  ['catch', 'caught', 'caught'],
  ['choose', 'chose', 'chosen'],
  ['come', 'came', 'come'],
  ['cost', 'cost', 'cost'],
  ['cut', 'cut', 'cut'],
  ['dig', 'dug', 'dug'],
  ['dive', 'dove', 'dived'],
  ['do', 'did', 'done'],
  ['draw', 'drew', 'drawn'],
  ['dream', 'dreamed', 'dreamed'],
  ['drive', 'drove', 'driven'],
  ['drink', 'drank', 'drunk'],
  ['eat', 'ate', 'eaten'],
  ['fall', 'fell', 'fallen'],
  ['feel', 'felt', 'felt'],
  ['fight', 'fought', 'fought'],
  ['find', 'found', 'found'],
  ['fly', 'flew', 'flown'],
  ['forget', 'forgot', 'forgotten'],
  ['forgive', 'forgave', 'forgiven'],
  ['freeze', 'froze', 'frozen'],
  ['get', 'got', 'gotten'],
  ['give', 'gave', 'given'],
  ['go', 'went', 'gone'],
  ['grow', 'grew', 'grown'],
  ['hang', 'hung', 'hung'],
  ['have', 'had', 'had'],
  ['hear', 'heard', 'heard'],
  ['hide', 'hid', 'hidden'],
  ['hit', 'hit', 'hit'],
  ['hold', 'held', 'held'],
  ['hurt', 'hurt', 'hurt'],
  ['keep', 'kept', 'kept'],
  ['know', 'knew', 'known'],
  ['lay', 'laid', 'laid'],
  ['lead', 'led', 'led'],
  ['leave', 'left', 'left'],
  ['lend', 'lent', 'lent'],
  ['let', 'let', 'let'],
  ['lie', 'lay', 'lain'],
  ['lose', 'lost', 'lost'],
  ['make', 'made', 'made'],
  ['mean', 'meant', 'meant'],
  ['meet', 'met', 'met'],
  ['pay', 'paid', 'paid'],
  ['put', 'put', 'put'],
  ['read', 'read', 'read'],
  ['ride', 'rode', 'ridden'],
  ['ring', 'rang', 'rung'],
  ['rise', 'rose', 'risen'],
  ['run', 'ran', 'run'],
  ['say', 'said', 'said'],
  ['see', 'saw', 'seen'],
  ['sell', 'sold', 'sold'],
  ['send', 'sent', 'sent'],
  ['show', 'showed', 'shown'],
  ['shut', 'shut', 'shut'],
  ['sing', 'sang', 'sung'],
  ['sit', 'sat', 'sat'],
  ['sleep', 'slept', 'slept'],
  ['speak', 'spoke', 'spoken'],
  ['spend', 'spent', 'spent'],
  ['stand', 'stood', 'stood'],
  ['swim', 'swam', 'swum'],
  ['take', 'took', 'taken'],
  ['teach', 'taught', 'taught'],
  ['tear', 'tore', 'torn'],
  ['tell', 'told', 'told'],
  ['think', 'thought', 'thought'],
  ['throw', 'threw', 'thrown'],
  ['understand', 'understood', 'understood'],
  ['wake', 'woke', 'woken'],
  ['wear', 'wore', 'worn'],
  ['win', 'won', 'won'],
  ['write', 'wrote', 'written'],
]

const vowels = ['a', 'e', 'i', 'o', 'u']

export const generatePastParticiple = verb => {
  verb = verb.toLowerCase()
  const irregular = irregularVerbs.find(item => item[0] === verb)
  if (irregular) return irregular[2]
  if (verb[verb.length - 1] === 'e') {
    return verb + 'd'
  }
  if (vowels.includes(verb[verb.length - 2])) {
    if (verb[verb.length - 1] === 'y') {
      return verb + 'ed'
    }
    if (!vowels.includes(verb[verb.length - 3])) {
      return verb + verb[verb.length - 1] + 'ed'
    }
  }
  if (verb[verb.length - 1] === 'y') {
    return verb.slice(0, -1) + 'ied'
  }
  return verb + 'ed'
}
