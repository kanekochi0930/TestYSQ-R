export interface YsqrEmsResultDescriptions {
  blockTitle: string; // EMS 略号
  name: string; // 日本語スキーマ名
  description: string; // スキーマの中核説明
  improvement: string; // 改善アイデア
}
export const ysqrEmsResultDescriptions: YsqrEmsResultDescriptions[] = [
  {
    blockTitle: 'ED',
    name: '愛情剥奪',
    description:
      '他者から十分な思いやり・共感・保護を受けられないと感じる。人は自分を本当に気遣わないという信念が根底にある。',
    improvement:
      'セルフコンパッション練習で自分を労わる。安全な対人関係でニーズを言語化し、徐々に受け取る経験を増やす。',
  },
  {
    blockTitle: 'AB',
    name: '見捨てられ',
    description: '重要人物が不安定で、いつか自分を置いて去る・死別するという強い不安がある。',
    improvement:
      '安定した関係で“別れの無い小さな再会”を繰り返し体験し、現実検証(CBT)で見捨て確率を再評価する。',
  },
  {
    blockTitle: 'MA',
    name: '不信・虐待',
    description: '他者は利用・攻撃・辱めを与える存在だと予期し、防衛的・疑念的になる。',
    improvement:
      '段階的な信頼ゲーム(小さなお願い→返報)で安全な他者像を上書き。トラウマ由来ならEMDR/TF-CBTを併用。',
  },
  {
    blockTitle: 'SI',
    name: '孤立',
    description: '自分は根本的に異質で、集団に属さず孤立しているという感覚が続く。',
    improvement:
      '価値や興味の合うコミュニティに参加し、共通点を見つけるエクササイズ。社会スキル訓練も有効。',
  },
  {
    blockTitle: 'DS',
    name: '欠陥・恥',
    description: '自分には重大な欠点があり、人に知られると拒絶されるという羞恥心がある。',
    improvement:
      'エクスポージャーで小さな自己開示→受容体験を積む。セルフコンパッションと強み日記で自己評価を再構築。',
  },
  {
    blockTitle: 'FA',
    name: '失敗',
    description: '能力が平均以下で、遂行課題で必ず失敗すると信じる。',
    improvement:
      '成功を段階的に可視化するマスタリー記録と、成長思考(Growth Mindset)を養う再評価ワーク。',
  },
  {
    blockTitle: 'DI',
    name: '無能・依存',
    description: '日常決定や問題解決を自力でこなせず、常に他者の助けが必要と感じる。',
    improvement:
      'スモールステップで自己決定を実践し、成功体験をリワード。問題解決スキルトレーニングを実施。',
  },
  {
    blockTitle: 'VH',
    name: 'すべてが怖い',
    description: '病気・事故・破滅など差し迫る危険を過大視し慢性的に不安を抱える。',
    improvement: '不安階層表を用いた系統的脱感作。マインドフル呼吸で身体反応を調整。',
  },
  {
    blockTitle: 'EM',
    name: '巻き込まれ',
    description: '他者と心理的境界が曖昧で、相手の感情に過度に巻き込まれ自我が希薄。',
    improvement:
      '境界設定ワーク(言語化・タイムリミット)。自己アイデンティティを強化する価値観明確化ACT。',
  },
  {
    blockTitle: 'SB',
    name: '服従',
    description: '他者の支配・要求に反抗すると罰や拒絶があると感じ、自己主張を抑える。',
    improvement: 'アサーティブ・トレーニングでＮＯを伝える練習。権利リストを使い自己権利を再認識。',
  },
  {
    blockTitle: 'SS',
    name: '自己犠牲',
    description: '自分のニーズを後回しにし他者を優先し続けることで自己価値を得る。',
    improvement:
      'ニーズの優先順位を書き出し、1日1回“自分優先”行動を実践。燃え尽きを予防するセルフケア計画。',
  },
  {
    blockTitle: 'FLC',
    name: '自己規制の失敗',
    description: '衝動や欲求を抑えにくく、長期目標より短期快を選び後悔する。',
    improvement:
      '実行機能を高めるプランニング(If-Then)＋遅延報酬トレーニング。マインドフルポーズで衝動を観察。',
  },
  {
    blockTitle: 'EC',
    name: '感情抑制',
    description: '感情を感じたり表現すると拒絶・恥・損失が起こると恐れ、抑え込む。',
    improvement:
      '安全な環境で感情ラベリング→段階的表現。呼吸法と身体感覚ワークで感情検出力を高める。',
  },
  {
    blockTitle: 'US',
    name: '完璧主義',
    description: '極端に高い基準を課し、達成できないと価値がないと感じる。',
    improvement: '到達可能なGood Enough基準を設定し成功体験を積む。思考記録で全か無か思考を修正。',
  },
  {
    blockTitle: 'ET',
    name: '俺様',
    description: '自分は特別で優遇されて当然、規則は自分に当てはまらないと信じる。',
    improvement:
      '共感トレーニングで他者視点を体験。自然な社会的フィードバックを受け入れる内省日記。',
  },
  {
    blockTitle: 'IS',
    name: 'コントロール不可能',
    description: '感情が爆発すると取り返しがつかず大惨事になると恐れる。',
    improvement: '情動調整スキル(DBT)を習得し、“波”として感情を乗り切る練習。',
  },
  {
    blockTitle: 'AS',
    name: 'ほめられたい',
    description: '他者からの承認・注目がないと価値を感じられない。',
    improvement:
      '内的報酬(自己目標達成)に意識を向けるセルフリワード。SNS断食など外的評価のデトックスも効果的。',
  },
  {
    blockTitle: 'NP',
    name: 'ネガティブ注意',
    description: '出来事の悪い面やリスクばかりに焦点が当たり、楽しみを見失う。',
    improvement:
      '1日3つの良かったこと記録(Three Good Things)。認知再構成でプラス面を意図的に探す。',
  },
  {
    blockTitle: 'PUS',
    name: '罰するべき（自分）',
    description: '自分のミスに対し厳しい処罰や自己攻撃を行うべきだと感じる。',
    improvement:
      'セルフコンパッション瞑想で自己批判を緩和。ミス＝学習機会と再定義するリフレーミング。',
  },
  {
    blockTitle: 'PUO',
    name: '罰するべき（他人）',
    description: '他人のミスにも厳格な罰を科すべきで、寛容は甘やかしだと考える。',
    improvement:
      '他者も不完全な人間と認識する共通人間性のワーク。許しの書簡(Forgiveness Letter)実践。',
  },
];
