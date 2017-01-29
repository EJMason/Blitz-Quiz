
module.exports = (client) => {
  client.on('disconnect', () => {
    console.log('user has disconnected');
  });
};