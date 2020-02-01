import Command from "../DEFAULT.command";
import store from "../../store/store";

class SINTER extends Command {
  constructor() {
    super({
      name: 'SINTER',
      args: [{
        name: 'keys',
        type: 'array'
      }]
    });
  }

  getCommonElements(a = [], b = []) {
    a = a.sort((x, y) => x.localeCompare(y));
    b = b.sort((x, y) => x.localeCompare(y));
    const common = [];
    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
      if(a[i] === b[j]) {
        common.push(a[i]);
        i++;
        j++;
      }
      else if(a[i] < b[j]) {
        i++;
      }
      else {
        j++;
      }
    }
    return common;
  }

  execute(args = []) {
    args = this.parse(args);
    const sets = [];
    for(const key of args.keys) {
      const data = store.get(key, 'set');
      if(data !== undefined) {
        sets.push(Array.from(data));
      }
      else {
        return ({
          message: '(empty list or set)'
        });
      }
    }
    let common = sets[0];
    for(let i = 1; i < sets.length; i++) {
      common = this.getCommonElements(common, sets[i]);
    }
    if(common.length === 0) {
      return ({
        message: '(empty list or set)'
      });
    }
    else {
      return ({
        value: common
      })
    }
  }
}

export default SINTER;