// ====== 《伤寒论》子系统 ======
TCMSystem.shanghan = {
    // 医案数据库
    medicalCases: [
        {
            id: 1,
            name: "太阳中风证",
            channel: "太阳",
            difficulty: "初级",
            symptoms: ["发热", "汗出", "恶风", "头痛", "鼻鸣干呕"],
            tongue: "舌淡红，苔薄白",
            pulse: "脉浮缓",
            correctDiagnosis: "太阳中风证",
            correctTreatment: "桂枝汤",
            pathogenesis: "风邪袭表，卫强营弱，腠理开泄",
            formulaDetail: "桂枝三两，芍药三两，甘草二两（炙），生姜三两（切），大枣十二枚（擘）",
            progression: "若误治或失治，可传阳明或少阳"
        },
        {
            id: 2,
            name: "太阳伤寒证",
            channel: "太阳",
            difficulty: "初级",
            symptoms: ["发热", "恶寒", "无汗", "头痛", "身痛", "骨节疼痛"],
            tongue: "舌淡红，苔薄白",
            pulse: "脉浮紧",
            correctDiagnosis: "太阳伤寒证",
            correctTreatment: "麻黄汤",
            pathogenesis: "寒邪束表，卫阳被遏，营阴郁滞",
            formulaDetail: "麻黄三两（去节），桂枝二两（去皮），甘草一两（炙），杏仁七十个（去皮尖）",
            progression: "可传阳明化热"
        },
        {
            id: 3,
            name: "阳明经热证",
            channel: "阳明",
            difficulty: "中级",
            symptoms: ["大热", "大汗", "大渴", "脉洪大", "面赤", "心烦"],
            tongue: "舌红，苔黄燥",
            pulse: "脉洪大",
            correctDiagnosis: "阳明经热证",
            correctTreatment: "白虎汤",
            pathogenesis: "阳明气分热盛，津液耗伤",
            formulaDetail: "石膏一斤（碎），知母六两，甘草二两（炙），粳米六合",
            progression: "热盛伤津，可致腑实"
        },
        {
            id: 4,
            name: "阳明腑实证",
            channel: "阳明",
            difficulty: "中级",
            symptoms: ["潮热", "谵语", "腹满痛", "大便不通", "手足濈然汗出"],
            tongue: "舌红，苔黄燥起刺",
            pulse: "脉沉实",
            correctDiagnosis: "阳明腑实证",
            correctTreatment: "大承气汤",
            pathogenesis: "燥屎内结，腑气不通，热实互结",
            formulaDetail: "大黄四两（酒洗），厚朴半斤（炙，去皮），枳实五枚（炙），芒硝三合",
            progression: "可致热厥、痉病"
        },
        {
            id: 5,
            name: "少阳证",
            channel: "少阳",
            difficulty: "中级",
            symptoms: ["往来寒热", "胸胁苦满", "默默不欲饮食", "心烦喜呕", "口苦", "咽干", "目眩"],
            tongue: "舌红，苔白或微黄",
            pulse: "脉弦",
            correctDiagnosis: "少阳证",
            correctTreatment: "小柴胡汤",
            pathogenesis: "邪犯少阳，枢机不利，胆火上炎",
            formulaDetail: "柴胡半斤，黄芩三两，人参三两，半夏半升（洗），甘草三两（炙），生姜三两（切），大枣十二枚（擘）",
            progression: "可兼太阳表证或阳明里证"
        },
        {
            id: 6,
            name: "太阴虚寒证",
            channel: "太阴",
            difficulty: "中级",
            symptoms: ["腹满而吐", "食不下", "自利益甚", "时腹自痛", "口不渴"],
            tongue: "舌淡胖，苔白滑",
            pulse: "脉沉缓或弱",
            correctDiagnosis: "太阴虚寒证",
            correctTreatment: "理中汤",
            pathogenesis: "脾阳虚弱，寒湿内盛，运化失职",
            formulaDetail: "人参三两，干姜三两，甘草三两（炙），白术三两",
            progression: "可传少阴，发展为全身虚寒"
        },
        {
            id: 7,
            name: "少阴寒化证",
            channel: "少阴",
            difficulty: "高级",
            symptoms: ["畏寒", "肢厥", "下利清谷", "小便清长", "但欲寐"],
            tongue: "舌淡，苔白滑",
            pulse: "脉微细",
            correctDiagnosis: "少阴寒化证",
            correctTreatment: "四逆汤",
            pathogenesis: "心肾阳虚，阴寒内盛",
            formulaDetail: "附子一枚（生用，去皮，破八片），干姜一两半，甘草二两（炙）",
            progression: "阳虚欲脱，可致亡阳"
        },
        {
            id: 8,
            name: "厥阴寒热错杂证",
            channel: "厥阴",
            difficulty: "高级",
            symptoms: ["消渴", "气上撞心", "心中疼热", "饥而不欲食", "食则吐蛔"],
            tongue: "舌红，苔黄白相间",
            pulse: "脉弦或弦细",
            correctDiagnosis: "厥阴寒热错杂证",
            correctTreatment: "乌梅丸",
            pathogenesis: "寒热错杂，阴阳之气不相顺接",
            formulaDetail: "乌梅三百枚，细辛六两，干姜十两，黄连十六两，当归四两，附子六两（炮），蜀椒四两（出汗），桂枝六两（去皮），人参六两，黄柏六两",
            progression: "厥热胜复，病情复杂多变"
        }
    ],
    
    init() {
        this.loadRandomCase();
    },
    
    loadRandomCase() {
        const randomIndex = Math.floor(Math.random() * this.medicalCases.length);
        TCMSystem.currentState.currentCase = this.medicalCases[randomIndex];
        this.renderCurrentCase();
    },
    
    renderCurrentCase() {
        const caseInfo = TCMSystem.currentState.currentCase;
        if (!caseInfo) return;
        
        const caseDiv = document.getElementById('current-case-info');
        if (!caseDiv) return;
        
        caseDiv.innerHTML = `
            <div class="result-item">
                <div><strong>医案名称：</strong>${caseInfo.name}</div>
                <div><span class="channel-tag ${TCMSystem.getChannelClass(caseInfo.channel)}">
                    ${caseInfo.channel}病
                </span></div>
                <div><strong>主要症状：</strong>${caseInfo.symptoms.join('、')}</div>
                <div><strong>舌象：</strong>${caseInfo.tongue}</div>
                <div><strong>脉象：</strong>${caseInfo.pulse}</div>
                <div><strong>病机分析：</strong>${caseInfo.pathogenesis}</div>
            </div>
        `;
        
        // 渲染诊断选项
        this.renderDiagnosisOptions();
    },
    
    renderDiagnosisOptions() {
        const optionsDiv = document.getElementById('case-options');
        if (!optionsDiv) return;
        
        const channels = ["太阳中风证", "太阳伤寒证", "阳明经热证", "阳明腑实证", 
                        "少阳证", "太阴虚寒证", "少阴寒化证", "厥阴寒热错杂证"];
        
        let html = '';
        channels.forEach(channel => {
            html += `
                <div class="option-button" onclick="TCMSystem.shanghan.selectDiagnosis('${channel}')">
                    ${channel}
                </div>
            `;
        });
        optionsDiv.innerHTML = html;
    },
    
    selectDiagnosis(diagnosis) {
        TCMSystem.currentState.currentDiagnosis = diagnosis;
        
        // 更新UI
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        const submitBtn = document.getElementById('submit-diagnosis-btn');
        if (submitBtn) {
            submitBtn.style.display = 'block';
        }
        
        TCMSystem.showMessage(`选择诊断：${diagnosis}`, 'info');
    },
    
    submitDiagnosis() {
        if (!TCMSystem.currentState.currentDiagnosis) {
            TCMSystem.showMessage('请先选择诊断', 'warning');
            return;
        }
        
        const caseInfo = TCMSystem.currentState.currentCase;
        const isCorrect = TCMSystem.currentState.currentDiagnosis === caseInfo.correctDiagnosis;
        
        const resultDiv = document.getElementById('shanghan-diagnosis-output');
        const shanghanResult = document.getElementById('shanghan-result');
        const nextFormulaBtn = document.getElementById('next-formula-btn');
        
        if (resultDiv && shanghanResult && nextFormulaBtn) {
            resultDiv.innerHTML = `
                <div>
                    <strong>您的诊断：</strong>${TCMSystem.currentState.currentDiagnosis}<br>
                    <strong>正确诊断：</strong>${caseInfo.correctDiagnosis}<br>
                    <strong>结果：</strong>${isCorrect ? 
                        '<span style="color:#4CAF50">✅ 诊断正确！</span>' : 
                        '<span style="color:#F44336">❌ 诊断错误</span>'}<br>
                    <strong>推荐经方：</strong>${caseInfo.correctTreatment}<br>
                    <strong>方剂组成：</strong>${caseInfo.formulaDetail}
                </div>
            `;
            
            shanghanResult.style.display = 'block';
            nextFormulaBtn.style.display = 'block';
        }
        
        // 更新进度
        if (isCorrect) {
            TCMSystem.currentState.userProgress.shanghan.cases++;
            TCMSystem.currentState.userProgress.shanghan.correct++;
        } else {
            TCMSystem.currentState.userProgress.shanghan.cases++;
        }
        
        TCMSystem.currentState.userProgress.shanghan.accuracy = 
            Math.round((TCMSystem.currentState.userProgress.shanghan.correct / 
            TCMSystem.currentState.userProgress.shanghan.cases) * 100) || 0;
        
        TCMSystem.saveProgress();
        TCMSystem.updateProgressDisplay();
    },
    
    showFormulas() {
        const formulaSection = document.getElementById('formula-section');
        if (formulaSection) {
            formulaSection.style.display = 'block';
        }
        this.renderFormulaOptions();
    },
    
    renderFormulaOptions() {
        const formulaDiv = document.getElementById('formula-selection');
        if (!formulaDiv) return;
        
        const formulas = [
            { name: "桂枝汤", indication: "太阳中风证" },
            { name: "麻黄汤", indication: "太阳伤寒证" },
            { name: "葛根汤", indication: "太阳温病证" },
            { name: "白虎汤", indication: "阳明经热证" },
            { name: "大承气汤", indication: "阳明腑实证" },
            { name: "小柴胡汤", indication: "少阳证" },
            { name: "理中汤", indication: "太阴虚寒证" },
            { name: "四逆汤", indication: "少阴寒化证" },
            { name: "乌梅丸", indication: "厥阴寒热错杂证" }
        ];
        
        const caseInfo = TCMSystem.currentState.currentCase;
        let html = '';
        formulas.forEach(formula => {
            const isCorrect = formula.indication === caseInfo.correctDiagnosis;
            html += `
                <div class="option-button" onclick="TCMSystem.shanghan.selectFormula('${formula.name}')"
                     style="${isCorrect ? 'border-color:#4CAF50' : ''}">
                    ${formula.name}<br>
                    <small>主治：${formula.indication}</small>
                    ${isCorrect ? '<br><small style="color:#4CAF50">✅ 对症</small>' : ''}
                </div>
            `;
        });
        formulaDiv.innerHTML = html;
    },
    
    selectFormula(formulaName) {
        TCMSystem.currentState.selectedFormula = formulaName;
        TCMSystem.showMessage(`选择经方：${formulaName}`, 'info');
    },
    
    applyTreatment() {
        if (!TCMSystem.currentState.selectedFormula) {
            TCMSystem.showMessage('请先选择经方', 'warning');
            return;
        }
        
        const caseInfo = TCMSystem.currentState.currentCase;
        const isCorrect = TCMSystem.currentState.selectedFormula === caseInfo.correctTreatment;
        
        const resultDiv = document.getElementById('formula-result-output');
        const formulaResult = document.getElementById('formula-result');
        
        if (resultDiv && formulaResult) {
            resultDiv.innerHTML = `
                <div>
                    <strong>应用经方：</strong>${TCMSystem.currentState.selectedFormula}<br>
                    <strong>正确经方：</strong>${caseInfo.correctTreatment}<br>
                    <strong>治疗效果：</strong>${isCorrect ? 
                        '<span style="color:#4CAF50">✅ 治疗成功！患者康复</span>' : 
                        '<span style="color:#F44336">❌ 治疗无效，病情加重</span>'}<br>
                    ${isCorrect ? '<strong>治疗分析：</strong>方证对应，效如桴鼓' : 
                                 '<strong>治疗分析：</strong>方证不符，延误病情'}
                </div>
            `;
            
            formulaResult.style.display = 'block';
        }
        
        // 记录经方掌握
        if (isCorrect && !TCMSystem.currentState.userProgress.formulasMastered.includes(caseInfo.correctTreatment)) {
            TCMSystem.currentState.userProgress.formulasMastered.push(caseInfo.correctTreatment);
            TCMSystem.saveProgress();
        }
        
        TCMSystem.showMessage(isCorrect ? '治疗成功！' : '治疗失败', isCorrect ? 'success' : 'danger');
    }
};
