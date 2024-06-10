export const DOMAIN = 'http://117.1.29.237:7077/'

// http://117.1.29.237:7077
//https://htad.id.vn
export const TOKEN = 'peoplesearchtoken'
export const USER_LOGIN = 'USER_LOGIN'

// export const XCSRFToken = 'X-CSRFToken'
// export const session = 'sessionid'
export const csrftoken = 'csrf_token'

// export const TOKEN = 'pstoken'

export const layouts = {
    English: {
      default: [
        "1 2 3 4 5 6 7 8 9 0 {bksp}",
        "q w e r t y u i o p",
        "a s d f g h j k l {enter}",
        "{shift} z x c v b n m {shift}",
        "{space}",
      ],
      shift: [
        "! @ # $ % ^ & * ( ) {bksp}",
        "Q W E R T Y U I O P",
        "A S D F G H J K L {enter}",
        "{shift} Z X C V B N M {shift}",
        "{space}",
      ],
    },
    French: {
      default: [
        "& é \" ' ( § è ! ç à ) - {bksp}",
        "a z e r t y u i o p ^ $",
        "q s d f g h j k l m ù {enter}",
        "{shift} w x c v b n , ; : = {shift}",
        "{space}",
      ],
      shift: [
        "1 2 3 4 5 6 7 8 9 0 _ {bksp}",
        "A Z E R T Y U I O P ¨ *",
        "Q S D F G H J K L M % {enter}",
        "{shift} W X C V B N ? . / + {shift}",
        "{space}",
      ],
    },
    Russian: {
      default: [
        "1 2 3 4 5 6 7 8 9 0 {bksp}",
        "й ц у к е н г ш щ з х ъ",
        "ф ы в а п р о л д ж э {enter}",
        "{shift} я ч с м и т ь б ю {shift}",
        "{space}",
      ],
      shift: [
        '! " № ; % : ? * ( ) {bksp}',
        "Й Ц У К Е Н Г Ш Щ З Х Ъ",
        "Ф Ы В А П Р О Л Д Ж Э {enter}",
        "{shift} Я Ч С М И Т Ь Б Ю {shift}",
        "{space}",
      ],
    },
    Hindi: {
      default: [
        "1 2 3 4 5 6 7 8 9 0 {bksp}",
        "क ख ग घ ङ च छ ज झ ञ",
        "ट ठ ड ढ ण त थ द ध {enter}",
        "{shift} न प फ ब भ म य र ल {shift}",
        "{space}",
      ],
      shift: [
        "१ २ ३ ४ ५ ६ ७ ८ ९ ० {bksp}",
        "क़ ख़ ग़ ज़ ड़ ढ़ फ़ झ़",
        "ऑ ऍ ऋ ॠ ऌ ॡ अं अः {enter}",
        "{shift} ण् र्र त्र श्र क्ष ज्ञ {shift}",
        "{space}",
      ],
    },
    Arabic: {
      default: [
        "١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ {bksp}",
        "ض ص ث ق ف غ ع ه خ ح ج د",
        "ش س ي ب ل ا ت ن م ك ط {enter}",
        "{shift} ئ ء ؤ ر ى ة و ز ظ {shift}",
        "{space}",
      ],
      shift: [
        "! @ # $ % ^ & * ) ( {bksp}",
        "َ ً ُ ٌ ِ ٍ ّ ْ ـ ؛ ، . /",
        "آ أ إ ة ـ ، ؛ ؟ ّ {enter}",
        "{shift} ۞ ـ ُ ٌ ِ ٍ ّ ْ {shift}",
        "{space}",
      ],
    },
    Hebrew: {
      default: [
        "ק ר א ט ו ן ם פ {bksp}",
        "ש ד ג כ ע י ח ל ך ף",
        "ז ס ב ה נ מ צ ת ץ {enter}",
        "{shift} 1 2 3 4 5 6 7 8 9 0 {shift}",
        "{space}",
      ],
      shift: [
        "Q W E R T Y U I O P {bksp}",
        'A S D F G H J K L : "',
        "Z X C V B N M , . ? {enter}",
        "{shift} ! @ # $ % ^ & * ( ) {shift}",
        "{space}",
      ],
    },
  };
export  const languages = ["English", "French", "Russian", "Hindi", "Hebrew"];