/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var currency = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "currency" // field name
})
/*
Need define 'balance' for functions
*/
var balance = Libs.ResourcesLib.userRes("balance")
function readUserData() {
  if (!user) {
    return
  }
  bot.currency = currency
  user.link = Libs.commonLib.getLinkFor(user)
  user.balance = Libs.ResourcesLib.userRes("balance").value()
  user.wallet = User.getProperty("wallet")
  bot.adminID = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})
}

readUserData()
if (command.folder == "Admin Panel" && user.telegramid != bot.adminID) {
  return //deny access
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

