export const week9 = {
  1: {
    1: {
      title: "Hobbies",
      type: "learn",
      content: [
        { letter: "Sing", word: "Sing", meaning: "Hát", emoji: "🎤", phonetic: "/sɪŋ/" },
        { letter: "Dance", word: "Dance", meaning: "Nhảy", emoji: "💃", phonetic: "/dæns/" },
        { letter: "Cook", word: "Cook", meaning: "Nấu ăn", emoji: "🍳", phonetic: "/kʊk/" },
        { letter: "Read", word: "Read", meaning: "Đọc sách", emoji: "📚", phonetic: "/riːd/" },
        { letter: "Watch movie", word: "Watch movie", meaning: "Xem phim", emoji: "🎬", phonetic: "/wɒtʃ ˈmuːvi/" },
        { letter: "Travel", word: "Travel", meaning: "Du lịch", emoji: "✈️", phonetic: "/ˈtrævəl/" },
        { letter: "Play games", word: "Play games", meaning: "Chơi game", emoji: "🎮", phonetic: "/pleɪ ɡeɪmz/" },
        { letter: "Listen to music", word: "Listen to music", meaning: "Nghe nhạc", emoji: "🎵", phonetic: "/ˈlɪsən tə ˈmjuːzɪk/" },
      ],
    },
    2: {
      title: "Quiz: Hobbies",
      type: "practice",
      content: [
        {
          question: "'Nấu ăn' trong tiếng Anh là gì?",
          options: ["Sing", "Dance", "Cook", "Read"],
          correct: 2,
          explanation: "'Nấu ăn' trong tiếng Anh là 'Cook'. Ví dụ: I like to cook.",
        },
        {
          question: "What does 'Travel' mean in Vietnamese?",
          options: ["Nhảy", "Du lịch", "Hát", "Xem phim"],
          correct: 1,
          explanation: "'Travel' nghĩa là 'Du lịch'. Ví dụ: I love to travel.",
        },
        {
          question: "Bạn muốn nói 'Nghe nhạc', bạn nói gì?",
          options: ["Play games", "Watch movie", "Listen to music", "Dance"],
          correct: 2,
          explanation: "'Nghe nhạc' trong tiếng Anh là 'Listen to music'.",
        },
        {
          question: "Which hobby uses a book? 📚",
          options: ["Sing", "Cook", "Dance", "Read"],
          correct: 3,
          explanation: "'Read' nghĩa là 'Đọc sách'. Bạn cần sách để đọc!",
        },
        {
          question: "'Chơi game' trong tiếng Anh là gì?",
          options: ["Watch movie", "Play games", "Listen to music", "Travel"],
          correct: 1,
          explanation: "'Chơi game' trong tiếng Anh là 'Play games'.",
        },
      ],
    },
    3: {
      title: "Speak: My Hobbies",
      type: "speak",
      content: {
        instruction: "Luyện nói về sở thích",
        items: [
          { text: "I like to cook.", phonetic: "/aɪ laɪk tə kʊk/", meaning: "Tôi thích nấu ăn." },
          { text: "I like to watch movies.", phonetic: "/aɪ laɪk tə wɒtʃ ˈmuːviz/", meaning: "Tôi thích xem phim." },
          { text: "I like to listen to music.", phonetic: "/aɪ laɪk tə ˈlɪsən tə ˈmjuːzɪk/", meaning: "Tôi thích nghe nhạc." },
          { text: "I like to travel.", phonetic: "/aɪ laɪk tə ˈtrævəl/", meaning: "Tôi thích du lịch." },
        ],
      },
    },
  },
  2: {
    1: {
      title: "Present Continuous (-ing)",
      type: "learn",
      content: [
        { letter: "I am eating", word: "Eating", meaning: "Đang ăn", emoji: "🍽️", phonetic: "/ˈiːtɪŋ/" },
        { letter: "I am reading", word: "Reading", meaning: "Đang đọc", emoji: "📖", phonetic: "/ˈriːdɪŋ/" },
        { letter: "I am working", word: "Working", meaning: "Đang làm việc", emoji: "💼", phonetic: "/ˈwɜːrkɪŋ/" },
        { letter: "I am sleeping", word: "Sleeping", meaning: "Đang ngủ", emoji: "😴", phonetic: "/ˈsliːpɪŋ/" },
        { letter: "I am cooking", word: "Cooking", meaning: "Đang nấu ăn", emoji: "🍳", phonetic: "/ˈkʊkɪŋ/" },
        { letter: "I am watching", word: "Watching", meaning: "Đang xem", emoji: "👀", phonetic: "/ˈwɒtʃɪŋ/" },
      ],
    },
    2: {
      title: "Quiz: Present Continuous",
      type: "practice",
      content: [
        {
          question: "'I am eating' nghĩa là gì?",
          options: ["Tôi đã ăn", "Tôi đang ăn", "Tôi sẽ ăn", "Tôi muốn ăn"],
          correct: 1,
          explanation: "'I am eating' nghĩa là 'Tôi đang ăn'. 'Am + V-ing' diễn tả hành động đang xảy ra.",
        },
        {
          question: "How do you say 'đang đọc' in English?",
          options: ["Read", "Reads", "Reading", "Readed"],
          correct: 2,
          explanation: "'Đang đọc' là 'Reading'. Thêm '-ing' vào sau động từ để tạo thì hiện tại tiếp diễn.",
        },
        {
          question: "Chọn câu đúng:",
          options: ["She is sleep.", "She is sleeping.", "She sleeping.", "She are sleeping."],
          correct: 1,
          explanation: "Câu đúng là 'She is sleeping.' Cấu trúc: Chủ ngữ + is/am/are + V-ing.",
        },
        {
          question: "'He is cooking' có nghĩa là gì?",
          options: ["Anh ấy nấu ăn", "Anh ấy đang nấu ăn", "Anh ấy đã nấu ăn", "Anh ấy thích nấu ăn"],
          correct: 1,
          explanation: "'He is cooking' nghĩa là 'Anh ấy đang nấu ăn'. Dùng 'is' vì chủ ngữ là 'He'.",
        },
        {
          question: "Điền vào chỗ trống: 'They ___ watching TV.'",
          options: ["is", "am", "are", "be"],
          correct: 2,
          explanation: "Đáp án là 'are' vì chủ ngữ 'They' dùng với 'are'. They are watching TV.",
        },
      ],
    },
    3: {
      title: "Speak: What Are You Doing?",
      type: "speak",
      content: {
        instruction: "Luyện nói thì hiện tại tiếp diễn",
        items: [
          { text: "I am eating.", phonetic: "/aɪ æm ˈiːtɪŋ/", meaning: "Tôi đang ăn." },
          { text: "She is reading.", phonetic: "/ʃiː ɪz ˈriːdɪŋ/", meaning: "Cô ấy đang đọc." },
          { text: "He is working.", phonetic: "/hiː ɪz ˈwɜːrkɪŋ/", meaning: "Anh ấy đang làm việc." },
          { text: "We are cooking.", phonetic: "/wiː ɑːr ˈkʊkɪŋ/", meaning: "Chúng tôi đang nấu ăn." },
        ],
      },
    },
  },
  3: {
    1: {
      title: "Can / Can't",
      type: "learn",
      content: [
        { letter: "I can", word: "I can", meaning: "Tôi có thể", emoji: "✅", phonetic: "/aɪ kæn/" },
        { letter: "I can't", word: "I can't", meaning: "Tôi không thể", emoji: "❌", phonetic: "/aɪ kænt/" },
        { letter: "Swim", word: "Swim", meaning: "Bơi", emoji: "🏊", phonetic: "/swɪm/" },
        { letter: "Drive", word: "Drive", meaning: "Lái xe", emoji: "🚗", phonetic: "/draɪv/" },
        { letter: "Sing", word: "Sing", meaning: "Hát", emoji: "🎤", phonetic: "/sɪŋ/" },
        { letter: "Dance", word: "Dance", meaning: "Nhảy", emoji: "💃", phonetic: "/dæns/" },
        { letter: "Speak English", word: "Speak English", meaning: "Nói tiếng Anh", emoji: "🗣️", phonetic: "/spiːk ˈɪŋɡlɪʃ/" },
      ],
    },
    2: {
      title: "Quiz: Can / Can't",
      type: "practice",
      content: [
        {
          question: "'Tôi có thể bơi' trong tiếng Anh là gì?",
          options: ["I can swim.", "I can't swim.", "I swim can.", "I swimming."],
          correct: 0,
          explanation: "'Tôi có thể bơi' là 'I can swim.' Cấu trúc: I can + động từ nguyên mẫu.",
        },
        {
          question: "What does 'I can't drive' mean?",
          options: ["Tôi có thể lái xe", "Tôi không thể lái xe", "Tôi muốn lái xe", "Tôi đang lái xe"],
          correct: 1,
          explanation: "'I can't drive' nghĩa là 'Tôi không thể lái xe'. 'Can't' là phủ định của 'Can'.",
        },
        {
          question: "Chọn câu đúng:",
          options: ["She can sings.", "She can sing.", "She can singing.", "She cans sing."],
          correct: 1,
          explanation: "Câu đúng là 'She can sing.' Sau 'can' luôn dùng động từ nguyên mẫu (không thêm s, ing).",
        },
        {
          question: "'Can you speak English?' nghĩa là gì?",
          options: ["Bạn nói tiếng Anh.", "Bạn có thể nói tiếng Anh không?", "Bạn đang nói tiếng Anh.", "Bạn muốn nói tiếng Anh."],
          correct: 1,
          explanation: "'Can you speak English?' là câu hỏi: 'Bạn có thể nói tiếng Anh không?'",
        },
        {
          question: "Điền vào chỗ trống: 'He ___ dance very well.'",
          options: ["can't", "can not to", "cans", "can't to"],
          correct: 0,
          explanation: "Đáp án là 'can't'. He can't dance very well = Anh ấy không thể nhảy giỏi.",
        },
      ],
    },
    3: {
      title: "Speak: Can / Can't",
      type: "speak",
      content: {
        instruction: "Luyện nói Can / Can't",
        items: [
          { text: "I can cook.", phonetic: "/aɪ kæn kʊk/", meaning: "Tôi có thể nấu ăn." },
          { text: "I can't swim.", phonetic: "/aɪ kænt swɪm/", meaning: "Tôi không thể bơi." },
          { text: "I can speak English.", phonetic: "/aɪ kæn spiːk ˈɪŋɡlɪʃ/", meaning: "Tôi có thể nói tiếng Anh." },
          { text: "Can you dance?", phonetic: "/kæn juː dæns/", meaning: "Bạn có thể nhảy không?" },
        ],
      },
    },
  },
  4: {
    1: {
      title: "Making Plans",
      type: "learn",
      content: [
        { letter: "Want to", word: "Want to", meaning: "Muốn", emoji: "💭", phonetic: "/wɒnt tə/" },
        { letter: "Tomorrow", word: "Tomorrow", meaning: "Ngày mai", emoji: "📅", phonetic: "/təˈmɒroʊ/" },
        { letter: "Free", word: "Free", meaning: "Rảnh", emoji: "🆓", phonetic: "/friː/" },
        { letter: "Busy", word: "Busy", meaning: "Bận", emoji: "⏰", phonetic: "/ˈbɪzi/" },
        { letter: "Let's go", word: "Let's go", meaning: "Đi thôi", emoji: "🚶", phonetic: "/lets ɡoʊ/" },
        { letter: "Weekend", word: "Weekend", meaning: "Cuối tuần", emoji: "🎉", phonetic: "/ˈwiːkend/" },
        { letter: "Together", word: "Together", meaning: "Cùng nhau", emoji: "🤝", phonetic: "/təˈɡeðər/" },
      ],
    },
    2: {
      title: "Quiz: Making Plans",
      type: "practice",
      content: [
        {
          question: "'Ngày mai' trong tiếng Anh là gì?",
          options: ["Yesterday", "Today", "Tomorrow", "Weekend"],
          correct: 2,
          explanation: "'Ngày mai' trong tiếng Anh là 'Tomorrow'.",
        },
        {
          question: "What does 'I want to go shopping' mean?",
          options: ["Tôi đang đi mua sắm", "Tôi muốn đi mua sắm", "Tôi đã đi mua sắm", "Tôi không muốn mua sắm"],
          correct: 1,
          explanation: "'I want to go shopping' nghĩa là 'Tôi muốn đi mua sắm'. 'Want to' = muốn.",
        },
        {
          question: "Bạn rủ ai đó đi chơi, bạn nói gì?",
          options: ["I am busy.", "Let's go!", "I am free.", "Tomorrow."],
          correct: 1,
          explanation: "Khi rủ ai đó, bạn nói 'Let's go!' nghĩa là 'Đi thôi!'",
        },
        {
          question: "'Are you free this weekend?' nghĩa là gì?",
          options: ["Bạn bận cuối tuần không?", "Cuối tuần bạn rảnh không?", "Bạn muốn đi cuối tuần?", "Cuối tuần bạn đi đâu?"],
          correct: 1,
          explanation: "'Are you free this weekend?' = 'Cuối tuần bạn rảnh không?' Free = rảnh.",
        },
        {
          question: "Điền vào chỗ trống: 'Let's go to the park ___.'",
          options: ["busy", "together", "free", "want"],
          correct: 1,
          explanation: "'Together' nghĩa là 'cùng nhau'. Let's go to the park together = Đi công viên cùng nhau.",
        },
      ],
    },
    3: {
      title: "Speak: Making Plans",
      type: "speak",
      content: {
        instruction: "Luyện lên kế hoạch",
        items: [
          { text: "I want to go to the park tomorrow.", phonetic: "/aɪ wɒnt tə ɡoʊ tə ðə pɑːrk təˈmɒroʊ/", meaning: "Tôi muốn đi công viên ngày mai." },
          { text: "Are you free this weekend?", phonetic: "/ɑːr juː friː ðɪs ˈwiːkend/", meaning: "Cuối tuần bạn rảnh không?" },
          { text: "Let's go together!", phonetic: "/lets ɡoʊ təˈɡeðər/", meaning: "Đi cùng nhau thôi!" },
          { text: "I am busy tomorrow.", phonetic: "/aɪ æm ˈbɪzi təˈmɒroʊ/", meaning: "Ngày mai tôi bận." },
        ],
      },
    },
  },
  5: {
    1: {
      title: "Week 9 Review",
      type: "learn",
      content: [
        { letter: "Cook", word: "Cook", meaning: "Nấu ăn", emoji: "🍳" },
        { letter: "I am eating", word: "Eating", meaning: "Đang ăn", emoji: "🍽️" },
        { letter: "I can", word: "I can", meaning: "Tôi có thể", emoji: "✅" },
        { letter: "Tomorrow", word: "Tomorrow", meaning: "Ngày mai", emoji: "📅" },
        { letter: "Travel", word: "Travel", meaning: "Du lịch", emoji: "✈️" },
        { letter: "I can't", word: "I can't", meaning: "Tôi không thể", emoji: "❌" },
        { letter: "Weekend", word: "Weekend", meaning: "Cuối tuần", emoji: "🎉" },
        { letter: "Listen to music", word: "Listen to music", meaning: "Nghe nhạc", emoji: "🎵" },
      ],
    },
    2: {
      title: "Week 9 Review Quiz",
      type: "practice",
      content: [
        {
          question: "'Du lịch' trong tiếng Anh là gì?",
          options: ["Dance", "Travel", "Cook", "Read"],
          correct: 1,
          explanation: "'Du lịch' trong tiếng Anh là 'Travel'.",
        },
        {
          question: "Chọn dạng '-ing' đúng của 'cook':",
          options: ["Cookin", "Cooked", "Cooking", "Cooks"],
          correct: 2,
          explanation: "Dạng '-ing' của 'cook' là 'cooking'. I am cooking = Tôi đang nấu ăn.",
        },
        {
          question: "'I can swim' nghĩa là gì?",
          options: ["Tôi đang bơi", "Tôi có thể bơi", "Tôi không thể bơi", "Tôi muốn bơi"],
          correct: 1,
          explanation: "'I can swim' = 'Tôi có thể bơi'. 'Can' = có thể.",
        },
        {
          question: "What does 'Weekend' mean?",
          options: ["Ngày mai", "Hôm nay", "Cuối tuần", "Hôm qua"],
          correct: 2,
          explanation: "'Weekend' nghĩa là 'Cuối tuần'.",
        },
        {
          question: "'She is reading' nghĩa là gì?",
          options: ["Cô ấy đọc sách", "Cô ấy đang đọc", "Cô ấy muốn đọc", "Cô ấy có thể đọc"],
          correct: 1,
          explanation: "'She is reading' = 'Cô ấy đang đọc'. Thì hiện tại tiếp diễn: is + V-ing.",
        },
        {
          question: "Điền vào chỗ trống: 'I ___ to go to the market.'",
          options: ["can", "want", "am", "let's"],
          correct: 1,
          explanation: "'I want to go to the market' = 'Tôi muốn đi chợ'. Want to = muốn.",
        },
        {
          question: "'Let's go!' nghĩa là gì?",
          options: ["Đi thôi!", "Tạm biệt!", "Xin chào!", "Cảm ơn!"],
          correct: 0,
          explanation: "'Let's go!' nghĩa là 'Đi thôi!' Dùng khi rủ ai đó cùng đi.",
        },
        {
          question: "Chọn câu đúng:",
          options: ["I can't to drive.", "I can't drive.", "I can't driving.", "I can't drives."],
          correct: 1,
          explanation: "Câu đúng là 'I can't drive.' Sau can/can't + động từ nguyên mẫu.",
        },
      ],
    },
    3: {
      title: "Speak: Week 9 Review",
      type: "speak",
      content: {
        instruction: "Ôn tập tuần 9",
        items: [
          { text: "On Saturday I am going to the market.", phonetic: "/ɒn ˈsætərdeɪ aɪ æm ˈɡoʊɪŋ tə ðə ˈmɑːrkɪt/", meaning: "Thứ Bảy tôi sẽ đi chợ." },
          { text: "I can cook phở.", phonetic: "/aɪ kæn kʊk fɜː/", meaning: "Tôi có thể nấu phở." },
          { text: "I like to listen to music.", phonetic: "/aɪ laɪk tə ˈlɪsən tə ˈmjuːzɪk/", meaning: "Tôi thích nghe nhạc." },
          { text: "Let's go together this weekend!", phonetic: "/lets ɡoʊ təˈɡeðər ðɪs ˈwiːkend/", meaning: "Cuối tuần đi cùng nhau thôi!" },
        ],
      },
    },
  },
};
