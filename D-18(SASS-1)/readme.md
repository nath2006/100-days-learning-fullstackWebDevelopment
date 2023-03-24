# SASSS

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