# Snackbar Simple React

This is a react component of a simple snack bar wit customization features,

it use font awesome (fa fa-phone) for the icons .

## Dependencies

If you want icons you have to enable font awesome on your app, click on this [link](https://fontawesome.com/v4.7.0/get-started/)

## Installation



```bash
npm install snackbar-simple-react 

```

## Usage

```javascript
import SnackbarSimpleReact from 'snackbar-simple-react';
          <SnackbarSimpleReact
      text=""
      isVisible={true},
      backgroundColor=""
      textColor=""
      borderColor=""
      classIcon=""
      showTime={2000},
          />

          //use your setIsVisible prop like this setIsVisible(!isVisible)
```

## Props 


**text** type string --text to show on snackbar visible


**backgroundColor** type string color of the snackbar background


**textColor** type string .-- color of the text on snackbar


**borderColor** type string -- color of the snackbar border


**classIcon** type string -- use font awesome icons ex. "fa fa-phone" "fa fa-cross"


**showTime** type number -- the duration of your snackbar on miliseconds


**isVisible** type bool -- is visible snackbar



## License
[MIT](https://choosealicense.com/licenses/mit/)