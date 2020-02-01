import fs from 'fs';

class Store {
  constructor() {
    this.data = new Map();
  }

  set(key, value, type) {
    this.data.set(key, {
      value,
      type,
      expire: {
        time: -1,
        trigger: undefined
      }
    });
  }

  get(key, type) {
    const data = this.data.get(key);
    if(data) {
      if(data.type === type) {
        return data.value;
      }
      else {
        throw new Error('WRONGTYPE Operation against a key holding the wrong kind of value');
      }
    }
    else {
      return undefined;
    }
  }

  keys() {
    return this.data.keys(); 
  }

  delete(key) {
    return this.data.delete(key);
  }

  size() {
    return this.data.size;
  }

  has(key) {
    return this.data.has(key);
  }

  expire(key, time) {
    const data = this.data.get(key);
    if(data) {
      clearTimeout(data.expire.trigger);
      data.expire = {
        time: new Date().getTime() + time * 1000,
        trigger: setTimeout(() => {
          store.delete(key);
        }, Math.max(time * 1000, 0))
      }
      return 1;
    }
    else {
      return 0;
    }
  }

  getTimeout(key) {
    const data = this.data.get(key);
    if(data) {
      if(data.expire.time >= 0) {
        return Number.parseInt((data.expire.time - new Date().getTime()) / 1000);
      }
      else {
        return -1;
      }
    }
    else {
      return -2;
    }
  }

  save() {
    const data = new Array(...this.data);
    const jsonData = JSON.stringify(data.map(d => {
      d[1].expire.trigger = undefined;
      return d;
    }));
    fs.writeFile('./snapshot/file.ldb', jsonData, (error) => {
      if(error) {
        console.log(error);
        throw new Error(error.message);
      }
    });
  }

  restore() {
    fs.readFile('./snapshot/file.ldb', 'utf8', (error, file_data) => {
      if(error) {
        console.log(error);
        throw new Error(error.message);
      }
      else {
        const data = JSON.parse(file_data).map(d => {
          if(d[1].expire.time >= 0) {
            d[1].expire.trigger = setTimeout(() => {
              store.delete(d[0]);
            }, Math.max(Number.parseInt((d[1].expire.time - new Date().getTime())), 0))
          }
          return d;
        });
        this.data = new Map(data);
      }
    });
  }
}

const store = new Store();
export default store;