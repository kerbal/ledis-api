import Command from "../DEFAULT.command";
import store from "../../store/store";

class SAVE extends Command {
  constructor() {
    super({
      name: 'SAVE',
      args: []
    });
  }

  execute(args = []) {
    args = this.parse(args);
    store.save();
    return ({
      message: 'OK'
    });
  }
}

export default SAVE;