require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: {
    interval: 300,
    autoStart: true
  }
});

bot.on("polling_error", err => console.log(err.data.error.message));

/*bot.on('text', async msg => {
  await bot.sendMessage(msg.chat.id, msg.text);
})*/

/*bot.on('text', async msg => {

  const msgWait = await bot.sendMessage(msg.chat.id, 'Диллер выкладывает на стол');

  setTimeout(async () => {

      await bot.deleteMessage(msgWait.chat.id, msgWait.message_id);
      await bot.sendMessage(msg.chat.id, msg.text);

  }, 5000);

})*/

/*bot.on('text', async msg => {

  const msgWait = await bot.sendMessage(msg.chat.id, `Диллер выкладывает на стол`);

  setTimeout(async () => {

      await bot.editMessageText('Диллер выкладывает карты на стол', {

          chat_id: msgWait.chat.id,
          message_id: msgWait.message_id

      });

  }, 500);

})*/

bot.onText(/\/start/, async msg => {

  try {

      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

      if(msg.text.length > 6) {

          const refID = msg.text.slice(7);

          await bot.sendMessage(msg.chat.id, `Вы зашли по ссылке пользователя с ID ${refID}`);

      }

  }
  catch(error) {

      console.log(error);

  }

})

const commands = [

  {

      command: "start",
      description: "Запуск бота"

  },
  {

      command: "ref",
      description: "Получить реферальную ссылку"

  },
  {

      command: "help",
      description: "Раздел помощи"

  },

]

bot.setMyCommands(commands);