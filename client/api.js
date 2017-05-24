import request from 'superagent'

export function getRobot(name, cb) {
  request
    .get(`https://robohash.p.mashape.com/index.php?text=${name}`)
    .set('X-Mashape-Key', 'AnAwyQNKWnmsh0cS6bXxZ2lok9K0p1CXNHyjsnBpgRgNNOzQxR')
    .set('Accept', 'application/json')
    .end((err, result) => {
      if (err) {
        cb(err.message)
        return
      }
      cb (null, result)
    })
}
