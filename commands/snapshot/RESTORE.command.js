import Command from "../DEFAULT.command";
import store from "../../store/store";

class RESTORE extends Command {
  constructor() {
    super({
      name: 'RESTORE',
      description: 'Restore from the last snapshot.',
      args: []
    });
  }

  execute(args = []) {
    args = this.parse(args);
    store.restore();
    return ({
      message: 'OK'
    });
  }
}

export default RESTORE;