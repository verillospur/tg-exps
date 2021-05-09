// 
//  config.js
//  ~/config/
// 
//  created:    2021-05-06
// 
//  global config
// 
'use strict';

const config = () => {

    return {

        // defaults

        // log
        log: require('../log/config'),
        
        // story
        story: require('../stories/config'),
    };
};

module.exports = config();
