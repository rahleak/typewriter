const sentence = "hello there from lighthouse labs";

let delayTime = 50;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char + '\n');
}, delayTime);
delayTime += 50;
}
