import Command from "../DEFAULT.command";
import store from "../../store/store";

class SET extends Command {
  constructor() {
    super({
      name: 'SET',
      description: 'Get a string value at key.',
      args: [{
        name: 'key',
        type: 'string'
      }, {
        name: 'value',
        type: 'string'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    store.set(args.key, args.value, 'string');
    return ({
      message: 'OK'
    });
  }
}

export default SET;