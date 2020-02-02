import Command from "../DEFAULT.command";

class PING extends Command {
  constructor() {
    super({
      name: 'PING',
      description: 'Check the connection. Return PONG as success.',
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