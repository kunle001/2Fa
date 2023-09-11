import speakeasy from 'speakeasy'

const verified = speakeasy.totp.verify({
  secret: '!P*oNwiw{v%&<w1.62gTv>E)@]Ik)suq',
  encoding: 'ascii',
  token: '937398'
})

console.log(verified)