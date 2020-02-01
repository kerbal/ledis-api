import Command from "../DEFAULT.command";
import store from "../../store/store";

class SET extends Command {
  constructor() {
    super({
      name: 'SET',
      args: [{
        name: 'key',
        type: 'string',
        required: true
      }, {
        name: 'value',
        type: 'string',
        required: true
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