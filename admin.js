if (command === '.kick'){
  var member = msg.mentions.members.first();
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To Kick Members !**')
  member.kick();
  msg.reply('**This Member Got Kicked By You For Breaking Rules... He Is gone ....** ``RIP``')
  msg.react('👌');
}
if (command === '.ban'){
  var member = msg.mentions.members.first();
  if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('**You Cant Use This Command Because You Dont Have Permissions To Ban Members !**')
  if(member.HighestRole.position >= msg.member.HighestRole.position){
    } return msg.reply('**YOU CANNOT USE THIS COMMAND Because the member you want to ban had a role highest than you**')
  member.ban();
  msg.reply('**This Member Got Banned By You For Breaking Rules... He Is gone ....** ``RIP``')
  msg.react('👌');

}
