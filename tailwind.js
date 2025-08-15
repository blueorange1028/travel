// 全局变量和数据
const travelData = {
    taizhou: {
        title: "台州段 (3天)",
        days: [
            {
                day: 1,
                date: "9月18日",
                title: "天津 → 台州（临海）+ 临海古城游览",
                transport: "南航CZ5841航班（08:25-11:05），机场快1线到临海",
                accommodation: "临海府城客栈",
                itinerary: [
                    { time: "14:00-18:00", activity: "台州府城墙游览（80元）", detail: "江南长城，全长13.7公里，必游文武阁" },
                    { time: "14:00-18:00", activity: "东湖景区（免费）", detail: "临海最大水系景观，龙兴寺+巾山公园" },
                    { time: "晚餐", activity: "老街坊临海小吃", detail: "临海汤圆、麦饼筒、烧头（40-50元/人）" }
                ]
            },
            {
                day: 2,
                date: "9月19日",
                title: "神仙居一日游",
                transport: "临海汽车站班车（7:30出发，2小时到景区）",
                itinerary: [
                    { time: "9:00-17:30", activity: "神仙居景区游览", detail: "国家级风景名胜区，门票120元，含南天顶、南天门、飞天瀑" },
                    { time: "午餐", activity: "神仙居农家菜", detail: "神仙鸡、神仙豆腐（50-70元/人）" },
                    { time: "特色活动", activity: "玻璃栈道+索道", detail: "玻璃栈道30元，索道往返80元" }
                ]
            },
            {
                day: 3,
                date: "9月20日",
                title: "天台山一日游",
                transport: "临海汽车站班车（7:30出发，1.5小时到天台）",
                itinerary: [
                    { time: "9:00-12:00", activity: "国清寺游览（30元）", detail: "天台宗发源地，千年银杏+大雄宝殿" },
                    { time: "12:00-13:30", activity: "国清寺素斋馆", detail: "天台素面、香菇青菜（50-70元/人）" },
                    { time: "13:30-17:30", activity: "石梁飞瀑景区（65元）", detail: "徐霞客赞誉'天下第一奇观'" }
                ]
            }
        ]
    },
    quanzhou: {
        title: "泉州段 (5天)",
        days: [
            {
                day: 4,
                date: "9月21日",
                title: "临海 → 泉州",
                transport: "台州站G4182高铁（8:58-15:17到泉州）",
                accommodation: "奎宿·美宿（西街古城店）",
                itinerary: [
                    { time: "抵达安排", activity: "办理入住，西街漫步", detail: "感受古城夜色，百年东亭肉粽晚餐" }
                ]
            },
            {
                day: 5,
                date: "9月22日",
                title: "泉州古城区游览",
                transport: "步行游览古城",
                itinerary: [
                    { time: "9:00-12:00", activity: "开元寺+钟楼（25元）", detail: "东南沿海最大古刹，宋代东西石塔" },
                    { time: "12:00-13:30", activity: "西街美食", detail: "东亭肉粽、面线糊（40-50元/人）" },
                    { time: "13:30-17:30", activity: "海外交通史博物馆", detail: "海上丝绸之路专题博物馆，门票24元" }
                ]
            },
            {
                day: 6,
                date: "9月23日",
                title: "清源山与世界遗产点",
                transport: "公交603路→9路→出租车",
                itinerary: [
                    { time: "8:30-12:30", activity: "清源山游览（28元）", detail: "道教名山，老君岩石像，索道往返50元" },
                    { time: "14:30-17:30", activity: "世界遗产点", detail: "草庵摩尼教遗址+九日山祈风石刻" }
                ]
            },
            {
                day: 7,
                date: "9月24日",
                title: "德化一日游",
                transport: "泉州汽车站长途车（7:30出发，2小时到德化）",
                itinerary: [
                    { time: "9:30-12:00", activity: "德化陶瓷博物馆", detail: "德化陶瓷发展历史，门票15元" },
                    { time: "14:00-17:00", activity: "石牛山景区（60元）", detail: "龙湫瀑布+石牛灵岩奇观" }
                ]
            },
            {
                day: 8,
                date: "9月25日",
                title: "泉州西湖公园与洛阳桥",
                transport: "公交25路→出租车",
                itinerary: [
                    { time: "9:00-12:00", activity: "西湖公园（免费）", detail: "闽南西子湖，游湖50元/小时" },
                    { time: "14:00-17:30", activity: "洛阳桥游览（25元）", detail: "中国古代四大名桥之一，宋代古桥" }
                ]
            }
        ]
    },
    zhangzhou: {
        title: "漳州段 (2天)",
        days: [
            {
                day: 9,
                date: "9月26日",
                title: "泉州 → 漳州 + 古城游览",
                transport: "G2991高铁（8:42-9:14到漳州）",
                accommodation: "漳州古城民宿",
                itinerary: [
                    { time: "下午", activity: "南山禅寺+漳州古城", detail: "唐代千年古刹，门票20元，古城夜游" },
                    { time: "晚餐", activity: "万有引力沙茶面", detail: "漳州最受欢迎沙茶面（30-40元/人）" }
                ]
            },
            {
                day: 10,
                date: "9月27日",
                title: "南靖土楼与云水谣古镇",
                transport: "漳州汽车客运中心站班车（7:30出发，1.5小时到南靖）",
                itinerary: [
                    { time: "8:30-12:00", activity: "田螺坑土楼群", detail: "四菜一汤土楼群，门票100元套票" },
                    { time: "14:00-17:30", activity: "云水谣古镇", detail: "电影拍摄地，门票90元套票，客家文化体验" }
                ]
            }
        ]
    },
    dongshan: {
        title: "东山岛段 (7天)",
        days: [
            {
                day: 11,
                date: "9月28日",
                title: "漳州 → 东山岛",
                transport: "漳州汽车站班车（8:30出发，2.5-3小时到东山岛）",
                accommodation: "东山岛海景民宿（南门湾）",
                itinerary: [
                    { time: "下午", activity: "南门湾海滨游览", detail: "东山岛最美海湾，免费沙滩漫步" },
                    { time: "晚餐", activity: "渔家海鲜大排档", detail: "东山鲍鱼、马面鱼汤（120-150元/人）" }
                ]
            },
            {
                day: 12,
                date: "9月29日",
                title: "东山岛休闲游（风动石）",
                transport: "岛内公交或电动车",
                itinerary: [
                    { time: "9:00-12:00", activity: "南门湾晨游", detail: "晨泳、沙滩漫步、观景台" },
                    { time: "14:00-17:30", activity: "风动石景区（50元）", detail: "东山岛标志，一线天奇观+左耳天台" }
                ]
            },
            {
                day: 13,
                date: "9月30日",
                title: "马銮湾与金銮湾联游",
                transport: "电动车环岛游",
                itinerary: [
                    { time: "8:30-11:30", activity: "马銮湾景区", detail: "12公里优质沙滩，免费海滨活动" },
                    { time: "13:30-15:00", activity: "金銮湾", detail: "清澈海水+细腻沙滩，摄影胜地" },
                    { time: "15:30-17:30", activity: "苏峰山景区", detail: "东山岛最高峰，360度观景台，门票10元" }
                ]
            },
            {
                day: 14,
                date: "10月1日",
                title: "南屿双面海",
                transport: "电动车前往",
                itinerary: [
                    { time: "9:00-12:00", activity: "南屿双面海", detail: "独特地质景观，同一地点看两个海面" },
                    { time: "14:00-17:30", activity: "环岛风光", detail: "渔村体验+礁石海岸摄影" }
                ]
            },
            {
                day: 15,
                date: "10月2日",
                title: "澳角村渔村体验",
                transport: "电动车前往",
                itinerary: [
                    { time: "9:00-12:00", activity: "澳角渔村体验", detail: "传统闽南渔村，海鲜市场+渔港" },
                    { time: "14:00-17:30", activity: "周边探索", detail: "天涯澳角+双月湾日落+百年小学" }
                ]
            },
            {
                day: 16,
                date: "10月3日",
                title: "东山岛 → 天津",
                transport: "长途车到厦门→MF8130航班（18:50-22:00）",
                itinerary: [
                    { time: "8:00-10:30", activity: "东门屿景区", detail: "海岛灯塔+古炮台，免费游览" },
                    { time: "10:45-12:15", activity: "铜陵武庙朝圣楼", detail: "明代古建筑，门票10元" },
                    { time: "13:30", activity: "前往厦门机场", detail: "购买特产，香炉饼+马面鱼干" }
                ]
            }
        ]
    }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    
    // 简单的标签切换功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有激活状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // 激活当前标签
            this.classList.add('active');
            const target = this.dataset.tab;
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
    
    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
