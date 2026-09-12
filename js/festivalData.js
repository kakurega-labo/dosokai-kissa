// js/festivalData.js

const FES_DATA = [
  {
    floor: "B1階",
    stalls: [
      { name: "タピオカ販売", place: "家庭科室", group: "料理研究愛好会", description: "", image: "" },
      { name: "アライ神社喫茶", place: "美術室", group: "美術・アートクラフト部", description: "", image: "" },
      { name: "スタンド製作", place: "中学技術ルーム", group: "ものつくり部(建築班)", description: "", image: "" },
      { name: "活動紹介", place: "ものつくり系活動室①-②", group: "同上(自動車班)", description: "", image: "" },
      { name: "ミニSL乗車体験", place: "正門横・ミニSL工房", group: "同上(SL班)", description: "", image: "" },
      { name: "製作体験", place: "文理未来レクチャールーム", group: "同上(機械班)", description: "", image: "" }
    ]
  },
  {
    floor: "1階",
    stalls: [
      { name: "中学入試相談室", place: "中学自習室", group: "", description: "中学入試に関する相談ブースを設けています。不安なことや、気になることなど、お気軽にご相談ください。お待ちしています。", image: "" },
      { name: "高校入試相談室", place: "コミュニケーションラボ", group: "", description: "学校生活、部活動、入試方法など気になることがあれば、お気軽にお立ち寄りください。本校の教員が熱を持って対応させていただきます。", image: "" },
      { name: "休憩室", place: "1A会議室＆110-112-113-114", group: "", description: "こちらは休憩室です。休憩室のみお食事が可能です。日駒祭が楽しすぎて、少し歩き疲れた方もどうぞ。", image: "" },
      { name: "図書委員会企画展示", place: "図書館", group: "図書委員会", description: "今年度も日駒図書館を休憩室として開放します。本校自慢の図書館をご覧になりながら、ゆっくりお過ごしください。また、館内では高校図書委員のお薦め本展示コーナーや日頃の活動を紹介する掲示なども行います。是非お立ち寄りください。", image: "" },
      { name: "食品販売", place: "エレベーターホール", group: "後援会・東工会", description: "1階エレベーターホールにて、後援会・東工会による食品販売を行っております。カレー、フランクフルト、お飲み物など、メニュー盛りだくさんでお待ちしております。お食事は休憩室でどうぞ。", image: "" },
      { name: "校内ラジオ", place: "放送ブース", group: "放送委員会", description: "放送委員会では、校内放送を利用して生ラジオ・楽曲の放送を行っています。日駒祭期間中の楽曲リクエストも行っております。", image: "" },
      { name: "ハンドクリーム作り", place: "生物室・屋上", group: "園芸養蜂部", description: "園芸養蜂部ではミツバチがつくる蜜蝋を使ってハンドクリームづくりをします。さらに屋上で行う19日(土)限定のミツバチイベントでは、ハチミツレモンスカッシュをご提供します！", image: "" },
      { name: "理科実験体験", place: "化学室", group: "サイエンス部", description: "いくつかの実験を自分の手で1から準備してやってみませんか！時間によってはなかなかお目にかかれないスケールの大きな実験ショーも見られるかも･･････？", image: "" }
    ]
  },
  {
    floor: "2階",
    stalls: [
      { name: "日駒万博-日駒の秘密を探れ-", place: "201-202-203", group: "J1", description: "", image: "" },
      { name: "日駒万博-世界の秘密を探れ-", place: "204-205-206", group: "J2", description: "", image: "" },
      { name: "カジノ", place: "207", group: "J3D", description: "", image: "" },
      { name: "カジノ31", place: "208", group: "J3E", description: "", image: "" },
      { name: "カシムーランド", place: "209", group: "J3F", description: "", image: "" },
      { name: "お化け屋敷", place: "210", group: "J3G", description: "", image: "" },
      { name: "J3Cマニア", place: "211", group: "J3C", description: "", image: "" },
      { name: "お化け屋敷", place: "213", group: "J3B", description: "", image: "" },
      { name: "Aートピア", place: "215", group: "J3A", description: "", image: "" },
      { name: "ベビールーム", place: "216", group: "", description: "乳幼児と、乳幼児をお連れの保護者のみなさまにご利用頂けます。おむつ交換台もございます。", image: "" },
      { name: "授乳室", place: "217", group: "", description: "赤ちゃんと、赤ちゃんをお連れの女性のみご利用頂けます。おむつ交換台もございます。", image: "" }
    ]
  },
  {
    floor: "3階",
    stalls: [
      { name: "ミッション・G・ポッシブル", place: "301", group: "2G", description: "", image: "" },
      { name: "Yummyなカジノ", place: "302", group: "2H", description: "", image: "" },
      { name: "カジノ", place: "303", group: "2L", description: "", image: "" },
      { name: "人形お化け屋敷", place: "304", group: "2M", description: "", image: "" },
      { name: "T番出口", place: "305", group: "2T", description: "", image: "" },
      { name: "活動紹介", place: "307", group: "マンガ研究部", description: "", image: "" },
      { name: "活動紹介", place: "308", group: "写真部", description: "", image: "" },
      { name: "制服リサイクル", place: "310", group: "後援会", description: "スチューデントホールにて後援会バザー、310教室にて制服りサイクル販売を行っています。あれもこれもこんなお値段で･･･！？ステキな掘り出し物に出会えるかも･･･！？どうぞ宝探しの気分でお越し下さい。※スチューデントホールへお越しの際は、3階売店横連絡通路が近くて便利です。", image: "" },
      { name: "後援会バザー", place: "スチューデントホール", group: "後援会", description: "", image: "" },
      { name: "禊", place: "314", group: "5D", description: "", image: "" },
      { name: "森閑ノ道", place: "315", group: "5C", description: "", image: "" },
      { name: "Pirates of jungle", place: "316", group: "5B", description: "", image: "" },
      { name: "廃病院～日駒隔離病棟～", place: "317", group: "5A", description: "", image: "" },
      { name: "同窓会喫茶", place: "319", group: "東工日駒同窓会", description: "同窓会では、「恩師や師との語らいの場」、「お休み処」として喫茶室をオープンしています。是非お立ち寄りくださいませ。", image: "image/cafe1.jpg" },
      { name: "和風喫茶", place: "100周年記念ホール2階和室", group: "茶道部", description: "", image: "表千家不泊流のお点前でみな様をお迎えします。「和風喫茶」は、椅子に座ってお抹茶とお菓子を召し上がって頂く立礼のお茶席です。茶道体験で一服し、ぜひ和室でくつろぎの時間をお過ごし下さい。※100周年記念ホールの和室へお越しの際は、1階の外階段を2階まで昇るか、3階スチューデントホールから2階に降りてください。" },
      { name: "エスターバックス", place: "スチューデントホール", group: "2S", description: "", image: "" },
      { name: "いろはにぽてと", place: "スチューデントホール", group: "5C", description: "", image: "" },
      { name: "チョコっとバナナ", place: "スチューデントホール", group: "5D", description: "", image: "" },
      { name: "コマゼリヤ", place: "スチューデントホール", group: "料理愛好会", description: "", image: "" }
    ]
  },
  {
    floor: "4階",
    stalls: [
      { name: "近射体験", place: "401", group: "山岳部", description: "", image: "" },
      { name: "雪山別荘", place: "402", group: "スキー部", description: "", image: "" },
      { name: "釣って釣って釣りまくれ！", place: "403", group: "水泳部", description: "", image: "" },
      { name: "ストラックアウト", place: "404", group: "軟式庭球部", description: "", image: "" },
      { name: "Hit a target", place: "405", group: "バドミントン部", description: "", image: "" },
      { name: "クライミング体験", place: "406", group: "山岳部", description: "", image: "" },
      { name: "ストラックアウト", place: "407", group: "硬式テニス部", description: "", image: "" },
      { name: "初めてのゴルフ", place: "408", group: "ゴルフ部", description: "", image: "" },
      { name: "作品展示", place: "409", group: "模型・鉄道研究部(模型班)", description: "", image: "" },
      { name: "作品展示", place: "410", group: "模型・鉄道研究部(鉄道班)", description: "", image: "" },
      { name: "活動紹介", place: "415", group: "競技かるた部", description: "", image: "" },
      { name: "STAR・LINK ～SPACIA～", place: "416", group: "サイエンス部(天文班)" },
      { name: "ボドゲ海", place: "417", group: "ボードゲーム部", description: "", image: "" }
    ]
  },
  {
    floor: "その他",
    stalls: [
      { name: "コンサート", place: "アリーナ", group: "有志団体", description: "", image: "" }
    ]
  }
];

