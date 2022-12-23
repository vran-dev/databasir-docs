const { defaultTheme } = require('@vuepress/theme-default')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

module.exports = {
    lang: 'zh-CN',
    title: 'Databasir',
    description: '一个简单易用的数据库元数据管理平台！',
    port: 3003,
    repo: 'https://github.com/vran-dev/databasir',
    repoLabel: 'databasir',
    home: true,
    plugins: [
        mediumZoomPlugin({
            // 配置项
        }),
    ],
    
    theme: defaultTheme({
        navbar: [
            {
                text: '入门指南',
                link: '/guid/index/'
            },
            {
                text: '常见问题',
                children: [
                    {
                        text: '数据库相关',
                        link: '/faq/'
                    },
                    {
                        text: '版本记录',
                        link: '/changelog/'
                    }
                ] 
            },
            {
                text: '开发指南' ,
                link: '/develop/'  
            },
            {
                text: '捐赠',
                link: '/donate/index.md/'
            },
            {
                text: 'Gtihub',
                link: 'https://github.com/vran-dev/databasir'
            },
        ],
        sidebar: {
            '/changelog/': 'auto',
            '/guid/':[
                {
                    text: '系统部署',
                    children: [
                        {
                            text: 'Docker 部署',
                            link: '/guid/deploy/docker-deploy.md'
                        },
                        {
                            text: 'Jar 部署',
                            link: '/guid/deploy/jar-deploy.md'
                        }
                    ],
                    activeMatch: '^/guid',
                },
                {
                    text: '基本概念',
                    children: [
                        {
                            text: '角色与权限',
                            link: '/guid/concept-user-role/index.md'
                        },
                        {
                            text: '分组与项目',
                            link: '/guid/concept-group-project/index.md'
                        },
                    ]
                },
                {
                    text: '基础操作',
                    children: [
                        {
                            text: '分组管理',
                            link: '/guid/management-group/index.md' 
                        },
                        {
                            text: '项目管理',
                            link: '/guid/management-project/index.md' 
                        },
                        {
                            text: '文档管理',
                            link: '/guid/management-document/index.md' 
                        },
                        {
                            text: '用户管理',
                            link: '/guid/management-user/index.md' 
                        },
                        {
                            text: '邮箱设置',
                            link: '/guid/management-email/index.md' 
                        }
                    ]
                },
                {
                    text: '进阶操作',
                    children: [
                        {
                            text: '启用 Github 第三方登录',
                            link: '/guid/advance-github-oauth2/index.md' 
                        },
                        {
                            text: '启用 Gitlab 第三方登录',
                            link: '/guid/advance-gitlab-oauth2/index.md' 
                        },
                        {
                            text: '企业微信扫码登录',
                            link: '/guid/advance-wework-oauth2/index.md'
                        },
                        {
                            text: '扩展数据库类型',
                            link: '/guid/advance-database-extension/index.md' 
                        },
                        {
                            text: '数据库模板列表',
                            link: '/guid/advance-database-type-list/index.md' 
                        },
                        {
                            text: 'Mock Insert SQL 生成',
                            link: '/guid/advance-mock-sql/index.md' 
                        }
                    ]
                }
            ],
            '/develop/':[
                {
                    text: '项目构建',
                    children: [
                        {
                            text: '后端构建',
                            link: '/develop/how-to-build/index.md'
                        },
                        {
                            text: '项目模块',
                            link: '/develop/module-and-package/index.md',
                        }
                    ]
                },
                {
                    text: '功能扩展',
                    children: [
                        {
                            text: '如何扩展文件导出？',
                            link: '/develop/how-to-add-export-type/index.md'
                        }
                    ]
                },
                
                {
                    text: '系统原理',
                    children: [
                        {
                            text: '用户名密码登录流程原理',
                            link: '/develop/login-and-auth/username-and-password/index.md'
                        }
                    ]
                }
            ]
            
        }
    })
}
