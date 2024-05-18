'use strict';

/**
 * en-stack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::en-stack.en-stack');
