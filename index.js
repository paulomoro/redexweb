window.onload = () => { 
  let main = $('main');
  let form = $('#awaitForm');
  let year = new Date().getFullYear();
  let userWidth = screen.width;
  $(main).fadeOut();

  if(userWidth > 1200 ) { 
    $('body').css(
      'background', 'linear-gradient(#ffffff2a, #ffffff2a),url(/Assets/circlePatterns.svg) no-repeat center/120%'
    )
  }

  else if(userWidth > 700 ) { 
    $('body').css(
      'background', 'linear-gradient(#ffffff2a, #ffffff2a),url(/Assets/circlePatterns.svg) no-repeat top/200%'
    )
  }
  
  else if(userWidth < 700 ) { 
    $('body').css(
      'background', 'linear-gradient(#ffffff2a, #ffffff2a),url(/Assets/circlePatterns.svg) no-repeat top/cover'
    )
  }


  
  setInterval(() => { 
    $(main).fadeIn();

    if(userWidth > 1200 ) { 
      $('body').css(
        'background', 'linear-gradient(#fffffff1, #fffffff1),url(/Assets/circlePatterns.svg) no-repeat center/120%'
      )
    }
    else if(userWidth > 700 ) { 
      $('body').css(
        'background', 'linear-gradient(#fffffff1, #fffffff1),url(/Assets/circlePatterns.svg) no-repeat top/200%'
      )
    }
    else if(userWidth < 700 ) { 
      $('body').css(
        'background', 'linear-gradient(#fffffff1, #fffffff1),url(/Assets/circlePatterns.svg) no-repeat top/cover'
      )
    }
  }, 1200) //should be 3000

  //setting footer's year
  $('#year').text(year);
}