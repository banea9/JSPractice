function cone(radius, height) {
    let coneVolume;
    let coneArea;
    coneVolume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    coneArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))
    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${coneArea.toFixed(4)}`)
}