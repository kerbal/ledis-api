import Command from "../DEFAULT.command";
import store from "../../store/store";

class SMEMBERS extends Command {
  constructor() {
    super({
      name: 'SMEMBERS',
      args: [{
        name: 'key',
        type: 'string'
      }]
    });
  }
  
  execute(args = []) {
    args = this.parse(args);
    const data = store.get(args.key, 'set');
    if(data === undefined || data.size === 0) {
      return ({
        message: '(empty list or set)'
      });
    }
    else {
      return ({
        value: Array.from(data)
      });
    }
  }
}

export default SMEMBERS;