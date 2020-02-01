import Command from "../DEFAULT.command";
import store from "../../store/store";

class GET extends Command {
  constructor () {
    super({
      name: 'GET',
      args: [{
        name: 'key',
        type: 'string',
        required: true
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