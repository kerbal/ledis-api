class Command {
  constructor({ name = '', args = [], description = '' }) {
    this.name = name;
    this.args = args;
    this.description = description;
  }

  getNumberOfargs () {
    if(this.args.length === 0) {
      return 0;
    }
    if(this.args[this.args.length - 1].type === 'array') {
      return Infinity;
    }
    else {
      return this.args.length;
    }
  }

  parse(input_args = []) {
    if(input_args.length > this.getNumberOfargs() || (this.getNumberOfargs() !== Infinity && this.getNumberOfargs() > input_args.length)) {
      throw new Error(`ERR wrong number of args for ${this.name} command`);
    }
    const args = ({});
    for(const arg of this.args) {
      if(input_args.length === 0) {
        throw new Error(`ERR wrong number of args for ${this.name} command`);
      }
     
      if(arg.type === 'array') {
        args[arg.name] = input_args;
        break;
      }

      let a = input_args.shift();
      
      if(arg.type === 'number') {
        a =  Number.parseInt(a);
        if(isNaN(a) || Number.isInteger(a) === false) {
          throw new Error('ERR value is not an integer or out of range');
        }
      }

      args[arg.name] = a;
    }

    return args;
  }

  execute(args = []) {
    
  }
}

export default Command;