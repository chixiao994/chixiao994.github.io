// ====== 综合治疗系统 ======
TCMSystem.integration = {
    init() {
        this.loadIntegratedCase();
    },
    
    loadIntegratedCase() {
        // 创建一个综合治疗案例
        const integratedCase = {
            name: "肝火犯肺证综合治疗",
            description: "患者咳嗽、胸胁胀痛、烦躁易怒、口苦咽干、舌红苔黄、脉弦数",
            shanghanDiagnosis: "肝火犯肺证",
            shanghanFormula: "黛蛤散合泻白散",
            formulaDetail: "青黛、海蛤壳、桑白皮、地骨皮、甘草",
            acupunctureDiagnosis: "肝肺郁热",
            acupuncturePoints: [
                { meridian: "足厥阴肝经", points: ["太冲", "行间"] },
                { meridian: "手太阴肺经", points: ["尺泽", "列缺"] },
                { meridian: "手阳明大肠经", points: ["合谷"] }
            ],
            treatmentPrinciple: "清肝泻火，宣肺止咳"
        };
        
        const caseDiv = document.getElementById('integrated-case-info');
        if (!caseDiv) return;
        
        caseDiv.innerHTML = `
            <div class="result-item">
                <strong>综合治疗案例：${integratedCase.name}</strong><br><br>
                <strong>症状表现：</strong>${integratedCase.description}<br>
                <strong>中医辨证：</strong>${integratedCase.treatmentPrinciple}<br><br>
                <div style="display: flex; gap: 15px; margin-top: 10px;">
                    <span class="channel-tag taiyang">伤寒辨证</span>
                    <span class="channel-tag" style="background:#9C27B0">针灸配穴</span>
                </div>
            </div>
        `;
        
        // 渲染经方部分
        const formulaDiv = document.getElementById('integrated-formula');
        if (formulaDiv) {
            formulaDiv.innerHTML = `
                <div style="background: #FFF3E0; padding: 15px; border-radius: 10px; border: 2px solid #FFCC80;">
                    <strong>🌿 经方治疗 - 《伤寒论》</strong><br><br>
                    <strong>辨证：</strong>${integratedCase.shanghanDiagnosis}<br>
                    <strong>推荐方剂：</strong>${integratedCase.shanghanFormula}<br>
                    <strong>方剂组成：</strong>${integratedCase.formulaDetail}<br><br>
                    <button class="tcm-button" onclick="TCMSystem.integration.selectFormula()" style="padding: 8px 15px; font-size: 14px;">
                        选择此经方
                    </button>
                </div>
            `;
        }
        
        // 渲染针灸部分
        const acupunctureDiv = document.getElementById('integrated-acupuncture');
        if (acupunctureDiv) {
            let acuHtml = `
                <div style="background: #F3E5F5; padding: 15px; border-radius: 10px; border: 2px solid #E1BEE7;">
                    <strong>🪡 针灸治疗 - 《针灸大成》</strong><br><br>
                    <strong>辨证：</strong>${integratedCase.acupunctureDiagnosis}<br>
                    <strong>配穴方案：</strong><br>
            `;
            
            integratedCase.acupuncturePoints.forEach(item => {
                const meridianColor = TCMSystem.acupuncture.getMeridianColor(item.meridian);
                acuHtml += `
                    <div style="margin: 8px 0; padding: 10px; background: white; border-radius: 5px; border-left: 5px solid ${meridianColor}">
                        <strong style="color:${meridianColor}">${TCMSystem.acupuncture.getMeridianShortName(item.meridian)}：</strong>
                        ${item.points.join('、')}
                    </div>
                `;
            });
            
            acuHtml += `
                    <br><button class="tcm-button acupuncture" onclick="TCMSystem.integration.selectAcupuncturePoints()" style="padding: 8px 15px; font-size: 14px;">
                        选择这些穴位
                    </button>
                </div>
            `;
            
            acupunctureDiv.innerHTML = acuHtml;
        }
    },
    
    selectFormula() {
        TCMSystem.currentState.selectedFormula = "黛蛤散合泻白散";
        TCMSystem.showMessage('已选择经方：黛蛤散合泻白散', 'success');
    },
    
    selectAcupuncturePoints() {
        const points = [
            { meridian: "足厥阴肝经", name: "太冲" },
            { meridian: "足厥阴肝经", name: "行间" },
            { meridian: "手太阴肺经", name: "尺泽" },
            { meridian: "手太阴肺经", name: "列缺" },
            { meridian: "手阳明大肠经", name: "合谷" }
        ];
        
        points.forEach(point => {
            if (TCMSystem.acupuncture.togglePointSelection) {
                TCMSystem.acupuncture.togglePointSelection(point.meridian, point.name);
            }
        });
        
        TCMSystem.showMessage('已选择针灸配穴', 'success');
    }
};

// ====== 学习系统 ======
TCMSystem.learning = {
    init() {
        this.loadLearningContent();
    },
    
    loadLearningContent() {
        const contentDiv = document.getElementById('learning-content');
        if (!contentDiv) return;
        
        const learningModules = [
            {
                title: "📖 《伤寒论》六经辨证精要",
                items: [
                    "太阳病：恶寒发热，脉浮。治法：辛温解表。主方：麻黄汤、桂枝汤",
                    "阳明病：但热不寒，大渴大汗。治法：清热攻下。主方：白虎汤、承气汤",
                    "少阳病：往来寒热，胸胁苦满。治法：和解少阳。主方：小柴胡汤",
                    "太阴病：腹满而吐，食不下。治法：温中散寒。主方：理中汤",
                    "少阴病：脉微细，但欲寐。治法：回阳救逆。主方：四逆汤",
                    "厥阴病：寒热错杂，厥热胜复。治法：寒热并用。主方：乌梅丸"
                ]
            },
            {
                title: "🪡 《针灸大成》配穴法则",
                items: [
                    "循经取穴：经脉所过，主治所及。如头痛取合谷、列缺",
                    "原络配穴：原穴调本经元气，络穴通表里经气。主治表里经同病",
                    "子母配穴：虚则补其母，实则泻其子。基于五行生克关系",
                    "俞募配穴：背俞穴与腹募穴相配，治疗脏腑病"
                ]
            }
        ];
        
        let html = '';
        learningModules.forEach(module => {
            html += `
                <div class="tcm-card" style="margin-bottom: 20px;">
                    <div class="tcm-card-header">${module.title}</div>
                    <div style="padding: 10px 0;">
                        <ul style="list-style: none; padding-left: 0;">
            `;
            
            module.items.forEach(item => {
                html += `
                    <li style="margin: 8px 0; padding-left: 25px; position: relative;">
                        <span style="position: absolute; left: 0;">•</span> ${item}
                    </li>
                `;
            });
            
            html += `
                        </ul>
                    </div>
                </div>
            `;
        });
        
        contentDiv.innerHTML = html;
    }
};

// ====== 进度系统 ======
TCMSystem.progress = {
    init() {
        this.loadProgressStats();
    },
    
    loadProgressStats() {
        const statsDiv = document.getElementById('progress-stats');
        if (!statsDiv) return;
        
        const progress = TCMSystem.currentState.userProgress;
        
        // 计算统计数据
        const totalCases = progress.shanghan.cases + progress.acupuncture.cases;
        const totalCorrect = progress.shanghan.correct + progress.acupuncture.correct;
        const overallAccuracy = totalCases > 0 ? Math.round((totalCorrect / totalCases) * 100) : 0;
        
        // 获取已掌握穴位的前5个
        const topPoints = progress.pointsMastered.slice(0, 5);
        
        let html = `
            <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
                <div style="flex: 1; min-width: 300px;">
                    <div class="tcm-card">
                        <div class="tcm-card-header">📊 总体学习统计</div>
                        <div style="padding: 15px 0;">
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>总练习次数：</span>
                                <strong>${totalCases} 次</strong>
                            </div>
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>总体准确率：</span>
                                <strong style="color:#4CAF50">${overallAccuracy}%</strong>
                            </div>
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>掌握经方：</span>
                                <strong>${progress.formulasMastered.length} 首</strong>
                            </div>
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>掌握穴位：</span>
                                <strong>${progress.pointsMastered.length} 个</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                    <div class="tcm-card">
                        <div class="tcm-card-header">📖 《伤寒论》进度</div>
                        <div style="padding: 15px 0;">
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>医案练习：</span>
                                <strong>${progress.shanghan.cases} 次</strong>
                            </div>
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>辨证准确率：</span>
                                <strong style="color:#4CAF50">${progress.shanghan.accuracy}%</strong>
                            </div>
                            <div style="margin-top: 15px;">
                                <strong>已掌握经方：</strong><br>
                                <div style="margin-top: 8px;">
        `;
        
        if (progress.formulasMastered.length > 0) {
            progress.formulasMastered.forEach(formula => {
                html += `<span style="display: inline-block; background: #E8F5E9; padding: 3px 8px; margin: 3px; border-radius: 4px; font-size: 12px;">${formula}</span>`;
            });
        } else {
            html += '<div style="color: #999; font-style: italic;">尚未掌握任何经方</div>';
        }
        
        html += `
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                    <div class="tcm-card">
                        <div class="tcm-card-header">🪡 《针灸大成》进度</div>
                        <div style="padding: 15px 0;">
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>配穴练习：</span>
                                <strong>${progress.acupuncture.cases} 次</strong>
                            </div>
                            <div style="margin: 10px 0; display: flex; justify-content: space-between;">
                                <span>配穴准确率：</span>
                                <strong style="color:#4CAF50">${progress.acupuncture.accuracy}%</strong>
                            </div>
                            <div style="margin-top: 15px;">
                                <strong>已掌握穴位：</strong><br>
                                <div style="margin-top: 8px;">
        `;
        
        if (topPoints.length > 0) {
            topPoints.forEach(point => {
                html += `<span style="display: inline-block; background: #F3E5F5; padding: 3px 8px; margin: 3px; border-radius: 4px; font-size: 12px;">${point}</span>`;
            });
            if (progress.pointsMastered.length > 5) {
                html += `<span style="display: inline-block; background: #E3F2FD; padding: 3px 8px; margin: 3px; border-radius: 4px; font-size: 12px;">+${progress.pointsMastered.length - 5}个</span>`;
            }
        } else {
            html += '<div style="color: #999; font-style: italic;">尚未掌握任何穴位</div>';
        }
        
        html += `
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tcm-card">
                <div class="tcm-card-header">🏆 学习成就</div>
                <div style="padding: 15px 0;">
                    ${this.renderAchievements()}
                </div>
            </div>
        `;
        
        statsDiv.innerHTML = html;
    },
    
    renderAchievements() {
        const progress = TCMSystem.currentState.userProgress;
        const achievements = [];
        
        // 检查成就条件
        if (progress.shanghan.cases >= 1) {
            achievements.push({ 
                name: "伤寒入门", 
                desc: "完成第一次伤寒辨证", 
                icon: "📖",
                level: "初级"
            });
        }
        
        if (progress.acupuncture.cases >= 1) {
            achievements.push({ 
                name: "针灸初试", 
                desc: "完成第一次针灸配穴", 
                icon: "🪡",
                level: "初级"
            });
        }
        
        if (progress.shanghan.accuracy >= 50) {
            achievements.push({ 
                name: "辨证入门", 
                desc: "伤寒辨证准确率50%以上", 
                icon: "🎯",
                level: "中级"
            });
        }
        
        if (progress.acupuncture.accuracy >= 50) {
            achievements.push({ 
                name: "配穴入门", 
                desc: "针灸配穴准确率50%以上", 
                icon: "✨",
                level: "中级"
            });
        }
        
        if (progress.formulasMastered.length >= 3) {
            achievements.push({ 
                name: "经方学子", 
                desc: "掌握3首以上经方", 
                icon: "🌿",
                level: "中级"
            });
        }
        
        if (progress.pointsMastered.length >= 5) {
            achievements.push({ 
                name: "穴位熟手", 
                desc: "掌握5个以上穴位", 
                icon: "📍",
                level: "中级"
            });
        }
        
        if (achievements.length === 0) {
            return '<div style="text-align: center; padding: 20px; color: #999;">继续学习解锁成就！</div>';
        }
        
        let html = '<div style="display: flex; flex-wrap: wrap; gap: 15px;">';
        achievements.forEach(achievement => {
            const levelColors = {
                "初级": "#4CAF50",
                "中级": "#2196F3", 
                "高级": "#FF9800",
                "大师": "#9C27B0"
            };
            
            html += `
                <div style="flex: 1; min-width: 180px; background: white; padding: 15px; border-radius: 10px; border: 2px solid ${levelColors[achievement.level]}; text-align: center; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <div style="font-size: 30px; margin-bottom: 10px;">${achievement.icon}</div>
                    <strong style="color:${levelColors[achievement.level]}">${achievement.name}</strong><br>
                    <small style="color: #666;">${achievement.desc}</small>
                    <div style="margin-top: 8px;">
                        <span style="display: inline-block; background:${levelColors[achievement.level]}; color:white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">
                            ${achievement.level}
                        </span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        return html;
    }
};
