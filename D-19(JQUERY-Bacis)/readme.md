# Jquery Install
> You can using CDN (reco,mend using Google CDN)

### Selecting element using Jquery
> ```
> //in vanila JS
> document.querySelector('h1);
> document.querySelectorAll('h1');
>
>//in Jquery juts:
>$("h1");
> ```


### Manipulation style using Jquery
> ```
> //css file
> .big-heading{
>   font-size: 90px;
>   font-family: cursive
>   color : yellow;
>   }
>
> .big-postion{
>   margin-top: 10px;
>   }
> ```
> ```
>//bacis manipulation
>$("h1").css("font-size", "6px");
>
>
>//using class in css
>
>//add class css
>$("h1").addClass("big-heading" "margin-top");
>
>//deleytclass css
>$("h1").removeClass("big-heading");
> ```

### Manipulation text using Jquery
> ```
>// just ad text
> $("h1").text("Hello word");
>
>//add html elment with text
>$("h1").html("<em>hello word</em>");
> ```

### Manipulation attribut using Jquery
> ```
>// bacis syntax
> $("h1").attr("href");
>
>// with argument
>$("h1").attr("href", "www.github.io");
> ```

### Add event listner using Jquery
> ```
>//in vanila JS
> element.addEventListener("click", function() {
>  document.getElementById("demo").innerHTML = "Hello World";
>});
>
>//in Jquery
> $("h1").click(function(){
>    $("demo").text("Hello Word");
> });
> ```