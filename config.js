/**
 * 配置
 */
var Config = {
    'version': '1.0.0',
    'site': {
        'title': '日语基础语法',
        'description': '日语基础语法',
        'host': 'http://jpgrammar.unjs.me/'
    },
    'list': {
        'tempFile': 'template/list.html',
        'pageFile': 'template/page.html',
        'pageSize': 100,
        'dir': 'list'
    },
    'output': {
        'base': {
            'source': 'dev',
            'target': 'dist'
        },
        'listDir': 'list',
        'lib': 'lib',
        'view': 'view'
    }
};

module.exports = Config;
