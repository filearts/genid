module.exports = function genid(len, prefix, keyspace) {
  if (len == null) {
    len = 32;
  }
  if (prefix == null) {
    prefix = "";
  }
  if (keyspace == null) {
    keyspace = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
  while (len-- > 0) {
    prefix += keyspace.charAt(Math.floor(Math.random() * keyspace.length));
  }
  return prefix;
};