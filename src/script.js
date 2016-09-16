$(document).ready(function() {
  if (localStorage.getItem('wallurl')) {
    $('body').css('background', 'url("' + localStorage.getItem('wallurl')
     + '") center center fixed');
  }
  if(localStorage.getItem('tab1')) {
    $('#lb1').remove();
    $('#tab-1').after('<label for="tab-1" id="lb1">'
     + localStorage.getItem('tab1') + '</label>');
  }
  if(localStorage.getItem('tab2')) {
    $('#lb2').remove();
    $('#tab-2').after('<label for="tab-2" id="lb2">'
     + localStorage.getItem('tab2') + '</label>');
  }
  if(localStorage.getItem('tab3')) {
    $('#lb3').remove();
    $('#tab-3').after('<label for="tab-3" id="lb3">'
     + localStorage.getItem('tab3') + '</label>');
  }
  if(localStorage.getItem('content1')) {
    $('#1').html(localStorage.getItem('content1'));
  }
  if(localStorage.getItem('content2')) {
    $('#2').html(localStorage.getItem('content2'));
  }
  if(localStorage.getItem('content3')) {
    $('#3').html(localStorage.getItem('content3'));
  }
  if(localStorage.getItem('notes')) {
    $('#notes').html(localStorage.getItem('notes'));
  }
  if(localStorage.getItem('borderco')) {
    $('.tab label').css('border', '2px solid '
     + localStorage.getItem('borderco'));
    $('button').css('border', '2px solid '
    + localStorage.getItem('borderco'));
    $('.content').css('border', '3px solid '
     + localStorage.getItem('borderco'));
    $('input[type="text"]').css('border', '2px solid '
     + localStorage.getItem('borderco'));
    $('[type=radio]:checked ~ label').css('border', '3px solid '
     + localStorage.getItem('borderco'))
  }
  if(localStorage.getItem('backgroundco')) {
    $('.tab label').css('background-color',
     localStorage.getItem('backgroundco'));
    $('button').css('background-color',
     localStorage.getItem('backgroundco'));
    $('.content').css('background-color',
     localStorage.getItem('backgroundco'));
    $('input[type="text"]').css('background-color',
     localStorage.getItem('backgroundco'));
    $('[type=radio]:checked ~ label').css('background-color',
     localStorage.getItem('backgroundco'));
  }
  if(localStorage.getItem('textco')) {
    $('*').css('color', localStorage.getItem('textco'));
  }
  $('.tabs').delay(300).fadeIn(1000);
  $('.tab label').click(function() {
    $('.contentin').hide();
    $('.contentin').fadeIn(200);
  });
  if (localStorage.getItem('weathercity')) {
    $.simpleWeather({
      location: localStorage.getItem('weathercity'),
      woeid: '',
      unit: 'f',
      success: function(weather) {
        $('#weather').html(weather.city.toLowerCase() + '<br>' + weather.temp
         + '&deg;' + weather.units.temp + '<br>'
          + weather.currently.toLowerCase());
       },
       error: function(error) {
         $("#weather").html('error receiving weather data');
       }
    });
  }
  else {
    $.simpleWeather({
      location: 'Kansas City, MO',
      woeid: '',
      unit: 'f',
      success: function(weather) {
        $('#weather').html(weather.city.toLowerCase() + '<br>' + weather.temp
         + '&deg;' + weather.units.temp + '<br>'
          + weather.currently.toLowerCase());
       },
       error: function(error) {
         $("#weather").html('error receiving weather data');
       }
    });
  }
  $('#linksbutton1').click(function() {
    var addlink = $("input[name=link]").val();
    var addlinkname = $("input[name=linkname]").val();
    $('#1').append("<a href='" + addlink
     + "' id=" + addlinkname + ">" + addlinkname + "</a>");
    localStorage.setItem('content1', $('#1').html());
  });
  $('#linksbutton2').click(function() {
    var addlink = $("input[name=link]").val();
    var addlinkname = $("input[name=linkname]").val();
    $('#2').append("<a href='" + addlink
     + "' id=" + addlinkname + ">" + addlinkname + "</a>");
    localStorage.setItem('content2', $('#2').html());
  });
  $('#linksbutton3').click(function() {
    var addlink = $("input[name=link]").val();
    var addlinkname = $("input[name=linkname]").val();
    $('#3').append("<a href='" + addlink
     + "' id=" + addlinkname + ">" + addlinkname + "</a>");
    localStorage.setItem('content3', $('#3').html());
  });
  $('#removebutton1').click(function() {
    var removelink = $("input[name=removelinkname]").val();
    $('#' + removelink).remove();
    localStorage.setItem('content1', $('#1').html());
  });
  $('#removebutton2').click(function() {
    var removelink = $("input[name=removelinkname]").val();
    $('#' + removelink).remove();
    localStorage.setItem('content2', $('#2').html());
  });
  $('#removebutton3').click(function() {
    var removelink = $("input[name=removelinkname]").val();
    $('#' + removelink).remove();
    localStorage.setItem('content3', $('#3').html());
  });
  $('#wallpaperbutton').click(function() {
    var wplink = $("input[name=wallpaper]").val();
    $('body').css('background', 'url("' + wplink
     + '") no-repeat center center fixed');
    localStorage.setItem("wallurl", wplink);
  });
  $('#citychange').click(function() {
    var cityname = $("input[name=city]").val();
    localStorage.setItem('weathercity', cityname);
    $.simpleWeather({
      location: 'Kansas City, MO',
      woeid: '',
      unit: 'f',
      success: function(weather) {
        $('#weather').html(weather.temp + '&deg;' + weather.units.temp +
         '<br>' + weather.currently);
       },
       error: function(error) {
         $("#weather").html('error receiving weather data');
       }
    });
  });
  $('#colorchange').click(function() {
    var borderc = $("input[name=bordercolor]").val();
    var backgroundc = $("input[name=backgroundcolor]").val();
    var textc = $("input[name=textcolor]").val();
    localStorage.setItem('borderco', borderc);
    localStorage.setItem('backgroundco', backgroundc);
    localStorage.setItem('textco', textc);
    $('.tab label').css('border', '2px solid ' + borderc);
    $('button').css('border', '2px solid ' + borderc);
    $('.content').css('border', '3px solid ' + borderc);
    $('input[type="text"]').css('border', '2px solid ' + borderc);
    $('[type=radio]:checked ~ label').css('border', '3px solid ' + borderc)
    $('.tab label').css('background-color', backgroundc);
    $('.content').css('background-color', backgroundc);
    $('button').css('background-color', backgroundc);
    $('input[type="text"]').css('background-color', backgroundc);
    $('[type=radio]:checked ~ label').css('background-color', backgroundc)
    $('*').css('color', textc);
  });
  $("#changetabs1").click(function() {
    var tabone = $("input[name=tabinput1]").val();
    $('#lb1').remove();
    $('#tab-1').after('<label for="tab-1" id="lb1">' + tabone + '</label>');
    localStorage.setItem('tab1', tabone);
  });
  $("#changetabs2").click(function() {
    var tabtwo = $("input[name=tabinput2]").val();
    $('#lb2').remove();
    $('#tab-2').after('<label for="tab-2" id="lb2">' + tabtwo + '</label>');
    localStorage.setItem('tab2', tabtwo);
  });
  $("#changetabs3").click(function() {
    var tabthree = $("input[name=tabinput3]").val();
    $('#lb3').remove();
    $('#tab-3').after('<label for="tab-3" id="lb3">' + tabthree + '</label>');
    localStorage.setItem('tab3', tabthree);
  });
  $("#addnote").click(function() {
    var note = $("input[name=note]").val();
    $("#notes").append('<li>' + note
     + ' <button>&#x2716;</button></li>');
    localStorage.setItem('notes', $("#notes").html());
  });
  $("#notes").on('click', 'button', function() {
    $(this).closest('li').remove();
    localStorage.setItem('notes', $("#notes").html());
  });
});
