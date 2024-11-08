function performTask(deadline) {
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
        // 处理一个任务块
        const task = tasks.shift();
        processTask(task);
    }

    if (tasks.length > 0) {
        // 如果还有任务未完成，继续在下一个空闲时间调用
        requestIdleCallback(performTask);
    }
}

// 假设 tasks 是一个需要处理的任务列表
const tasks = [...];

// 开始任务调度
requestIdleCallback(performTask);