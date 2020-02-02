import Command from "../DEFAULT.command";
import store from "../../store/store";

class EXPIRE extends Command {
  constructor() {
    super({
      name: 'EXPIRE',
      description: 'Set a timeout on a key, seconds is a positive integer (by default a key has no expiration). Return the number of seconds if the timeout is set.',
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