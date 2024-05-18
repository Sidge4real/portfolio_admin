'use strict';

/**
 * nl-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nl-blog.nl-blog');
