const QUESTIONS = [
  {id:1,cat:'骨传导',type:'single',q:'OpenRun Pro 2 标准版的产品型号是？',o:['SHOKZ S720','SHOKZ S820','SHOKZ S821','SHOKZ T921'],a:[1],e:'标准版是 S820，Mini 版是 S821。'},
  {id:2,cat:'骨传导',type:'single',q:'OpenRun Pro 2 的快充能力是？',o:['5分钟用1小时','5分钟用2小时','5分钟用150分钟','10分钟用2小时'],a:[2],e:'OpenRun Pro 2 充电 5 分钟可听歌 150 分钟。'},
  {id:3,cat:'骨传导',type:'single',q:'OpenRun Pro 2 的防护等级和蓝牙版本组合正确的是？',o:['IP55 / 5.3','IP57 / 6.1','IP68 / 5.4','IP54 / 5.2'],a:[0],e:'OpenRun Pro 2 为 IP55，Bluetooth 5.3。'},
  {id:4,cat:'骨传导',type:'multi',q:'OpenRun Pro 2 的正确卖点有哪些？',o:['DualPitch 骨气双单元','OpenBass 2.0','USB-C 充电','64GB 内存'],a:[0,1,2],e:'64GB 内存属于 OpenSwim Pro 2。'},
  {id:5,cat:'骨传导',type:'judge',q:'OpenRun Pro 2 具备 IP55，因此适合直接用于游泳。',o:['正确','错误'],a:[1],e:'IP55 可抗汗抗水，但不能据此用于游泳。'},
  {id:6,cat:'游泳',type:'single',q:'OpenSwim Pro 2 的内存容量是？',o:['16GB','32GB','36GB','64GB'],a:[3],e:'OpenSwim Pro 2 内置 64GB，可存储超 16000 首歌曲。'},
  {id:7,cat:'游泳',type:'single',q:'OpenSwim Pro 2 在水下播放音乐应使用？',o:['蓝牙模式','本地模式','通话模式','双设备模式'],a:[1],e:'蓝牙信号无法稳定穿透水体，水下使用本地模式。'},
  {id:8,cat:'游泳',type:'multi',q:'OpenSwim Pro 2 的防护标识包括？',o:['5ATM','IP68','IP69','IP55'],a:[0,1,2],e:'资料列出了 5ATM、IP68 与 IP69。'},
  {id:9,cat:'游泳',type:'single',q:'OpenSwim Pro 2 两种模式的续航正确的是？',o:['蓝牙10h/本地12h','蓝牙12h/本地10h','蓝牙9h/本地6h','均为12h'],a:[1],e:'记忆口诀：水陆 12/10，蓝牙 12 小时，本地 10 小时。'},
  {id:10,cat:'游泳',type:'single',q:'OpenSwim Pro 2 的充电方式是？',o:['USB-C','无线充电','磁吸充电','Lightning'],a:[2],e:'OpenSwim Pro 2 使用带数据传输功能的磁吸充电。'},
  {id:11,cat:'耳挂',type:'single',q:'初代 OpenFit 的型号是？',o:['T910','T921','E210','E320'],a:[0],e:'OpenFit 为 T910，OpenFit 2+ 为 T921。'},
  {id:12,cat:'耳挂',type:'single',q:'OpenFit 的单次/整机续航是？',o:['7/28小时','9/36小时','11/48小时','12/50小时'],a:[0],e:'初代 OpenFit：7 小时单次，28 小时整机。'},
  {id:13,cat:'耳挂',type:'judge',q:'OpenFit 充电盒支持无线充电。',o:['正确','错误'],a:[1],e:'初代 OpenFit 充电盒使用 USB-C，不支持无线充电。'},
  {id:14,cat:'耳挂',type:'single',q:'OpenFit 2+ 的型号是？',o:['T910','T921','S820','E320'],a:[1],e:'OpenFit 2+ 型号为 SHOKZ T921。'},
  {id:15,cat:'耳挂',type:'single',q:'OpenFit 2+ 的单次/整机续航是？',o:['7/28小时','10/40小时','11/48小时','12/50小时'],a:[2],e:'OpenFit 2+ 为 11/48 小时。'},
  {id:16,cat:'耳挂',type:'multi',q:'OpenFit 2+ 的正确特征有？',o:['海豚弧耳挂','四麦通话','无线充电','IP55'],a:[0,1,2,3],e:'四项均为 OpenFit 2+ 的核心考点。'},
  {id:17,cat:'耳挂',type:'single',q:'OpenFit Pro 默认状态快充 10 分钟可使用？',o:['1小时','2小时','3小时','4小时'],a:[3],e:'OpenFit Pro 快充 10 分钟可用 4 小时。'},
  {id:18,cat:'耳挂',type:'single',q:'“韶音天篱滤噪”对应哪款产品？',o:['OpenFit','OpenFit 2+','OpenFit Pro','OpenDots Air'],a:[2],e:'天篱滤噪是 OpenFit Pro 的核心差异点。'},
  {id:19,cat:'耳挂',type:'multi',q:'OpenFit Pro 的正确特征有？',o:['杜比音效与头部追踪','SuperBoost 超级单元','三麦克风通话','IP68'],a:[0,1,2],e:'OpenFit Pro 防护为 IP55，不是 IP68。'},
  {id:20,cat:'耳挂',type:'single',q:'OpenFit Pro 仅开启滤噪时的续航是？',o:['12/50小时','11/48小时','6/24小时','5.5/22小时'],a:[2],e:'仅开启滤噪：6/24 小时；滤噪、杜比和头部追踪全开：5.5/22 小时。'},
  {id:21,cat:'耳挂',type:'judge',q:'天篱滤噪和 AI 通话降噪是同一个概念。',o:['正确','错误'],a:[1],e:'天篱滤噪作用于用户听音；AI 通话降噪主要让对方听清人声。'},
  {id:22,cat:'耳夹',type:'single',q:'OpenDots 2 的型号是？',o:['E210','E320','T921','S720'],a:[1],e:'OpenDots 2 为 E320，OpenDots Air 为 E210。'},
  {id:23,cat:'耳夹',type:'single',q:'OpenDots 2 的单次/整机续航是？',o:['9/36小时','10/40小时','11/48小时','12/50小时'],a:[1],e:'OpenDots 2 为 10/40 小时。'},
  {id:24,cat:'耳夹',type:'single',q:'OpenDots 2 的防护等级是？',o:['IP54','IP55','IP57','IP68'],a:[2],e:'耳机为 IP57，充电盒为 IP54。'},
  {id:25,cat:'耳夹',type:'multi',q:'OpenDots 2 的正确特征有？',o:['不分左右','无线充电','骨气三麦克风','快充5分钟用2小时'],a:[0,1,2,3],e:'这四项都是 OpenDots 2 相比 Air 的高频差异点。'},
  {id:26,cat:'耳夹',type:'single',q:'OpenDots Air 的型号和单只重量正确的是？',o:['E210 / 6.3g','E320 / 6.4g','E210 / 8.3g','T910 / 6.3g'],a:[0],e:'OpenDots Air 为 E210，单只约 6.3g。'},
  {id:27,cat:'耳夹',type:'single',q:'OpenDots Air 的快充能力是？',o:['5分钟用1小时','5分钟用2小时','10分钟用2小时','10分钟用4小时'],a:[2],e:'Air 需要 10 分钟得到 2 小时；Dots 2 只需 5 分钟。'},
  {id:28,cat:'耳夹',type:'judge',q:'OpenDots Air 支持无线充电。',o:['正确','错误'],a:[1],e:'OpenDots Air 充电盒仅 USB-C 有线充电。'},
  {id:29,cat:'概念',type:'single',q:'IP 防护等级中，第一个数字通常表示？',o:['防水','防尘','续航','抗摔'],a:[1],e:'IPXX 中第一位表示防尘，第二位表示防水。'},
  {id:30,cat:'概念',type:'single',q:'DirectPitch 技术主要解决的是？',o:['游泳监测','定向传声与降低漏音','无线充电','通话录音'],a:[1],e:'DirectPitch 是定向声场/降漏音技术。'},
  {id:31,cat:'对比',type:'single',q:'以下“产品—蓝牙版本”配对错误的是？',o:['OpenFit—5.2','OpenFit 2+—5.4','OpenFit Pro—6.1','OpenRun Pro 2—6.1'],a:[3],e:'OpenRun Pro 2 为蓝牙 5.3。'},
  {id:32,cat:'对比',type:'single',q:'哪款耳夹产品续航更长且支持无线充电？',o:['OpenDots Air','OpenDots 2','两者都支持','两者都不支持'],a:[1],e:'OpenDots 2 为 10/40 小时且支持无线充电。'},
  {id:33,cat:'对比',type:'single',q:'哪款耳挂产品突出“开放式滤噪新物种”？',o:['OpenFit','OpenFit 2+','OpenFit Pro','OpenRun Pro 2'],a:[2],e:'OpenFit Pro 的核心定位是开放式滤噪。'},
  {id:34,cat:'场景',type:'single',q:'顾客规律游泳，又想在陆地蓝牙听歌，首选？',o:['OpenRun Pro 2','OpenSwim Pro 2','OpenFit 2+','OpenDots 2'],a:[1],e:'OpenSwim Pro 2 具备水陆双模式与游泳监测。'},
  {id:35,cat:'场景',type:'single',q:'顾客重视耳夹造型、音质、无线充电和更强防护，首选？',o:['OpenDots Air','OpenDots 2','OpenFit','OpenRun Pro 2'],a:[1],e:'OpenDots 2 同时覆盖这些需求。'},
  {id:36,cat:'场景',type:'single',q:'顾客在办公室和咖啡店使用，希望开放佩戴又能减少环境干扰，首选？',o:['OpenFit Pro','OpenSwim Pro 2','OpenDots Air','OpenRun Pro 2'],a:[0],e:'OpenFit Pro 的天篱滤噪正好对应这一需求。'}
];

const PRODUCTS = ['OpenRun Pro 2','OpenSwim Pro 2','OpenFit 系列','OpenDots 系列'];
const defaultState = {xp:0,streak:0,total:0,correct:0,best:0,wrong:{},history:[],lastDay:''};
let data = load();
let session = null;
let timerId = null;

function load(){ try{return {...defaultState,...JSON.parse(localStorage.getItem('shokz-camp-v1')||'{}')}}catch{return {...defaultState}} }
function save(){ localStorage.setItem('shokz-camp-v1',JSON.stringify(data)); }
function dayKey(){ return new Date().toISOString().slice(0,10); }
function shuffle(a){ return [...a].sort(()=>Math.random()-.5); }
function esc(s){ return String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }
function app(html){ document.getElementById('app').innerHTML=html; window.scrollTo({top:0,behavior:'smooth'}); }
function topbar(back=false){ return `<div class="topbar"><div class="brand"><div class="logo">S</div><span>韶音产品通关训练营</span></div><div class="top-actions"><div class="chip">目标 <strong>80分</strong></div><div class="chip">XP <strong>${data.xp}</strong></div>${back?'<button class="ghost" onclick="home()">返回首页</button>':''}</div></div>` }
function pct(){ return data.total?Math.round(data.correct/data.total*100):0; }
function home(){ clearInterval(timerId); session=null; const p=pct(); const wrongCount=Object.keys(data.wrong).length; app(`<main class="shell">${topbar()}
  <section class="hero"><div class="eyebrow">LOCAL TRAINING CAMP</div><h1>把参数记牢，<br>把 80 分拿下。</h1><p>闯关训练、限时模拟、即时解析和错题复仇全部保存在当前浏览器。今天先完成一轮 10 题热身。</p><div class="hero-actions"><button class="primary" onclick="startPractice()">开始今日闯关</button><button class="secondary" onclick="startExam()">进入限时模拟</button><button class="ghost" onclick="guide()">阅读冲刺手册</button></div><div class="goal-ring" style="--score:${Math.min(p,100)}"><span>${p}<small>当前正确率</small></span></div></section>
  <div class="grid"><div class="card stat"><div class="label">累计答题</div><div class="value">${data.total}</div><div class="muted">每答 10 题形成一轮</div></div><div class="card stat"><div class="label">答对题数</div><div class="value">${data.correct}</div><div class="muted">继续积累稳定分</div></div><div class="card stat"><div class="label">错题库存</div><div class="value">${wrongCount}</div><div class="muted">清零就是通关</div></div><div class="card stat"><div class="label">模拟最高分</div><div class="value">${data.best}</div><div class="muted">目标至少 88 分</div></div></div>
  <div class="section-title"><h2>选择训练模式</h2><p>建议顺序：闯关 → 错题 → 模拟</p></div>
  <div class="grid"><article class="card mode" onclick="startPractice()"><div class="mode-icon">01</div><h3>参数闯关</h3><p>随机 10 题，即答即讲。重点覆盖续航、快充、防护、型号和技术名称。</p><div class="go">开始训练 →</div></article><article class="card mode" onclick="startWrong()"><div class="mode-icon">02</div><h3>错题复仇</h3><p>只练曾经答错的题。再次答对后从错题本移除，建立稳定记忆。</p><div class="go">${wrongCount?`挑战 ${wrongCount} 道错题`:'目前没有错题'} →</div></article><article class="card mode" onclick="startExam()"><div class="mode-icon">03</div><h3>限时模拟</h3><p>随机 20 题、20 分钟、100 分制。交卷后统一显示成绩和解析。</p><div class="go">冲击 80 分 →</div></article><article class="card mode" onclick="guide()"><div class="mode-icon">04</div><h3>80 分冲刺手册</h3><p>集中查看拿分策略、七款参数、必考对比、概念陷阱和销售话术。</p><div class="go">打开手册 →</div></article></div>
  <div class="section-title"><h2>学习面板</h2><p>记录只保存在本机</p></div><div class="grid"><section class="card mastery"><h3>四大板块掌握度</h3>${masteryBars()}</section><section class="card wrong-preview"><h3>已解锁徽章</h3><div class="badge-row">${badges()}</div><div class="empty">${wrongCount?'还有错题待复仇，建议先清错题再模拟。':'错题本很干净，适合直接冲模拟考试。'}</div><button class="ghost" onclick="resetProgress()">重置全部进度</button></section></div></main>`); }
function masteryBars(){ const groups=[['骨传导',['骨传导','游泳']],['OpenFit 系列',['耳挂']],['OpenDots 系列',['耳夹']],['企业文化',['企业文化']],['概念与场景',['概念','对比','场景']]]; return groups.map(([n,cats])=>{const h=data.history.filter(x=>cats.includes(x.cat));const v=h.length?Math.round(h.filter(x=>x.ok).length/h.length*100):0;return `<div class="bar-row"><span>${n}</span><div class="bar"><i style="width:${v}%"></i></div><b>${v}%</b></div>`}).join(''); }
function badges(){ const out=[]; if(data.total>=10)out.push('初次闯关'); if(pct()>=80&&data.total>=10)out.push('80分战士'); if(data.best>=80)out.push('模拟通关'); if(data.best>=90)out.push('高分选手'); if(!Object.keys(data.wrong).length&&data.total>=10)out.push('错题清零'); return (out.length?out:['等待解锁']).map(x=>`<span class="badge">${x}</span>`).join(''); }
function guide(){ clearInterval(timerId); app(`<main class="shell">${topbar(true)}
  <section class="guide-hero"><div class="eyebrow">80 SCORE SPRINT GUIDE</div><h1>80 分备考<br>冲刺手册</h1><p class="muted">根据 2024 年真题结构和七份产品资料整理。先背参数，再练对比，最后做模拟。</p><nav class="guide-nav"><a href="#strategy">拿分策略</a><a href="#specs">参数总表</a><a href="#products">产品卖点</a><a href="#compare">必考对比</a><a href="#traps">概念陷阱</a><a href="#sales">销售话术</a></nav></section>
  <section id="strategy" class="card guide-section"><h2>一、80 分拿分策略</h2><p>2024 年真题共 100 分、60 分钟：单选 20 分、多选 15 分、判断 10 分、填空 30 分、产品规格 15 分、销售话术 10 分。</p><ol><li>产品规格表目标 12/15 以上。</li><li>单选、多选、判断合计争取 36/45 以上。</li><li>产品类填空拿到约 18 分。</li><li>销售话术保证 7/10。</li></ol><div class="guide-callout"><b>最值得先背：</b>续航、快充、防护、型号、重量、充电方式和蓝牙版本。相似产品对比是最常见失分点。</div></section>
  <section id="specs" class="card guide-section"><h2>二、七款产品参数总表</h2><div class="guide-table-wrap"><table class="guide-table"><thead><tr><th>产品</th><th>型号/重量</th><th>续航</th><th>快充</th><th>防护</th><th>充电/蓝牙</th></tr></thead><tbody>
    <tr><td>OpenRun Pro 2</td><td>S820；Mini S821<br>30.3g；Mini 30g</td><td>12h；待机10天</td><td>5min=150min</td><td>IP55</td><td>USB-C / 5.3</td></tr>
    <tr><td>OpenSwim Pro 2</td><td>S720；28.6g</td><td>蓝牙12h；本地10h</td><td>5min=2h</td><td>5ATM + IP68 + IP69</td><td>磁吸 / 6.1 / 64GB</td></tr>
    <tr><td>OpenFit</td><td>T910；单只8.3g；整机73.85g</td><td>7h / 28h</td><td>5min=1h</td><td>IP54</td><td>触点+盒USB-C / 5.2</td></tr>
    <tr><td>OpenFit 2+</td><td>T921；单只9.4g；整机74.8g</td><td>11h / 48h</td><td>10min=2h</td><td>IP55</td><td>USB-C+无线 / 5.4</td></tr>
    <tr><td>OpenFit Pro</td><td>单只12.3g；整机99.3g</td><td>12h / 50h</td><td>10min=4h</td><td>IP55</td><td>USB-C+无线 / 6.1</td></tr>
    <tr><td>OpenDots 2</td><td>E320；单只6.4g；整机51.6g</td><td>10h / 40h</td><td>5min=2h</td><td>IP57；盒IP54</td><td>USB-C+无线 / 6.1</td></tr>
    <tr><td>OpenDots Air</td><td>E210；单只6.3g；整机49.9g</td><td>9h / 36h</td><td>10min=2h</td><td>IP55；盒不防水</td><td>USB-C / 6.1</td></tr>
  </tbody></table></div><h3>数字口诀</h3><ul><li>跑步旗舰：12-5-150-55-53。</li><li>游泳旗舰：12/10-5/2-64-6.1。</li><li>初代耳挂：7/28-5/1-54-5.2。</li><li>二代加号：11/48-10/2-55-5.4。</li><li>耳挂 Pro：12/50-10/4-55-6.1。</li><li>耳夹 2：10/40-5/2-57-6.1；耳夹 Air：9/36-10/2-55-6.1。</li></ul></section>
  <section id="products" class="card guide-section"><h2>三、定位与核心卖点</h2><div class="guide-columns">
    <article class="guide-mini"><h3>OpenRun Pro 2</h3><p>跑步骑行旗舰，“天生乐动”。DualPitch 骨气双单元、OpenBass 2.0、DirectPitch、双硅麦克风 AI 通话降噪、实体按键、App 和双设备连接。</p></article>
    <article class="guide-mini"><h3>OpenSwim Pro 2</h3><p>50 米级防水运动旗舰。蓝牙/本地双模式、64GB、QQ 音乐无线导入、游泳数据监测与语音播报、PremiumPitch 3.0。</p></article>
    <article class="guide-mini"><h3>OpenFit</h3><p>经典舒适圈旗舰。开放不入耳、双层零度硅胶、钛丝耳挂、DirectPitch、双麦 AI 通话降噪。</p></article>
    <article class="guide-mini"><h3>OpenFit 2+</h3><p>健身徒步旗舰。海豚弧耳挂、DualBoost 双引擎、Dolby Audio、四麦通话、实体按键、无线充电。</p></article>
    <article class="guide-mini"><h3>OpenFit Pro</h3><p>开放式滤噪新物种。SuperBoost 超级单元、天篱滤噪、杜比与头部追踪、三麦通话、自适应稳固配件。</p></article>
    <article class="guide-mini"><h3>OpenDots 2</h3><p>旗舰耳夹。MirrorPitch、杜比音效、超回弹钛弧、不分左右、骨气三麦、压感操作和无线充电。</p></article>
    <article class="guide-mini"><h3>OpenDots Air</h3><p>轻量入门耳夹。低频聚合、内磁式双驱动、左右随戴、双麦通话、压感操作；不支持无线充电。</p></article>
  </div></section>
  <section id="compare" class="card guide-section"><h2>四、三组必考对比</h2><h3>OpenDots 2 vs Air</h3><p>2：10/40h、5min=2h、IP57、无线充电、骨气三麦、不分左右。Air：9/36h、10min=2h、IP55、无无线充电、双麦、自动识别声道。</p><h3>OpenFit vs 2+ vs Pro</h3><p>续航依次 7/28、11/48、12/50；快充依次 5min=1h、10min=2h、10min=4h；无线充电依次 否、是、是；蓝牙依次 5.2、5.4、6.1。</p><h3>OpenRun Pro 2 vs OpenSwim Pro 2</h3><p>Run 主打跑骑，IP55、USB-C、无内存、蓝牙5.3；Swim 主打游泳，5ATM/IP68/IP69、磁吸、64GB、蓝牙6.1。</p></section>
  <section id="traps" class="card guide-section"><h2>五、概念陷阱</h2><ul><li>IP 第一个数字代表防尘，第二个数字代表防水。</li><li>AI 通话降噪让对方更清楚地听到人声；天篱滤噪用于用户听音。</li><li>DirectPitch 是定向声场/降漏音，不等于主动降噪。</li><li>耳机机身防水不代表充电盒具备同等级防水。</li><li>IP55/IP57 不能自动推导为可游泳；游泳重点对应 OpenSwim Pro 2。</li><li>无线充电通常指充电盒，耳机放入盒内通过触点充电。</li></ul></section>
  <section id="sales" class="card guide-section"><h2>六、销售话术模板</h2><div class="guide-callout"><b>四步法：</b>问需求 → 给结论 → 用三项卖点和参数做证据 → 说明边界并邀请试戴。</div><h3>OpenSwim Pro 2 示例</h3><p>如果您主要游泳，同时也想在跑步和通勤时使用，我推荐 OpenSwim Pro 2。它支持 5ATM、IP68 和 IP69 防护，水下可切换到 64GB 本地模式，陆地可用蓝牙模式；还支持游泳数据监测和语音播报。蓝牙模式续航 12 小时、本地模式 10 小时，快充 5 分钟可使用 2 小时。</p><h3>OpenFit Pro 示例</h3><p>如果您希望开放佩戴，又想在办公室、咖啡店或健身房减少环境干扰，我推荐 OpenFit Pro。它有可调节的天篱滤噪、超级单元、杜比音效和头部追踪。默认状态单次 12 小时、整机 50 小时，快充 10 分钟可用 4 小时。</p><h3>三轮复习</h3><ol><li>每天遮住参数总表默写两遍。</li><li>3 分钟内口述三组产品差异。</li><li>模拟卷达到 88 分再上考场，给临场波动预留 8 分。</li></ol></section>
  <div class="hero-actions" style="justify-content:center;margin:24px 0"><button class="primary" onclick="startPractice()">看完立即闯关</button><button class="secondary" onclick="home()">返回首页</button></div>
  </main>`); }
function startPractice(){ begin(shuffle(QUESTIONS).slice(0,10),'practice'); }
function startWrong(){ const qs=QUESTIONS.filter(q=>data.wrong[q.id]); if(!qs.length){ toast('当前没有错题，先去完成一轮闯关'); return; } begin(shuffle(qs),'wrong'); }
function startExam(){ begin(shuffle(QUESTIONS).slice(0,20),'exam'); }
function begin(qs,mode){ clearInterval(timerId); session={qs,mode,index:0,answers:{},checked:{},score:0,start:Date.now(),left:mode==='exam'?1200:0}; if(mode==='exam') timerId=setInterval(()=>{session.left--; if(session.left<=0){clearInterval(timerId);finish()}else{const t=document.querySelector('.timer');if(t)t.textContent=formatTime(session.left)}},1000); renderQuestion(); }
function formatTime(s){ return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function renderQuestion(){ const q=session.qs[session.index], ans=session.answers[q.id]||[], checked=session.checked[q.id]; const letters='ABCD'; app(`<main class="shell quiz-wrap">${topbar(true)}<div class="quiz-head"><div><b>${session.mode==='exam'?'限时模拟':session.mode==='wrong'?'错题复仇':'参数闯关'}</b><div class="muted">第 ${session.index+1} / ${session.qs.length} 题</div></div>${session.mode==='exam'?`<div class="timer">${formatTime(session.left)}</div>`:`<div class="chip">当前得分 <strong>${session.score}</strong></div>`}</div><div class="progress"><i style="width:${(session.index+1)/session.qs.length*100}%"></i></div><section class="question-card"><div class="question-meta"><span>${q.cat}</span><span>${q.type==='multi'?'多选题':q.type==='judge'?'判断题':'单选题'}</span></div><h2>${esc(q.q)}</h2><div class="options">${q.o.map((o,i)=>{let cls=ans.includes(i)?' selected':'';if(checked){if(q.a.includes(i))cls=' correct';else if(ans.includes(i))cls=' wrong'}return `<button class="option${cls}" onclick="pick(${i})" ${checked?'disabled':''}><span class="letter">${letters[i]}</span><span>${esc(o)}</span></button>`}).join('')}</div>${checked?feedback(q,ans):''}<div class="quiz-actions"><button class="ghost" onclick="home()">退出本轮</button>${actionButton(q,ans,checked)}</div></section></main>`); }
function pick(i){ const q=session.qs[session.index]; if(session.checked[q.id])return; if(q.type==='multi'){let a=session.answers[q.id]||[];session.answers[q.id]=a.includes(i)?a.filter(x=>x!==i):[...a,i]}else session.answers[q.id]=[i]; renderQuestion(); }
function same(a,b){ return a.length===b.length&&[...a].sort().every((x,i)=>x===[...b].sort()[i]); }
function actionButton(q,ans,checked){ if(session.mode==='exam') return `<button class="primary" onclick="nextExam()">${session.index===session.qs.length-1?'交卷':'下一题'}</button>`; if(!checked)return `<button class="primary" onclick="checkNow()" ${ans.length?'':'disabled'}>提交答案</button>`; return `<button class="primary" onclick="nextPractice()">${session.index===session.qs.length-1?'查看结果':'下一题'}</button>`; }
function checkNow(){ const q=session.qs[session.index],a=session.answers[q.id]||[]; if(!a.length)return; const ok=same(a,q.a);session.checked[q.id]=true;session.score+=ok?10:0;record(q,ok);renderQuestion(); }
function record(q,ok){ data.total++; if(ok){data.correct++;delete data.wrong[q.id];data.xp+=10}else{data.wrong[q.id]=(data.wrong[q.id]||0)+1;data.xp+=2} data.history.push({id:q.id,cat:q.cat,ok,at:Date.now()});data.history=data.history.slice(-300);save(); }
function feedback(q,a){const ok=same(a,q.a);return `<div class="feedback ${ok?'good':'bad'}"><b>${ok?'回答正确 +10 XP':'这题记入错题本'}</b><br>${esc(q.e)}</div>`}
function nextPractice(){ if(session.index===session.qs.length-1)finish();else{session.index++;renderQuestion()} }
function nextExam(){ const q=session.qs[session.index]; if(!(session.answers[q.id]||[]).length){toast('请先选择答案');return} if(session.index===session.qs.length-1)finish();else{session.index++;renderQuestion()} }
function finish(){ clearInterval(timerId); let correct=0; if(session.mode==='exam'){session.qs.forEach(q=>{const ok=same(session.answers[q.id]||[],q.a);if(ok)correct++;record(q,ok)});session.score=Math.round(correct/session.qs.length*100);data.best=Math.max(data.best,session.score);data.history.push({exam:true,score:session.score,at:Date.now()});save()}else correct=Math.round(session.score/10); const score=session.mode==='exam'?session.score:Math.round(correct/session.qs.length*100); const pass=score>=80; app(`<main class="shell quiz-wrap">${topbar(true)}<section class="card result"><div class="eyebrow">${pass?'MISSION COMPLETE':'KEEP TRAINING'}</div><div class="result-score">${score}</div><h2>${pass?'成功通关':'距离通关还差一点'}</h2><p class="muted">${pass?'你已经越过 80 分目标，建议再冲一次 90 分。':'先复习本轮错题，再来一次会更稳。'}</p><div class="result-grid"><div><strong>${correct}</strong><span class="muted">答对</span></div><div><strong>${session.qs.length-correct}</strong><span class="muted">答错</span></div><div><strong>${data.xp}</strong><span class="muted">累计 XP</span></div></div><div class="hero-actions" style="justify-content:center"><button class="primary" onclick="${session.mode==='exam'?'startExam()':'startWrong()'}">再挑战一次</button><button class="secondary" onclick="reviewSession()">查看本轮解析</button><button class="ghost" onclick="home()">返回首页</button></div></section></main>`); }
function reviewSession(){ app(`<main class="shell">${topbar(true)}<div class="section-title"><h2>本轮答案解析</h2><p>重点看答错的题</p></div><div class="wrong-list">${session.qs.map((q,i)=>{const a=session.answers[q.id]||[],ok=same(a,q.a);return `<article class="wrong-item"><b>${i+1}. ${esc(q.q)} <span style="color:${ok?'var(--green)':'var(--red)'}">${ok?'✓':'✕'}</span></b><p>正确答案：${q.a.map(x=>'ABCD'[x]+'. '+q.o[x]).join('；')}</p><p>解析：${esc(q.e)}</p></article>`}).join('')}</div></main>`); }
function toast(msg){const d=document.createElement('div');d.className='toast';d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),1800)}
function resetProgress(){ if(confirm('确定清空全部成绩、错题和经验值吗？')){data={...defaultState};save();home()} }
home();
