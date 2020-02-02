import Command from "../DEFAULT.command";
import store from "../../store/store";

class DEL extends Command {
  constructor() {
    super({
      name: 'DEL',
      description: 'Delete keys.',
      args: [{
        name: 'keys',
        type: 'array'
      }]
    });
  }

  execute(args = []) {
    args = this.parse(args);
    let count = 0;
    args.keys.forEach(key => {
      if(store.delete(key)) {
        count++;
      }
    });
    return ({
      value: count
    });
  }
}

export default DEL;