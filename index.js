module.exports = function genid(len, prefix, keyspace) {
  if (!len) {
    len = 32;
  }
  if (!prefix) {
    prefix = "";
  }
  if (!keyspace) {
    keyspace = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
  while (len-- > 0) {
    prefix += keyspace.charAt(Math.floor(Math.random() * keyspace.length));
  }
  return prefix;
};
