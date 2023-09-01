import telepot
from telepot.loop import MessageLoop
from telepot.namedtuple import InlineKeyboardMarkup as MU
from telepot.namedtuple import InlineKeyboardButton as BT
from telegram.ext import Application
from telegram import Bot, Update
from telegram.ext import Updater, CommandHandler, CallbackContext, CallbackQueryHandler


token = '6335888438:AAH7IEnNdOORN5TldoZdUquZyMoBtgjJ-RM'
mc = '670624935'
bot = telepot.Bot(token)

bot_token = 'YOUR_BOT_TOKEN'
bot = Bot(token=bot_token)


def btn_menu(msg):
    bt1 = BT(text = "[👋🏻 Create account", callback_data = "1")
    bt2 = BT(text = "👤 My page", callback_data = "2")
    bt3 = BT(text = "🚀 Create challenge", callback_data = "3")
    bt4 = BT(text = "⚙️ Settings", callback_data = "4")
    bt5 = BT(text = "🧐 Explore challenge", callback_data = "5")
    menu = MU(inline_keyboard = [[bt1, bt2], [bt3, bt4], [bt5]])
    bot.sendMessage(mc, "선택하세요", reply_markup = menu)

def btn_wallet(msg):
    bt1 = BT(text = "➕ Deposit", callback_data = "6")
    bt2 = BT(text = "➖ Withdraw", callback_data = "7")
    bt3 = BT(text = "🔁 Exchange", callback_data = "8")
    bt4 = BT(text = "➡️ Transfer", callback_data = "9")
    bt5 = BT(text = "◀️ Back", callback_data = "10")
    wallet = MU(inline_keyboard = [[bt1, bt2], [bt3], [bt4], [bt5]])
    bot.sendMessage(mc, "선택하세요", reply_markup = wallet)

def btn_settings(msg):
    bt1 = BT(text = "👀 Change language", callback_data = "11")
    bt2 = BT(text = "👤 My page", callback_data = "12")
    bt3 = BT(text = "◀️ Back", callback_data = "13")
    settings = MU(inline_keyboard = [[bt1], [bt2], [bt3]])
    bot.sendMessage(mc, "선택하세요", reply_markup = settings)

def button_click(update: Update, context: CallbackContext):
    query = update.callback_query
    button_clicked = query.data

    if button_clicked == '1':
        # bt1 버튼을 눌렀을 때 구글 웹사이트로 이동하는 코드
        google_url = 'https://www.google.com'
        bot.answer_callback_query(query.id, text='구글 웹사이트로 이동합니다.')
        bot.edit_message_text(chat_id=query.message.chat_id, message_id=query.message.message_id, text='구글 웹사이트로 이동 중...')
        bot.send_message(chat_id=query.message.chat_id, text=f'구글 웹사이트 링크: {google_url}')

# Updater 생성 및 핸들러 등록
updater = Updater(token=bot_token, use_context=True)
dispatcher = updater.dispatcher

# 콜백 버튼 핸들러 등록
dispatcher.add_handler(CallbackQueryHandler(button_click))

# 봇 시작
updater.start_polling()
updater.idle()


btn_menu("test")
btn_wallet("test")
btn_settings("test")