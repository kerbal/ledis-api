import Command from "../DEFAULT.command";
import store from "../../store/store";

class KEYS extends Command {
  constructor () {
    super({
      name: 'KEYS',
      description: 'List all available keys.',
      args: []
    });
  }

  execute(args = []) {
    args = this.parse(args);
    const result = Array.from(store.keys());
    if(result.length === 0) {
      return ({
        message: `(empty list or set)`
      });
    }
    else {
      return ({
        value: result
      });
    }
  }
}

export default KEYS;