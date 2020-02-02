import commands from "../commands";

class HelpService {
  static getHelp() {
    const help = [];
    for(const prop in commands) {
      const command = commands[prop];
      help.push({
        args: command.args,
        description: command.description,
        name: command.name
      });
    }
    return help;
  }
}

export default HelpService;