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
