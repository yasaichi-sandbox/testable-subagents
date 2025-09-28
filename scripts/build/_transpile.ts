import { commandLine } from 'pomljs';

export const transpile = async (file: string) => {
  let json = '';

  const write = process.stdout.write;
  process.stdout.write = (str) => {
    json += str;
    return true;
  };

  try {
    await commandLine({
      file,
      output: null,
      speakerMode: false,
    });

    return JSON.parse(json)['messages'];
  } catch (err) {
    throw Error("Something ain't right", { cause: err });
  } finally {
    process.stdout.write = write;
  }
};
