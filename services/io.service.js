import fs from 'fs';

class IOService {
  static writeFile(path, data) {
    return new Promise((reslove, reject) => {
      fs.writeFileSync(path, data, (error) => {
        if(error) {
          reject(error);
        }
        else {
          reslove(true);
        }
      });
    });
  }

  static readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (error, data) => {
        if(error) {
          reject(error);
        }
        else {
          resolve(data);
        }
      });
    });
  }
}

export default IOService;