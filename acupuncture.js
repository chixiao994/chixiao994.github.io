// ====== 《针灸大成》子系统 ======
TCMSystem.acupuncture = {
    // ====== 十二正经完整穴位数据库 ======
    pointsDatabase: {
        meridians: {
            "手太阴肺经": [
                { name: "中府", code: "LU1", category: "募穴", location: "胸前壁外上方", function: "宣肺止咳，化痰平喘", element: null, special: "肺募穴" },
                { name: "尺泽", code: "LU5", category: "合穴", location: "肘横纹中", function: "清肺泻热，止咳平喘", element: "水", special: "合穴属水" },
                { name: "列缺", code: "LU7", category: "络穴", location: "前臂桡侧", function: "宣肺解表，通调任脉", element: null, special: "络穴/八脉交会穴" },
                { name: "太渊", code: "LU9", category: "输穴/原穴", location: "腕横纹桡侧", function: "补肺益气，止咳化痰", element: "土", special: "输穴属土/原穴/脉会" },
                { name: "少商", code: "LU11", category: "井穴", location: "拇指桡侧", function: "清肺利咽，开窍醒神", element: "木", special: "井穴属木" }
            ],
            "手阳明大肠经": [
                { name: "商阳", code: "LI1", category: "井穴", location: "食指桡侧", function: "清热解表，开窍苏厥", element: "金", special: "井穴属金" },
                { name: "合谷", code: "LI4", category: "原穴", location: "手背第1、2掌骨间", function: "疏风解表，通络止痛", element: null, special: "原穴" },
                { name: "曲池", code: "LI11", category: "合穴", location: "肘横纹外侧端", function: "清热祛风，调和营卫", element: "土", special: "合穴属土" }
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
