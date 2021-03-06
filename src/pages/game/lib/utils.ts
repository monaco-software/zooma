export function padWithSpaces(text: string, size: number): string {
  if (text.length >= size) {
    return text;
  }
  const diff = size - text.length;
  return text + ' '.repeat(diff);
}

export function random(number: number): number {
  return Math.floor(Math.random() * number);
}

// рэндом со сниженной вероятностью появления unwanted
export function randomFresh(
  number: number,
  unwanted: number,
  retry = 1
): number {
  let res = random(number);
  while (retry > 0 && res === unwanted) {
    res = random(number);
    retry -= 1;
  }
  return res;
}

export function createFilledConsistentlyArray(size: number): number[] {
  return [...Array(size).keys()];
}

export function decimalToHex(d: number, padding = 2) {
  let hex = Number(d).toString(16);
  while (hex.length < padding) {
    hex = '0' + hex;
  }
  return hex;
}

export function distort(
  max: number,
  phases: number,
  phase: number,
  gain = 0.5
) {
  const value = max * gain + (max * phase) / phases;
  return value > max ? max : Math.floor(value);
}

export function fps(frames: number): number {
  return 1000 / frames;
}

export function bufferDownloader(data: BlobPart, name: string) {
  let file = new Blob([data], { type: 'application/octet-binary' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
}
