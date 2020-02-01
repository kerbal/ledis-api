import Command from "../DEFAULT.command";
import store from "../../store/store";

class EXPIRE extends Command {
  constructor() {
    super({
      name: 'EXPIRE',
      args: [{
        name: 'key',
        type: 'string',
      }, {
        name: 'time',
        type: 'number'
      }]
    })
  }

  execute(args = []) {
    args = this.parse(args);
    return ({
      value: store.expire(args.key, args.time)
    })
  }
}

export default EXPIRE;