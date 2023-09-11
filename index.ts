import speakeasy from 'speakeasy'
import qrcode from 'qrcode'

var secret = speakeasy.generateSecret({
  name: "kunle"
});

console.log(secret)

qrcode.toDataURL(secret.otpauth_url!, (err, data) => {
  if (err) {
    console.log(err)
  }

  console.log(data)
})