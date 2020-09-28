// function autoAshys(a) {
// if (a === 4) {
//         return 2;
// } 
// else { 
//        return (a - 2) / 4 + 1;
// }
// }

// console.log(autoAshys(4))
// console.log(autoAshys(10))
// console.log(autoAshys(14))

const appsize = [4, 8 ,7, 6, 1, 1, 9, 45, 7, 2];
const phoneMemorySize = 70;
const phoneAppcCount = kiekTilpsApssu(phoneMemorySize, appsize);

function kiekTilpsApssu(memory, list) {
        let usedSpace = 0;
        const appCount = list.length;

        for (let i = 0; i < appCount.Count; i++) {
                const appSize = list[i];
                usedSpace += appSize;
                console.log('bandau instaliuoti:', appSize, usedSpace);

        }

        return 0;
}
