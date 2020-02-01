import Command from "../DEFAULT.command";
import store from "../../store/store";

class SADD extends Command {
  constructor() {
    super({
      name: 'SADD',
      args: [{
        name: 'key',
        type: 'string',
      }, {
        name: 'values',
        type: 'array'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    let data = store.get(args.key, 'set');

    if(data === undefined) {
      data = new Set();
      store.set(args.key, data, 'set');
    }

    let count = 0;
    args.values.forEach(value => {
      if(!data.has(value)) {
        data.add(value);
        count++;
      }
    });

    return ({
      value: count
    });
  }
}

export default SADD;