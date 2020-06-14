/**
 * This is the default configuration file for the Superdesk application. By default,
 * the app will use the file with the name "superdesk.config.js" found in the current
 * working directory, but other files may also be specified using relative paths with
 * the SUPERDESK_CONFIG environment variable or the grunt --config flag.
 */
module.exports = function(grunt) {
    return {
        apps: [
            'superdesk-publisher',
            'superdesk-planning'
        ],
        importApps: [
            'superdesk-publisher',
            'superdesk-planning'
        ],
        defaultRoute: '/workspace/personal',
        validatorMediaMetadata: {
            headline: {
                required: true
            },
            alt_text: {
                required: true
            },
            description_text: {
                required: true
            },
            copyrightholder: {
                required: false
            },
            byline: {
                required: false
            },
            usageterms: {
                required: false
            },
            copyrightnotice: {
                required: false
            }
        },

        publisher: {
            protocol: 'http',
            tenant: '',
            domain: 'ec2-13-126-66-212.ap-south-1.compute.amazonaws.com',
            base: 'api/v2',
            wsDomain: 'ec2-13-126-66-212.ap-south-1.compute.amazonaws.com',
            wsPath: '/ws',
            wsPort: '8080'
        },

        langOverride: {
            'en': {
                'ANPA Category': 'Category',
                'ANPA CATEGORY': 'CATEGORY'
            }
        },

        features: {
            preview: 1,
            swimlane: {columnsLimit: 4},
            editor3: true,
            editorHighlights: true,
            nestedItemsInOutputStage: true,
            planning: true,
        },
        workspace: {
            analytics: true,
            planning: true,
            assignments: true
        }
    };
};
