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
        ];


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
        ];
    }
}