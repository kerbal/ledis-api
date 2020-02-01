import Command from "../DEFAULT.command";

class PING extends Command {
  constructor() {
    super({
      name: 'PING',
      args: []
    });
  }

  execute(args = []) {
    args = this.parse(args);
    return {
      message: 'PONG'
    };
  }
}

export default PING;