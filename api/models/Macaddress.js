/**
 * Macaddress.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: false,
  schema: true,

  attributes: {

    address: {
      type: 'string', 
      primaryKey: true,
      unique: true
    },

    phonenumber: {
      type: 'string',
      required: true
    },

    // Hide internal structure
    toJSON: function () {
      var obj = this.toObject();
      //delete obj.createdAt;
      delete obj.updatedAt;
      return obj;
    }

  }
};

