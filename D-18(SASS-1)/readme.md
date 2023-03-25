# SASSS Install
> ```
> //using npm (node)
> npm install -g sass
> ```

# SASS Compiling
> ```
>//syntax
> sass source/stylesheets/index.scss build/stylesheets/index.css
>
>//Exampale
> sass style.scss public/css/style.css
>
>//Compile directory SASS 
> sass scss public/css/style.css
> ```

### SCSS Variabel
> ```
> //syntax
> $variabel_name : value;
> 
> //exampale
> $primary-color : #fff;
>
>.btn-primary {
> background-color : $primary-color;   
> }
> ```

### SCSS Scop Variabel
> ```
> /*global variabel*/
> $primary : blue;
> 
> .btn-primary {
>    
>   /*local variabel*/
>   $corner: 2px;
>
>   background-color: $primary;   
>   border-radius: $corner;
> }
> ```

### SCSS Variabel Value
>```
> //number
> $font-size: 14px;
>
> //string
> $font-family: 'Arial';
>
> //color(hex code / rgb)
> $primary: #000;
>
> //map
> $color (
> 'danger' : red,
> 'succes' : green,
> 'warning': yellow,    
> );
>
> //list
> $padding: 10px 20px 30px 40px;
>```

### SCSS Nesting 
>```
> //in css
> .article {
>    background-color: #fff;
> }
>
> .article .title {
>   font-size:45px;
> }
>
> .article .body {
>   margin-top: 20px;
> }
>
> .article .btn {
>   background-color: blue;
> }
>
> //scss
> .article {
>   background-color: #fff;
>   .title {
>       font-size: 45px;   
>    }
>   .body {
>       margin-top: 20px; 
>    }
>   .btn {
>       background-color : blue;
>    }
>   }
> 
>```

### SCSS Module
>```
>// _base.scss
>$font-stack: Helvetica, sans-serif;
>$primary-color: #333;
>
>body {
>  font: 100% $font-stack;
>  color: $primary-color;
>}
>```
>
>```
>// styles.scss
>@use 'base';
>
>.inverse {
>  background-color: base.$primary-color;
>  color: white;
>}
>```
>
>```
> //css
>body {
>  font: 100% Helvetica, sans-serif;
>  color: #333;
>}
>
>.inverse {
>  background-color: #333;
>  color: white;
>}
>```