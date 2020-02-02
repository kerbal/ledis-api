import Command from "../DEFAULT.command";
import store from "../../store/store";

class FLUSHALL extends Command {
  constructor() {
    super({
      name: 'FLUSHALL',
      description: 'Remove all keys',
      args: []
    });
  }

  execute(args = []) {
    args = this.parse(args);
    store.deleteAll();
    return {
      message: 'OK'
    };
  }
}

export default FLUSHALL;