import commands from "../commands";

class CommandService {
  static execute(command) {
    command = command.split(/ +/);
    const c = command[0].toUpperCase();
    command.shift();
    if(commands.hasOwnProperty(c)) {
      return commands[c].execute(command);
    }
    else {
      throw new Error(`ERR unknown command ${c}`);
    }
  }
}

export default CommandService;