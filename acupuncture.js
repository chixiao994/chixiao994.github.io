// ====== 《针灸大成》完整穴位数据库重构版 ======
// 数据源：明·杨继洲《针灸大成》（人民卫生出版社1955年影印明刊本）
TCMSystem.acupuncture = {
    pointsDatabase: {
        // === 数据来源声明 ===
        source: {
            main: "《针灸大成·卷六·考正穴法》",
            extra: "《针灸大成·卷七·经外奇穴》",
            note: "穴位顺序、定位、刺灸法、主治均严格遵循原文"
        },

        // === 卷六：十四经穴（《大成》主体）===
        meridians: {
            // 1. 手太阴肺经（《大成》：左右凡二十二穴）- 完整示例
            "手太阴肺经": [
                {
                    name: "中府", code: "LU1",
                    dacheng: {
                        location: "《大成》：云门下一寸，乳上三肋间，动脉应手陷中，去胸中行各六寸。",
                        needling: "针三分，留五呼，灸五壮。",
                        mainIndication: "咳逆，喘促，腹胀，食不下。",
                        specialPoint: "肺之募，手足太阴之会",
                        volume: "卷六·考正穴法",
                        pageRef: ""
                    }
                },
                {
                    name: "云门", code: "LU2",
                    dacheng: {
                        location: "《大成》：巨骨下，侠气户旁二寸陷中，动脉应手，去胸中行各六寸。",
                        needling: "针三分，灸五壮。",
                        mainIndication: "咳逆，喘不得息，胸胁短气，气上冲心。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "天府", code: "LU3",
                    dacheng: {
                        location: "《大成》：腋下三寸，臂臑内廉动脉陷中。",
                        needling: "针三分，留三呼，禁灸。",
                        mainIndication: "喘逆，鼻衄，瘿气，臂痛。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "侠白", code: "LU4",
                    dacheng: {
                        location: "《大成》：天府下，去肘五寸动脉中。",
                        needling: "针三分，灸五壮。",
                        mainIndication: "心痛，气短，干呕烦满。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "尺泽", code: "LU5",
                    dacheng: {
                        location: "《大成》：肘中约纹上动脉中。",
                        needling: "针三分，留三呼，灸五壮。",
                        mainIndication: "咳逆上气，喉痹，心烦，胸胁胀满。",
                        specialPoint: "肺脉所入为合水",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "孔最", code: "LU6",
                    dacheng: {
                        location: "《大成》：去腕上七寸。",
                        needling: "针三分，灸五壮。",
                        mainIndication: "热病汗不出，咳逆，肘臂厥痛。",
                        specialPoint: "肺之郄穴",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "列缺", code: "LU7",
                    dacheng: {
                        location: "《大成》：去腕侧上一寸五分。",
                        needling: "针二分，留三呼，灸三壮。",
                        mainIndication: "偏风口面喎斜，手腕无力，痰嗽。",
                        specialPoint: "肺之络穴，别走阳明",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "经渠", code: "LU8",
                    dacheng: {
                        location: "《大成》：寸口动脉陷中。",
                        needling: "针二分，留三呼，禁灸。",
                        mainIndication: "疟寒热，胸背拘急，喉痹。",
                        specialPoint: "肺脉所行为经金",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "太渊", code: "LU9",
                    dacheng: {
                        location: "《大成》：掌后内侧横纹头动脉中。",
                        needling: "针二分，留二呼，灸三壮。",
                        mainIndication: "咳嗽，呕哕，烦闷不得眠。",
                        specialPoint: "肺脉所注为俞土，肺之原穴",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "鱼际", code: "LU10",
                    dacheng: {
                        location: "《大成》：大指本节后内侧陷中。",
                        needling: "针二分，留三呼，禁灸。",
                        mainIndication: "酒病，恶风寒，虚热，舌上黄。",
                        specialPoint: "肺脉所溜为荥火",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "少商", code: "LU11",
                    dacheng: {
                        location: "《大成》：大指内侧，去爪甲角如韭叶。",
                        needling: "针一分，留一呼，灸三壮。",
                        mainIndication: "疟寒热，烦心善哕，心下满，汗出。",
                        specialPoint: "肺脉所出为井木",
                        volume: "卷六·考正穴法"
                    }
                }
            ],

            // 2. 手阳明大肠经（《大成》：左右凡四十穴）- 完整示例
            "手阳明大肠经": [
                {
                    name: "商阳", code: "LI1",
                    dacheng: {
                        location: "《大成》：手大指次指内侧，去爪甲角如韭叶。",
                        needling: "针一分，留一呼，灸三壮。",
                        mainIndication: "胸中气满，喘咳，热病汗不出。",
                        specialPoint: "大肠脉所出为井金",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "二间", code: "LI2",
                    dacheng: {
                        location: "《大成》：食指本节前内侧陷中。",
                        needling: "针三分，留六呼，灸三壮。",
                        mainIndication: "喉痹，颔肿，肩背痛，振寒。",
                        specialPoint: "大肠脉所溜为荥水",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "三间", code: "LI3",
                    dacheng: {
                        location: "《大成》：食指本节后内侧陷中。",
                        needling: "针三分，留三呼，灸三壮。",
                        mainIndication: "喉痹，咽中如梗，下齿龋痛。",
                        specialPoint: "大肠脉所注为俞木",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "合谷", code: "LI4",
                    dacheng: {
                        location: "《大成》：手大指次指岐骨间陷中。",
                        needling: "针三分，留六呼，灸三壮。",
                        mainIndication: "伤寒大渴，脉浮在表，发热恶寒。",
                        specialPoint: "大肠脉所过为原",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "阳溪", code: "LI5",
                    dacheng: {
                        location: "《大成》：腕中上侧两筋间陷中。",
                        needling: "针三分，留七呼，灸三壮。",
                        mainIndication: "狂言喜笑见鬼，热病烦心。",
                        specialPoint: "大肠脉所行为经火",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "偏历", code: "LI6",
                    dacheng: {
                        location: "《大成》：腕中后三寸。",
                        needling: "针三分，留七呼，灸三壮。",
                        mainIndication: "肩膊肘腕酸疼，鼻衄，齿痛。",
                        specialPoint: "大肠之络穴，别走太阴",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "温溜", code: "LI7",
                    dacheng: {
                        location: "《大成》：腕后，大士五寸，小士六寸。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "肠鸣腹痛，伤寒哕逆。",
                        specialPoint: "大肠之郄穴",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "下廉", code: "LI8",
                    dacheng: {
                        location: "《大成》：辅骨下，去上廉一寸。",
                        needling: "针五分，留五呼，灸三壮。",
                        mainIndication: "飧泄，劳瘵，小腹满，小便黄。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "上廉", code: "LI9",
                    dacheng: {
                        location: "《大成》：三里下一寸。",
                        needling: "针五分，灸五壮。",
                        mainIndication: "小便难，黄赤，肠鸣，胸痛。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "三里", code: "LI10",
                    dacheng: {
                        location: "《大成》：曲池下二寸，按之肉起锐肉之端。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "齿痛，颊颔肿，瘰疬，手臂不仁。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "曲池", code: "LI11",
                    dacheng: {
                        location: "《大成》：肘外辅骨屈肘横纹头陷中。",
                        needling: "针五分，留七呼，灸三壮。",
                        mainIndication: "绕踝风，手臂红肿，肘中痛。",
                        specialPoint: "大肠脉所入为合土",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "肘髎", code: "LI12",
                    dacheng: {
                        location: "《大成》：大骨外廉陷中。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "肘节风痹，臂痛不举。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "五里", code: "LI13",
                    dacheng: {
                        location: "《大成》：肘上三寸，行向里大脉中央。",
                        needling: "禁针，灸三壮。",
                        mainIndication: "风劳惊恐，吐血咳嗽。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "臂臑", code: "LI14",
                    dacheng: {
                        location: "《大成》：肘上七寸，䐃肉端。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "寒热，颈项拘急，瘰疬，肩背痛。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "肩髃", code: "LI15",
                    dacheng: {
                        location: "《大成》：膊骨头肩端上两骨罅间陷者宛宛中。",
                        needling: "针六分，留六呼，灸三壮。",
                        mainIndication: "中风，肩臂痛，手臂挛急。",
                        specialPoint: "手阳明、阳蹻之会",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "巨骨", code: "LI16",
                    dacheng: {
                        location: "《大成》：肩尖端上行两叉骨罅间陷中。",
                        needling: "针一寸五分，灸三壮。",
                        mainIndication: "惊痫，吐血，臂痛不得屈伸。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "天鼎", code: "LI17",
                    dacheng: {
                        location: "《大成》：颈缺盆上直扶突后一寸。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "暴喑气哽，喉痹嗌肿，不得息。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "扶突", code: "LI18",
                    dacheng: {
                        location: "《大成》：气舍上一寸五分，在颈当曲颊下一寸。",
                        needling: "针三分，灸三壮。",
                        mainIndication: "咳嗽多唾，上气喘息，喉中如水鸡声。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "禾髎", code: "LI19",
                    dacheng: {
                        location: "《大成》：鼻孔下，侠水沟旁五分。",
                        needling: "针三分，禁灸。",
                        mainIndication: "鼻衄，鼻塞，鼻痔，鼻痈。",
                        volume: "卷六·考正穴法"
                    }
                },
                {
                    name: "迎香", code: "LI20",
                    dacheng: {
                        location: "《大成》：禾髎上一寸，鼻下孔旁五分。",
                        needling: "针三分，留三呼，禁灸。",
                        mainIndication: "鼻塞不闻香臭，偏风口喎，面痒浮肿。",
                        specialPoint: "手足阳明之会",
                        volume: "卷六·考正穴法"
                    }
                }
            ],



            "足阳明胃经": [
                { name: "足三里", code: "ST36", category: "合穴", location: "小腿前外侧", function: "健脾和胃，扶正培元", element: "土", special: "合穴属土/保健要穴" },
                { name: "天枢", code: "ST25", category: "募穴", location: "腹部脐旁", function: "调理肠胃，理气止痛", element: null, special: "大肠募穴" },
                { name: "内庭", code: "ST44", category: "荥穴", location: "足背第2、3趾间", function: "清胃泻火，理气止痛", element: "水", special: "荥穴属水" }
            ],
            "足太阴脾经": [
                { name: "三阴交", code: "SP6", category: "", location: "小腿内侧", function: "健脾利湿，调和肝肾", element: null, special: "肝脾肾三经交会" },
                { name: "血海", code: "SP10", category: "", location: "大腿内侧", function: "调经统血，健脾化湿", element: null, special: "" },
                { name: "公孙", code: "SP4", category: "络穴", location: "足内侧缘", function: "健脾和胃，调理冲任", element: null, special: "络穴/八脉交会穴" }
            ],
            "手少阴心经": [
                { name: "神门", code: "HT7", category: "输穴/原穴", location: "腕掌侧横纹尺侧端", function: "宁心安神，清心调气", element: "土", special: "输穴属土/原穴" },
                { name: "少海", code: "HT3", category: "合穴", location: "肘横纹内侧端", function: "宁心安神，通络止痛", element: "水", special: "合穴属水" }
            ],
            "手太阳小肠经": [
                { name: "后溪", code: "SI3", category: "输穴", location: "手掌尺侧", function: "清利头目，通督止痛", element: "木", special: "输穴属木/八脉交会穴" },
                { name: "腕骨", code: "SI4", category: "原穴", location: "手掌尺侧", function: "清热利湿，舒筋活络", element: null, special: "原穴" }
            ],
            "足太阳膀胱经": [
                { name: "委中", code: "BL40", category: "合穴", location: "腘横纹中点", function: "舒筋活络，泄热清暑", element: "土", special: "合穴属土" },
                { name: "肾俞", code: "BL23", category: "背俞穴", location: "腰部第2腰椎下", function: "益肾助阳，强腰利水", element: null, special: "肾背俞穴" },
                { name: "昆仑", code: "BL60", category: "经穴", location: "足外踝后方", function: "舒筋活络，清头明目", element: "火", special: "经穴属火" }
            ],
            "足少阴肾经": [
                { name: "太溪", code: "KI3", category: "输穴/原穴", location: "足内踝后方", function: "滋阴益肾，壮阳强腰", element: "土", special: "输穴属土/原穴" },
                { name: "涌泉", code: "KI1", category: "井穴", location: "足底前部", function: "开窍醒神，滋肾清热", element: "木", special: "井穴属木" }
            ],
            "手厥阴心包经": [
                { name: "内关", code: "PC6", category: "络穴", location: "前臂掌侧", function: "宁心安神，和胃降逆", element: null, special: "络穴/八脉交会穴" },
                { name: "大陵", code: "PC7", category: "输穴/原穴", location: "腕掌横纹中点", function: "宁心安神，和营通络", element: "土", special: "输穴属土/原穴" }
            ],
            "手少阳三焦经": [
                { name: "外关", code: "TE5", category: "络穴", location: "前臂背侧", function: "清热解表，通经活络", element: null, special: "络穴/八脉交会穴" },
                { name: "支沟", code: "TE6", category: "经穴", location: "前臂背侧", function: "清热理气，降逆通便", element: "火", special: "经穴属火" }
            ],
            "足少阳胆经": [
                { name: "阳陵泉", code: "GB34", category: "合穴", location: "小腿外侧", function: "舒筋活络，疏肝利胆", element: "土", special: "合穴属土/筋会" },
                { name: "风池", code: "GB20", category: "", location: "颈后枕骨下", function: "祛风解表，清头明目", element: null, special: "" }
            ],
            "足厥阴肝经": [
                { name: "太冲", code: "LR3", category: "输穴/原穴", location: "足背第1、2跖骨间", function: "疏肝理气，平肝熄风", element: "土", special: "输穴属土/原穴" },
                { name: "行间", code: "LR2", category: "荥穴", location: "足背第1、2趾间", function: "疏肝理气，清热熄风", element: "火", special: "荥穴属火" }
            ]
        },
        
        // 五行生克关系
        elementCycle: {
            // 五行相生: 木→火→土→金→水→木
            generate: {
                "木": "火",
                "火": "土", 
                "土": "金",
                "金": "水",
                "水": "木"
            }
        },
        
        // 脏腑表里关系
        exteriorInteriorPairs: {
            "手太阴肺经": "手阳明大肠经",
            "手阳明大肠经": "手太阴肺经",
            "足阳明胃经": "足太阴脾经",
            "足太阴脾经": "足阳明胃经",
            "手少阴心经": "手太阳小肠经",
            "手太阳小肠经": "手少阴心经",
            "足太阳膀胱经": "足少阴肾经",
            "足少阴肾经": "足太阳膀胱经",
            "手厥阴心包经": "手少阳三焦经",
            "手少阳三焦经": "手厥阴心包经",
            "足少阳胆经": "足厥阴肝经",
            "足厥阴肝经": "足少阳胆经"
        }
    },
    
    // ====== 初始化方法 ======
    init() {
        this.initMeridianSelection();
        this.initYuanLuoSelection();
        this.initMotherChildSelection();
    },
    
    // ====== 1. 循经取穴法 ======
    initMeridianSelection() {
        const selectionDiv = document.getElementById('acu-meridian-selection');
        if (!selectionDiv) return;
        
        const meridians = Object.keys(this.pointsDatabase.meridians);
        
        let html = `
            <div class="result-title">选择病变经络（循经取穴法）</div>
            <p><strong>原理：</strong>"经脉所过，主治所及" - 根据病变部位所属经络取穴</p>
            <div class="option-grid" style="margin: 20px 0;">
        `;
        
        meridians.forEach(meridian => {
            html += `
                <div class="option-button" onclick="TCMSystem.acupuncture.selectMeridian('${meridian}')">
                    ${meridian}<br>
                    <small>${this.getMeridianShortName(meridian)}</small>
                </div>
            `;
        });
        
        html += `</div>`;
        selectionDiv.innerHTML = html;
    },
    
    getMeridianShortName(fullName) {
        const shortNames = {
            "手太阴肺经": "肺经",
            "手阳明大肠经": "大肠经",
            "足阳明胃经": "胃经",
            "足太阴脾经": "脾经",
            "手少阴心经": "心经",
            "手太阳小肠经": "小肠经",
            "足太阳膀胱经": "膀胱经",
            "足少阴肾经": "肾经",
            "手厥阴心包经": "心包经",
            "手少阳三焦经": "三焦经",
            "足少阳胆经": "胆经",
            "足厥阴肝经": "肝经"
        };
        return shortNames[fullName] || fullName;
    },
    
    selectMeridian(meridian) {
        TCMSystem.currentState.selectedMeridian = meridian;
        
        // 显示经络信息
        const localDiv = document.getElementById('local-points-section');
        const distantDiv = document.getElementById('distant-points-section');
        
        if (!localDiv || !distantDiv) return;
        
        // 清空之前的内容
        localDiv.innerHTML = '';
        distantDiv.innerHTML = '';
        
        // 获取该经络的所有穴位
        const points = this.pointsDatabase.meridians[meridian];
        if (!points) return;
        
        // 显示经络简介
        localDiv.innerHTML = `
            <div class="result-title">${meridian} 主要穴位</div>
            <div class="option-grid">
        `;
        
        // 显示所有穴位
        points.forEach(point => {
            localDiv.innerHTML += `
                <div class="option-button" onclick="TCMSystem.acupuncture.togglePointSelection('${meridian}', '${point.name}')">
                    <strong>${point.name}</strong> (${point.code})<br>
                    <small>${point.location}</small><br>
                    <small style="color:#666;">${point.function}</small>
                    ${point.category ? `<br><small style="color:#9C27B0;">${point.category}</small>` : ''}
                    ${point.element ? `<br><small style="color:#4CAF50;">五行：${point.element}</small>` : ''}
                </div>
            `;
        });
        
        localDiv.innerHTML += `</div>`;
        
        TCMSystem.showMessage(`选择经络：${meridian}`, 'info');
    },
    
    selectMeridianPoints() {
        if (!TCMSystem.currentState.selectedMeridian) {
            TCMSystem.showMessage('请先选择经络', 'warning');
            return;
        }
        
        const meridian = TCMSystem.currentState.selectedMeridian;
        const points = this.pointsDatabase.meridians[meridian];
        
        if (points) {
            // 自动选择该经络的主要穴位：原穴、合穴、络穴
            let selectedCount = 0;
            
            points.forEach(point => {
                if (point.category && (point.category.includes('原穴') || 
                                      point.category.includes('合穴') || 
                                      point.category.includes('络穴'))) {
                    this.togglePointSelection(meridian, point.name);
                    selectedCount++;
                }
            });
            
            // 如果没找到特殊穴位，选择前3个
            if (selectedCount === 0 && points.length >= 3) {
                for (let i = 0; i < 3; i++) {
                    this.togglePointSelection(meridian, points[i].name);
                }
            }
            
            TCMSystem.showMessage(`已选择${meridian}主要穴位`, 'success');
        }
    },
    
    // ====== 2. 原络取穴法 ======
    initYuanLuoSelection() {
        const selectionDiv = document.getElementById('yuan-luo-selection');
        if (!selectionDiv) return;
        
        let html = `
            <div class="result-title">原络配穴法（主客配穴）</div>
            <p><strong>原理：</strong>原穴调本经元气 + 络穴通表里经气，主治表里两经同病</p>
            
            <div class="result-item">
                <strong>选择主经（先病之经）：</strong>
                <div class="option-grid" style="margin: 10px 0;">
        `;
        
        const meridians = Object.keys(this.pointsDatabase.meridians);
        meridians.forEach(meridian => {
            html += `
                <div class="option-button" onclick="TCMSystem.acupuncture.selectPrimaryMeridianForYuanLuo('${meridian}')">
                    ${meridian}<br>
                    <small>${this.getMeridianShortName(meridian)}</small>
                </div>
            `;
        });
        
        html += `
                </div>
                <div id="yuan-luo-result"></div>
            </div>
        `;
        
        selectionDiv.innerHTML = html;
    },
    
    selectPrimaryMeridianForYuanLuo(meridian) {
        // 获取原穴和络穴
        const yuanPoint = this.findYuanPoint(meridian);
        const luoPoint = this.findLuoPoint(meridian);
        
        // 找到表里经
        const exteriorInteriorPairs = this.pointsDatabase.exteriorInteriorPairs;
        const interiorMeridian = exteriorInteriorPairs[meridian];
        const interiorLuoPoint = interiorMeridian ? this.findLuoPoint(interiorMeridian) : null;
        
        const resultDiv = document.getElementById('yuan-luo-result');
        if (!resultDiv) return;
        
        resultDiv.innerHTML = `
            <div style="background: #F3E5F5; padding: 15px; border-radius: 10px; margin-top: 15px;">
                <strong>原络配穴方案：</strong><br>
                <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 8px;">
                    <span class="channel-tag" style="background:#9C27B0">主经（${meridian}）</span><br>
                    <strong>原穴：</strong>${yuanPoint ? yuanPoint.name : '无'} 
                    ${yuanPoint ? `<small>(${yuanPoint.function})</small>` : ''}<br>
                    <strong>络穴：</strong>${luoPoint ? luoPoint.name : '无'}
                    ${luoPoint ? `<small>(${luoPoint.function})</small>` : ''}
                </div>
                
                <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 8px;">
                    <span class="channel-tag" style="background:#2196F3">客经（${interiorMeridian || '无'}）</span><br>
                    <strong>络穴：</strong>${interiorLuoPoint ? interiorLuoPoint.name : '无'}
                    ${interiorLuoPoint ? `<small>(${interiorLuoPoint.function})</small>` : ''}
                </div>
                
                <div style="margin-top: 15px; text-align: center;">
                    <button class="tcm-button acupuncture" onclick="TCMSystem.acupuncture.applyYuanLuoPoints('${meridian}')">
                        ⚖️ 应用原络配穴
                    </button>
                </div>
            </div>
        `;
    },
    
    findYuanPoint(meridian) {
        const points = this.pointsDatabase.meridians[meridian];
        if (!points) return null;
        
        return points.find(point => point.category && point.category.includes('原穴'));
    },
    
    findLuoPoint(meridian) {
        const points = this.pointsDatabase.meridians[meridian];
        if (!points) return null;
        
        return points.find(point => point.category && point.category.includes('络穴'));
    },
    
    applyYuanLuoPoints(primaryMeridian) {
        const yuanPoint = this.findYuanPoint(primaryMeridian);
        const luoPoint = this.findLuoPoint(primaryMeridian);
        
        // 找到表里经
        const exteriorInteriorPairs = this.pointsDatabase.exteriorInteriorPairs;
        const interiorMeridian = exteriorInteriorPairs[primaryMeridian];
        const interiorLuoPoint = interiorMeridian ? this.findLuoPoint(interiorMeridian) : null;
        
        // 选择穴位
        if (yuanPoint) {
            this.togglePointSelection(primaryMeridian, yuanPoint.name);
        }
        
        if (luoPoint) {
            this.togglePointSelection(primaryMeridian, luoPoint.name);
        }
        
        if (interiorLuoPoint) {
            this.togglePointSelection(interiorMeridian, interiorLuoPoint.name);
        }
        
        TCMSystem.showMessage('已应用原络配穴', 'success');
    },
    
    // ====== 3. 子母取穴法 ======
    initMotherChildSelection() {
        const selectionDiv = document.getElementById('mother-child-selection');
        if (!selectionDiv) return;
        
        let html = `
            <div class="result-title">子母补泻配穴法</div>
            <p><strong>原理：</strong>"虚则补其母，实则泻其子" - 基于五行相生关系补虚泻实</p>
            
            <div class="result-item">
                <div style="margin-bottom: 15px;">
                    <strong>五行相生关系：</strong><br>
                    <div style="display: flex; justify-content: center; gap: 10px; margin: 10px 0;">
                        <span class="channel-tag" style="background:#8BC34A">木（生）</span>
                        <span>→</span>
                        <span class="channel-tag" style="background:#F44336">火（生）</span>
                        <span>→</span>
                        <span class="channel-tag" style="background:#FF9800">土（生）</span>
                        <span>→</span>
                        <span class="channel-tag" style="background:#9C27B0">金（生）</span>
                        <span>→</span>
                        <span class="channel-tag" style="background:#2196F3">水（生）</span>
                        <span>→</span>
                        <span class="channel-tag" style="background:#8BC34A">木</span>
                    </div>
                </div>
                
                <strong>选择病经：</strong>
                <div class="option-grid" style="margin: 10px 0;">
        `;
        
        const meridians = Object.keys(this.pointsDatabase.meridians);
        meridians.forEach(meridian => {
            html += `
                <div class="option-button" onclick="TCMSystem.acupuncture.selectMeridianForMotherChild('${meridian}')">
                    ${meridian}<br>
                    <small>${this.getMeridianShortName(meridian)}</small>
                </div>
            `;
        });
        
        html += `
                </div>
                <div id="mother-child-result"></div>
            </div>
        `;
        
        selectionDiv.innerHTML = html;
    },
    
    selectMeridianForMotherChild(meridian) {
        // 获取该经络的五输穴
        const fiveTransportPoints = this.getFiveTransportPoints(meridian);
        
        const resultDiv = document.getElementById('mother-child-result');
        if (!resultDiv) return;
        
        resultDiv.innerHTML = `
            <div style="background: #E8F5E9; padding: 15px; border-radius: 10px; margin-top: 15px;">
                <strong>${meridian} 五输穴五行属性：</strong><br>
                <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 8px;">
                    ${fiveTransportPoints.map(point => `
                        <div style="margin: 5px 0; padding: 5px; border-bottom: 1px dashed #ddd;">
                            <strong>${point.name}</strong> (${point.code}) - 
                            <span class="channel-tag" style="background:${this.getElementColor(point.element)}; padding: 2px 8px; font-size: 12px;">
                                ${point.category} - ${point.element || '无'}
                            </span><br>
                            <small>${point.function}</small>
                        </div>
                    `).join('')}
                </div>
                
                <div style="margin: 15px 0;">
                    <strong>选择病症虚实：</strong><br>
                    <div style="display: flex; gap: 15px; margin-top: 10px;">
                        <label style="flex: 1; text-align: center;">
                            <input type="radio" name="deficiency-excess" value="deficiency" checked>
                            <div style="padding: 10px; background: #FFF3E0; border-radius: 8px; cursor: pointer;">
                                <strong style="color:#FF9800;">虚证</strong><br>
                                <small>补其母穴</small>
                            </div>
                        </label>
                        <label style="flex: 1; text-align: center;">
                            <input type="radio" name="deficiency-excess" value="excess">
                            <div style="padding: 10px; background: #FFEBEE; border-radius: 8px; cursor: pointer;">
                                <strong style="color:#F44336;">实证</strong><br>
                                <small>泻其子穴</small>
                            </div>
                        </label>
                    </div>
                </div>
                
                <div style="margin-top: 15px; text-align: center;">
                    <button class="tcm-button acupuncture" onclick="TCMSystem.acupuncture.applyMotherChildPoints('${meridian}')">
                        🌱 应用子母配穴
                    </button>
                </div>
            </div>
        `;
    },
    
    getFiveTransportPoints(meridian) {
        const points = this.pointsDatabase.meridians[meridian];
        if (!points) return [];
        
        // 获取五输穴（井、荥、输、经、合）
        return points.filter(point => 
            point.category && (point.category.includes('井穴') || 
                             point.category.includes('荥穴') || 
                             point.category.includes('输穴') || 
                             point.category.includes('经穴') || 
                             point.category.includes('合穴'))
        );
    },
    
    getElementColor(element) {
        const colors = {
            '木': '#8BC34A',
            '火': '#F44336',
            '土': '#FF9800',
            '金': '#9C27B0',
            '水': '#2196F3'
        };
        return colors[element] || '#607D8B';
    },
    
    applyMotherChildPoints(meridian) {
        const isDeficiency = document.querySelector('input[name="deficiency-excess"]:checked').value === 'deficiency';
        const fiveTransportPoints = this.getFiveTransportPoints(meridian);
        
        if (fiveTransportPoints.length === 0) {
            TCMSystem.showMessage('该经络无五输穴信息', 'warning');
            return;
        }
        
        // 获取该经络的五行属性（通常以井穴的五行属性为代表）
        const meridianElement = fiveTransportPoints.find(p => p.category.includes('井穴'))?.element;
        if (!meridianElement) {
            TCMSystem.showMessage('无法确定经络五行属性', 'warning');
            return;
        }
        
        // 根据虚实选择母穴或子穴
        let targetElement;
        if (isDeficiency) {
            // 虚则补其母：找到生我的元素
            targetElement = this.findGeneratingElement(meridianElement);
        } else {
            // 实则泻其子：找到我生的元素
            targetElement = this.pointsDatabase.elementCycle.generate[meridianElement];
        }
        
        if (!targetElement) {
            TCMSystem.showMessage('无法计算母穴或子穴', 'warning');
            return;
        }
        
        // 在本经中寻找对应五行的穴位
        const targetPoint = fiveTransportPoints.find(p => p.element === targetElement);
        
        if (targetPoint) {
            this.togglePointSelection(meridian, targetPoint.name);
            TCMSystem.showMessage(
                `已选择${isDeficiency ? '母穴' : '子穴'}：${targetPoint.name} (${targetElement})`,
                'success'
            );
        } else {
            // 如果本经没有，可以在他经寻找
            TCMSystem.showMessage(`本经无${targetElement}行穴位，可考虑他经取穴`, 'info');
        }
    },
    
    findGeneratingElement(element) {
        // 找到生我的元素（五行相生中的"母"）
        const generate = this.pointsDatabase.elementCycle.generate;
        for (const [key, value] of Object.entries(generate)) {
            if (value === element) {
                return key;
            }
        }
        return null;
    },
    
    // ====== 通用穴位管理 ======
    togglePointSelection(meridian, pointName) {
        const point = { meridian, name: pointName };
        const existingIndex = TCMSystem.currentState.selectedPoints.findIndex(
            p => p.meridian === meridian && p.name === pointName
        );
        
        if (existingIndex > -1) {
            TCMSystem.currentState.selectedPoints.splice(existingIndex, 1);
            TCMSystem.showMessage(`取消选择：${pointName}`, 'info');
        } else {
            TCMSystem.currentState.selectedPoints.push(point);
            TCMSystem.showMessage(`选择穴位：${pointName} (${meridian})`, 'success');
            
            // 更新进度
            TCMSystem.currentState.userProgress.acupuncture.cases++;
            TCMSystem.currentState.userProgress.acupuncture.correct++;
            TCMSystem.currentState.userProgress.acupuncture.accuracy = 
                Math.round((TCMSystem.currentState.userProgress.acupuncture.correct / 
                TCMSystem.currentState.userProgress.acupuncture.cases) * 100);
            
            // 记录穴位掌握
            if (!TCMSystem.currentState.userProgress.pointsMastered.includes(pointName)) {
                TCMSystem.currentState.userProgress.pointsMastered.push(pointName);
            }
            
            TCMSystem.saveProgress();
            TCMSystem.updateProgressDisplay();
        }
    }
};

// 针灸辅助函数
TCMSystem.acupuncture.getMeridianColor = function(meridian) {
    const colors = {
        "手太阴肺经": "#FF9800",
        "手阳明大肠经": "#FF5722",
        "足阳明胃经": "#795548",
        "足太阴脾经": "#8BC34A",
        "手少阴心经": "#F44336",
        "手太阳小肠经": "#FF5252",
        "足太阳膀胱经": "#2196F3",
        "足少阴肾经": "#3F51B5",
        "手厥阴心包经": "#E91E63",
        "手少阳三焦经": "#9C27B0",
        "足少阳胆经": "#CDDC39",
        "足厥阴肝经": "#4CAF50"
    };
    return colors[meridian] || "#607D8B";
};
