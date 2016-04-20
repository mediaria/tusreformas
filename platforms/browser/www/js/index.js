/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {

    // Application Constructor
    initialize: function() {

        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);




    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        app.receivedEvent('deviceready');



    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
    }
};



function onDeviceReady() {
     
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                        'Device Cordova: '  + device.cordova  + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: '     + device.uuid     + '<br />' +
                        'Device Version: '  + device.version  + '<br />';

    var texto = document.getElementById('boton');   
        if (device.platform == 'Android'){
            texto.innerHTML = '<button name="buttonClick" onclick="exitFromApp()">Salir</button>';
//          } else if (device.platform == 'iOS') { texto.innerHTML = 'Ios';
        }

    document.addEventListener("backbutton", function(e){
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);
        
         if (filename == 'index.html'){
    /* 
     Event preventDefault/stopPropagation not required as adding backbutton
      listener itself override the default behaviour. Refer below PhoneGap link.
    */
    //e.preventDefault();
        //navigator.notification.alert(filename);
        navigator.app.exitApp();
        } else { 
        //navigator.notification.alert(filename);    
        navigator.app.backHistory();

        }
    }, false);


};
document.addEventListener("deviceready", onDeviceReady, false);
// Wait for device API libraries to load
//


function pagina2() {
    window.location = "2.html";
};

function pagina1() {

    navigator.app.backHistory();
};

function exitFromApp() {
    if(navigator.app) {
        navigator.app.exitApp();
    } else if (navigator.device) {
        navigator.device.exitApp();
    }
    
};