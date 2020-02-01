import SET from "./string/SET.command";
import GET from "./string/GET.command";
import SADD from "./set/SADD.command";
import SMEMBERS from "./set/SMEMBERS.command";
import SREMOVE from "./set/SREMOVE.command";
import SINTER from "./set/SINTER.command";
import KEYS from "./data interaction/KEYS.command";
import DEL from "./data interaction/DEL.command";
import EXPIRE from "./data interaction/EXPIRE.command";
import TTL from "./data interaction/TTL.command";
import SAVE from "./snapshot/SAVE.command";
import RESTORE from "./snapshot/RESTORE.command";
import PING from "./data interaction/PING.command";
import FLUSHALL from "./data interaction/FLUSHALL.command";

const commands = {
  'PING': new PING(),
  'SET': new SET(),
  'GET': new GET(),
  'SADD': new SADD(),
  'SMEMBERS': new SMEMBERS(),
  'SREM': new SREMOVE(),
  'SINTER': new SINTER(),
  'KEYS': new KEYS(),
  'DEL': new DEL(),
  'EXPIRE': new EXPIRE(),
  'TTL': new TTL(),
  'SAVE': new SAVE(),
  'RESTORE': new RESTORE(),
  'FLUSHALL': new FLUSHALL()
};

export default commands;