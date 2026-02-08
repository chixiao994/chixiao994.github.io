// ====== 中医传承系统核心 ======
const TCMSystem = {
    // ====== 系统状态 ======
    currentState: {
        activeTab: 'home',
        activeSubTab: 'case',
        userProgress: {
            shanghan: { cases: 0, correct: 0, accuracy: 0 },
            acupuncture: { cases: 0, correct: 0, accuracy: 0 },
            formulasMastered: [],
            pointsMastered: [],
            achievements: []
        },
        currentCase: null,
        currentDiagnosis: null,
        selectedPoints: [],
        timeData: null
    },
    
    // ====== 初始化系统 ======
    init() {
        this.loadProgress();
        this.initTimeData();
        this.initEventListeners();
        this.updateProgressDisplay();
        this.showMessage('中医传承系统已启动', 'info');
        
        // 初始化各子系统
        if (this.shanghan && this.shanghan.init) this.shanghan.init();
        if (this.acupuncture && this.acupuncture.init) this.acupuncture.init();
        if (this.integration && this.integration.init) this.integration.init();
        if (this.learning && this.learning.init) this.learning.init();
        if (this.progress && this.progress.init) this.progress.init();
    },
    
    // ====== 标签页管理 ======
    initEventListeners() {
        // 主标签页切换
        document.querySelectorAll('.main-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                this.switchMainTab(tabId);
            });
        });
        
        // 子标签页切换
        document.querySelectorAll('.sub-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const subtabId = tab.dataset.subtab;
                const parentTab = tab.closest('.sub-tabs').id.replace('-subtabs', '');
                this.switchSubTab(parentTab, subtabId);
            });
        });
    },
    
    switchMainTab(tabId) {
        // 更新主标签
        document.querySelectorAll('.main-tab').forEach(t => {
            t.classList.remove('active');
        });
        const targetTab = document.querySelector(`.main-tab[data-tab="${tabId}"]`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        // 更新内容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(`${tabId}-tab`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        // 更新子标签显示
        document.querySelectorAll('.sub-tabs').forEach(sub => {
            sub.classList.remove('active');
        });
        
        if (tabId === 'shanghan') {
            const shanghanSubtabs = document.getElementById('shanghan-subtabs');
            if (shanghanSubtabs) {
                shanghanSubtabs.classList.add('active');
                this.switchSubTab('shanghan', 'case');
            }
        } else if (tabId === 'acupuncture') {
            const acupunctureSubtabs = document.getElementById('acupuncture-subtabs');
            if (acupunctureSubtabs) {
                acupunctureSubtabs.classList.add('active');
                this.switchSubTab('acupuncture', 'meridian');
            }
        }
        
        this.currentState.activeTab = tabId;
    },
    
    switchSubTab(parentTab, subtabId) {
        // 更新子标签
        const subtabs = document.getElementById(`${parentTab}-subtabs`);
        if (subtabs) {
            subtabs.querySelectorAll('.sub-tab').forEach(t => {
                t.classList.remove('active');
            });
            const targetSubtab = subtabs.querySelector(`.sub-tab[data-subtab="${subtabId}"]`);
            if (targetSubtab) {
                targetSubtab.classList.add('active');
            }
            
            // 更新内容
            const contentId = `${parentTab}-${subtabId}`;
            const allContents = subtabs.parentElement.nextElementSibling.querySelectorAll('.tab-content');
            allContents.forEach(content => {
                if (content.id.startsWith(parentTab)) {
                    content.classList.remove('active');
                }
            });
            
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add('active');
                this.currentState.activeSubTab = subtabId;
                
                // 如果切换到医案辨证，加载一个医案
                if (contentId === 'shanghan-case' && this.shanghan && this.shanghan.loadRandomCase) {
                    this.shanghan.loadRandomCase();
                }
            }
        }
    },
    
    // ====== 时间数据 ======
    initTimeData() {
        const now = new Date();
        this.currentState.timeData = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate(),
            hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds()
        };
    },
    
    // ====== 进度管理 ======
    loadProgress() {
        const saved = localStorage.getItem('tcm-system-progress');
        if (saved) {
            this.currentState.userProgress = JSON.parse(saved);
        }
    },
    
    saveProgress() {
        localStorage.setItem('tcm-system-progress', JSON.stringify(this.currentState.userProgress));
    },
    
    updateProgressDisplay() {
        const shanghanAccuracy = this.currentState.userProgress.shanghan.accuracy || 0;
        const acuAccuracy = this.currentState.userProgress.acupuncture.accuracy || 0;
        
        const shanghanProgress = document.getElementById('shanghan-progress');
        const shanghanAccuracyElem = document.getElementById('shanghan-accuracy');
        const acuProgress = document.getElementById('acu-progress');
        const acuAccuracyElem = document.getElementById('acu-accuracy');
        
        if (shanghanProgress) shanghanProgress.style.width = `${shanghanAccuracy}%`;
        if (shanghanAccuracyElem) shanghanAccuracyElem.textContent = `${shanghanAccuracy}%`;
        if (acuProgress) acuProgress.style.width = `${acuAccuracy}%`;
        if (acuAccuracyElem) acuAccuracyElem.textContent = `${acuAccuracy}%`;
    },
    
    // ====== 消息系统 ======
    showMessage(text, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'tcm-message';
        messageDiv.textContent = text;
        
        const colors = {
            success: '#4CAF50',
            warning: '#FF9800',
            danger: '#F44336',
            info: '#5D4037'
        };
        messageDiv.style.borderLeftColor = colors[type] || colors.info;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(messageDiv)) {
                    document.body.removeChild(messageDiv);
                }
            }, 400);
        }, 3000);
    },
    
    // ====== 通用工具方法 ======
    getChannelClass(channel) {
        const classMap = {
            '太阳': 'taiyang',
            '阳明': 'yangming',
            '少阳': 'shaoyang',
            '太阴': 'taiyin',
            '少阴': 'shaoyin',
            '厥阴': 'jueyin'
        };
        return classMap[channel] || '';
    },
    
    // ====== 综合案例系统 ======
    startIntegratedCase() {
        this.switchMainTab('integration');
        this.showMessage('开始综合治疗案例', 'success');
    },
    
    applyIntegratedTreatment() {
        this.showMessage('综合治疗方案已应用', 'success');
    },
    
    startDailyChallenge() {
        this.showMessage('今日挑战功能开发中', 'info');
    }
};

// 添加交互特效
document.addEventListener('DOMContentLoaded', function() {
    // 添加穴位点击动画
    document.addEventListener('click', function(e) {
        if (e.target.closest('.option-button')) {
            const ripple = document.createElement('span');
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(156, 39, 176, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            e.target.appendChild(ripple);
            
            setTimeout(() => {
                if (e.target.contains(ripple)) {
                    e.target.removeChild(ripple);
                }
            }, 600);
        }
    });
    
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl + 1: 首页
        if (e.ctrlKey && e.key === '1') {
            e.preventDefault();
            TCMSystem.switchMainTab('home');
            TCMSystem.showMessage('切换到首页', 'info');
        }
        // Ctrl + 2: 伤寒
        else if (e.ctrlKey && e.key === '2') {
            e.preventDefault();
            TCMSystem.switchMainTab('shanghan');
            TCMSystem.showMessage('切换到伤寒辨证', 'info');
        }
        // Ctrl + 3: 针灸
        else if (e.ctrlKey && e.key === '3') {
            e.preventDefault();
            TCMSystem.switchMainTab('acupuncture');
            TCMSystem.showMessage('切换到针灸配穴', 'info');
        }
        // Ctrl + S: 保存进度
        else if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            TCMSystem.saveProgress();
            TCMSystem.showMessage('学习进度已保存', 'success');
        }
    });
});
