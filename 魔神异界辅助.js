const petEquipKeywords = ["魂", "鬼", "元帅", "无常", "马面", "牛头", "大帝", "僵尸", "真君", "崔府君", "仙子", "神莺", "太玄", "紫瞳星", "日游神", "广目天王", "游奕灵官", "玄冥文曲星君", "阳明贪狼星君", "金眼驼"];
const disconnectKeywords = ["无效", "错误"];
const practiceTriggerKeywords = ["你的领悟"];
const LOGIN_FAIL_KEYWORDS = ["登录失败"];
const practiceSlideOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const practiceAttrList = ["潜能", "防御", "攻击", "闪避", "体力", "血量", "吸金力", "原力", "抗力"];
const lingwuShowMap = { 100: "一转", 110: "二转", 120: "三转" };
const godItemList = ["祈神幡", "祈神令"];
const lingwuNumMap = { 1000: 100, 2000: 110, 3000: 120 };
const exitRoomKeywords = ["退出房间"];
const battleKeywords = ["战斗", "攻击", "待命", "失败", "躲避", "放弃", "损伤", "爆发", "激发", "不够"];
const battleEndKeywords = ["物品", "全军覆没"];
const cswp = ["完成", "编号", "交换", "提交"];
const healKeywords = ["行动", "全军覆没", "无法移动", "灵力即将耗尽"];
const hallKeywords = ["大厅"];
const lineKeywords = ["号线路"];
const dinghaoLoginKeywords = ["确认顶号"];
const welcomeKeywords = ["欢迎来到"];
const zdxkp = ["战斗", "请等待", "禁止", "选卡牌", "槽攻击", "取消", "已选"];
const aliOverseaKeywords = ["阿里", "海外"];
const practiceSuccessKeywords = ["提升能力", "没有修炼"];
const practiceStartKeywords = ["修炼中", "开始修炼", "无法修炼"];
const numberVerifyKeywords = ["上下选"];
const coordBlockKeywords = ["选卡牌", "行动", "上下选", "无法移动", "灵力即将耗尽"];
const mapList = [
"天梯一层", "天梯二层", "天梯三层", "天梯四层", "天梯五层",
"天梯六层", "天梯七层", "天梯八层", "天梯九层", "天宫道",
"南天门", "接引殿", "彩虹楼", "朝会殿", "太阴殿",
"毗沙宫", "朱雀宫", "太阳殿", "星月宫", "通明宫",
"天王殿", "星日宫", "珍宝阁", "广寒宫", "披香宫",
"华乐宫", "琼花宫", "御马间", "西天门", "封神台",
"兜率宫", "御花园", "天兵营", "斩妖台", "韧利殿",
"东天门", "瑶台", "护国街", "宝光殿", "三清宫",
"净居宫", "云楼宫", "瞳卢宫", "紫薇宫", "灵虚殿",
"灵官殿", "北天门", "黄泉路", "奈何桥", "鬼门关",
"冥府大道", "冥府忠司", "冥府节司", "冥府孝司", "冥府义司",
"地藏殿", "背阴山", "地狱门", "吊筋狱", "幽枉狱",
"火坑狱", "酆都狱", "拔舌狱", "剥皮狱", "磨捱狱",
"椎岛狱", "车崩狱", "寒冰狱", "脱壳狱", "抽肠狱",
"油锅狱", "黑暗狱", "刀山狱", "血池狱", "阿鼻狱",
"秤杆狱", "平安道", "枉死城", "孟婆亭", "冥府钱庄", "忘川台"
];
const dungeonCategoryList = [
{
categoryName: "天界地图副本",
categorySlideCount: 0,
dungeons: [
{ name: "天宫道", slideCount: 0 },
{ name: "南天门", slideCount: 1 },
{ name: "接引殿", slideCount: 2 },
{ name: "彩虹楼", slideCount: 3 },
{ name: "朝会殿", slideCount: 4 },
{ name: "太阴殿", slideCount: 5 },
{ name: "毗沙宫", slideCount: 6 },
{ name: "朱雀宫", slideCount: 7 },
{ name: "太阳殿", slideCount: 8 },
{ name: "星月宫", slideCount: 9 },
{ name: "通明宫", slideCount: 10 },
{ name: "天王殿", slideCount: 11 },
{ name: "星日宫", slideCount: 12 },
{ name: "珍宝阁", slideCount: 13 },
{ name: "广寒宫", slideCount: 14 },
{ name: "披香宫", slideCount: 15 },
{ name: "华乐宫", slideCount: 16 },
{ name: "琼花宫", slideCount: 17 },
{ name: "御马间", slideCount: 18 },
{ name: "西天门", slideCount: 19 },
{ name: "封神台", slideCount: 20 },
{ name: "兜率宫", slideCount: 21 },
{ name: "御花园", slideCount: 22 },
{ name: "天兵营", slideCount: 23 },
{ name: "斩妖台", slideCount: 24 },
{ name: "韧利殿", slideCount: 25 },
{ name: "东天门", slideCount: 26 },
{ name: "瑶台", slideCount: 27 },
{ name: "护国街", slideCount: 28 },
{ name: "宝光殿", slideCount: 29 },
{ name: "三清宫", slideCount: 30 },
{ name: "净居宫", slideCount: 31 },
{ name: "云楼宫", slideCount: 32 },
{ name: "瞳卢宫", slideCount: 33 },
{ name: "紫薇宫", slideCount: 34 },
{ name: "灵虚殿", slideCount: 35 },
{ name: "灵官殿", slideCount: 36 },
{ name: "北天门", slideCount: 37 }
]
},
{
categoryName: "夫妻水晶副本",
categorySlideCount: 1,
dungeons: [
{ name: "珍宝阁白水晶副本", slideCount: 0 },
{ name: "广寒宫黄水晶副本", slideCount: 1 },
{ name: "披香宫紫水晶副本", slideCount: 2 }
]
},
{
categoryName: "五炁真君副本",
categorySlideCount: 2,
dungeons: [
{ name: "华乐宫木德真君副本", slideCount: 0 },
{ name: "琼花宫火德真君副本", slideCount: 1 },
{ name: "御马间金德真君副本", slideCount: 2 },
{ name: "西天门土德真君副本", slideCount: 3 },
{ name: "封神台水德真君副本", slideCount: 4 }
]
},
{
categoryName: "每日副本",
categorySlideCount: 3,
dungeons: [
{ name: "兜率宫每日副本", slideCount: 0 }
]
},
{
categoryName: "地狱地图副本",
categorySlideCount: 4,
dungeons: [
{ name: "黄泉路", slideCount: 0 },
{ name: "奈何桥", slideCount: 1 },
{ name: "鬼门关", slideCount: 2 },
{ name: "冥府大道", slideCount: 3 },
{ name: "冥府忠司", slideCount: 4 },
{ name: "冥府节司", slideCount: 5 },
{ name: "冥府孝司", slideCount: 6 },
{ name: "冥府义司", slideCount: 7 },
{ name: "地藏殿", slideCount: 8 },
{ name: "背阴山", slideCount: 9 },
{ name: "地狱门", slideCount: 10 },
{ name: "吊筋狱", slideCount: 11 },
{ name: "幽枉狱", slideCount: 12 },
{ name: "火坑狱", slideCount: 13 },
{ name: "酆都狱", slideCount: 14 },
{ name: "拔舌狱", slideCount: 15 },
{ name: "剥皮狱", slideCount: 16 },
{ name: "磨捱狱", slideCount: 17 },
{ name: "椎岛狱", slideCount: 18 },
{ name: "车崩狱", slideCount: 19 },
{ name: "寒冰狱", slideCount: 20 },
{ name: "脱壳狱", slideCount: 21 },
{ name: "抽肠狱", slideCount: 22 },
{ name: "油锅狱", slideCount: 23 },
{ name: "黑暗狱", slideCount: 24 },
{ name: "刀山狱", slideCount: 25 },
{ name: "血池狱", slideCount: 26 },
{ name: "阿鼻狱", slideCount: 27 },
{ name: "秤杆狱", slideCount: 28 },
{ name: "平安道", slideCount: 29 },
{ name: "枉死城", slideCount: 30 },
{ name: "孟婆亭", slideCount: 31 },
{ name: "冥府钱庄", slideCount: 32 },
{ name: "忘川台", slideCount: 33 }
]
},
{
categoryName: "魔舍利副本",
categorySlideCount: 5,
dungeons: [
{ name: "地狱门魔舍利副本", slideCount: 0 }
]
}
];
var w = device.width, h = device.height;
var dur = 20;
var cX;
var cY = h / 2, cdY = h * 0.7;
var cdX = [w * 0.1, w * 0.3, w * 0.5, w * 0.7, w * 0.9];
var tgY = h * 0.1, tgX = [w * 0.1, w * 0.3, w * 0.5, w * 0.7, w * 0.9];
var pX = w * 0.8, pT = h * 0.2, pB = h * 0.4, pLsX = w * 0.75, pLeX = w * 0.55;
var ourTeamPos = [
{ index: 0, x: w * 0.1, y: h * 0.9 },
{ index: 1, x: w * 0.3, y: h * 0.9 },
{ index: 2, x: w * 0.5, y: h * 0.9 },
{ index: 3, x: w * 0.7, y: h * 0.9 },
{ index: 4, x: w * 0.9, y: h * 0.9 }
];
var hasRunProductionInit = false;
var productionResource = 0;
var sffb = false;
var sfhlmsgjc = false;
var enableProduction = true;
var hasPlayedCardInThisBattle = false;
var aliveTargets = [];
var thisBattleLingwu = 1;
var totalLingwu = 0;
const CONFIG_FILE = "pthsg_config.json";
var teamMode = 0;
var CARD_COUNT = 2;
var enableRunMap = true;
var enableFight = true;
var enableSystemAIBattle = false;
var enableAutoUpdate = false;
var isBattleStrategyTempChanged = false;
var userOriginalEnableRunMap = true;
var userOriginalEnableFight = false;
var defaultEnablePractice = false;
var selectedPracticeSlideCount = 2;
var enablePet = false;
var isEquipPetFlag = false;
var hasUnloadedPetOnFirstMapEnter = false;
var maxPetCount = 2;
var enableRetreatOnEnemyFirst = false;
var enableBath = false;
var enableGodSummon = false;
var enableCalibPetCount = false;
var enableCalibCardCount = false;
var lingwuLimit = 100;
var collectResourceLimit = 200;
var mapCoordLimit = 99;
var sfhqzy = false;
var hasUsedFirstRoundSpecial = false;
var firstHandDecided = false;
var enemyFirstAttack = false;
var hasRetreatedThisBattle = false;
var needUpdateAfterSlide = false;
var mainLastMatchText = "";
var modeLockCheckTime = Date.now();
var lastTeamNum = -1;
const ACCOUNT_FILE = "account_data.json";
var runMode = "";
var targetId = "";
var accounts = [];
var signQueue = [];
var currIdx = 0;
var hasClickedLine = false;
var isLogging = false;
var selectedGodItem = "祈神幡";
var lastGodSummonTime = 0;
var lastGodSummonMap = "";
var mapname = "地图名称";
var enableRestoreEquipSpirit = false;
var enableCreateDungeon = false;
var selectedDungeonCategory = 0;
var selectedDungeonIndex = 0;
var enableTianGangBlast = false;
var tianGangEndTime = 0;
var jyqtsh = false;
const VERSION_NAME = "2.7.3";
const VERSION_CODE = 273;
const VERSION_UPDATE_TIME = "2026-11-17";
const VERSION_CHANGE_LOG = `1.静默更新改为子线程下载加 10 秒限时等待：下载卡住时不再阻塞主菜单，超时直接提示并跳过本次；下载成功后的写入与重启仍回到主线程执行。
2.主菜单循环内改为先判断自动更新开关与更新标记：开关开启且未标记时，才打标记并执行静默更新。
2.更新请求全部加短超时：http 5 秒、IPv4 直连 4/7 秒、Java 4/7 秒，单地址总耗时超过 12 秒不再尝试后续通道，避免 IPv6 不可达时长时间卡在主菜单前。
2.静默模式下检测失败也弹提示（原先完全无输出，无法判断是没触发还是下载失败）。
3.静默检测更新移到主菜单循环内：进入循环时先检测一次，用 hasSilentUpdateChecked 标记，跑完菜单再次回到主菜单不再重复扫描。
2.更新成功后直接删除备份文件：写入校验通过即 remove 掉 .bak，只在写入失败或长度异常时用备份回滚。
2.主地址直连改走 IPv4：先解析 A 记录再连 IP，配合 SNI 与 HTTPS 主机名校验，证书仍按 raw.githubusercontent.com 校验，不放弃安全性；连不上时依次回退 Java 默认连接与 gh-proxy.com 镜像。
2.更新地址固定为镜像 gh-proxy.com，不再尝试 GitHub 原始域名与其他镜像，避免手机仅解析到 IPv6 时反复失败。
2.更新地址增加镜像兜底：原始地址连不上时（例如手机只解析到 IPv6）自动依次尝试 ghproxy.net、gh-proxy.com、ghfast.top，仍失败才提示检测失败。
2.更新下载增加兜底通道：先用 AutoJs 的 http 拉取，失败再改用 Java 连接读取；两路都失败时把具体原因（http 状态/异常信息）显示在提示里，便于排查网络问题。
2.检测更新改为整包比对：不再依赖 version.json 清单，直接下载整份脚本读取包内 VERSION_CODE 与本地比对，相同版本直接抛弃；手动检测弹窗询问，自动检测直接覆盖；更新地址只保留 GitHub 原始文件一个（jsDelivr 按路径缓存、刷新不可控，已弃用），每次启动只扫描一轮。
2.更新保留备份与回滚：写入前把旧脚本备份为 .bak（临时脚本场景同样备份），写入失败或长度异常自动用备份回滚，更新成功后备份保留；确认没有新版本时清理历史遗留的 .bak。
3.移除全部控制台日志输出。
4.移除截图权限自检：初始化入口 initGameScript() 已申请屏幕投影权限，未授权直接退出，因此 colorProbeSlots() 内的 screenReady 探测与 ensureScreenCapture() 函数一并删除，不再重复取图确认。
2.截图与媒体投影权限全脚本只在初始化入口申请一次，探测函数每次只取一张图做颜色统计。
3.使用系统AI战斗策略（enableSystemAIBattle）限制三个函数入口：查看我方成员血量 checkOurTeamHp()、发起攻击 launchAttack()、点选卡牌 sendUserSelectCard()。
4.发起攻击入口 launchAttack() 首行判断，开启时直接 return：不选卡牌、不点选敌方目标，攻击交给游戏系统AI。
5.点选卡牌入口 sendUserSelectCard() 首行判断，开启时直接 return：不点击 cdX/cdY 卡牌槽位、不读选卡提示。
6.查看我方血量入口 checkOurTeamHp() 首行判断，开启时直接 return：不探测我方槽位、不点击战败成员头像。
7.战斗外的恢复状态函数 healModeProcess() 不受限制，跑图、生产、修炼、副本、签到等逻辑与原版完全一致。
8.战斗初始化 initBattleTargets 与战斗结算 battleEndReset 不拦截，正常进入战斗、正常结算。
9.设置菜单"使用系统AI战斗策略"开关默认关闭，状态随配置文件持久化保存，关闭后脚本行为与原版完全一致。
10.主循环识别到"放弃进攻"，且系统AI战斗策略开启、当前为常规模式（teamMode 为 0）、本场领悟小于 2 时，四个条件同时满足才临时关闭 enableSystemAIBattle 交由脚本自动选卡攻击，并用 isBattleStrategyTempChanged 标记本场临时修改过。
11.战斗结算 battleEndReset() 在既有重置赋值中按临时修改标记恢复开启系统AI战斗策略，不额外新增判断分支。
12.魔兽装备标记 isEquipPetFlag 初始值由 true 改为 false，脚本启动时不再假定魔兽已装备，手动进局遇怪时也能走装备流程；滑动分支内多余的置假语句已移除。
13.新增全局标记 hasUnloadedPetOnFirstMapEnter，进入地图函数调用卸载前若为假，说明本轮还没卸载过魔兽，则先打标记并把 isEquipPetFlag 置真，保证首次进图能正常执行卸载、清掉上一轮残留。
14.全军覆没/灵力耗尽处理流程同样按临时修改标记恢复开启系统AI战斗策略，并把标记清除，避免战败路径让策略长期处于关闭状态。
15.新增自动更新：设置菜单新增"自动检测并下载更新"开关，开启后启动时后台静默检测并自动下载覆盖重启；主菜单新增"检测更新"，显示新版本号与更新日志并询问是否下载。两者共用同一个检测更新函数，自动更新以 silent 参数调用，不弹询问框。
16.修复更新后重启失败：不再删除正在运行的脚本文件，改为直接覆盖写入；脚本运行于缓存临时文件时，改为写入固定路径 /sdcard/msyj-helper/ 并重启该路径。
17.更新源简化为只保留脚本文件：不再使用 version.json 清单，检测更新时直接下载整份脚本读取 VERSION_CODE 比对；相同版本直接抛弃，手动检测弹窗询问，静默检测直接覆盖。
`;
// 自动更新源：公共仓库地址，格式为 "用户名/仓库名@分支"，留空则关闭更新功能
const UPDATE_REPO = "zhxlmzhx/msyj-helper@main";
const UPDATE_SCRIPT_NAME = "魔神异界辅助.js";
var lastUpdateError = "";
// 标记本轮启动是否已做过静默更新检测，保证只检测一次
var hasSilentUpdateChecked = false;
const DEFAULT_CONFIG = {
teamMode: 0,
CARD_COUNT: 2,
enableRunMap: true,
enableFight: true,
enableSystemAIBattle: false,
enableAutoUpdate: false,
enableProduction: true,
defaultEnablePractice: false,
enablePet: false,
enableRetreatOnEnemyFirst: false,
enableBath: false,
enableCalibPetCount: false,
enableCalibCardCount: false,
enableGodSummon: false,
enableTianGangBlast: false,
enableCreateDungeon: false,
selectedPracticeSlideCount: 2,
maxPetCount: 2,
lingwuLimit: 100,
collectResourceLimit: 200,
mapCoordLimit: 99,
selectedGodItem: "祈神幡",
selectedDungeonCategory: 0,
selectedDungeonIndex: 0,
lastGodSummonTime: 0,
lastGodSummonMap: ""
};
// 格式化时间戳为 HH:MM:SS
function formatTime(ts)
{
if (!ts)
{
return "从未召唤";
}
var d = new Date(ts);
var y = d.getFullYear();
var m = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
var day = (d.getDate() < 10 ? "0" : "") + d.getDate();
var h = (d.getHours() < 10 ? "0" : "") + d.getHours();
var min = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
var s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
return y + "-" + m + "-" + day + " " + h + ":" + min + ":" + s;
}
// 读取本地配置并校验，缺失或损坏时返回 null
function loadValidConfig()
{
try
{
if (!files.exists(CONFIG_FILE))
{
return null;
}
var str = files.read(CONFIG_FILE);
var cfg = JSON.parse(str);
if (typeof cfg !== "object" || cfg === null)
{
files.remove(CONFIG_FILE);
return null;
}
var validCfg = {};
var hasFixed = false;
validCfg.teamMode = [0, 1, 2].includes(cfg.teamMode) ? cfg.teamMode : DEFAULT_CONFIG.teamMode;
if (validCfg.teamMode !== cfg.teamMode)
{
hasFixed = true;
}
validCfg.CARD_COUNT = (typeof cfg.CARD_COUNT === "number" && cfg.CARD_COUNT >= 1 && cfg.CARD_COUNT <= 5)
? cfg.CARD_COUNT : DEFAULT_CONFIG.CARD_COUNT;
if (validCfg.CARD_COUNT !== cfg.CARD_COUNT)
{
hasFixed = true;
}
var boolFields = [
"enableRunMap", "enableFight", "enableSystemAIBattle", "enableAutoUpdate", "enableProduction", "defaultEnablePractice",
"enablePet", "enableRetreatOnEnemyFirst", "enableBath", "enableCalibPetCount",
"enableCalibCardCount", "enableGodSummon", "enableTianGangBlast", "enableCreateDungeon"
];
boolFields.forEach(function (field)
{
validCfg[field] = (typeof cfg[field] === "boolean") ? cfg[field] : DEFAULT_CONFIG[field];
if (validCfg[field] !== cfg[field])
{
hasFixed = true;
}
});
validCfg.selectedPracticeSlideCount = practiceSlideOptions.includes(cfg.selectedPracticeSlideCount)
? cfg.selectedPracticeSlideCount : DEFAULT_CONFIG.selectedPracticeSlideCount;
if (validCfg.selectedPracticeSlideCount !== cfg.selectedPracticeSlideCount)
{
hasFixed = true;
}
validCfg.maxPetCount = (typeof cfg.maxPetCount === "number" && [1, 2, 3].includes(cfg.maxPetCount))
? cfg.maxPetCount : DEFAULT_CONFIG.maxPetCount;
if (validCfg.maxPetCount !== cfg.maxPetCount)
{
hasFixed = true;
}
validCfg.lingwuLimit = [100, 110, 120].includes(cfg.lingwuLimit)
? cfg.lingwuLimit : DEFAULT_CONFIG.lingwuLimit;
if (validCfg.lingwuLimit !== cfg.lingwuLimit)
{
hasFixed = true;
}
validCfg.collectResourceLimit = [200, 500, 2000].includes(cfg.collectResourceLimit)
? cfg.collectResourceLimit : DEFAULT_CONFIG.collectResourceLimit;
if (validCfg.collectResourceLimit !== cfg.collectResourceLimit)
{
hasFixed = true;
}
validCfg.mapCoordLimit = [99, 149, 199].includes(cfg.mapCoordLimit)
? cfg.mapCoordLimit : DEFAULT_CONFIG.mapCoordLimit;
if (validCfg.mapCoordLimit !== cfg.mapCoordLimit)
{
hasFixed = true;
}
validCfg.selectedGodItem = godItemList.includes(cfg.selectedGodItem)
? cfg.selectedGodItem : DEFAULT_CONFIG.selectedGodItem;
if (validCfg.selectedGodItem !== cfg.selectedGodItem)
{
hasFixed = true;
}
validCfg.selectedDungeonCategory = (typeof cfg.selectedDungeonCategory === "number"
&& cfg.selectedDungeonCategory >= 0
&& cfg.selectedDungeonCategory < dungeonCategoryList.length)
? cfg.selectedDungeonCategory : DEFAULT_CONFIG.selectedDungeonCategory;
if (validCfg.selectedDungeonCategory !== cfg.selectedDungeonCategory)
{
hasFixed = true;
}
if (validCfg.selectedDungeonCategory === cfg.selectedDungeonCategory
&& typeof cfg.selectedDungeonIndex === "number"
&& cfg.selectedDungeonIndex >= 0
&& cfg.selectedDungeonIndex < dungeonCategoryList[validCfg.selectedDungeonCategory].dungeons.length)
{
validCfg.selectedDungeonIndex = cfg.selectedDungeonIndex;
}
else
{
validCfg.selectedDungeonIndex = DEFAULT_CONFIG.selectedDungeonIndex;
hasFixed = true;
}
validCfg.lastGodSummonTime = (typeof cfg.lastGodSummonTime === "number")
? cfg.lastGodSummonTime : DEFAULT_CONFIG.lastGodSummonTime;
validCfg.lastGodSummonMap = (typeof cfg.lastGodSummonMap === "string")
? cfg.lastGodSummonMap : DEFAULT_CONFIG.lastGodSummonMap;
if (hasFixed)
{
files.write(CONFIG_FILE, JSON.stringify(validCfg, null, 2));
}
return validCfg;
}
catch (e)
{
files.remove(CONFIG_FILE);
return null;
}
}
// 把指定配置项写入本地配置文件
function saveValidConfig(keys)
{
try
{
var allConfigMap = {
teamMode: teamMode,
CARD_COUNT: CARD_COUNT,
enableRunMap: enableRunMap,
enableFight: enableFight,
enableSystemAIBattle: enableSystemAIBattle,
enableAutoUpdate: enableAutoUpdate,
enableProduction: enableProduction,
defaultEnablePractice: defaultEnablePractice,
enablePet: enablePet,
enableRetreatOnEnemyFirst: enableRetreatOnEnemyFirst,
enableBath: enableBath,
enableCalibPetCount: enableCalibPetCount,
enableCalibCardCount: enableCalibCardCount,
enableGodSummon: enableGodSummon,
enableTianGangBlast: enableTianGangBlast,
enableCreateDungeon: enableCreateDungeon,
selectedPracticeSlideCount: selectedPracticeSlideCount,
maxPetCount: maxPetCount,
lingwuLimit: lingwuLimit,
collectResourceLimit: collectResourceLimit,
mapCoordLimit: mapCoordLimit,
selectedGodItem: selectedGodItem,
selectedDungeonCategory: selectedDungeonCategory,
selectedDungeonIndex: selectedDungeonIndex,
lastGodSummonTime: lastGodSummonTime,
lastGodSummonMap: lastGodSummonMap
};
var config;
if (keys && Array.isArray(keys) && keys.length > 0)
{
var oldConfig = loadValidConfig();
config = oldConfig || {};
keys.forEach(function (key)
{
if (allConfigMap.hasOwnProperty(key))
{
config[key] = allConfigMap[key];
}
});
}
else
{
config = allConfigMap;
}
if (isConfigValid(config))
{
files.write(CONFIG_FILE, JSON.stringify(config, null, 2));
}
}
catch (e)
{
}
}
// 校验配置对象是否完整有效
function isConfigValid(cfg)
{
try
{
if (typeof cfg !== "object" || cfg === null)
{
return false;
}
if (![0, 1, 2].includes(cfg.teamMode))
{
return false;
}
if (typeof cfg.CARD_COUNT !== "number" || cfg.CARD_COUNT < 1 || cfg.CARD_COUNT > 5)
{
return false;
}
if (typeof cfg.enableRunMap !== "boolean")
{
return false;
}
if (typeof cfg.enableFight !== "boolean")
{
return false;
}
if (typeof cfg.enableSystemAIBattle !== "boolean")
{
return false;
}
if (typeof cfg.enableAutoUpdate !== "boolean")
{
return false;
}
if (typeof cfg.enableProduction !== "boolean")
{
return false;
}
if (typeof cfg.defaultEnablePractice !== "boolean")
{
return false;
}
if (typeof cfg.enablePet !== "boolean")
{
return false;
}
if (typeof cfg.enableRetreatOnEnemyFirst !== "boolean")
{
return false;
}
if (typeof cfg.enableBath !== "boolean")
{
return false;
}
if (typeof cfg.enableCalibPetCount !== "boolean")
{
return false;
}
if (typeof cfg.enableCalibCardCount !== "boolean")
{
return false;
}
if (typeof cfg.enableGodSummon !== "boolean")
{
return false;
}
if (typeof cfg.enableTianGangBlast !== "boolean")
{
return false;
}
if (typeof cfg.enableCreateDungeon !== "boolean")
{
return false;
}
if (cfg.defaultEnablePractice && !practiceSlideOptions.includes(cfg.selectedPracticeSlideCount))
{
return false;
}
if (typeof cfg.maxPetCount !== "number" || ![1, 2, 3].includes(cfg.maxPetCount))
{
return false;
}
if (cfg.defaultEnablePractice && ![100, 110, 120].includes(cfg.lingwuLimit))
{
return false;
}
if (![200, 500, 2000].includes(cfg.collectResourceLimit))
{
return false;
}
if (![99, 149, 199].includes(cfg.mapCoordLimit))
{
return false;
}
if (!godItemList.includes(cfg.selectedGodItem))
{
return false;
}
if (typeof cfg.selectedDungeonCategory !== "number"
|| cfg.selectedDungeonCategory < 0
|| cfg.selectedDungeonCategory >= dungeonCategoryList.length)
{
return false;
}
if (typeof cfg.selectedDungeonIndex !== "number"
|| cfg.selectedDungeonIndex < 0
|| cfg.selectedDungeonIndex >= dungeonCategoryList[cfg.selectedDungeonCategory].dungeons.length)
{
return false;
}
return true;
}
catch (e)
{
return false;
}
}
// 把配置对象应用到全局运行参数
function applyConfig(cfg)
{
teamMode = cfg.teamMode;
CARD_COUNT = cfg.CARD_COUNT;
enableRunMap = cfg.enableRunMap;
enableFight = cfg.enableFight;
enableSystemAIBattle = cfg.enableSystemAIBattle || false;
enableAutoUpdate = cfg.enableAutoUpdate || false;
enableProduction = cfg.enableProduction;
defaultEnablePractice = cfg.defaultEnablePractice;
selectedPracticeSlideCount = cfg.selectedPracticeSlideCount;
enablePet = cfg.enablePet;
enableRetreatOnEnemyFirst = cfg.enableRetreatOnEnemyFirst;
enableBath = cfg.enableBath;
enableCalibPetCount = cfg.enableCalibPetCount;
enableCalibCardCount = cfg.enableCalibCardCount;
enableGodSummon = cfg.enableGodSummon;
enableTianGangBlast = cfg.enableTianGangBlast || false;
enableCreateDungeon = cfg.enableCreateDungeon || false;
maxPetCount = cfg.maxPetCount;
lingwuLimit = cfg.lingwuLimit;
collectResourceLimit = cfg.collectResourceLimit;
mapCoordLimit = cfg.mapCoordLimit;
selectedGodItem = cfg.selectedGodItem;
selectedDungeonCategory = cfg.selectedDungeonCategory || 0;
selectedDungeonIndex = cfg.selectedDungeonIndex || 0;
userOriginalEnableRunMap = enableRunMap;
userOriginalEnableFight = enableFight;
lastGodSummonTime = cfg.lastGodSummonTime || 0;
lastGodSummonMap = cfg.lastGodSummonMap || "";
}
// 打开设置菜单，循环修改各项配置
function openSettingMenu()
{
// 设置菜单循环：反复展示设置项并等待用户修改，选择退出后结束
while (true)
{
let showAttrName = practiceAttrList[selectedPracticeSlideCount - 2];
let showLingwuName = lingwuShowMap[lingwuLimit];
let optList = [
`自动跑图 [${enableRunMap ? "开启" : "关闭"}]`,
`自动战斗 [${enableFight ? "开启" : "关闭"}]`,
`自动生产 [${enableProduction ? "开启" : "关闭"}]`,
`自动修炼 [${defaultEnablePractice ? "开启" : "关闭"}]`,
`自动操控魔兽 [${enablePet ? "开启" : "关闭"}]`,
`敌方先手退出战斗 [${enableRetreatOnEnemyFirst ? "开启" : "关闭"}]`,
`自动沐浴 [${enableBath ? "开启" : "关闭"}]`,
`自动校准出战魔兽数量 [${enableCalibPetCount ? "开启" : "关闭"}]`,
`自动校准战斗卡牌数量 [${enableCalibCardCount ? "开启" : "关闭"}]`,
`自动召唤天神降临 [${enableGodSummon ? "开启" : "关闭"}]`,
`自动爆发天罡 [${enableTianGangBlast ? "开启" : "关闭"}]`,
`自动创建副本 [${enableCreateDungeon ? "开启" : "关闭"}]`,
`使用系统AI战斗策略 [${enableSystemAIBattle ? "开启" : "关闭"}]`,
`自动检测并下载更新 [${enableAutoUpdate ? "开启" : "关闭"}]`,
`模式 [${["常规", "副队长", "尸体"][teamMode]}]`,
`战斗卡牌 [${CARD_COUNT}张]`,
`修炼属性 [${showAttrName}]`,
`出战魔兽 [${maxPetCount}只]`,
`当前职业 [${showLingwuName}]`,
`生产资源 [${collectResourceLimit}]`,
`地图坐标上限 [${mapCoordLimit}]`,
`召唤天神道具 [${selectedGodItem}]`,
`副本分类 [${dungeonCategoryList[selectedDungeonCategory].categoryName}]`,
`目标副本 [${dungeonCategoryList[selectedDungeonCategory].dungeons[selectedDungeonIndex].name}]`,
`上次天神降临 [${lastGodSummonMap || ""}
${formatTime(lastGodSummonTime)}]`,
`版本 [${VERSION_NAME}]`
];
let sel = dialogs.select("设置", optList);
if (sel === -1)
{
break;
}
switch (sel)
{
case 0:
{
enableRunMap = !enableRunMap;
toast(enableRunMap ? "已开启" : "已关闭");
saveValidConfig(['enableRunMap']);
break;
}
case 1:
{
enableFight = !enableFight;
toast(enableFight ? "已开启" : "已关闭");
saveValidConfig(['enableFight']);
break;
}
case 2:
{
enableProduction = !enableProduction;
toast(enableProduction ? "已开启" : "已关闭");
saveValidConfig(['enableProduction']);
break;
}
case 3:
{
defaultEnablePractice = !defaultEnablePractice;
toast(defaultEnablePractice ? "已开启" : "已关闭");
saveValidConfig(['defaultEnablePractice']);
break;
}
case 4:
{
enablePet = !enablePet;
toast(enablePet ? "已开启" : "已关闭");
saveValidConfig(['enablePet']);
break;
}
case 5:
{
enableRetreatOnEnemyFirst = !enableRetreatOnEnemyFirst;
toast(enableRetreatOnEnemyFirst ? "已开启" : "已关闭");
saveValidConfig(['enableRetreatOnEnemyFirst']);
break;
}
case 6:
{
enableBath = !enableBath;
toast(enableBath ? "已开启" : "已关闭");
saveValidConfig(['enableBath']);
break;
}
case 7:
{
enableCalibPetCount = !enableCalibPetCount;
toast(enableCalibPetCount ? "已开启" : "已关闭");
saveValidConfig(['enableCalibPetCount']);
break;
}
case 8:
{
enableCalibCardCount = !enableCalibCardCount;
toast(enableCalibCardCount ? "已开启" : "已关闭");
saveValidConfig(['enableCalibCardCount']);
break;
}
case 9:
{
enableGodSummon = !enableGodSummon;
toast(enableGodSummon ? "已开启" : "已关闭");
saveValidConfig(['enableGodSummon']);
break;
}
case 10:
{
enableTianGangBlast = !enableTianGangBlast;
toast(enableTianGangBlast ? "已开启" : "已关闭");
saveValidConfig(['enableTianGangBlast']);
break;
}
case 11:
{
enableCreateDungeon = !enableCreateDungeon;
toast(enableCreateDungeon ? "已开启" : "已关闭");
saveValidConfig(['enableCreateDungeon']);
break;
}
case 12:
{
enableSystemAIBattle = !enableSystemAIBattle;
toast(enableSystemAIBattle ? "已开启" : "已关闭");
saveValidConfig(['enableSystemAIBattle']);
break;
}
case 13:
{
enableAutoUpdate = !enableAutoUpdate;
toast(enableAutoUpdate ? "已开启" : "已关闭");
saveValidConfig(['enableAutoUpdate']);
break;
}
case 14:
{
let idx = dialogs.select("模式", ["常规", "副队长", "尸体"]);
if (idx >= 0)
{
teamMode = idx;
saveValidConfig(['teamMode']);
}
break;
}
case 15:
{
let idx = dialogs.select("战斗卡牌", ["1张", "2张", "3张", "4张", "5张"]);
if (idx >= 0)
{
CARD_COUNT = idx + 1;
saveValidConfig(['CARD_COUNT']);
}
break;
}
case 16:
{
let idx = dialogs.select("修炼属性", practiceAttrList);
if (idx !== -1)
{
selectedPracticeSlideCount = idx + 2;
saveValidConfig(['selectedPracticeSlideCount']);
}
break;
}
case 17:
{
let idx = dialogs.select("出战魔兽", ["1只", "2只", "3只"]);
if (idx >= 0)
{
maxPetCount = idx + 1;
saveValidConfig(['maxPetCount']);
}
break;
}
case 18:
{
let idx = dialogs.select("当前职业", ["一转", "二转", "三转"]);
if (idx === 0)
{
lingwuLimit = 100;
}
if (idx === 1)
{
lingwuLimit = 110;
}
if (idx === 2)
{
lingwuLimit = 120;
}
saveValidConfig(['lingwuLimit']);
break;
}
case 19:
{
let idx = dialogs.select("生产资源", ["200", "500", "2000"]);
if (idx === 0)
{
collectResourceLimit = 200;
}
if (idx === 1)
{
collectResourceLimit = 500;
}
if (idx === 2)
{
collectResourceLimit = 2000;
}
saveValidConfig(['collectResourceLimit']);
break;
}
case 20:
{
let idx = dialogs.select("地图坐标上限", ["99", "149", "199"]);
if (idx === 0)
{
mapCoordLimit = 99;
}
if (idx === 1)
{
mapCoordLimit = 149;
}
if (idx === 2)
{
mapCoordLimit = 199;
}
saveValidConfig(['mapCoordLimit']);
break;
}
case 21:
{
let idx = dialogs.select("召唤天神道具", godItemList);
if (idx >= 0)
{
selectedGodItem = godItemList[idx];
saveValidConfig(['selectedGodItem']);
}
break;
}
case 22:
{
let categoryNames = dungeonCategoryList.map(item => item.categoryName);
let idx = dialogs.select("选择副本分类", categoryNames);
if (idx >= 0)
{
selectedDungeonCategory = idx;
selectedDungeonIndex = 0;
saveValidConfig(['selectedDungeonCategory', 'selectedDungeonIndex']);
}
break;
}
case 23:
{
let currentCategory = dungeonCategoryList[selectedDungeonCategory];
let dungeonNames = currentCategory.dungeons.map(item => item.name);
let idx = dialogs.select("选择目标副本", dungeonNames);
if (idx >= 0)
{
selectedDungeonIndex = idx;
saveValidConfig(['selectedDungeonIndex']);
}
break;
}
case 24:
{
toast("此项为只读信息，不可修改");
break;
}
case 25:
{
dialogs.alert(`${VERSION_NAME}
更新日志`,
`${VERSION_CHANGE_LOG}\n${VERSION_UPDATE_TIME}`
);
break;
}
}
}
userOriginalEnableRunMap = enableRunMap;
userOriginalEnableFight = enableFight;
saveValidConfig();
}
// 获取本地日期字符串（yyyy-MM-dd），用于记录账号签到日期
function getTodayDateStr()
{
var d = new Date();
var m = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
var day = (d.getDate() < 10 ? "0" : "") + d.getDate();
return d.getFullYear() + "-" + m + "-" + day;
}
// 读取账号列表，兼容旧数据并补全签到日期字段
function loadAccounts()
{
try
{
if (!files.exists(ACCOUNT_FILE))
{
return [];
}
var raw = JSON.parse(files.read(ACCOUNT_FILE));
if (!raw || typeof raw.length !== "number")
{
return [];
}
var list = [];
for (var i = 0; i < raw.length; i++)
{
var item = raw[i];
if (!item || typeof item.account === "undefined")
{
continue;
}
list.push({
account: item.account,
pwd: item.pwd,
signDate: typeof item.signDate === "string" ? item.signDate : ""
});
}
return list;
}
catch (e)
{
return [];
}
}
// 保存账号列表
function saveAccounts(arr)
{
try
{
files.write(ACCOUNT_FILE, JSON.stringify(arr));
}
catch (e)
{
toast("保存账号失败：" + e);
}
}
// 判断指定账号今日是否已签到
function isAccountSignedToday(item)
{
return !!item && typeof item.signDate === "string" && item.signDate === getTodayDateStr();
}
// 将指定账号的签到日期标记为今天并持久化
function markAccountSigned(acc)
{
var today = getTodayDateStr();
var changed = false;
for (var i = 0; i < accounts.length; i++)
{
if (accounts[i].account === acc)
{
accounts[i].signDate = today;
changed = true;
}
}
if (changed)
{
saveAccounts(accounts);
}
}
// 从账号列表中按账号名移除（登录失败时使用）
function removeAccountByName(acc)
{
var cut = false;
for (var i = accounts.length - 1; i >= 0; i--)
{
if (accounts[i].account === acc)
{
accounts.splice(i, 1);
cut = true;
}
}
if (cut)
{
saveAccounts(accounts);
}
}
// 按今日签到情况筛选本次待签到账号
function buildSignQueue()
{
var pending = [];
var skipped = 0;
for (var i = 0; i < accounts.length; i++)
{
if (isAccountSignedToday(accounts[i]))
{
skipped++;
}
else
{
pending.push(accounts[i]);
}
}
return { pending: pending, skipped: skipped };
}
// 弹窗输入框，返回用户输入内容
function inputBox(title, defaultValue = "")
{
try
{
let res = dialogs.rawInput(title, defaultValue);
return res;
}
catch (e)
{
return null;
}
}
// 校验账号格式是否合法
function checkAccount(acc)
{
if (!/^\d{3,8}$/.test(acc))
{
return false;
}
if (acc.startsWith("0"))
{
return false;
}
let sum = 0;
for (let c of acc)
{
sum += parseInt(c);
}
return sum % 3 === 0;
}
// 校验密码格式是否合法
function checkPwd(pwd)
{
return pwd != null && pwd.length >= 3 && pwd.length <= 8;
}
// 判断账号是否已在列表中
function isAccountExist(acc)
{
let list = loadAccounts();
for (let item of list)
{
if (item.account === acc)
{
return true;
}
}
return false;
}
// 清理账号列表中的非法账号
function cleanInvalidAccounts()
{
let list = loadAccounts();
let valid = [];
let cnt = 0;
for (let item of list)
{
if (checkAccount(item.account))
{
valid.push(item);
}
else
{
cnt++;
}
}
if (cnt > 0)
{
saveAccounts(valid);
toast("已清理 " + cnt + " 个无效账号");
}
return valid;
}
// 新增一个账号到列表
function addAccount()
{
let acc;
while (true)
{
acc = inputBox("账号（3-8位纯数字，不以0开头，和为3的倍数）");
if (acc === null || acc.trim() === "")
{
toast("已取消添加");
return;
}
acc = acc.trim();
if (!checkAccount(acc))
{
toast("账号格式不合法，请重新输入");
continue;
}
if (isAccountExist(acc))
{
toast("账号已存在，请重新输入");
continue;
}
break;
}
let pwd;
while (true)
{
pwd = inputBox("密码（3-8位）");
if (pwd === null || pwd.trim() === "")
{
toast("已取消添加");
return;
}
pwd = pwd.trim();
if (checkPwd(pwd))
{
break;
}
toast("密码不合法，请重新输入");
}
let list = loadAccounts();
list.push({ account: acc, pwd: pwd, signDate: "" });
saveAccounts(list);
toast("添加成功");
}
// 编辑指定序号的账号信息
function editAccount(index)
{
let list = loadAccounts();
if (index < 0 || index >= list.length)
{
return;
}
let old = list[index];
let acc;
while (true)
{
acc = inputBox("账号", old.account);
if (acc === null || acc.trim() === "")
{
toast("已取消编辑");
return;
}
acc = acc.trim();
if (!checkAccount(acc))
{
toast("账号不合法，请重新输入");
continue;
}
if (acc !== old.account && isAccountExist(acc))
{
toast("账号已存在，请重新输入");
continue;
}
break;
}
let pwd;
while (true)
{
pwd = inputBox("密码", old.pwd);
if (pwd === null || pwd.trim() === "")
{
toast("已取消编辑");
return;
}
pwd = pwd.trim();
if (checkPwd(pwd))
{
break;
}
toast("密码不合法，请重新输入");
}
list[index] = { account: acc, pwd: pwd, signDate: old.signDate || "" };
saveAccounts(list);
toast("编辑成功");
}
// 账号列表管理菜单
function manageAccounts()
{
let lastIndex = 0;
while (true)
{
let list = cleanInvalidAccounts();
if (list.length === 0)
{
toast("账号列表为空");
return;
}
if (lastIndex >= list.length)
{
lastIndex = list.length - 1;
}
let menu = list.map(item =>
{
if (isAccountSignedToday(item))
{
return item.account + "（" + item.signDate + "已签）";
}
if (item.signDate)
{
return item.account + "（未签到，上次" + item.signDate + "）";
}
return item.account + "（未签到）";
});
let idx = dialogs.select("账号列表", menu);
if (idx === -1)
{
return;
}
lastIndex = idx;
let opt = dialogs.select("操作" + list[idx].account + " 签到日期:" + (list[idx].signDate || "无"), ["编辑", "删除", "清除签到记录"]);
if (opt === 0)
{
editAccount(idx);
}
else if (opt === 1)
{
if (dialogs.confirm("删除账号", "确定要删除" + list[idx].account + "吗？"))
{
let targetAccount = list[idx].account;
list.splice(idx, 1);
saveAccounts(list);
toast("删除成功");
}
}
else if (opt === 2)
{
list[idx].signDate = "";
saveAccounts(list);
toast("已清除签到记录，该账号下次签到不再跳过");
}
}
}
// 重复执行滑动动作指定次数
function repeatSwipe(fn, n)
{
for (var i = 0; i < n; i++)
{
fn();
}
}
// 读取当前背包物品信息
function getItemInfo()
{
for (var retry = 0; retry < 5; retry++)
{
var text = APIRead();
if (!text)
{
continue;
}
var match = text.match(/[:：]\s*(\d+)/);
if (match)
{
var count = parseInt(match[1]);
if (isNaN(count))
{
continue;
}
if (text.includes("月光宝盒"))
{
if (count > 1)
{
return { hasItem: true, count: count - 1 };
}
else if (count === 1)
{
return { hasItem: false, count: 0 };
}
}
else
{
return { hasItem: true, count: count };
}
}
}
return { hasItem: false, count: 0 };
}
// 掉线后滑动屏幕尝试重连
function onDisconnectSlide()
{
if (runMode !== "sign")
{
return;
}
repeatSwipe(practiceSwipeLeft, 1);
repeatSwipe(clicks, 1);
isLogging = false;
}
// 切换到下一个账号
function switchToNextAccount(type)
{
if (runMode !== "sign")
{
return;
}
resetLoginKeywordFlags();
if (type === 'loginFail')
{
if (currIdx >= 0 && currIdx < signQueue.length)
{
var failedAcc = signQueue[currIdx].account;
removeAccountByName(failedAcc);
signQueue.splice(currIdx, 1);
}
}
else
{
currIdx++;
}
isLogging = false;
if (type === 'loginFail')
{
repeatSwipe(practiceSwipeLeft, 1);
clicks();
}
else if (type === 'signSuccess')
{
repeatSwipe(practiceSwipeLeft, 2);
clicks();
}
if (currIdx >= signQueue.length)
{
repeatSwipe(practiceSwipeLeft, 1);
repeatSwipe(practiceSwipeDown, 10);
clicks();
exit();
}
}
// 在欢迎页点击登录按钮
function welcomeToLogin()
{
if (runMode !== "sign")
{
return;
}
repeatSwipe(practiceSwipeDown, 2);
clicks();
}
// 处理签到登录过程中的关键字，返回是否已处理
function handleSignLoginKeyword(currentText)
{
if (LOGIN_FAIL_KEYWORDS.some(kw => currentText.includes(kw)))
{
switchToNextAccount('loginFail');
return true;
}
if (disconnectKeywords.some(kw => currentText.includes(kw)))
{
onDisconnectSlide();
return true;
}
if (lineKeywords.some(kw => currentText.includes(kw)) && !hasClickedLine)
{
clicks();
hasClickedLine = true;
return true;
}
if (dinghaoLoginKeywords.some(kw => currentText.includes(kw)) && !hasClickedDinghao)
{
clicks();
hasClickedDinghao = true;
return true;
}
if (aliOverseaKeywords.some(kw => currentText.includes(kw)) && !hasAliOversea)
{
clicks();
hasAliOversea = true;
return true;
}
if (welcomeKeywords.some(kw => currentText.includes(kw)))
{
welcomeToLogin();
resetLoginKeywordFlags();
return true;
}
return false;
}
// 执行账号登录
function doLogin()
{
if (runMode !== "sign")
{
return;
}
if (isLogging)
{
return;
}
isLogging = true;
if (currIdx >= signQueue.length)
{
exit();
}
var acc = signQueue[currIdx].account;
var pwd = signQueue[currIdx].pwd;
practiceSwipeDown();
clicks();
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input(acc + "\n");
waitOcrKeywords(cswp, 3000);
practiceSwipeDown();
clicks();
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input(pwd + "\n");
waitOcrKeywords(cswp, 3000);
practiceSwipeDown();
repeatSwipe(clicks, 2);
}
// 在大厅执行签到动作
function hallAction_Sign()
{
if (runMode !== "sign")
{
return;
}
isLogging = false;
var txt = APIRead();
if (txt.includes("大厅"))
{
clicks();
}
repeatSwipe(practiceSwipeDown, 2);
clicks();
// 未识别到有效签到结果（返回 null 即超时）时不记录签到日期，下次运行仍会重新签到
if (!waitOcrKeywords(["回家", "不够", "已经"], 3000))
{
toast("未识别到签到结果，本次不记录签到日期");
}
else if (currIdx >= 0 && currIdx < signQueue.length)
{
markAccountSigned(signQueue[currIdx].account);
}
switchToNextAccount('signSuccess');
}
// 在大厅执行物品传送动作
function hallAction_ItemTransfer()
{
for (var typeIdx = 0; typeIdx < 13; typeIdx++)
{
for (var transIdx = 0; transIdx < 999; transIdx++)
{
clicks();
waitOcrKeywords([":", "：", "无"], 3000);
var item = getItemInfo();
var hasItem = item.hasItem;
var itemCount = item.count;
if (!hasItem)
{
practiceSwipeLeft();
practiceSwipeDown();
break;
}
repeatSwipe(clicks, 2);
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input(itemCount.toString() + "\n");
let r = waitOcrKeywords(cswp, 3000);
if (r === "完成")
{
practiceSwipeDown();
clicks();
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input(targetId + "\n");
waitOcrKeywords(cswp, 3000);
}
repeatSwipe(practiceSwipeDown, 15);
sleep(240);
repeatSwipe(clicks, 2);
var ok = false;
var t = waitOcrKeywords(["成功", "额度", "解锁", "在线", "失败", "输入数据"], 3000);
if (t === "输入数据")
{
practiceSwipeLeft();
continue;
}
if (t === "成功")
{
ok = true;
}
if (ok === false)
{
exit();
}
}
}
exit();
}
// 按模式启动游戏流程（签到或传送）
function startGame(mode)
{
runMode = mode;
if (runMode === "sign")
{
accounts = loadAccounts();
if (accounts.length === 0)
{
toast("账号列表为空，请先添加账号");
addAccount();
return false;
}
// 按签到日期过滤，已签到的账号本次直接跳过
var queueInfo = buildSignQueue();
signQueue = queueInfo.pending;
if (signQueue.length === 0)
{
// 全部账号今日已签到，直接提示并退回主菜单，不进入登录流程
toast("今日（" + getTodayDateStr() + "）" + accounts.length + "个账号均已签到，今日无需重复签到");
return false;
}
if (queueInfo.skipped > 0)
{
toast("今日待签到" + signQueue.length + "个，已跳过" + queueInfo.skipped + "个今日已签到账号");
}
}
else if (runMode === "transfer")
{
while (true)
{
let inputStr = dialogs.rawInput("请输入目标编号(3~8位纯数字)", "");
if (inputStr === null)
{
return false;
}
inputStr = inputStr.trim();
if (/^\d{3,8}$/.test(inputStr))
{
targetId = inputStr;
break;
}
}
}
cX = w / 2;
cY = h / 2;
currIdx = 0;
resetLoginKeywordFlags();
isLogging = false;
initGameScript();
if (runMode === "transfer")
{
hallAction_ItemTransfer();
}
else
{
// 循环签到：持续读取屏幕文本，处理欢迎页登录与大厅签到
while (true)
{
var text = APIRead();
if (handleSignLoginKeyword(text))
{
continue;
}
if (!isLogging && (text.includes("手工输入") || text.includes("开始登录")))
{
doLogin();
}
else if (hallKeywords.some(kw => text.includes(kw)))
{
hallAction_Sign();
}
}
}
}
// 静默更新：下载放到子线程并限时等待，避免网络卡住时阻塞主菜单；文件写入仍在主线程完成
function runSilentUpdateOnce()
{
var holder = { done: false, remote: null, error: "" };
var th = threads.start(function ()
{
try
{
holder.remote = fetchRemoteScript();
holder.error = lastUpdateError;
}
catch (e)
{
holder.error = String(e);
}
holder.done = true;
});
try
{
th.join(10000);
}
catch (e)
{
}
if (!holder.done)
{
toast("自动更新：网络超时，本次跳过");
return false;
}
if (!holder.remote)
{
toast("静默更新失败：" + (holder.error || "无法获取远端脚本"));
return false;
}
if (holder.remote.code <= VERSION_CODE)
{
removeUpdateBackup();
return false;
}
return installUpdate(holder.remote.bytes, holder.remote.name, true);
}
// 显示主菜单并分发用户选择
function showMainMenu()
{
// 菜单循环：反复显示主菜单并分发用户选择，返回跑图后退出
while (true)
{
// 静默检测更新：开关开启且本轮尚未打过标记时，打标记并执行一次，之后返回菜单不再重复扫描
if (enableAutoUpdate && !hasSilentUpdateChecked)
{
hasSilentUpdateChecked = true;
runSilentUpdateOnce();
}
let select = dialogs.select("主菜单", [
"跑图/刷怪",
"签到",
"传送物品，游戏焦点药材分类，月光宝盒放在最后",
"添加账号",
"账号列表",
"设置",
"检测更新",
"退出脚本"
]);
if (select === 0)
{
return true;
}
else if (select === 1)
{
startGame("sign");
}
else if (select === 2)
{
startGame("transfer");
}
else if (select === 3)
{
addAccount();
}
else if (select === 4)
{
manageAccounts();
}
else if (select === 5)
{
openSettingMenu();
}
else if (select === 6)
{
manualCheckUpdate(false);
}
else
{
exit();
}
}
}
let cfg = loadValidConfig();
if (cfg === null)
{
toast("配置文件损坏或不存在");
openSettingMenu();
}
else
{
applyConfig(cfg);
}
let runFlag = showMainMenu();
if (!runFlag)
{
exit();
}
initGameScript();
// 解析更新源配置，拆出仓库路径与分支
function parseUpdateRepo()
{
var raw = String(UPDATE_REPO || "");
if (!raw)
{
return null;
}
var branch = "main";
var repoPath = raw;
var at = raw.indexOf("@");
if (at >= 0)
{
repoPath = raw.substring(0, at);
branch = raw.substring(at + 1) || "main";
}
if (repoPath.indexOf("/") < 0)
{
return null;
}
return { repoPath: repoPath, branch: branch };
}
// 统一使用不缓存的请求头，降低 CDN 旧缓存命中概率
function buildNoCacheOptions()
{
return { headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }, timeout: 5000 };
}
// 生成候选下载地址：清单自带地址 → CDN → GitHub 原始文件
// 只使用 GitHub 原始文件地址：数据权威、无边缘缓存；jsDelivr 按路径缓存且刷新不可控，已弃用
// 生成候选下载地址：GitHub 原始地址优先，镜像代理兜底（手机只解析到 IPv6 时原始地址会连不上）
// 只使用镜像地址 gh-proxy.com 下载脚本：GitHub 原始域名在部分手机上只解析到 IPv6 导致连不上
// 生成候选下载地址：GitHub 原始地址优先，镜像 gh-proxy.com 作为最后兜底
function buildUpdateUrls(repoInfo, stamp)
{
var encodedName = encodeURIComponent(UPDATE_SCRIPT_NAME);
var path = repoInfo.repoPath + "/" + repoInfo.branch + "/" + encodedName;
return [
"https://raw.githubusercontent.com/" + path + stamp,
"https://gh-proxy.com/https://raw.githubusercontent.com/" + path + stamp
];
}
// 读取脚本内声明的版本号，用于 MD5 与清单不一致时的内容兜底判定
function readScriptText(bytes)
{
try
{
return String(new java.lang.String(bytes, "UTF-8"));
}
catch (e)
{
return "";
}
}
function readScriptVersionCode(bytes)
{
var text = readScriptText(bytes);
if (!text)
{
return -1;
}
var hit = text.match(/VERSION_CODE\s*=\s*(\d+)/);
if (hit && hit[1])
{
return parseInt(hit[1]);
}
return -1;
}
function readScriptVersionName(bytes)
{
var text = readScriptText(bytes);
var hit = text.match(/VERSION_NAME\s*=\s*"([^"]+)"/);
if (hit && hit[1])
{
return hit[1];
}
return "";
}
function readScriptChangeLog(bytes)
{
var text = readScriptText(bytes);
var hit = text.match(/VERSION_CHANGE_LOG\s*=\s*`([\s\S]*?)`;/);
if (hit && hit[1])
{
return hit[1];
}
return "";
}
// 下载更新包字节；失败返回 null
// 下载更新包字节：先走 AutoJs 的 http，失败再用 Java 连接兜底，失败原因记录到 lastUpdateError
function downloadUpdateBytes(url)
{
var startTime = Date.now();
var bytes = downloadByHttp(url);
if (bytes && bytes.length > 0)
{
return bytes;
}
if (Date.now() - startTime <= 6000)
{
bytes = downloadByIpv4(url);
if (bytes && bytes.length > 0)
{
return bytes;
}
}
if (Date.now() - startTime > 12000)
{
return null;
}
return downloadByJava(url);
}
function downloadByHttp(url)
{
try
{
var resp = http.get(url, buildNoCacheOptions());
if (!resp || resp.statusCode !== 200)
{
lastUpdateError = "http 状态 " + (resp ? resp.statusCode : "无响应");
return null;
}
var b = resp.body.bytes();
return b && b.length > 0 ? b : null;
}
catch (e)
{
lastUpdateError = "http 异常：" + e;
return null;
}
}
// 强制 IPv4 直连：解析 A 记录后连 IP，但用 SNI + HTTPS 主机名校验，证书仍按域名验证
function downloadByIpv4(rawUrl)
{
try
{
var uri = new java.net.URL(rawUrl);
var host = String(uri.getHost());
var file = String(uri.getFile());
var addrs = java.net.InetAddress.getAllByName(host);
var ips = [];
for (var i = 0; i < addrs.length; i++)
{
if (addrs[i] instanceof java.net.Inet4Address)
{
ips.push(addrs[i]);
}
}
if (ips.length <= 0)
{
lastUpdateError = "DNS 无 IPv4 记录";
return null;
}
for (var k = 0; k < ips.length; k++)
{
var bytes = requestOverIpv4(host, ips[k], file);
if (bytes && bytes.length > 0)
{
return bytes;
}
}
return null;
}
catch (e)
{
lastUpdateError = "IPv4 直连异常：" + e;
return null;
}
}
function requestOverIpv4(host, ip, file)
{
try
{
var ctx = javax.net.ssl.SSLContext.getDefault();
var socket = ctx.getSocketFactory().createSocket();
var params = socket.getSSLParameters();
params.setEndpointIdentificationAlgorithm("HTTPS");
var names = new java.util.ArrayList();
names.add(new javax.net.ssl.SNIHostName(host));
params.setServerNames(names);
socket.setSSLParameters(params);
socket.connect(new java.net.InetSocketAddress(ip, 443), 4000);
socket.setSoTimeout(7000);
var req = "GET " + file + " HTTP/1.1\r\nHost: " + host + "\r\nUser-Agent: Mozilla/5.0\r\nAccept: */*\r\nAccept-Encoding: identity\r\nConnection: close\r\n\r\n";
var out = socket.getOutputStream();
out.write(new java.lang.String(req).getBytes("UTF-8"));
out.flush();
var input = socket.getInputStream();
var buffer = java.io.ByteArrayOutputStream();
var chunk = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
while (true)
{
var n = input.read(chunk);
if (n < 0)
{
break;
}
buffer.write(chunk, 0, n);
}
input.close();
socket.close();
return extractHttpBody(buffer.toByteArray());
}
catch (e)
{
lastUpdateError = "IPv4 连接 " + ip.getHostAddress() + " 失败：" + e;
return null;
}
}
// 从原始响应里取正文，并处理 chunked 分块传输
function extractHttpBody(raw)
{
try
{
var text = String(new java.lang.String(raw, "UTF-8"));
var split = text.indexOf("\r\n\r\n");
if (split < 0)
{
return null;
}
var head = text.substring(0, split).toLowerCase();
var bodyText = text.substring(split + 4);
if (head.indexOf("transfer-encoding: chunked") >= 0)
{
bodyText = decodeChunked(bodyText);
}
return new java.lang.String(bodyText).getBytes("UTF-8");
}
catch (e)
{
return null;
}
}
function decodeChunked(bodyText)
{
var out = "";
var pos = 0;
while (true)
{
var lineEnd = bodyText.indexOf("\r\n", pos);
if (lineEnd < 0)
{
break;
}
var sizeLine = bodyText.substring(pos, lineEnd);
var semi = sizeLine.indexOf(";");
if (semi >= 0)
{
sizeLine = sizeLine.substring(0, semi);
}
var size = parseInt(sizeLine, 16);
if (isNaN(size) || size <= 0)
{
break;
}
out += bodyText.substring(lineEnd + 2, lineEnd + 2 + size);
pos = lineEnd + 2 + size + 2;
}
return out;
}
function downloadByJava(url)
{
try
{
var conn = new java.net.URL(url).openConnection();
conn.setConnectTimeout(4000);
conn.setReadTimeout(7000);
conn.setRequestProperty("User-Agent", "Mozilla/5.0");
conn.setRequestProperty("Cache-Control", "no-cache");
var code = conn.getResponseCode();
if (code !== 200)
{
lastUpdateError = "java 状态 " + code;
return null;
}
var input = conn.getInputStream();
var buffer = java.io.ByteArrayOutputStream();
var chunk = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
while (true)
{
var n = input.read(chunk);
if (n < 0)
{
break;
}
buffer.write(chunk, 0, n);
}
input.close();
var bytes = buffer.toByteArray();
return bytes && bytes.length > 0 ? bytes : null;
}
catch (e)
{
lastUpdateError = "java 异常：" + e;
return null;
}
}
// 直接下载远端整份脚本，取版本号最高的一份；失败返回 null
// 单次扫描远端脚本：按候选地址依次尝试一遍，拿到第一份可解析的脚本就返回（一次启动只扫一轮）
function fetchRemoteScript()
{
var repoInfo = parseUpdateRepo();
if (!repoInfo)
{
return null;
}
var stamp = "?t=" + Date.now();
var urls = buildUpdateUrls(repoInfo, stamp);
for (var i = 0; i < urls.length; i++)
{
var bytes = downloadUpdateBytes(urls[i]);
if (!bytes || bytes.length <= 0)
{
continue;
}
var code = readScriptVersionCode(bytes);
if (code <= 0)
{
continue;
}
return { bytes: bytes, code: code, name: readScriptVersionName(bytes) || String(code), changeLog: readScriptChangeLog(bytes), url: urls[i] };
}
return null;
}
// 主菜单手动检测更新：显示新版本号与更新日志，询问是否下载
// 主菜单手动检测更新：下载整份脚本比对版本号，有新版本才弹窗询问
// 检测更新：直接下载整份脚本比对版本号；silent 为真表示自动更新，找到新版本不询问直接覆盖
function manualCheckUpdate(silent)
{
if (!silent)
{
toast("正在检测更新，请稍后");
}
var remote = fetchRemoteScript();
if (!remote)
{
toast((silent ? "静默更新失败：" : "检测更新失败：") + (lastUpdateError || "无法获取远端脚本"));
return false;
}
if (remote.code <= VERSION_CODE)
{
removeUpdateBackup();
if (!silent)
{
toast("已是最新版本 " + VERSION_NAME);
}
return false;
}
if (silent)
{
return installUpdate(remote.bytes, remote.name, true);
}
var tip = "新版本：" + remote.name + "\n当前版本：" + VERSION_NAME + "\n\n更新日志：\n" + (remote.changeLog || "无");
if (!dialogs.confirm("发现新版本 " + remote.name, tip + "\n\n是否下载并更新？"))
{
return false;
}
return installUpdate(remote.bytes, remote.name, false);
}


// 覆盖当前脚本并重启自身
// 回滚：用备份覆盖回目标脚本
function restoreUpdateBackup(targetPath, bakPath)
{
try
{
if (files.exists(bakPath))
{
files.copy(bakPath, targetPath);
}
}
catch (e)
{
}
}
// 确认没有新版本时，清掉历史遗留的备份文件
function removeUpdateBackup()
{
var selfPath = String(engines.myEngine().getSource() || "");
var bakPaths = [];
if (selfPath && selfPath.indexOf(".js") >= 0)
{
bakPaths.push(selfPath + ".bak");
}
bakPaths.push(files.getSdcardPath() + "/msyj-helper/" + UPDATE_SCRIPT_NAME + ".bak");
for (var i = 0; i < bakPaths.length; i++)
{
try
{
if (files.exists(bakPaths[i]))
{
files.remove(bakPaths[i]);
}
}
catch (e)
{
}
}
}
function installUpdate(bytes, newVersion, silent)
{
var selfPath = String(engines.myEngine().getSource() || "");
if (!selfPath || selfPath.indexOf(".js") < 0)
{
if (!silent)
{
toast("无法定位当前脚本路径，更新已放弃");
}
return false;
}
// 缓存目录下的临时脚本会被 AutoJs 回收，改用固定路径承接更新
var isTempScript = selfPath.indexOf("/cache/tmp-scripts/") >= 0;
var targetPath = selfPath;
if (isTempScript)
{
var stableDir = files.getSdcardPath() + "/msyj-helper/";
files.ensureDir(stableDir);
targetPath = stableDir + UPDATE_SCRIPT_NAME;
}
var bakPath = targetPath + ".bak";
try
{
if (files.exists(targetPath))
{
if (files.exists(bakPath))
{
files.remove(bakPath);
}
files.copy(targetPath, bakPath);
}
files.writeBytes(targetPath, bytes);
}
catch (e)
{
restoreUpdateBackup(targetPath, bakPath);
if (!silent)
{
toast("写入脚本失败，已回滚到旧版本：" + e);
}
return false;
}
if (!files.exists(targetPath))
{
if (!silent)
{
toast("更新写入后文件不存在，已终止更新");
}
return false;
}
var written = files.readBytes(targetPath);
if (!written || written.length !== bytes.length)
{
restoreUpdateBackup(targetPath, bakPath);
if (!silent)
{
toast("更新文件长度异常，已回滚到旧版本");
}
return false;
}
// 更新成功：删除备份，不再保留旧脚本
try
{
if (files.exists(bakPath))
{
files.remove(bakPath);
}
}
catch (e)
{
}
toast("已更新到 " + newVersion + "，正在重启脚本");
try
{
engines.all().forEach(function (e)
{
if (e.id !== engines.myEngine().id)
{
e.forceStop();
}
});
}
catch (e)
{
}
try
{
engines.execScriptFile(targetPath);
}
catch (e)
{
if (!silent)
{
toast("重启脚本失败，请手动运行：" + targetPath);
}
exit();
return false;
}
try
{
engines.myEngine().forceStop();
}
catch (e)
{
}
exit();
return true;
}
// 初始化脚本：申请 OCR 与截图权限
function initGameScript()
{
toast("请选择共享整个屏幕");
ocr.mode = "paddle";
if (typeof ocr === "undefined")
{
toast("PaddleOCR模块未加载，脚本退出");
exit();
}
auto.waitFor();
engines.all().forEach(e =>
{
if (e.id != engines.myEngine().id)
{
e.forceStop();
}
});
ui.run(() =>
{
});
let captureOk = requestScreenCapture();
if (!captureOk)
{
toast("未授予屏幕共享权限，脚本退出");
exit();
}
let isGameForeground = false;
let guardRun = true;
const gameGuardThread = threads.start(function ()
{
while (guardRun && !threads.currentThread().isInterrupted())
{
let pkg = currentPackage();
isGameForeground = (pkg === "com.happydqy.msyjdzb" || pkg === "com.happydqy.msyj");
if (!isGameForeground && !jyqtsh)
{
clickPermissionDialog();
}
sleep(240);
}
});
events.on("exit", function ()
{
guardRun = false;
if (gameGuardThread && gameGuardThread.isAlive())
{
gameGuardThread.interrupt();
}
});
toast("10秒后启动，请关闭读屏软件");
sleep(10000);
}
var isBattleMode = false, slideMode = "down", isLoginMode = false;
var mapCoordFailCount = 0, lastRunTime = 0, prevCoord = null, currentCoord = null;
var hasAliOversea = false;
var hasClickedDinghao = false;
const RUN_INTERVAL = 260, DETECT_INTERVAL = 260, BATTLE_INTERVAL = 260;
const MAX_FAIL_COUNT = 6;
// 重置全部战斗相关状态
function fullBattleReset()
{
isBattleMode = false;
aliveTargets = [];
hasPlayedCardInThisBattle = false;
hasUsedFirstRoundSpecial = false;
firstHandDecided = false;
enemyFirstAttack = false;
hasRetreatedThisBattle = false;
mapCoordFailCount = 0;
prevCoord = null;
lastRunTime = 0;
needUpdateAfterSlide = false;
}
var COLOR_DEAD_RED_RATIO = 0.18;
var COLOR_EMPTY_PURPLE_RATIO = 0.15;
var COLOR_SAMPLE_STEP = 3;
var TARGET_SLOT_W = 0.17, TARGET_SLOT_H = 0.10;
var TEAM_SLOT_W = 0.17, TEAM_SLOT_H = 0.10;
// 截取当前屏幕图像，兼容多种截图接口
function grabScreen()
{
var t = null;
try
{
t = captureScreen();
}
catch (e)
{
}
if (t)
{
return t;
}
try
{
if (typeof images !== "undefined" && images && typeof images.captureScreen === "function")
{
t = images.captureScreen();
}
}
catch (e)
{
}
return t;
}
// 批量探测槽位颜色，返回各槽红/紫/高亮占比与平均亮度
function colorProbeSlots(slots, bwRatio, bhRatio)
{
var res = [];
var img = null;
try
{
img = grabScreen();
if (!img)
{
return res;
}
var capType = "";
try
{
capType = img.getClass ? img.getClass().getSimpleName() : typeof img;
}
catch (e)
{
}
if (capType === "Bitmap")
{
try
{
img = images.fromBitmap(img);
}
catch (e)
{
return res;
}
}
var bw = Math.round(w * bwRatio), bh = Math.round(h * bhRatio);
for (var i = 0; i < slots.length; i++)
{
var s = slots[i];
if (!s)
{
res.push(null); continue;
}
var x = Math.round(s.x - bw / 2), y = Math.round(s.y - bh / 2);
var clip = images.clip(img, x, y, bw, bh);
if (!clip)
{
res.push(null); continue;
}
var small = clip;
try
{
if (typeof images.scale === "function")
{
var sc = images.scale(clip, 0.5, 0.5);
if (sc)
{
small = sc;
}
}
}
catch (e)
{
}
var sw = small.getWidth(), sh = small.getHeight();
if (!sw || !sh)
{
small = clip; sw = clip.getWidth(); sh = clip.getHeight();
}
var total = 0, redCnt = 0, purpleCnt = 0, hiCnt = 0, vSum = 0;
for (var py = 0; py < sh; py += COLOR_SAMPLE_STEP)
{
for (var px = 0; px < sw; px += COLOR_SAMPLE_STEP)
{
var c = images.pixel(small, px, py);
var r = (c >> 16) & 0xff, g = (c >> 8) & 0xff, b = c & 0xff;
var v = Math.max(r, Math.max(g, b));
total++;
vSum += v;
if (v > 190)
{
hiCnt++;
}
if (r > 110 && g < 80 && b < 80 && (r - g) > 60 && (r - b) > 60)
{
redCnt++;
}
else if (r > 70 && b > 90 && g < r * 0.9 && g < b * 0.9)
{
purpleCnt++;
}
}
}
try
{
if (small !== clip)
{
small.recycle();
}
}
catch (e)
{
}
clip.recycle();
res.push({ red: total ? redCnt / total : 0, purple: total ? purpleCnt / total : 0, hl: total ? hiCnt / total : 0, avgV: total ? vSum / total : 0 });
}
}
catch (e)
{
}
finally
{
try
{
if (img)
{
img.recycle();
}
}
catch (e)
{
}
}
return res;
}
// 根据探测结果判断该槽是否存活
function isProbeAlive(p)
{
if (!p)
{
return true;
}
if (p.red >= COLOR_DEAD_RED_RATIO)
{
return false;
}
if (p.purple >= COLOR_EMPTY_PURPLE_RATIO)
{
return false;
}
return true;
}
// 查看我方成员状态并点击战败成员头像
function checkOurTeamHp()
{
// 用户开启系统AI战斗策略时，我方成员血量的查看与点击恢复交给游戏系统AI，脚本不再执行
if (enableSystemAIBattle)
{
return;
}
var scanCount = ourTeamPos.length;
var list = [];
for (var i = 0; i < scanCount; i++)
{
list.push(ourTeamPos[i]);
}
var probes = colorProbeSlots(list, TEAM_SLOT_W, TEAM_SLOT_H);
if (probes.length === 0)
{
return;
}
for (var j = 0; j < scanCount; j++)
{
var p = ourTeamPos[j];
if (!p)
{
continue;
}
if (!isProbeAlive(probes[j]))
{
click(p.x, p.y);
sleep(240);
}
}
}
// 敌方先手时撤退并重新进入
function targetFirstActionRetreat()
{
if (!enablePet || !enableRetreatOnEnemyFirst)
{
return;
}
if (hasRetreatedThisBattle)
{
return;
}
hasRetreatedThisBattle = true;
exitToHall();
enterMapFlow();
unEquipPetFinal();
restoreUserOriginalMode();
}
// 解开上下选的数字验证
function solveNumberPuzzle(currentText)
{
const match = /数字(\d)/.exec(currentText);
if (!match)
{
return false;
}
const targetNum = parseInt(match[1]);
if (isNaN(targetNum) || targetNum < 0 || targetNum > 9)
{
return false;
}
repeatSwipe(practiceSwipeUp, targetNum);
repeatSwipe(practiceSwipeDown, targetNum);
practiceSwipeRight();
waitOcrKeywords(["机会", "正确"], 1500);
sleep(240);
return true;
}
// 发起进攻：选卡、选目标、再确认选卡
function launchAttack()
{
// 用户开启系统AI战斗策略时，战斗交由游戏系统AI接管，脚本不再选卡与攻击
if (enableSystemAIBattle)
{
return;
}
sendUserSelectCard();
selectTargetAndAttack();
hasPlayedCardInThisBattle = false;
sendUserSelectCard();
}
// 按配置选择卡牌
function sendUserSelectCard()
{
// 已出过牌、尸体模式、或用户开启系统AI战斗策略时，均不再点选卡牌
if (hasPlayedCardInThisBattle || teamMode === 2 || enableSystemAIBattle)
{
return;
}
let currentText = waitOcrKeywords(zdxkp, 1500);
if (currentText === "请等待" || currentText === "禁止")
{
hasPlayedCardInThisBattle = true;
return;
}
if (currentText === "选卡牌")
{
for (let i = 0; i < CARD_COUNT; i++)
{
click(cdX[i], cdY);
}
hasPlayedCardInThisBattle = true;
launchAttack();
return;
}
for (let i = 0; i < CARD_COUNT; i++)
{
click(cdX[i], cdY);
}
hasPlayedCardInThisBattle = true;
}
// 关闭权限申请弹窗
function clickPermissionDialog()
{
launch("com.happydqy.msyjdzb");
const permissionWords = ["始终允许", "知道了", "挂断", "允许"];
const totalTimeout = 500;
const startTime = Date.now();
while (Date.now() - startTime < totalTimeout)
{
for (let word of permissionWords)
{
let btn = className("android.widget.Button").textContains(word).findOne(40);
if (btn)
{
btn.click();
return;
}
}
}
}
// 使用 OCR 识别当前屏幕文本
function ocrRead()
{
const midTextRegion = [w * 0.1, h * 0.20, w * 0.80, h * 0.24];
let fullImg = null, clipImg = null;
try
{
fullImg = captureScreen();
if (!fullImg)
{
return "";
}
clipImg = images.clip(fullImg, midTextRegion[0], midTextRegion[1], midTextRegion[2], midTextRegion[3]);
if (!clipImg)
{
return "";
}
let rawTxt = ocr.recognizeText(clipImg) + "";
let cleanTxt = rawTxt.replace(/[\s\n\r\t]/g, "");
return cleanTxt;
}
catch (err)
{
return "";
}
finally
{
if (clipImg)
{
try
{
clipImg.recycle();
}
catch (e)
{
}
}
if (fullImg)
{
try
{
fullImg.recycle();
}
catch (e)
{
}
}
}
}
// 通过本地接口读取当前屏幕文本
function APIRead()
{
try
{
let res = http.get("http://127.0.0.1:18080/?n=1", { timeout: 300 });
if (res.statusCode != 200)
{
return "";
}
let body = res.body.string();
if (!body || body.trim() === "")
{
return "";
}
return body.replace(/[\s\n\r\t]/g, "");
}
catch (e)
{
return "";
}
}
// 召唤神将
function summonGod()
{
const ONE_HOUR = 3600 * 1000;
if (mapname && lastGodSummonMap && mapname !== lastGodSummonMap)
{
lastGodSummonTime = 0;
}
if (lastGodSummonTime && Date.now() - lastGodSummonTime < ONE_HOUR)
{
return;
}
click(ourTeamPos[2].x, ourTeamPos[2].y);
repeatSwipe(practiceSwipeDown, 4);
clicks();
let lastText = "";
for (let i = 0; i < 999; i++)
{
sleep(240);
let currentText = APIRead();
if (currentText.includes(selectedGodItem))
{
clicks();
let r = waitOcrKeywords([selectedGodItem + "召唤", "不能", "无法"], 10000);
if (r !== selectedGodItem + "召唤")
{
lastGodSummonMap = mapname;
lastGodSummonTime = Date.now() - 3300 * 1000;
}
if (r === selectedGodItem + "召唤")
{
lastGodSummonMap = mapname;
lastGodSummonTime = Date.now();
saveValidConfig(['lastGodSummonTime', 'lastGodSummonMap']);
}
repeatSwipe(practiceSwipeLeft, 2);
return;
}
if (lastText !== "" && currentText === lastText)
{
break;
}
lastText = currentText;
practiceSwipeDown();
}
repeatSwipe(practiceSwipeLeft, 2);
enableGodSummon = false;
}
// 恢复已装备的精灵
function restoreEquipSpirit()
{
if (teamMode === 2)
{
return;
}
if (!enableRestoreEquipSpirit)
{
return;
}
practiceSwipeLeft();
clicks();
repeatSwipe(practiceSwipeDown, 6);
clicks();
for (let i = 0; i < 6; i++)
{
clicks();
if (waitOcrKeywords(["称号", "没有"], 3000) === "称号")
{
break;
}
}
if (waitOcrKeywords(["称号", "没有"], 3000) === "没有")
{
repeatSwipe(practiceSwipeLeft, 2);
clicks();
return;
}
repeatSwipe(practiceSwipeDown, 6);
clicks();
for (let i = 0; i < 3; i++)
{
repeatSwipe(clicks, 2);
waitOcrKeywords(["不足", "不够", "失败", "成功"], 3000);
practiceSwipeDown();
}
repeatSwipe(practiceSwipeLeft, 4);
clicks();
enableRestoreEquipSpirit = false;
}
// 恢复天罡气
function burstTianGang()
{
if (!enableTianGangBlast || teamMode > 0 || !mapname || lingwuLimit < 110)
{
return;
}
click(ourTeamPos[2].x, ourTeamPos[2].y);
repeatSwipe(practiceSwipeDown, 5);
clicks();
let lastText = "";
for (let i = 0; i < 999; i++)
{
sleep(240);
let currentText = APIRead();
if (currentText.includes("天罡丹"))
{
clicks();
waitOcrKeywords(["成功", "失败"], 3000);
repeatSwipe(practiceSwipeLeft, 2);
return;
}
if (lastText !== "" && currentText === lastText)
{
break;
}
lastText = currentText;
practiceSwipeDown();
}
repeatSwipe(practiceSwipeLeft, 2);
enableTianGangBlast = false;
}
// 执行回血流程
function healModeProcess()
{
if (teamMode === 2)
{
backAndExitHeal(1);
return;
}
refreshLingwuLimitBy();
restoreEquipSpirit();
sfhqzy = true;
sfhlmsgjc = false;
practiceSwipeLeft();
clicks();
practiceSwipeDown();
clicks();
for (let r = 0; r < 2; r++)
{
practiceSwipeDown();
clicks();
sleep(240);
}
repeatSwipe(practiceSwipeLeft, 2);
clicks();
if (!enableBath)
{
backAndExitHeal(1);
return;
}
repeatSwipe(practiceSwipeDown, 6);
clicks();
for (let i = 0; i < 6; i++)
{
clicks();
if (waitOcrKeywords(["称号", "没有"], 3000) === "称号")
{
break;
}
}
if (waitOcrKeywords(["称号", "没有"], 3000) === "没有")
{
backAndExitHeal(2);
return;
}
repeatSwipe(practiceSwipeDown, 14);
let petCount = 1;
const healLoopFixed = 3;
repeatSwipe(clicks, 2);
if (enablePet)
{
petCount = maxPetCount + 1;
}
for (let stateIdx = 0; stateIdx < healLoopFixed; stateIdx++)
{
let currentRunNum = stateIdx === 0 ? petCount : 1;
for (let petIdx = 0; petIdx < currentRunNum; petIdx++)
{
repeatSwipe(clicks, 3);
let r = waitOcrKeywords(["不足", "不够", "失败", "成功"], 3000);
if (r === "失败")
{
practiceSwipeDown();
continue;
}
if (r === "不够" || r === "不足")
{
backAndExitHeal(4);
return;
}
repeatSwipe(clicks, 3);
r = waitOcrKeywords(["不足", "不够", "失败", "成功"], 3000);
if (r === "失败")
{
practiceSwipeDown();
continue;
}
if (r === "不够" || r === "不足")
{
backAndExitHeal(5);
return;
}
practiceSwipeDown();
}
practiceSwipeLeft();
practiceSwipeDown();
clicks();
}
backAndExitHeal(5);
}
// 滑动返回并退出回血流程
function backAndExitHeal(leftSwipeCount)
{
repeatSwipe(practiceSwipeLeft, leftSwipeCount);
clicks();
enterMapFlow();
restoreUserOriginalMode();
}
// 创建副本
function createDungeon()
{
practiceSwipeLeft();
clicks();
repeatSwipe(practiceSwipeDown, 7);
repeatSwipe(clicks, 2);
repeatSwipe(practiceSwipeDown, dungeonCategoryList[selectedDungeonCategory].categorySlideCount);
sleep(240);
clicks();
let r = waitOcrKeywords(["不得入内"], 500);
if (r)
{
enableCreateDungeon = false;
backAndExitHeal(3);
return;
}
repeatSwipe(practiceSwipeDown, dungeonCategoryList[selectedDungeonCategory].dungeons[selectedDungeonIndex].slideCount);
sleep(240);
repeatSwipe(clicks, 2);
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input("1\n");
r = waitOcrKeywords(cswp, 3000);
practiceSwipeDown();
clicks();
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input("1\n");
r = waitOcrKeywords(cswp, 3000);
practiceSwipeDown();
clicks();
waitOcrKeywords(["输入数据", "输入数字", "输入密码"], 3000);
sleep(300);
input("A0Bh13Jm\n");
r = waitOcrKeywords(cswp, 3000);
repeatSwipe(practiceSwipeDown, 6);
repeatSwipe(clicks, 2);
r = waitOcrKeywords(["不足", "不够", "失败", "成功"], 3000);
if (r !== "成功")
{
enableCreateDungeon = false;
}
backAndExitHeal(4);
}
// 进入地图流程
function enterMapFlow()
{
practiceSwipeLeft();
clicks();
repeatSwipe(practiceSwipeDown, 7);
if (waitOcrKeywords(["育兽", "副本"], 3000) === "育兽")
{
backAndExitHeal(2);
return;
}
clicks();
let slideTimes = enableCreateDungeon ? 1 : 2;
repeatSwipe(practiceSwipeDown, slideTimes);
repeatSwipe(clicks, 2);
sffb = true;
let st = Date.now();
mapname = "";
let hitWord = "";
while (Date.now() - st <= 3000)
{
let txt = APIRead();
mapname = waitOcrKeywords(mapList, 200);
if (mapname)
{
break;
}
if (txt.includes("无"))
{
hitWord = "无";
break;
}
if (txt.includes("不存在") || txt.includes("已经"))
{
hitWord = "不存在";
break;
}
}
if (hitWord && enableCreateDungeon)
{
slideTimes = hitWord === "无" ? 2 : 3;
sffb = false;
sfhlmsgjc = false;
repeatSwipe(practiceSwipeLeft, slideTimes);
clicks();
createDungeon();
return;
}
if (hitWord && !enableCreateDungeon)
{
slideTimes = hitWord === "无" ? 2 : 3;
sffb = false;
sfhlmsgjc = false;
repeatSwipe(practiceSwipeLeft, slideTimes);
repeatSwipe(clicks, 3);
}
if (!mapname)
{
mapname = waitOcrKeywords(mapList, 3000);
}
if (mapname === "兜率宫" && sffb)
{
sfhlmsgjc = true;
}
sleep(300);
// 脚本启动后首次进入地图：先清掉上一轮可能残留的魔兽，避免装备标记为假导致卸载被跳过
if (!hasUnloadedPetOnFirstMapEnter)
{
hasUnloadedPetOnFirstMapEnter = true;
isEquipPetFlag = true;
}
unEquipPetFinal();
burstTianGang();
}
// 刷新领悟上限
function refreshLingwuLimitBy()
{
if (sfhqzy)
{
return;
}
checkArmySlotCount();
checkCardCount();
if (defaultEnablePractice || enableTianGangBlast)
{
checkLingwuValue();
practiceSwipeLeft();
clicks();
practiceSwipeDown();
clicks();
repeatSwipe(practiceSwipeDown, 5);
clicks();
repeatSwipe(practiceSwipeDown, 10);
let findKangli = waitOcrKeywords(["抗力"], 3000);
let targetValue = null;
if (findKangli)
{
let txt = APIRead();
let matchArr = txt.match(/1000|2000|3000/g);
if (matchArr && matchArr.length > 0)
{
targetValue = Number(matchArr[0]);
}
}
if (targetValue && lingwuNumMap.hasOwnProperty(targetValue))
{
lingwuLimit = lingwuNumMap[targetValue];
saveValidConfig(['lingwuLimit']);
}
repeatSwipe(practiceSwipeLeft, 3);
clicks();
}
}
// 检查并扩充军团槽位数量
function checkArmySlotCount()
{
if (!enableCalibPetCount)
{
return;
}
practiceSwipeLeft();
practiceSwipeDown();
repeatSwipe(clicks, 2);
repeatSwipe(practiceSwipeDown, 5);
waitOcrKeywords(["军团槽位:"], 3000);
let txt = APIRead();
let matchArr = txt.match(/军团槽位[:：](\d+)/);
if (matchArr && matchArr.length > 0)
{
let tempVal = Number(matchArr[1]);
if (!isNaN(tempVal) && tempVal >= 2 && tempVal <= 4)
{
maxPetCount = tempVal - 1;
saveValidConfig(['maxPetCount']);
}
}
repeatSwipe(practiceSwipeLeft, 2);
clicks();
}
// 检查卡牌数量
function checkCardCount()
{
if (!enableCalibCardCount)
{
return;
}
practiceSwipeLeft();
repeatSwipe(clicks, 1);
practiceSwipeDown();
repeatSwipe(clicks, 2);
repeatSwipe(practiceSwipeDown, 9);
waitOcrKeywords(["卡片数:"], 3000);
let txt = APIRead();
let matchArr = txt.match(/卡片数[:：](\d+)/);
if (matchArr && matchArr.length > 0)
{
let tempVal = Number(matchArr[1]);
if (!isNaN(tempVal) && tempVal >= 1 && tempVal <= 5)
{
CARD_COUNT = tempVal;
saveValidConfig(['CARD_COUNT']);
}
}
repeatSwipe(practiceSwipeLeft, 3);
clicks();
}
// 检查领悟值并处理超限
function checkLingwuValue()
{
practiceSwipeLeft();
practiceSwipeDown();
repeatSwipe(clicks, 2);
repeatSwipe(practiceSwipeDown, 3);
waitOcrKeywords(["领悟"], 3000);
let ocrText = APIRead();
let matchArr = ocrText.match(/当前(\d+)点/);
if (matchArr && matchArr.length > 0)
{
let tempVal = Number(matchArr[1]);
if (!isNaN(tempVal) && tempVal >= 0 && tempVal <= 120)
{
totalLingwu = tempVal;
}
}
repeatSwipe(practiceSwipeLeft, 2);
clicks();
}
// 退出房间转入修炼流程
function handleExitRoomToPractice()
{
exitToHall();
checkLingwuValue();
if (defaultEnablePractice && totalLingwu >= lingwuLimit)
{
doPracticeFlow();
return;
}
backAndExitHeal(1);
}
// 执行修炼流程
function doPracticeFlow()
{
if (lingwuLimit === 100 && selectedPracticeSlideCount >= 9)
{
selectedPracticeSlideCount = 2;
saveValidConfig(['selectedPracticeSlideCount']);
}
practiceSwipeLeft();
clicks();
practiceSwipeDown();
clicks();
repeatSwipe(practiceSwipeDown, 5);
clicks();
repeatSwipe(practiceSwipeDown, selectedPracticeSlideCount);
clicks();
let r = waitOcrKeywords(practiceStartKeywords, 3000);
if (r === "修炼中")
{
practiceSwipeLeft();
}
if (r === "开始修炼")
{
totalLingwu = 0;
thisBattleLingwu = 1;
}
if (r === "无法修炼")
{
tryPracticeOneByOne();
}
repeatSwipe(practiceSwipeUp, 5);
clicks();
repeatSwipe(practiceSwipeDown, 8);
repeatSwipe(clicks, 2);
r = waitOcrKeywords(practiceSuccessKeywords, 3000);
if (r === "提升能力")
{
practiceSwipeLeft();
}
else
{
repeatSwipe(practiceSwipeLeft, 2);
}
backAndExitHeal(1);
}
// 逐个尝试可用的修炼选项
function tryPracticeOneByOne()
{
for (let idx = 0; idx < practiceAttrList.length; idx++)
{
if (lingwuLimit === 100 && practiceSlideOptions[idx] >= 9)
{
break;
}
clicks();
repeatSwipe(practiceSwipeDown, practiceSlideOptions[idx]);
clicks();
let r = waitOcrKeywords(practiceStartKeywords, 3000);
if (r !== "无法修炼")
{
totalLingwu = 0;
thisBattleLingwu = 1;
selectedPracticeSlideCount = practiceSlideOptions[idx];
saveValidConfig(['selectedPracticeSlideCount']);
return;
}
}
defaultEnablePractice = false;
}
//装备魔兽
function equipPetFinal()
{
if (!enablePet || isEquipPetFlag || !mapname)
{
return;
}
click(ourTeamPos[1].x, ourTeamPos[1].y);
repeatSwipe(practiceSwipeDown, 15);
sleep(300);
var st = Date.now();
while (Date.now() - st < 500)
{
try
{
var ocrResult = APIRead();
if (ocrResult.includes("0槽") || ocrResult.includes("血"))
{
repeatSwipe(practiceSwipeLeft, 1);
return;
}
if (!ocrResult.includes("0槽") && /槽.{1,20}无/.test(ocrResult))
{
for (var round = 0; round < maxPetCount; round++)
{
var st = Date.now();
repeatSwipe(practiceSwipeRight, 2);
while (Date.now() - st < 3000)
{
try
{
ocrResult = APIRead();
if (ocrResult.includes("没有"))
{
repeatSwipe(practiceSwipeLeft, 2);
return;
}
if (ocrResult.includes("成功"))
{
isEquipPetFlag = true;
sleep(300);
break;
}
}
catch (e)
{
}
}
}
}
}
catch (e)
{
}
}
repeatSwipe(practiceSwipeLeft, 2);
}
//卸载魔兽
function unEquipPetFinal()
{
if (!enablePet || !isEquipPetFlag || !mapname)
{
return;
}
click(ourTeamPos[1].x, ourTeamPos[1].y);
practiceSwipeDown();
sleep(300);
var st = Date.now();
while (Date.now() - st < 500)
{
try
{
var ocrResult = APIRead();
if (ocrResult.includes("0槽") || /槽.{1,20}无/.test(ocrResult))
{
isEquipPetFlag = false;
repeatSwipe(practiceSwipeLeft, 1);
return;
}
}
catch (e)
{
}
}
practiceSwipeRight();
repeatSwipe(practiceSwipeDown, 6);
practiceSwipeRight();
for (var round = 0; round < maxPetCount; round++)
{
var st = Date.now();
while (Date.now() - st < 3000)
{
try
{
ocrResult = APIRead();
if (/槽.{1,20}无/.test(ocrResult))
{
isEquipPetFlag = false;
repeatSwipe(practiceSwipeLeft, 2);
return;
}
if (ocrResult.includes("1槽"))
{
sleep(300);
practiceSwipeRight();
}
}
catch (e)
{
}
}
}
repeatSwipe(practiceSwipeLeft, 2);
isEquipPetFlag = false;
}
// 执行生产流程
function doProductionProcess(isFirstInit)
{
if (!enableProduction)
{
return;
}
const productionTools = [
{ name: "粗石框", limit: 200 },
{ name: "大草篓", limit: 200 },
{ name: "帆布袋", limit: 200 },
{ name: "黑骷髅灯", limit: 200 },
{ name: "木藤篓", limit: 500 },
{ name: "铁皮框", limit: 500 },
{ name: "黑皮袋", limit: 500 },
{ name: "九鬼头灯", limit: 500 },
{ name: "精钢框", limit: 2000 },
{ name: "银丝袋", limit: 2000 },
{ name: "仙藤篓", limit: 2000 },
{ name: "万魂灯", limit: 2000 }
];
click(ourTeamPos[1].x, ourTeamPos[1].y);
practiceSwipeRight();
repeatSwipe(practiceSwipeDown, 10);
waitOcrKeywords(["生产"], 3000);
let text = APIRead();
let currentToolName = null;
let readResource = 0;
const regex = /生产[:：]([^,，]+)[,，](\d+)/;
const match = text.match(regex);
if (match)
{
currentToolName = match[1].trim();
readResource = parseInt(match[2]) || 0;
}
if (!currentToolName || currentToolName === "无")
{
repeatSwipe(practiceSwipeLeft, 2);
if (isFirstInit)
{
enableProduction = false;
hasRunProductionInit = true;
}
return;
}
let toolConfig = productionTools.find(t => t.name === currentToolName);
let threshold = toolConfig ? toolConfig.limit : collectResourceLimit;
if (toolConfig && collectResourceLimit !== toolConfig.limit)
{
collectResourceLimit = toolConfig.limit;
saveValidConfig(['collectResourceLimit']);
}
if (isFirstInit)
{
productionResource = readResource;
hasRunProductionInit = true;
}
if (productionResource >= threshold)
{
clicks();
waitOcrKeywords(["成功"], 3000);
clicks();
for (let i = 0; i < 20; i++)
{
sleep(240);
let t = APIRead();
if (t.includes(currentToolName))
{
clicks();
waitOcrKeywords(["成功"], 3000);
productionResource = 0;
break;
}
practiceSwipeDown();
}
}
repeatSwipe(practiceSwipeLeft, 2);
}
// 退出到大厅
function exitToHall()
{
if (!mapname)
{
return;
}
hasRunProductionInit = false;
for (let i = 0; i < 6; i++)
{
repeatSwipe(back, 2);
let hitExitRoom = false;
let ocrDeadline = Date.now() + 700;
while (Date.now() < ocrDeadline)
{
let txt = APIRead();
if (exitRoomKeywords.some(kw => txt.includes(kw)))
{
hitExitRoom = true;
sffb = false;
mapname = "";
return;
}
}
if (hitExitRoom)
{
break;
}
}
}
// 修炼用向上滑动
function practiceSwipeUp()
{
swipe(pX, pB, pX, pT, dur);
}
// 修炼用向下滑动
function practiceSwipeDown()
{
swipe(pX, pT, pX, pB, dur);
}
// 修炼用向左滑动
function practiceSwipeLeft()
{
swipe(pLsX, cY, pLeX, cY, dur);
}
// 修炼用向右滑动
function practiceSwipeRight()
{
swipe(pLeX, cY, pLsX, cY, dur);
}
// 点击屏幕中心
function clicks()
{
click(w / 2, h / 2);
}
// 返回到欢迎页
function backToWelcomePage()
{
jyqtsh = true;
for (let i = 0; i < 10; i++)
{
repeatSwipe(back, 2);
repeatSwipe(practiceSwipeUp, 10);
if (waitOcrKeywords(welcomeKeywords, 360))
{
jyqtsh = false;
return;
}
}
repeatSwipe(back, 6);
sleep(300);
jyqtsh = false;
}
// 重置登录流程中的关键字开关
function resetLoginKeywordFlags()
{
hasClickedLine = false; hasAliOversea = false;
hasClickedDinghao = false;
}
// 重置登录状态
function resetLoginState()
{
isBattleMode = false; isLoginMode = false;
mapCoordFailCount = 0; prevCoord = null; currentCoord = null;
resetLoginKeywordFlags();
mapname = "";
needUpdateAfterSlide = false;
isLoginMode = true;
lastRunTime = 0;
isEquipPetFlag = true;
backToWelcomePage();
}
// 登录状态机处理当前文本
function doLoginLogic(currentText)
{
if (lineKeywords.some(kw => currentText.includes(kw)))
{
if (hasClickedLine)
{
return;
}
clicks();
hasClickedLine = true;
return;
}
if (dinghaoLoginKeywords.some(kw => currentText.includes(kw)))
{
if (hasClickedDinghao)
{
return;
}
clicks();
hasClickedDinghao = true;
return;
}
if (welcomeKeywords.some(kw => currentText.includes(kw)))
{
repeatSwipe(practiceSwipeDown, 2);
repeatSwipe(clicks, 2);
resetLoginKeywordFlags();
return;
}
if (hallKeywords.some(kw => currentText.includes(kw)))
{
clicks();
healModeProcess();
isLoginMode = false; isBattleMode = false;
mapCoordFailCount = 0; prevCoord = null; currentCoord = null;
resetLoginKeywordFlags();
lastRunTime = 0;
needUpdateAfterSlide = false;
return;
}
if (aliOverseaKeywords.some(kw => currentText.includes(kw)) && !hasAliOversea)
{
clicks();
hasAliOversea = true;
}
}
// 跑图失败达到上限时的处理
function handleRunMapFailMax()
{
if (teamMode === 2)
{
return;
}
verifyMapName();
isBattleMode = false;
exitToHall();
resetLoginState();
mapCoordFailCount = 0;
lastRunTime = 0;
needUpdateAfterSlide = false;
restoreUserOriginalMode();
}
// 等待屏幕出现指定关键字，超时返回 false
function waitOcrKeywords(keywords, timeout = 1500)
{
let end = Date.now() + timeout;
while (Date.now() < end)
{
try
{
let t = APIRead();
for (let kw of keywords)
{
if (t.includes(kw))
{
return kw;
}
}
}
catch (e)
{
}
}
return null;
}
// 恢复用户原始运行模式
function restoreUserOriginalMode()
{
enableRunMap = userOriginalEnableRunMap;
enableFight = userOriginalEnableFight;
isBattleMode = false;
aliveTargets = [];
hasUsedFirstRoundSpecial = false;
firstHandDecided = false;
enemyFirstAttack = false;
hasRetreatedThisBattle = false;
mapCoordFailCount = 0;
prevCoord = null;
lastRunTime = 0;
needUpdateAfterSlide = false;
}
// 滑动后更新并校验当前坐标
function updateCoordAfterSlide()
{
if (!mapname)
{
currentCoord = null;
mapCoordFailCount = 9999;
return;
}
let end = Date.now() + 2000;
currentCoord = null;
while (Date.now() < end)
{
try
{
var t = APIRead();
if (t.includes("冷却中"))
{
currentCoord = null;
mapCoordFailCount++;
return;
}
if (numberVerifyKeywords.some(kw => t.includes(kw)) || coordBlockKeywords.some(kw => t.includes(kw)))
{
currentCoord = null;
needUpdateAfterSlide = false;
return;
}
var reg = /当前(\d+)/g;
var m;
while ((m = reg.exec(t)))
{
var num = parseInt(m[1]);
if (!isNaN(num) && num >= 0 && num <= 199)
{
currentCoord = num;
break;
}
}
if (currentCoord != null)
{
break;
}
}
catch (e)
{
}
}
let fail = false;
if (currentCoord == null || (prevCoord != null && currentCoord === prevCoord))
{
fail = true;
}
if (!fail)
{
prevCoord = currentCoord;
mapCoordFailCount = 0;
if (enableProduction && hasRunProductionInit)
{
productionResource += 1;
}
}
else
{
mapCoordFailCount++;
}
if (enableProduction && hasRunProductionInit && productionResource >= collectResourceLimit)
{
doProductionProcess(false);
}
if (currentCoord != null)
{
if (currentCoord >= mapCoordLimit * 0.8)
{
slideMode = "down";
}
else if (currentCoord <= mapCoordLimit * 0.2)
{
slideMode = "up";
}
}
}
// 校验当前地图名称
function verifyMapName()
{
if (!mapname)
{
return false;
}
for (let i = 0; i < 2; i++)
{
clicks();
mapname = waitOcrKeywords(mapList, 300);
if (mapname)
{
break;
}
}
if (mapname)
{
return true;
}
else
{
return false;
}
}
// 初始化战斗目标列表
function initBattleTargets()
{
let currentText = APIRead();
practiceSwipeRight();
aliveTargets = [
{ index: 0, x: tgX[0], y: tgY, dead: false },
{ index: 1, x: tgX[1], y: tgY, dead: false },
{ index: 2, x: tgX[2], y: tgY, dead: false },
{ index: 3, x: tgX[3], y: tgY, dead: false },
{ index: 4, x: tgX[4], y: tgY, dead: false }
];
hasUsedFirstRoundSpecial = false;
hasPlayedCardInThisBattle = false;
isBattleMode = true;
thisBattleLingwu = 1;
mapCoordFailCount = 0;
hasPlayedCardInThisBattle = false;
needUpdateAfterSlide = false;
waitOcrKeywords(["战斗"], 3000);
currentText = APIRead();
if (isBattleMode && thisBattleLingwu === 1)
{
var tm = currentText.match(/队伍(\d+)人/);
if (tm)
{
var n = parseInt(tm[1]);
if (!isNaN(n) && n >= 2 && n <= 5 && n !== lastTeamNum)
{
thisBattleLingwu = n;
lastTeamNum = n;
}
}
}
sendUserSelectCard();
if (enableTianGangBlast && lingwuLimit >= 110 && teamMode === 0)
{
let now = Date.now();
if (now < tianGangEndTime)
{
return;
}
if (!verifyMapName())
{
return;
}
let status = waitOcrKeywords(["秒", "怨灵魄"], 300);
if (status === "秒")
{
let txt = APIRead();
let m = txt.match(/(\d+)秒天罡气爆发中/);
if (m)
{
tianGangEndTime = now + parseInt(m[1]) * 1000;
}
return;
}
if (status === "怨灵魄")
{
swipe(w * 0.5, h * 0.5, w * 0.5, h * 0.2, 500);
let extractDeadline = Date.now() + 900;
let extractSuccess = false;
while (Date.now() < extractDeadline)
{
let curTxt = APIRead();
let match = curTxt.match(/(\d+)秒天罡气爆发中/);
if (match)
{
tianGangEndTime = Date.now() + parseInt(match[1]) * 1000;
extractSuccess = true;
break;
}
sleep(100);
}
}
}
}
// 战斗结束后重置状态
function battleEndReset()
{
totalLingwu += thisBattleLingwu > 1 && thisBattleLingwu < 6 ? thisBattleLingwu : 1;
thisBattleLingwu = 1;
lastTeamNum = -1;
unEquipPetFinal();
restoreUserOriginalMode();
isEquipPetFlag = false;
enableSystemAIBattle = isBattleStrategyTempChanged ? true : enableSystemAIBattle;
isBattleStrategyTempChanged = false;
isBattleMode = false;
aliveTargets = [];
hasPlayedCardInThisBattle = false;
hasUsedFirstRoundSpecial = false;
firstHandDecided = false;
enemyFirstAttack = false;
hasRetreatedThisBattle = false;
mapCoordFailCount = 0;
needUpdateAfterSlide = false;
if (enableTianGangBlast && lingwuLimit >= 110 && teamMode === 0)
{
let now = Date.now();
if (now < tianGangEndTime)
{
return;
}
if (!verifyMapName())
{
return;
}
let status = waitOcrKeywords(["秒", "怨灵魄"], 300);
if (status === "秒")
{
click(ourTeamPos[2].x, ourTeamPos[2].y);
repeatSwipe(practiceSwipeLeft, 1);
let txt = APIRead();
let m = txt.match(/(\d+)秒天罡气爆发中/);
if (m)
{
tianGangEndTime = now + parseInt(m[1]) * 1000;
}
return;
}
if (status === "怨灵魄")
{
burstTianGang();
tianGangEndTime = 0;
}
}
}
// 选择并点击可攻击的目标
function selectTargetAndAttack()
{
var probes = colorProbeSlots(aliveTargets, TARGET_SLOT_W, TARGET_SLOT_H);
for (var k = 0; k < aliveTargets.length; k++)
{
if (!isProbeAlive(probes[k]))
{
aliveTargets[k].dead = true;
}
}
var isEnemyFirst = firstHandDecided && enemyFirstAttack;
var useSpecial = (teamMode === 0 && thisBattleLingwu >= 2 && isEnemyFirst && !hasUsedFirstRoundSpecial);
if (useSpecial)
{
var tar1 = aliveTargets[1];
if (tar1 && !tar1.dead)
{
hasUsedFirstRoundSpecial = true;
click(tar1.x, tar1.y);
return;
}
hasUsedFirstRoundSpecial = true;
}
for (var i = 0; i < aliveTargets.length; i++)
{
var tar = aliveTargets[i];
if (!tar)
{
continue;
}
if (tar.dead)
{
continue;
}
click(tar.x, tar.y);
return;
}
var first = aliveTargets[0];
if (first)
{
click(first.x, first.y);
}
}
while (true)
{
let now = Date.now();
let currentText = APIRead();
if (currentText !== mainLastMatchText)
{
modeLockCheckTime = now;
}
if (teamMode === 0 && !isBattleMode && now - modeLockCheckTime >= 25000)
{
modeLockCheckTime = now;
handleRunMapFailMax();
}
if (teamMode === 0 && isBattleMode && now - modeLockCheckTime >= 6000)
{
modeLockCheckTime = now;
mainLastMatchText = "";
let thirdTeammate = ourTeamPos[0];
press(thirdTeammate.x, thirdTeammate.y, 240);
let hasHpFlag = false;
let checkEndTime = Date.now() + 500;
while (Date.now() < checkEndTime)
{
try
{
let chkTxt = APIRead();
if (/\d+血/.test(chkTxt) || chkTxt.includes("战败"))
{
hasHpFlag = true;
break;
}
}
catch (e)
{
}
}
if (hasHpFlag)
{
if (thisBattleLingwu < 2)
{
launchAttack();
}
}
else
{
battleEndReset();
}
}
mainLastMatchText = currentText;
if (disconnectKeywords.some(kw => currentText.includes(kw)))
{
resetLoginState();
continue;
}
if (!isLoginMode && (lineKeywords.some(kw => currentText.includes(kw)) || welcomeKeywords.some(kw => currentText.includes(kw))))
{
isLoginMode = true;
resetLoginKeywordFlags();
}
if (isLoginMode)
{
doLoginLogic(currentText);
continue;
}
if (currentText.includes("天神离开" + mapname))
{
lastGodSummonTime = Date.now() - 3600 * 1000;
}
if (currentText.includes("灵力即将耗尽"))
{
enableRestoreEquipSpirit = true;
}
if (currentText.includes("放弃进攻") && enableSystemAIBattle && teamMode === 0 && thisBattleLingwu < 2)
{
enableSystemAIBattle = false;
isBattleStrategyTempChanged = true;
}
if (currentText.includes("到头了"))
{
slideMode = slideMode === "down" ? "up" : "down";
}
let hasLing = practiceTriggerKeywords.some(kw => currentText.includes(kw));
if (defaultEnablePractice && (hasLing || totalLingwu >= lingwuLimit))
{
handleExitRoomToPractice();
continue;
}
if (numberVerifyKeywords.some(kw => currentText.includes(kw)))
{
solveNumberPuzzle(currentText);
continue;
}
let normal = !isBattleMode && !isLoginMode;
for (let tar of aliveTargets)
{
if (!tar.dead && new RegExp("目标" + tar.index + ".*战败").test(currentText))
{
tar.dead = true;
}
if (new RegExp("目标" + tar.index + ".*待命").test(currentText))
{
tar.dead = false;
}
}
if (isBattleMode && enablePet)
{
if (/[123]槽待命/.test(currentText) && thisBattleLingwu < 2)
{
isEquipPetFlag = true;
}
}
if (enableProduction && !hasRunProductionInit && normal && currentCoord != null)
{
doProductionProcess(true);
}
var foundEnemy = battleKeywords.some(kw => currentText.includes(kw)) || currentText.includes("槽待命");
var battleEnd = battleEndKeywords.some(kw => currentText.includes(kw));
var isLose = healKeywords.some(kw => currentText.includes(kw));
if (isLose)
{
enableSystemAIBattle = isBattleStrategyTempChanged ? true : enableSystemAIBattle;
isBattleStrategyTempChanged = false;
fullBattleReset();
exitToHall();
healModeProcess();
continue;
}
if (enableFight && foundEnemy && normal)
{
let hasPetWord = petEquipKeywords.some(k => currentText.includes(k));
if (enablePet && (hasPetWord || sfhlmsgjc) && !isEquipPetFlag)
{
equipPetFinal();
}
initBattleTargets();
continue;
}
if (isBattleMode && battleEnd)
{
battleEndReset();
continue;
}
// 刷怪循环：先手判定、待命判定、查血与发起进攻
if (enableFight && isBattleMode)
{
if (!firstHandDecided)
{
if (currentText.includes("目标0待命"))
{
enemyFirstAttack = true; firstHandDecided = true;
}
if (currentText.includes("0槽待命"))
{
enemyFirstAttack = false; firstHandDecided = true;
}
}
if (enablePet && enableRetreatOnEnemyFirst && isEquipPetFlag && firstHandDecided && enemyFirstAttack && !hasRetreatedThisBattle)
{
if (currentText.includes("目标0待命") || currentText.includes("0槽待命"))
{
targetFirstActionRetreat();
continue;
}
}
var normalReady = (teamMode === 0 && currentText.includes("0槽待命")) || (teamMode === 1 && /我.*槽待命/.test(currentText));
var petAnySlotReady = thisBattleLingwu < 2 && teamMode === 0 && /槽待命/.test(currentText);
if (petAnySlotReady)
{
checkOurTeamHp();
launchAttack();
continue;
}
if (normalReady && !isEquipPetFlag)
{
checkOurTeamHp();
launchAttack();
continue;
}
}
if (enableFight && !isBattleMode && currentText.includes("滑或"))
{
let hasPetWord = petEquipKeywords.some(k => currentText.includes(k));
if (enablePet && (hasPetWord || sfhlmsgjc) && !isEquipPetFlag)
{
equipPetFinal();
}
initBattleTargets();
continue;
}
// 循环跑图：按间隔点击卡槽、滑动地图并等待选卡牌提示
if (normal && teamMode === 0 && enableRunMap && now - lastRunTime >= RUN_INTERVAL)
{
if (!sfhqzy)
{
fullBattleReset();
exitToHall();
healModeProcess();
}
if (enableGodSummon && !sffb && teamMode === 0)
{
summonGod();
}
click(cdX[0], cdY);
sleep(420);
slideMode === "down" ? practiceSwipeDown() : practiceSwipeUp();
needUpdateAfterSlide = true;
lastRunTime = now;
if (!waitOcrKeywords(zdxkp, 300))
{
mapname = "";
}
}
if (normal && enableRunMap && needUpdateAfterSlide)
{
updateCoordAfterSlide();
needUpdateAfterSlide = false;
if (mapCoordFailCount >= MAX_FAIL_COUNT)
{
handleRunMapFailMax();
}
}
sleep(isBattleMode ? BATTLE_INTERVAL : DETECT_INTERVAL);
}
