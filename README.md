# React Alami

> ALAMI Test with React

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Scaffolding

The project layout is as follows:
```bash
├── deploy/             # Env directory
├── dist/               # Default build output directory
├── public/             # Static resource
├── src/                # Source code
│ ├── components/       # Components
│ ├── e2e/              # Integrated Test Case
│ ├── layouts/          # Common Layouts
│ ├── locales/          # i18n resources
│ ├── models/           # Global dva Model
│ ├── pages/            # Sub-pages and unit test
│ ├── services/         # Backend Services
│ │ ├── api.js          # API configuration
│ │ └── index.js        # API export
│ ├── styles/           # Styling
│ │ ├── homepage.less   # Homepage style
│ │ └── index.less      # Global style
│ ├── utils/            # Utility
│ │ ├── config.js       # Application configuration
│ │ ├── constant.js     # Static constant
│ │ ├── index.js        # Utility methods
│ │ ├── request.js      # Request function(axios)
│ │ └── theme.js        # Style variables used in js  
├── .env                    
├── .gitignore          
├── .gitlab-ci.yml     
├──  config-overrides.js         
├──  Dockerfile
├──  package.json        
├──  README.md            
└──  sonar-project.properties   
```

## Development

1. Install Dependencies.

```bash
npm install
or
yarn add
```

2. Start local server.

```bash
npm start
or
yarn start
```

3. After the startup is complete, open a browser and visit http://localhost:3000

## License

  Made with :heart: by [Tirta Wirya Putra](https://github.com/raynormw)
