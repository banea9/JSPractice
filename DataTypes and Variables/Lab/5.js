function gramophone(bandName, albumName, songName) {
    let plateRotations = 0;
    plateRotations += Math.ceil(((albumName.length * bandName.length) * songName.length / 2) / 2.5)
    console.log(`The plate was rotated ${plateRotations} times.`)
}