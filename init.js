// ====== 全局函数 ======
function filterByChannel(channel) {
    TCMSystem.showMessage(`筛选${channel}相关内容`, 'info');
    
    if (channel === '太阳' || channel === '阳明' || channel === '少阳' || 
        channel === '太阴' || channel === '少阴' || channel === '厥阴') {
        TCMSystem.switchMainTab('shanghan');
        TCMSystem.showMessage(`切换到${channel}病学习`, 'success');
    }
}

function showAcupunctureTab() {
    TCMSystem.switchMainTab('acupuncture');
}

function showHerbalTab() {
    TCMSystem.switchMainTab('shanghan');
}

// ====== 启动完整系统 ======
document.addEventListener('DOMContentLoaded', function() {
    // 初始化系统
    TCMSystem.init();
    
    // 设置今日挑战
    const challengeDiv = document.getElementById('today-challenge');
    if (challengeDiv) {
        const challenges = [
            "完成一次太阳病辨证",
            "掌握肺经的3个穴位",
            "练习原络配穴法",
            "理解五行相生关系",
            "完成一次综合治疗案例"
        ];
        
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        challengeDiv.innerHTML = `
            <div style="background: #FFF3E0; padding: 12px; border-radius: 8px; margin-top: 10px; border: 2px dashed #FFB74D;">
                <strong style="color:#FF9800;">🎯 今日挑战</strong><br>
                ${randomChallenge}
            </div>
        `;
    }
    
    // 添加页面离开提示
    window.addEventListener('beforeunload', function(e) {
        const progress = TCMSystem.currentState.userProgress;
        if (progress.shanghan.cases > 0 || progress.acupuncture.cases > 0) {
            const message = '您有未保存的学习进度，确定要离开吗？';
            e.preventDefault();
            e.returnValue = message;
            return message;
        }
    });
    
    // 添加一些初始化提示
    setTimeout(() => {
        TCMSystem.showMessage('系统加载完成！点击上方经络标签可快速切换', 'success');
    }, 1000);
});
