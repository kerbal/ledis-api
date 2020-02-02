import Command from "../DEFAULT.command";
import store from "../../store/store";

class GET extends Command {
  constructor () {
    super({
      name: 'GET',
      description: 'Set a string value, always overwriting what is saved under key.',
      args: [{
        name: 'key',
        type: 'string'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    let result;
    if(store.has(args.key)) {
      result = store.get(args.key, 'string');
    }
    else {
      result = null;
    }
    return ({
      value: result
    });
  }
}

export default GET;