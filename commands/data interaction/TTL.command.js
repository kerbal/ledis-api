import Command from "../DEFAULT.command";
import store from "../../store/store";

class TTL extends Command {
  constructor() {
    super({
      name: 'TTL',
      args: [{
        name: 'key',
        type: 'string'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    return ({
      value: store.getTimeout(args.key)
    });
  }
}

export default TTL;