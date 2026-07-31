/* 题库与闯关结构扩展：真题六题型 + 七款产品专区 */
const TYPE_META = {
  single: {name:'单选题', desc:'参数辨析与产品判断'},
  multi: {name:'多选题', desc:'完整卖点与组合特征'},
  judge: {name:'判断题', desc:'识别偷换概念和使用边界'},
  fill: {name:'填空题', desc:'主动回忆精确参数与技术名'},
  spec: {name:'综合填空', desc:'一次默写整组产品规格'},
  short: {name:'简答题', desc:'场景推荐与门店销售话术'}
};

const PRODUCT_SPECS = [
  {name:'OpenRun Pro 2',cat:'骨传导',model:'S820；Mini S821',weight:'标准版30.3克；Mini版30克',battery:'12小时',fast:'充电5分钟可用150分钟',protect:'IP55',charge:'USB-C',bt:'5.3',memory:'无内存',position:'跑步骑行系列旗舰',tech:'DualPitch骨气双单元、OpenBass 2.0、DirectPitch定向声场',scene:'跑步、骑行、通勤'},
  {name:'OpenSwim Pro 2',cat:'游泳',model:'S720',weight:'28.6克',battery:'蓝牙12小时；本地10小时',fast:'充电5分钟可用2小时',protect:'5ATM、IP68、IP69',charge:'磁吸充电',bt:'6.1',memory:'64GB',position:'50米级防水运动旗舰',tech:'PremiumPitch 3.0、蓝牙本地双模式、游泳监测',scene:'游泳、水陆运动'},
  {name:'OpenFit',cat:'耳挂',model:'T910',weight:'单只8.3克；整机73.85克',battery:'单次7小时；整机28小时',fast:'充电5分钟可用1小时',protect:'IP54',charge:'耳机触点；充电盒USB-C',bt:'5.2',memory:'无内存',position:'舒适圈系列经典旗舰',tech:'双层零度硅胶、钛丝耳挂、DirectPitch',scene:'日常休闲、轻运动、办公'},
  {name:'OpenFit 2+',cat:'耳挂',model:'T921',weight:'单只9.4克；整机74.8克',battery:'单次11小时；整机48小时',fast:'充电10分钟可用2小时',protect:'IP55',charge:'耳机触点；充电盒USB-C和无线充电',bt:'5.4',memory:'无内存',position:'健身徒步系列旗舰',tech:'海豚弧耳挂、DualBoost双引擎、Dolby Audio、四麦通话',scene:'健身、徒步、日常'},
  {name:'OpenFit Pro',cat:'耳挂',model:'资料未列型号',weight:'单只12.3克；整机99.3克',battery:'单次12小时；整机50小时',fast:'充电10分钟可用4小时',protect:'IP55',charge:'充电盒USB-C和无线充电',bt:'6.1',memory:'无内存',position:'开放式滤噪新物种',tech:'SuperBoost超级单元、天篱滤噪、杜比音效和头部追踪',scene:'办公室、咖啡店、健身房'},
  {name:'OpenDots 2',cat:'耳夹',model:'E320',weight:'单只6.4克；整机51.6克',battery:'单次10小时；整机40小时',fast:'充电5分钟可用2小时',protect:'耳机IP57；充电盒IP54',charge:'耳机触点；充电盒USB-C和无线充电',bt:'6.1',memory:'无内存',position:'旗舰耳夹耳机',tech:'MirrorPitch、杜比音效、超回弹钛弧、骨气三麦',scene:'日常、通勤、轻运动'},
  {name:'OpenDots Air',cat:'耳夹',model:'E210',weight:'单只6.3克；整机49.9克',battery:'单次9小时；整机36小时',fast:'充电10分钟可用2小时',protect:'耳机IP55；充电盒不防水',charge:'耳机触点；充电盒USB-C',bt:'6.1',memory:'无内存',position:'轻量入门耳夹',tech:'低频聚合、内磁式双驱动、左右随戴、双麦通话',scene:'年轻用户、日常通勤'}
];

let expandedId = 1000;
function addExpanded(q){ QUESTIONS.push({id:expandedId++,...q}); }
function accepted(value){ return [value,value.replace(/[；，]/g,'/'),value.replace(/小时/g,'h').replace(/分钟/g,'min')]; }

PRODUCT_SPECS.forEach((p,idx)=>{
  if(p.model!=='资料未列型号') addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的产品型号。`,accept:accepted(p.model),ref:p.model,e:`${p.name} 的型号是 ${p.model}。`});
  addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的产品重量。`,accept:accepted(p.weight),ref:p.weight,e:`标准答案：${p.weight}。`});
  addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的音乐续航。`,accept:accepted(p.battery),ref:p.battery,e:`标准答案：${p.battery}。`});
  addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的快充能力。`,accept:accepted(p.fast),ref:p.fast,e:`标准答案：${p.fast}。`});
  addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的防护等级。`,accept:accepted(p.protect),ref:p.protect,e:`标准答案：${p.protect}。`});
  addExpanded({product:p.name,cat:p.cat,type:'fill',q:`请填写 ${p.name} 的蓝牙版本。`,accept:accepted(p.bt),ref:`Bluetooth ${p.bt}`,e:`${p.name} 使用 Bluetooth ${p.bt}。`});
  addExpanded({product:p.name,cat:p.cat,type:'judge',q:`${p.name} 的正确续航表述为“${p.battery}”。`,o:['正确','错误'],a:[0],e:`正确参数是：${p.battery}。`});
  const others=PRODUCT_SPECS.filter(x=>x.name!==p.name).slice(idx%3,idx%3+3).map(x=>x.name);
  const opts=[p.name,...others].sort(()=>Math.random()-.5);
  addExpanded({product:p.name,cat:p.cat,type:'single',q:`哪款产品符合“${p.position}；${p.protect}；${p.fast}”？`,o:opts,a:[opts.indexOf(p.name)],e:`这些线索对应 ${p.name}。`});
  addExpanded({product:p.name,cat:p.cat,type:'spec',q:`综合填空：请依次写出 ${p.name} 的型号、重量、续航、快充、防护、充电方式和蓝牙版本。`,keywords:[p.model,p.weight,p.battery,p.fast,p.protect,p.charge,p.bt].filter(x=>x!=='资料未列型号'),min:5,ref:`型号：${p.model}；重量：${p.weight}；续航：${p.battery}；快充：${p.fast}；防护：${p.protect}；充电：${p.charge}；蓝牙：${p.bt}。`,e:'综合规格题按关键参数覆盖情况判分。'});
  addExpanded({product:p.name,cat:p.cat,type:'short',q:`简答题：顾客主要用于${p.scene}。请用“需求—推荐—证据—收口”结构推荐 ${p.name}。`,keywords:[p.name,p.position,p.tech.split('、')[0],p.battery,p.protect],min:3,ref:`建议先确认顾客在${p.scene}中的核心需求，明确推荐 ${p.name}；用“${p.position}、${p.tech}、${p.battery}、${p.protect}”中的三项做证据，最后说明使用边界并邀请试戴。`,e:'话术需要有明确产品结论、至少三项相关证据和体验收口。'});
});

[
  {type:'fill',cat:'概念',q:'IPXX 中，第一个数字代表什么？第二个数字代表什么？',accept:['防尘防水','第一个防尘第二个防水','防尘/防水'],ref:'第一个数字代表防尘，第二个数字代表防水。'},
  {type:'fill',cat:'概念',q:'请填写 OpenRun Pro 2 的三项核心声学技术。',keywords:['DualPitch','OpenBass 2.0','DirectPitch'],min:3,ref:'DualPitch™ 骨气双单元、Shokz OpenBass™ 2.0、DirectPitch™ 定向声场技术。'},
  {type:'fill',cat:'游泳',product:'OpenSwim Pro 2',q:'OpenSwim Pro 2 支持哪两种播放模式？',accept:['蓝牙模式本地模式','蓝牙/本地','蓝牙和本地'],ref:'蓝牙模式和本地模式。'},
  {type:'fill',cat:'游泳',product:'OpenSwim Pro 2',q:'OpenSwim Pro 2 支持哪些导歌方式？至少写出两种。',keywords:['QQ音乐无线导入','手机本地音频','电脑音频有线导入'],min:2,ref:'QQ 音乐无线导入、手机本地音频无线导入、电脑音频有线导入。'},
  {type:'fill',cat:'耳挂',product:'OpenFit Pro',q:'OpenFit Pro 的听音滤噪技术名称是什么？',accept:['韶音天篱滤噪','天篱滤噪'],ref:'韶音天篱滤噪。'},
  {type:'fill',cat:'耳挂',product:'OpenFit 2+',q:'OpenFit 2+ 的耳挂名称和声学双引擎技术名称是什么？',keywords:['海豚弧','DualBoost'],min:2,ref:'海豚弧™耳挂、Shokz DualBoost™双引擎技术。'},
  {type:'fill',cat:'耳夹',product:'OpenDots 2',q:'OpenDots 2 的聚能镜技术英文名称是什么？',accept:['MirrorPitch','MirrorPitch聚能镜技术'],ref:'MirrorPitch™ 聚能镜技术。'},
  {type:'short',cat:'概念',q:'简答题：说明“AI 通话降噪”和“天篱滤噪”的区别。',keywords:['对方','人声','用户','听音','环境干扰'],min:3,ref:'AI 通话降噪主要保护通话人声，让对方听得更清楚；天篱滤噪用于用户听音时降低环境干扰，并可在 App 调节滤噪深度。'},
  {type:'short',cat:'对比',q:'简答题：比较 OpenDots 2 与 OpenDots Air，至少写出四项差异。',keywords:['10/40','9/36','5分钟','10分钟','IP57','IP55','无线充电','三麦','双麦'],min:4,ref:'可从续航10/40 vs 9/36、快充5分钟 vs 10分钟、防护IP57 vs IP55、无线充电支持与否、骨气三麦 vs 双麦等方面比较。'},
  {type:'short',cat:'对比',q:'简答题：比较 OpenFit、OpenFit 2+、OpenFit Pro 的续航、快充、防护和突出卖点。',keywords:['7/28','11/48','12/50','5分钟','10分钟','IP54','IP55','滤噪'],min:5,ref:'OpenFit 7/28h、5min=1h、IP54；2+ 11/48h、10min=2h、IP55、杜比和无线充电；Pro 12/50h、10min=4h、IP55、天篱滤噪和头部追踪。'},
  {type:'spec',cat:'对比',q:'综合填空：写出 OpenDots 2 与 OpenDots Air 的型号、续航、快充、防护和无线充电差异。',keywords:['E320','10小时','40小时','5分钟','IP57','无线充电','E210','9小时','36小时','10分钟','IP55'],min:8,ref:'Dots 2：E320、10/40h、5min=2h、IP57、支持无线充电；Air：E210、9/36h、10min=2h、IP55、不支持无线充电。'},
  {type:'spec',cat:'对比',q:'综合填空：写出 OpenRun Pro 2 与 OpenSwim Pro 2 的型号、防护、续航、快充、充电方式、内存和蓝牙差异。',keywords:['S820','IP55','12小时','150分钟','USB-C','5.3','S720','IP68','12小时','10小时','2小时','磁吸','64GB','6.1'],min:10,ref:'Run：S820、IP55、12h、5min=150min、USB-C、无内存、BT5.3；Swim：S720、5ATM/IP68/IP69、蓝牙12h/本地10h、5min=2h、磁吸、64GB、BT6.1。'}
].forEach(addExpanded);

function normText(v){ return String(v||'').toLowerCase().replace(/bluetooth/g,'').replace(/[\s，。；、,./：:（）()™®+\-]/g,''); }
function questionProduct(q){ if(q.product)return q.product; const text=`${q.q} ${q.e||''}`; return PRODUCT_SPECS.map(x=>x.name).sort((a,b)=>b.length-a.length).find(n=>text.includes(n))||''; }
function answerPresent(q){ if(['single','multi','judge'].includes(q.type)) return (session.answers[q.id]||[]).length>0; return !!(session.textAnswers[q.id]||'').trim(); }
function isCorrect(q){
  if(['single','multi','judge'].includes(q.type)) return same(session.answers[q.id]||[],q.a);
  const raw=session.textAnswers[q.id]||'', n=normText(raw);
  if(q.accept) return q.accept.some(x=>n===normText(x)||n.includes(normText(x)));
  const hits=(q.keywords||[]).filter(x=>n.includes(normText(x))).length;
  return hits>=(q.min||q.keywords.length);
}
function poolUnseen(pool,count,key){
  data.seen=data.seen||{}; const today=dayKey(); const bucket=`${today}:${key}`; const seen=new Set(data.seen[bucket]||[]);
  let fresh=shuffle(pool.filter(q=>!seen.has(q.id))); if(fresh.length<count){seen.clear(); fresh=shuffle(pool);}
  const selected=fresh.slice(0,Math.min(count,fresh.length)); data.seen[bucket]=[...seen,...selected.map(q=>q.id)].slice(-500); save(); return selected;
}
function mixedDaily(){
  const types=Object.keys(TYPE_META); let chosen=[];
  types.forEach(t=>chosen.push(...poolUnseen(QUESTIONS.filter(q=>q.type===t),2,`daily-${t}`)));
  const used=new Set(chosen.map(q=>q.id)); chosen.push(...poolUnseen(QUESTIONS.filter(q=>!used.has(q.id)),3,'daily-extra'));
  return shuffle(chosen);
}
function examSet(){ const plan={single:10,multi:5,judge:5,fill:10,spec:1,short:1}; return shuffle(Object.entries(plan).flatMap(([t,n])=>poolUnseen(QUESTIONS.filter(q=>q.type===t),n,`exam-${t}`))); }

function home(){ clearInterval(timerId); session=null; const p=pct(),wrongCount=Object.keys(data.wrong).length; app(`<main class="shell">${topbar()}
  <section class="hero"><div class="eyebrow">${QUESTIONS.length} 道动态题库 · 六种真题题型</div><h1>两条闯关路线，<br>练到不再重复。</h1><p>今日闯关优先抽取当天未做过的题。你可以按题型补短板，也可以锁定某一款产品集中通关。</p><div class="hero-actions"><button class="primary" onclick="startPractice()">今日混合闯关</button><button class="secondary" onclick="zone('type')">按题型闯关</button><button class="secondary" onclick="zone('product')">按产品闯关</button><button class="ghost" onclick="guide()">冲刺手册</button></div><div class="goal-ring" style="--score:${Math.min(p,100)}"><span>${p}<small>当前正确率</small></span></div></section>
  <div class="grid"><div class="card stat"><div class="label">题库总量</div><div class="value">${QUESTIONS.length}</div><div class="muted">参数生成 + 人工考点</div></div><div class="card stat"><div class="label">累计答题</div><div class="value">${data.total}</div><div class="muted">当天优先不重复</div></div><div class="card stat"><div class="label">错题库存</div><div class="value">${wrongCount}</div><div class="muted">答对后自动移除</div></div><div class="card stat"><div class="label">模拟最高分</div><div class="value">${data.best}</div><div class="muted">目标至少 88 分</div></div></div>
  <div class="section-title"><h2>两个专项专区</h2><p>按你的薄弱点选择路线</p></div><div class="grid"><article class="card zone-pair" onclick="zone('type')"><div class="zone-index">A</div><h3>按照题型闯关</h3><p>完整覆盖真实试卷的单选、多选、判断、填空、综合填空和简答题。</p><div>${Object.values(TYPE_META).map(x=>`<span class="type-pill">${x.name}</span>`).join('')}</div></article><article class="card zone-pair" onclick="zone('product')"><div class="zone-index">B</div><h3>按照产品闯关</h3><p>七款产品独立题库，围绕参数、技术、定位、对比和销售话术集中训练。</p><div>${PRODUCT_SPECS.slice(0,4).map(x=>`<span class="type-pill">${x.name}</span>`).join('')}<span class="type-pill">+3</span></div></article></div>
  <div class="section-title"><h2>快速入口</h2><p>建议：混合 → 错题 → 模拟</p></div><div class="grid"><article class="card mode" onclick="startPractice()"><div class="mode-icon">01</div><h3>今日混合闯关</h3><p>15 题，六种题型均有覆盖，当天优先不重复。</p><div class="go">开始 →</div></article><article class="card mode" onclick="startWrong()"><div class="mode-icon">02</div><h3>错题复仇</h3><p>只练曾经答错的题，答对后自动清除。</p><div class="go">${wrongCount?`${wrongCount} 道待复习`:'暂无错题'} →</div></article><article class="card mode" onclick="startExam()"><div class="mode-icon">03</div><h3>60 分钟模拟</h3><p>32 题、100 分制，严格复刻真实六题型结构。</p><div class="go">冲击 80 分 →</div></article><article class="card mode" onclick="guide()"><div class="mode-icon">04</div><h3>冲刺手册</h3><p>参数总表、必考对比、概念陷阱和话术。</p><div class="go">复习 →</div></article></div>
  <div class="section-title"><h2>学习面板</h2><p>记录只保存在本机</p></div><div class="grid"><section class="card mastery"><h3>四大板块掌握度</h3>${masteryBars()}</section><section class="card wrong-preview"><h3>已解锁徽章</h3><div class="badge-row">${badges()}</div><div class="empty">${wrongCount?'先清错题，再做整卷。':'错题本很干净，可以挑战模拟。'}</div><button class="ghost" onclick="resetProgress()">重置全部进度</button></section></div></main>`); }

function zone(kind){
  const typeMode=kind==='type'; const items=typeMode?Object.entries(TYPE_META):PRODUCT_SPECS.map(p=>[p.name,{name:p.name,desc:`${p.position} · ${p.protect}`}]);
  app(`<main class="shell">${topbar(true)}<section class="zone-banner"><div><div class="eyebrow">${typeMode?'TYPE ZONE':'PRODUCT ZONE'}</div><h1>${typeMode?'按照题型闯关':'按照产品闯关'}</h1></div><button class="ghost" onclick="home()">切换专区</button></section><div class="grid" style="margin-top:18px">${items.map(([key,m])=>{const pool=typeMode?QUESTIONS.filter(q=>q.type===key):QUESTIONS.filter(q=>questionProduct(q)===key);return `<article class="card deck" onclick="${typeMode?`startByType('${key}')`:`startByProduct('${key}')`}"><div class="count">${pool.length} 道题</div><h3>${m.name}</h3><p>${m.desc}</p><div class="go">开始专项闯关 →</div></article>`}).join('')}</div></main>`);
}
function startPractice(){ begin(mixedDaily(),'practice','今日混合闯关'); }
function startByType(type){ const pool=QUESTIONS.filter(q=>q.type===type); begin(poolUnseen(pool,Math.min(15,pool.length),`type-${type}`),'practice',TYPE_META[type].name+'专项'); }
function startByProduct(product){ const pool=QUESTIONS.filter(q=>questionProduct(q)===product); begin(poolUnseen(pool,Math.min(15,pool.length),`product-${product}`),'practice',product+'专项'); }
function startWrong(){ const qs=QUESTIONS.filter(q=>data.wrong[q.id]); if(!qs.length){toast('当前没有错题，先去完成一轮闯关');return} begin(shuffle(qs).slice(0,20),'wrong','错题复仇'); }
function startExam(){ begin(examSet(),'exam','六题型模拟考试'); }
function begin(qs,mode,title){ clearInterval(timerId); session={qs,mode,title,index:0,answers:{},textAnswers:{},checked:{},score:0,start:Date.now(),left:mode==='exam'?3600:0}; if(mode==='exam')timerId=setInterval(()=>{session.left--;if(session.left<=0){clearInterval(timerId);finish()}else{const t=document.querySelector('.timer');if(t)t.textContent=formatTime(session.left)}},1000);renderQuestion(); }
function setTextAnswer(v){ const q=session.qs[session.index]; session.textAnswers[q.id]=v; const b=document.getElementById('submit-current'); if(b)b.disabled=!v.trim(); }
function inputFor(q,checked){ const value=esc(session.textAnswers[q.id]||''); const safeValue=value.replace(/"/g,'&quot;'); const long=q.type==='short'||q.type==='spec'; const placeholder=q.type==='short'?'请写出完整推荐话术或答题要点':q.type==='spec'?'请按题目要求依次填写全部规格':'请输入答案'; return long?`<textarea class="answer-box" rows="7" placeholder="${placeholder}" oninput="setTextAnswer(this.value)" ${checked?'disabled':''}>${value}</textarea>`:`<input class="answer-box" value="${safeValue}" placeholder="${placeholder}" oninput="setTextAnswer(this.value)" ${checked?'disabled':''} />`; }
function renderQuestion(){ const q=session.qs[session.index],ans=session.answers[q.id]||[],checked=session.checked[q.id],choice=['single','multi','judge'].includes(q.type),letters='ABCD'; app(`<main class="shell quiz-wrap">${topbar(true)}<div class="quiz-head"><div><b>${session.title||'专项闯关'}</b><div class="muted">第 ${session.index+1} / ${session.qs.length} 题</div></div>${session.mode==='exam'?`<div class="timer">${formatTime(session.left)}</div>`:`<div class="chip">当前答对 <strong>${session.score}</strong></div>`}</div><div class="progress"><i style="width:${(session.index+1)/session.qs.length*100}%"></i></div><section class="question-card"><div class="question-meta"><span>${questionProduct(q)||q.cat}</span><span>${TYPE_META[q.type].name}</span></div><h2>${esc(q.q)}</h2>${choice?`<div class="options">${q.o.map((o,i)=>{let cls=ans.includes(i)?' selected':'';if(checked){if(q.a.includes(i))cls=' correct';else if(ans.includes(i))cls=' wrong'}return `<button class="option${cls}" onclick="pick(${i})" ${checked?'disabled':''}><span class="letter">${letters[i]}</span><span>${esc(o)}</span></button>`}).join('')}</div>`:inputFor(q,checked)}${checked?feedback(q):''}<div class="quiz-actions"><button class="ghost" onclick="home()">退出本轮</button>${actionButton(q,checked)}</div></section></main>`); }
function actionButton(q,checked){ if(session.mode==='exam')return `<button class="primary" id="submit-current" onclick="nextExam()" ${answerPresent(q)?'':'disabled'}>${session.index===session.qs.length-1?'交卷':'下一题'}</button>`; if(!checked)return `<button class="primary" id="submit-current" onclick="checkNow()" ${answerPresent(q)?'':'disabled'}>提交答案</button>`; return `<button class="primary" onclick="nextPractice()">${session.index===session.qs.length-1?'查看结果':'下一题'}</button>`; }
function checkNow(){ const q=session.qs[session.index]; if(!answerPresent(q))return; const ok=isCorrect(q);session.checked[q.id]=true;session.score+=ok?1:0;record(q,ok);renderQuestion(); }
function feedback(q){ const ok=isCorrect(q); return `<div class="feedback ${ok?'good':'bad'}"><b>${ok?'回答正确 +10 XP':'这题已记入错题本'}</b><div class="reference-answer">参考答案：${esc(q.ref||q.e||'见解析')}</div><div>${esc(q.e||'请对照参考答案复习关键得分点。')}</div></div>`; }
function nextExam(){ const q=session.qs[session.index]; if(!answerPresent(q)){toast('请先填写或选择答案');return} if(session.index===session.qs.length-1)finish();else{session.index++;renderQuestion()} }
function finish(){ clearInterval(timerId); let correct=0; if(session.mode==='exam'){const weights={single:2,multi:3,judge:2,fill:3,spec:15,short:10};session.score=0;session.qs.forEach(q=>{const ok=isCorrect(q);if(ok){correct++;session.score+=weights[q.type]}record(q,ok)});data.best=Math.max(data.best,session.score);data.history.push({exam:true,score:session.score,at:Date.now()});save()}else correct=session.score; const score=session.mode==='exam'?session.score:Math.round(correct/session.qs.length*100),pass=score>=80; app(`<main class="shell quiz-wrap">${topbar(true)}<section class="card result"><div class="eyebrow">${pass?'MISSION COMPLETE':'KEEP TRAINING'}</div><div class="result-score">${score}</div><h2>${pass?'成功通关':'距离通关还差一点'}</h2><p class="muted">${pass?'已经越过 80 分目标，继续冲击 90 分。':'先复习本轮错题，再来一次。'}</p><div class="result-grid"><div><strong>${correct}</strong><span class="muted">答对</span></div><div><strong>${session.qs.length-correct}</strong><span class="muted">答错</span></div><div><strong>${data.xp}</strong><span class="muted">累计 XP</span></div></div><div class="hero-actions" style="justify-content:center"><button class="primary" onclick="reviewSession()">查看答案解析</button><button class="secondary" onclick="startWrong()">错题复仇</button><button class="ghost" onclick="home()">返回首页</button></div></section></main>`); }
function reviewSession(){ app(`<main class="shell">${topbar(true)}<div class="section-title"><h2>本轮答案解析</h2><p>填空和简答按关键词覆盖判定</p></div><div class="wrong-list">${session.qs.map((q,i)=>{const ok=isCorrect(q);const own=['single','multi','judge'].includes(q.type)?(session.answers[q.id]||[]).map(x=>'ABCD'[x]+'. '+q.o[x]).join('；'):(session.textAnswers[q.id]||'未作答');const ref=q.ref||q.a.map(x=>'ABCD'[x]+'. '+q.o[x]).join('；');return `<article class="wrong-item"><b>${i+1}. ${esc(q.q)} <span style="color:${ok?'var(--green)':'var(--red)'}">${ok?'✓':'✕'}</span></b><p>你的答案：${esc(own)}</p><p>参考答案：${esc(ref)}</p><p>解析：${esc(q.e||'请对照参考答案复习关键得分点。')}</p></article>`}).join('')}</div></main>`); }

home();
