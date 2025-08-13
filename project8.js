
const signals = [
    ["r1", "y1", "g1"],
    ["r2", "y2", "g2"],
    ["r3", "y3", "g3"],
    ["r4", "y4", "g4"]
].map(([r, y, g]) => ({
    red: document.getElementById(r),
    yellow: document.getElementById(y),
    green: document.getElementById(g)
}));

function setAllRed() {
    signals.forEach(sig => {
        sig.red.style.backgroundColor = "red";
        sig.yellow.style.backgroundColor = "gray";
        sig.green.style.backgroundColor = "gray";
    });
}

async function runCycle(activeIndex, greenTime, yellowTime) {
    // All signals start as red
    setAllRed();

    // Green for active
    signals[activeIndex].red.style.backgroundColor = "gray";
    signals[activeIndex].green.style.backgroundColor = "green";
    await new Promise(res => setTimeout(res, greenTime));

    // Yellow for active
    signals[activeIndex].green.style.backgroundColor = "gray";
    signals[activeIndex].yellow.style.backgroundColor = "yellow";
    await new Promise(res => setTimeout(res, yellowTime));

    // Back to red for active
    signals[activeIndex].yellow.style.backgroundColor = "gray";
    signals[activeIndex].red.style.backgroundColor = "red";
}

async function startTraffic() {
    const greenTime = 4000;
    const yellowTime = 2000;

    while (true) {
        for (let i = 0; i < signals.length; i++) {
            await runCycle(i, greenTime, yellowTime);
        }
    }
}

startTraffic();
