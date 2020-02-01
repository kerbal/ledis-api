import commands from "../commands";
import stringArgv from 'string-argv';

class CommandService {
  static execute(command) {
    const parsed = stringArgv(command);
    const c = parsed[0].toUpperCase();
    const args = parsed.slice(1, parsed.length);
    if(commands.hasOwnProperty(c)) {
      return commands[c].execute(args);
    }
    else {
      throw new Error(`ERR unknown command ${c}`);
    }
  }
}

export default CommandService;