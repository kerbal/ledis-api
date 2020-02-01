import Command from "../DEFAULT.command";
import store from "../../store/store";

class SREMOVE extends Command {
  constructor() {
    super({
      name: 'SREM',
      args: [{
        name: 'key',
        type: 'string',
      }, {
        name: 'values',
        type: 'array'
      }]
    })
  }

  execute(args = []) {
    args = this.parse(args);
    const data = store.get(args.key, 'set');
    let count = 0;
    if(data !== undefined) {
      args.values.forEach(value => {
        if(data.delete(value)) {
          count++;
        }
      });
    }
    
    return ({
      value: count
    });
  }
}

export default SREMOVE;