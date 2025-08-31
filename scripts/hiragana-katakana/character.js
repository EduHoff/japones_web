export class Character {
    constructor() {
        this.hiragana = [
            { char: 'あ', romaji: 'a', soundId: 'aSound' },
            { char: 'い', romaji: 'i', soundId: 'iSound' },
            { char: 'う', romaji: 'u', soundId: 'uSound' },
            { char: 'え', romaji: 'e', soundId: 'eSound' },
            { char: 'お', romaji: 'o', soundId: 'oSound' },

            { char: 'か', romaji: 'ka', soundId: 'kaSound' },
            { char: 'き', romaji: 'ki', soundId: 'kiSound' },
            { char: 'く', romaji: 'ku', soundId: 'kuSound' },
            { char: 'け', romaji: 'ke', soundId: 'keSound' },
            { char: 'こ', romaji: 'ko', soundId: 'koSound' },

            { char: 'さ', romaji: 'sa', soundId: 'saSound' },
            { char: 'し', romaji: 'shi', soundId: 'shiSound' },
            { char: 'す', romaji: 'su', soundId: 'suSound' },
            { char: 'せ', romaji: 'se', soundId: 'seSound' },
            { char: 'そ', romaji: 'so', soundId: 'soSound' },

            { char: 'た', romaji: 'ta', soundId: 'taSound' },
            { char: 'ち', romaji: 'chi', soundId: 'chiSound' },
            { char: 'つ', romaji: 'tsu', soundId: 'tsuSound' },
            { char: 'て', romaji: 'te', soundId: 'teSound' },
            { char: 'と', romaji: 'to', soundId: 'toSound' },

            { char: 'な', romaji: 'na', soundId: 'naSound' },
            { char: 'に', romaji: 'ni', soundId: 'niSound' },
            { char: 'ぬ', romaji: 'nu', soundId: 'nuSound' },
            { char: 'ね', romaji: 'ne', soundId: 'neSound' },
            { char: 'の', romaji: 'no', soundId: 'noSound' },

            { char: 'は', romaji: 'ha', soundId: 'haSound' },
            { char: 'ひ', romaji: 'hi', soundId: 'hiSound' },
            { char: 'ふ', romaji: 'fu', soundId: 'fuSound' },
            { char: 'へ', romaji: 'he', soundId: 'heSound' },
            { char: 'ほ', romaji: 'ho', soundId: 'hoSound' },

            { char: 'ま', romaji: 'ma', soundId: 'maSound' },
            { char: 'み', romaji: 'mi', soundId: 'miSound' },
            { char: 'む', romaji: 'mu', soundId: 'muSound' },
            { char: 'め', romaji: 'me', soundId: 'meSound' },
            { char: 'も', romaji: 'mo', soundId: 'moSound' },

            { char: 'や', romaji: 'ya', soundId: 'yaSound' },
            { char: 'ゆ', romaji: 'yu', soundId: 'yuSound' },
            { char: 'よ', romaji: 'yo', soundId: 'yoSound' },

            { char: 'ら', romaji: 'ra', soundId: 'raSound' },
            { char: 'り', romaji: 'ri', soundId: 'riSound' },
            { char: 'る', romaji: 'ru', soundId: 'ruSound' },
            { char: 'れ', romaji: 're', soundId: 'reSound' },
            { char: 'ろ', romaji: 'ro', soundId: 'roSound' },

            { char: 'わ', romaji: 'wa', soundId: 'waSound' },
            { char: 'を', romaji: 'wo', soundId: 'woSound' },
            { char: 'ん', romaji: 'n', soundId: 'nSound' },
            
            
            { char: 'が', romaji: 'ga', soundId: 'gaSound' },
            { char: 'ぎ', romaji: 'gi', soundId: 'giSound' },
            { char: 'ぐ', romaji: 'gu', soundId: 'guSound' },
            { char: 'げ', romaji: 'ge', soundId: 'geSound' },
            { char: 'ご', romaji: 'go', soundId: 'goSound' },

            { char: 'ざ', romaji: 'za', soundId: 'zaSound' },
            { char: 'じ', romaji: 'ji', soundId: 'jiSound' },
            { char: 'ず', romaji: 'zu', soundId: 'zuSound' },
            { char: 'ぜ', romaji: 'ze', soundId: 'zeSound' },
            { char: 'ぞ', romaji: 'zo', soundId: 'zoSound' },

            { char: 'だ', romaji: 'da', soundId: 'daSound' },
            { char: 'ぢ', romaji: 'ji', soundId: 'jiSound' },
            { char: 'づ', romaji: 'zu', soundId: 'zuSound' },
            { char: 'で', romaji: 'de', soundId: 'deSound' },
            { char: 'ど', romaji: 'do', soundId: 'doSound' },

            { char: 'ば', romaji: 'ba', soundId: 'baSound' },
            { char: 'び', romaji: 'bi', soundId: 'biSound' },
            { char: 'ぶ', romaji: 'bu', soundId: 'buSound' },
            { char: 'べ', romaji: 'be', soundId: 'beSound' },
            { char: 'ぼ', romaji: 'bo', soundId: 'boSound' },

            { char: 'ぱ', romaji: 'pa', soundId: 'paSound' },
            { char: 'ぴ', romaji: 'pi', soundId: 'piSound' },
            { char: 'ぷ', romaji: 'pu', soundId: 'puSound' },
            { char: 'ぺ', romaji: 'pe', soundId: 'peSound' },
            { char: 'ぽ', romaji: 'po', soundId: 'poSound' },


            { char: 'きゃ', romaji: 'kya', soundId: 'kyaSound' },
            { char: 'きゅ', romaji: 'kyu', soundId: 'kyuSound' },
            { char: 'きょ', romaji: 'kyo', soundId: 'kyoSound' },

            { char: 'しゃ', romaji: 'sha', soundId: 'shaSound' },
            { char: 'しゅ', romaji: 'shu', soundId: 'shuSound' },
            { char: 'しょ', romaji: 'sho', soundId: 'shoSound' },

            { char: 'ちゃ', romaji: 'cha', soundId: 'chaSound' },
            { char: 'ちゅ', romaji: 'chu', soundId: 'chuSound' },
            { char: 'ちょ', romaji: 'cho', soundId: 'choSound' },

            { char: 'にゃ', romaji: 'nya', soundId: 'nyaSound' },
            { char: 'にゅ', romaji: 'nyu', soundId: 'nyuSound' },
            { char: 'にょ', romaji: 'nyo', soundId: 'nyoSound' },

            { char: 'ひゃ', romaji: 'hya', soundId: 'hyaSound' },
            { char: 'ひゅ', romaji: 'hyu', soundId: 'hyuSound' },
            { char: 'ひょ', romaji: 'hyo', soundId: 'hyoSound' },

            { char: 'みゃ', romaji: 'mya', soundId: 'myaSound' },
            { char: 'みゅ', romaji: 'myu', soundId: 'myuSound' },
            { char: 'みょ', romaji: 'myo', soundId: 'myoSound' },

            { char: 'りゃ', romaji: 'rya', soundId: 'ryaSound' },
            { char: 'りゅ', romaji: 'ryu', soundId: 'ryuSound' },
            { char: 'りょ', romaji: 'ryo', soundId: 'ryoSound' },

            
            { char: 'ぎゃ', romaji: 'gya', soundId: 'gyaSound' },
            { char: 'ぎゅ', romaji: 'gyu', soundId: 'gyuSound' },
            { char: 'ぎょ', romaji: 'gyo', soundId: 'gyoSound' },

            { char: 'じゃ', romaji: 'ja', soundId: 'jaSound' },
            { char: 'じゅ', romaji: 'ju', soundId: 'juSound' },
            { char: 'じょ', romaji: 'jo', soundId: 'joSound' },

            { char: 'びゃ', romaji: 'bya', soundId: 'byaSound' },
            { char: 'びゅ', romaji: 'byu', soundId: 'byuSound' },
            { char: 'びょ', romaji: 'byo', soundId: 'byoSound' },

            { char: 'ぴゃ', romaji: 'pya', soundId: 'pyaSound' },
            { char: 'ぴゅ', romaji: 'pyu', soundId: 'pyuSound' },
            { char: 'ぴょ', romaji: 'pyo', soundId: 'pyoSound' }
        ]


        this.katakana = [
            { char: 'ア', romaji: 'a', soundId: 'aSound' },
            { char: 'イ', romaji: 'i', soundId: 'iSound' },
            { char: 'ウ', romaji: 'u', soundId: 'uSound' },
            { char: 'エ', romaji: 'e', soundId: 'eSound' },
            { char: 'オ', romaji: 'o', soundId: 'oSound' },

            { char: 'カ', romaji: 'ka', soundId: 'kaSound' },
            { char: 'キ', romaji: 'ki', soundId: 'kiSound' },
            { char: 'ク', romaji: 'ku', soundId: 'kuSound' },
            { char: 'ケ', romaji: 'ke', soundId: 'keSound' },
            { char: 'コ', romaji: 'ko', soundId: 'koSound' },

            { char: 'サ', romaji: 'sa', soundId: 'saSound' },
            { char: 'シ', romaji: 'shi', soundId: 'shiSound' },
            { char: 'ス', romaji: 'su', soundId: 'suSound' },
            { char: 'セ', romaji: 'se', soundId: 'seSound' },
            { char: 'ソ', romaji: 'so', soundId: 'soSound' },

            { char: 'タ', romaji: 'ta', soundId: 'taSound' },
            { char: 'チ', romaji: 'chi', soundId: 'chiSound' },
            { char: 'ツ', romaji: 'tsu', soundId: 'tsuSound' },
            { char: 'テ', romaji: 'te', soundId: 'teSound' },
            { char: 'ト', romaji: 'to', soundId: 'toSound' },

            { char: 'ナ', romaji: 'na', soundId: 'naSound' },
            { char: 'ニ', romaji: 'ni', soundId: 'niSound' },
            { char: 'ヌ', romaji: 'nu', soundId: 'nuSound' },
            { char: 'ネ', romaji: 'ne', soundId: 'neSound' },
            { char: 'ノ', romaji: 'no', soundId: 'noSound' },

            { char: 'ハ', romaji: 'ha', soundId: 'haSound' },
            { char: 'ヒ', romaji: 'hi', soundId: 'hiSound' },
            { char: 'フ', romaji: 'fu', soundId: 'fuSound' },
            { char: 'ヘ', romaji: 'he', soundId: 'heSound' },
            { char: 'ホ', romaji: 'ho', soundId: 'hoSound' },

            { char: 'マ', romaji: 'ma', soundId: 'maSound' },
            { char: 'ミ', romaji: 'mi', soundId: 'miSound' },
            { char: 'ム', romaji: 'mu', soundId: 'muSound' },
            { char: 'メ', romaji: 'me', soundId: 'meSound' },
            { char: 'モ', romaji: 'mo', soundId: 'moSound' },

            { char: 'ヤ', romaji: 'ya', soundId: 'yaSound' },
            { char: 'ユ', romaji: 'yu', soundId: 'yuSound' },
            { char: 'ヨ', romaji: 'yo', soundId: 'yoSound' },

            { char: 'ラ', romaji: 'ra', soundId: 'raSound' },
            { char: 'リ', romaji: 'ri', soundId: 'riSound' },
            { char: 'ル', romaji: 'ru', soundId: 'ruSound' },
            { char: 'レ', romaji: 're', soundId: 'reSound' },
            { char: 'ロ', romaji: 'ro', soundId: 'roSound' },

            { char: 'ワ', romaji: 'wa', soundId: 'waSound' },
            { char: 'ヲ', romaji: 'wo', soundId: 'woSound' },
            { char: 'ン', romaji: 'n', soundId: 'nSound' },


            { char: 'ガ', romaji: 'ga', soundId: 'gaSound' },
            { char: 'ギ', romaji: 'gi', soundId: 'giSound' },
            { char: 'グ', romaji: 'gu', soundId: 'guSound' },
            { char: 'ゲ', romaji: 'ge', soundId: 'geSound' },
            { char: 'ゴ', romaji: 'go', soundId: 'goSound' },

            { char: 'ザ', romaji: 'za', soundId: 'zaSound' },
            { char: 'ジ', romaji: 'ji', soundId: 'jiSound' },
            { char: 'ズ', romaji: 'zu', soundId: 'zuSound' },
            { char: 'ゼ', romaji: 'ze', soundId: 'zeSound' },
            { char: 'ゾ', romaji: 'zo', soundId: 'zoSound' },

            { char: 'ダ', romaji: 'da', soundId: 'daSound' },
            { char: 'ヂ', romaji: 'ji', soundId: 'jiSound' },
            { char: 'ヅ', romaji: 'zu', soundId: 'zuSound' },
            { char: 'デ', romaji: 'de', soundId: 'deSound' },
            { char: 'ド', romaji: 'do', soundId: 'doSound' },

            { char: 'バ', romaji: 'ba', soundId: 'baSound' },
            { char: 'ビ', romaji: 'bi', soundId: 'biSound' },
            { char: 'ブ', romaji: 'bu', soundId: 'buSound' },
            { char: 'ベ', romaji: 'be', soundId: 'beSound' },
            { char: 'ボ', romaji: 'bo', soundId: 'boSound' },

            { char: 'パ', romaji: 'pa', soundId: 'paSound' },
            { char: 'ピ', romaji: 'pi', soundId: 'piSound' },
            { char: 'プ', romaji: 'pu', soundId: 'puSound' },
            { char: 'ペ', romaji: 'pe', soundId: 'peSound' },
            { char: 'ポ', romaji: 'po', soundId: 'poSound' },


            { char: 'キャ', romaji: 'kya', soundId: 'kyaSound' },
            { char: 'キュ', romaji: 'kyu', soundId: 'kyuSound' },
            { char: 'キョ', romaji: 'kyo', soundId: 'kyoSound' },

            { char: 'シャ', romaji: 'sha', soundId: 'shaSound' },
            { char: 'シュ', romaji: 'shu', soundId: 'shuSound' },
            { char: 'ショ', romaji: 'sho', soundId: 'shoSound' },

            { char: 'チャ', romaji: 'cha', soundId: 'chaSound' },
            { char: 'チュ', romaji: 'chu', soundId: 'chuSound' },
            { char: 'チョ', romaji: 'cho', soundId: 'choSound' },

            { char: 'ニャ', romaji: 'nya', soundId: 'nyaSound' },
            { char: 'ニュ', romaji: 'nyu', soundId: 'nyuSound' },
            { char: 'ニョ', romaji: 'nyo', soundId: 'nyoSound' },

            { char: 'ヒャ', romaji: 'hya', soundId: 'hyaSound' },
            { char: 'ヒュ', romaji: 'hyu', soundId: 'hyuSound' },
            { char: 'ヒョ', romaji: 'hyo', soundId: 'hyoSound' },

            { char: 'ミャ', romaji: 'mya', soundId: 'myaSound' },
            { char: 'ミュ', romaji: 'myu', soundId: 'myuSound' },
            { char: 'ミョ', romaji: 'myo', soundId: 'myoSound' },

            { char: 'リャ', romaji: 'rya', soundId: 'ryaSound' },
            { char: 'リュ', romaji: 'ryu', soundId: 'ryuSound' },
            { char: 'リョ', romaji: 'ryo', soundId: 'ryoSound' },


            { char: 'ギャ', romaji: 'gya', soundId: 'gyaSound' },
            { char: 'ギュ', romaji: 'gyu', soundId: 'gyuSound' },
            { char: 'ギョ', romaji: 'gyo', soundId: 'gyoSound' },

            { char: 'ジャ', romaji: 'ja', soundId: 'jaSound' },
            { char: 'ジュ', romaji: 'ju', soundId: 'juSound' },
            { char: 'ジョ', romaji: 'jo', soundId: 'joSound' },

            { char: 'ビャ', romaji: 'bya', soundId: 'byaSound' },
            { char: 'ビュ', romaji: 'byu', soundId: 'byuSound' },
            { char: 'ビョ', romaji: 'byo', soundId: 'byoSound' },

            { char: 'ピャ', romaji: 'pya', soundId: 'pyaSound' },
            { char: 'ピュ', romaji: 'pyu', soundId: 'pyuSound' },
            { char: 'ピョ', romaji: 'pyo', soundId: 'pyoSound' }
        ]
    }
}