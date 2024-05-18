'use strict';

/**
 * nl-stack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nl-stack.nl-stack');
