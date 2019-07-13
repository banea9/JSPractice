function thePyramid (base, increment){
    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;
    let steps = 0;

    while(base > 2){
        steps++;
        let stoneBase = base - 2;
        stone += stoneBase ** 2 * increment;
        if (steps % 5 === 0){
            lapiz += (stoneBase * 4 + 4) * increment;
        }
        else {
            marble += (stoneBase * 4 + 4) * increment;
        }
        base -= 2;
    }

    gold = base * base * increment;
    steps++;
    height = Math.floor(steps * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}