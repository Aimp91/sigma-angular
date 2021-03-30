# sigma-angular
Basic Example with sigmajs in angular
# installation
```bash
npm install sigma@1.2.1
npm install sigma-webpack@1.2.0-1,
```
# change angular.json
Inser into angular.json 

Add in  architect => build => options => scripts 

"src/assets/lib/sigma/sigma.conf.js",
"node_modules/sigma/build/sigma.min.js"

Add in architect => build => options => assets

{ "glob": "**/*", "input": "./node_modules/sigma/build", "output": "/assets/lib" }

# create file assets/lib/sigma/sigma.conf.js

ADD this 
mxBasePath = 'assets/lib/sigma';

# In your component.ts
```bash
this.s = new sigma({
      graph: this.data,
      container: 'container',
      settings: {
          defaultNodeColor: '#ec5148'
      }
    });
    this.s.refresh();
```
# in your component.html
```bash
<div>
    <h1>Test Sigma</h1>
    <div id='container'>

    </div>
</div>
```

# start the application
```bash
ng serve
```
# see application on

http://localhost:4200


