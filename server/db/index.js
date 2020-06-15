const Sequelize = require('sequelize');
const db = require('./db')


//Models - Album & Artist & Song 

const Album = db.define('album', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-album.jpg"
  }
});

const Artist = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  }
})

//Association
Album.hasMany(Song)
Song.belongsTo(Album)
Artist.hasMany(Song)
Song.belongsTo(Artist)
Artist.hasMany(Album)
Album.belongsTo(Artist)

module.exports = {
  db,
  Album,
  Artist,
  Song
}