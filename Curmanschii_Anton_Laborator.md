# Laborator 1

A realizat: **Curmanschii Anton, IA1901.**

Tema: **Adaptivitatea cu CSS3, Media Queries**


```css
* {
  box-sizing: border-box;
}
```

`content-box` este default și aplică proprietățile `width` și `height` înainte de a călcula mărimea bordurii, pe când
`border-box` o calculează înainte de a le aplica. 


```css
.menu {
  float: left;
  width: 0%;
  text-align: center;
}
```

Meniul are `float: left`, deci va încerca să ocupe poziția din stânga a paginii.