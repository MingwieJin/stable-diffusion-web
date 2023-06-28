const promptMap = {
    base: [{
        "text": "a cute dog",
        "lang_zh": "可爱的狗狗",
        "subType": "base",
        "dir": "基础"
    }],
    quality: [{
        "text": "colorful pixel",
        "lang_zh": "彩色像素",
        "subType": "quality",
        "dir": "质量",
        imgs: [{
            url: '/images/promptTips/1.png',
            prompt: 'An abstract fox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf'
        }, {
            url: '/images/promptTips/2.png',
            prompt: 'An abstract fox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf'
        }, {
            url: '/images/promptTips/3.png',
            prompt: 'An abstract gox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf'
        }, {
            url: '/images/promptTips/4.png',
            prompt: 'An abstract gox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf'
        }]
    }, {
        "text": "high quality",
        "lang_zh": "高质量",
        "subType": "quality",
        "dir": "质量",
    }, {
        "text": "UHD",
        "lang_zh": "超高清",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "anatomically correct",
        "lang_zh": "解剖学正确",
        "subType": "quality",
        "dir": "质量"
    },  {
        "text": "ccurate",
        "lang_zh": "准确",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "textured skin",
        "lang_zh": "质感皮肤",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "super detail",
        "lang_zh": "非常详细",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "high details",
        "lang_zh": "高细节",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "16k",
        "lang_zh": "16k",
        "subType": "quality",
        "dir": "质量/画质"
    }, {
        "text": "8k",
        "lang_zh": "8k",
        "subType": "quality",
        "dir": "质量/画质"
    }, {
        "text": "best quality",
        "lang_zh": "最佳质量",
        "subType": "quality",
        "dir": "质量"
    }, {
        "text": "4K",
        "lang_zh": "4K",
        "subType": "quality",
        "dir": "质量/画质"
    }],
    painting: [{
        "text": "Surrealism",
        "lang_zh": "超现实主义",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Impressionism",
        "lang_zh": "印象派",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Pre-Raphaelite Brotherhood",
        "lang_zh": "前拉斐尔派兄弟会",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Classicism",
        "lang_zh": "古典主义",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Ghibli-like colours",
        "lang_zh": "吉卜力色彩",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Hyperrealism",
        "lang_zh": "超现实主义细节画派",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Art Nouveau",
        "lang_zh": "新艺术运动",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Suprematism",
        "lang_zh": "至高主义",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Abstractionism",
        "lang_zh": "抽象主义",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "pre-rephaëlite painting",
        "lang_zh": "前拉斐尔派绘画",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "anime style",
        "lang_zh": "动漫风格",
        "subType": "style",
        "dir": "绘画/风格"
    },  {
        "text": "Post-Impressionism",
        "lang_zh": "后印象派",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "En plein air",
        "lang_zh": "野外写生",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Pointillism",
        "lang_zh": "点彩派",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Verism",
        "lang_zh": "写实主义",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "raised fist",
        "lang_zh": "扬起的拳头",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Ashcan School",
        "lang_zh": "垃圾桶派",
        "subType": "style",
        "dir": "绘画/风格"
    }, {
        "text": "Cubism",
        "lang_zh": "立体主义",
        "subType": "style",
        "dir": "绘画/风格"
    }],
    pictureEffect: [{
        "text": "chiaroscuro",
        "lang_zh": "明暗对比",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "depth of field",
        "lang_zh": "背景虚化",
        "subType": "style",
        "dir": "画面效果",
    }, {
        "text": "Ultra - wide angle",
        "lang_zh": "超广角",
        "subType": "style",
    }, {
        "text": "cinematic lighting",
        "lang_zh": "电影光效",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "motion blur",
        "lang_zh": "动态模糊",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "chromatic aberration",
        "lang_zh": "色差",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "sparkle",
        "lang_zh": "闪耀效果",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "jpeg artifacts",
        "lang_zh": "JPEG 压缩失真",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "blurry",
        "lang_zh": "模糊的",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "glowing light",
        "lang_zh": "荧光",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "god rays",
        "lang_zh": "神圣感顶光",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "ray tracing",
        "lang_zh": "光线追踪",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "reflection light",
        "lang_zh": "反射光",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "backlighting",
        "lang_zh": "逆光",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "blending",
        "lang_zh": "混合",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "bloom",
        "lang_zh": "盛开",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "chromatic aberration abuse",
        "lang_zh": "色差滥用",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "dithering",
        "lang_zh": "抖动",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "drop shadow",
        "lang_zh": "立绘阴影",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "film grain",
        "lang_zh": "胶片颗粒感/老电影滤镜",
        "subType": "style",
        "dir": "画面效果"
    },  {
        "text": "Fujicolor",
        "lang_zh": "富士色彩",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "halftone",
        "lang_zh": "半调风格",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "image fill",
        "lang_zh": "图像填充",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "motion lines",
        "lang_zh": "体现运动的线",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "multiple monochrome",
        "lang_zh": "多重单色",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "optical illusion",
        "lang_zh": "视错觉",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "anaglyph",
        "lang_zh": "互补色",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "stereogram",
        "lang_zh": "立体画",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "scanlines",
        "lang_zh": "扫描线",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "silhouette",
        "lang_zh": "剪影",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "speed lines",
        "lang_zh": "速度线",
        "subType": "style",
        "dir": "画面效果"
    }, {
        "text": "vignetting",
        "lang_zh": "晕影",
        "subType": "style",
        "dir": "画面效果"
    }],
    // 容貌
    appearance: [
    {
        "text": "multicolored hair",
        "lang_zh": "多彩头发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "streaked hair",
        "lang_zh": "条染",
        "subType": "normal",
        "dir": "容貌/头发"
    },  {
        "text": "colored inner hair",
        "lang_zh": "内侧染色",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "blonde hair",
        "lang_zh": "金发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "silver hair",
        "lang_zh": "银发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "grey hair",
        "lang_zh": "灰发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "white hair",
        "lang_zh": "白发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "brown hair",
        "lang_zh": "茶发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "light brown hair",
        "lang_zh": "浅褐发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "black hair",
        "lang_zh": "黑发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "purple hair",
        "lang_zh": "紫发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "red hair",
        "lang_zh": "红发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "blue hair",
        "lang_zh": "蓝发/水色发",
        "subType": "normal",
        "dir": "容貌/头发"
    },  {
        "text": "dark blue hair",
        "lang_zh": "深蓝发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "light blue hair",
        "lang_zh": "浅蓝发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "green hair",
        "lang_zh": "绿发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "pink hair",
        "lang_zh": "粉发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "gradient hair",
        "lang_zh": "渐变发色",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "rainbow hair",
        "lang_zh": "彩虹发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "ahoge",
        "lang_zh": "呆毛",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "asymmetrical hair",
        "lang_zh": "非对称发型",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "bangs",
        "lang_zh": "刘海",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "blunt bangs",
        "lang_zh": "齐刘海",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "braid",
        "lang_zh": "辫子",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "braided ponytail",
        "lang_zh": "编织马尾辫",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "curly hair",
        "lang_zh": "卷发",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "curtained hair",
        "lang_zh": "窗帘/瀑布发型",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "double bun",
        "lang_zh": "双团子头",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "drill hair",
        "lang_zh": "钻头卷/公主卷",
        "subType": "normal",
        "dir": "容貌/头发"
    }, {
        "text": "halo",
        "lang_zh": "头顶光环",
        "subType": "normal",
        "dir": "容貌/头饰"
    }, {
        "text": "tokin hat",
        "lang_zh": "东金帽子",
        "subType": "normal",
        "dir": "容貌/头饰"
    }, {
        "text": "mini top hat",
        "lang_zh": "迷你礼帽",
        "subType": "normal",
        "dir": "容貌/头饰"
    }, {
            "text": "beret",
            "lang_zh": "贝雷帽",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hood",
            "lang_zh": "兜帽",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "nurse cap",
            "lang_zh": "护士帽",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "tiara",
            "lang_zh": "三重冕",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "crown",
            "lang_zh": "皇冠",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hairpin",
            "lang_zh": "发卡",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hairband",
            "lang_zh": "头箍",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hairclip",
            "lang_zh": "发夹",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair ribbon",
            "lang_zh": "发带",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair flower",
            "lang_zh": "发花",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair ornament",
            "lang_zh": "头饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair bow",
            "lang_zh": "蝴蝶结发饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        },  {
            "text": "maid headdress",
            "lang_zh": "女仆头饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "ribbon",
            "lang_zh": "丝带",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "sunglasses",
            "lang_zh": "太阳镜",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "blindfold",
            "lang_zh": "眼罩",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "eyepatch",
            "lang_zh": "单眼罩",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "mask",
            "lang_zh": "面具/眼罩/口罩",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "jewelry",
            "lang_zh": "首饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "bell",
            "lang_zh": "铃铛",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "facepaint",
            "lang_zh": "面纹",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "horns",
            "lang_zh": "兽角",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "antlers",
            "lang_zh": "鹿角",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "clover hair ornament",
            "lang_zh": "三叶草发饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "crescent hair ornament",
            "lang_zh": "月牙发饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "demon horns",
            "lang_zh": "恶魔的角",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "jeweled branch of hourai",
            "lang_zh": "蓬莱玉枝",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "fish hair ornament",
            "lang_zh": "鱼形发饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "forehead jewel",
            "lang_zh": "额前有宝石",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "forehead mark",
            "lang_zh": "额前有图案",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "forehead protector",
            "lang_zh": "护额",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "kanzashi",
            "lang_zh": "簪子",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair bobbles",
            "lang_zh": "头绳",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hairpods",
            "lang_zh": "头发上成对的像无线蓝牙的发饰",
            "subType": "normal",
            "dir": "容貌/头饰"
        }, {
            "text": "hair bell",
            "lang_zh": "头发上系着铃铛",
            "subType": "normal",
            "dir": "容貌/头饰"
        },
    //     {
    //     lang_zh: '头发',
    //     children: [{
    //         "text": "multicolored hair",
    //         "lang_zh": "多彩头发",
    //         "subType": "normal",
    //         "dir": "容貌/头发"
    //     }]
    // }, {
    //     lang_zh: '帽子',
    //     children: [{
    //         "text": "tokin hat",
    //         "lang_zh": "东金帽子",
    //         "subType": "normal",
    //         "dir": "容貌/头饰"
    //     }]
    // }, {
    //     lang_zh: '眼睛',
    //     children: [{
    //         "text": "rolling eyes",
    //         "lang_zh": "翻白眼",
    //         "subType": "normal",
    //         "dir": "容貌/眼睛"
    //     }]
    // }
    ],

    // 构图
    composition: [{
        lang_zh: '形式',
        children: [{
            "text": "afterimage",
            "lang_zh": "残像",
            "subType": "style",
            "dir": "构图/形式"
        }, {
            "text": "border",
            "lang_zh": "边框",
            "subType": "style",
            "dir": "构图/形式"
        }]
    }, {
        lang_zh: '视角',
        children: [{
            "text": "first-person view",
            "lang_zh": "第一人称视角",
            "subType": "style",
            "dir": "构图/视角"
        }]
    }, {
        lang_zh: '镜头',
        children: [{
            "text": "lens flare",
            "lang_zh": "镜头光晕",
            "subType": "style",
            "dir": "构图/镜头"
        }]
    }],
    // 指令
    command: [{
        "text": "—repeat",
        "lang_zh": "重复",
        "subType": "command",
        "desc": "重复"
    },{
        "text": "--ar",
        "lang_zh": "宽高比",
        "subType": "command",
        "desc": "生成图片的宽高比尺寸"
    }]
}

export default promptMap;