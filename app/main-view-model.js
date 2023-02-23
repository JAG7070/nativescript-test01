import { Observable } from '@nativescript/core';
import { Http, HttpResponse } from '@nativescript/core';
//import { HttpResponse } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  } else {
    return `${counter} taps left`;
  }
}

function sigurdGet() {
  console.log('sigurdGet starts');
  Http.request({ url: 'http://88.88.200.122:31337', method: 'POST',
      headers: {'Content-Type': '',
      'Content-Disposition': 'attachment; filename="test.txt"'
      },
      content: "Per Eivind"
    }).then(
    (response /*: HttpResponse*/) => {
      // Argument (response) is HttpResponse
      console.log('Response');
      //console.log('Response Status Code: ${response}');
      //console.log('Response Headers:', response);
      console.log('Response Content:'+ response.content);
    },
    (e) => {console.log('sigurdGet exception')}
  );
  console.log('sigurdGet ends');
}

function sigurdGet_orig() {
  console.log('sigurdGet start');
  Http.request({ url: 'http://88.88.200.122:31337', method: 'PUT' }).then(
    (response /*: HttpResponse*/) => {
      // Argument (response) is HttpResponse
      console.log('Response');
      //console.log('Response Status Code: ${response}');
      //console.log('Response Headers:', response);
      //console.log('Response Content: ${response}')
    },
    (e) => {}
  );

  /*
  Http.request({  url: 'http://88.88.200.122:31337',  method: 'GET'}).then(  (response: HttpResponse) => {
  console.log(`Response Status Code: ${response.statusCode}`);
  console.log(`Response Headers:`, response.headers);
  console.log(`Response Content: ${response.content}`)  },
  e => {});
  */
  console.log('sigurdGet end');
}

function upload3(url, data) {
  const httpModule = require('@nativescript/core/http');
  console.log('upload3 start');
  httpModule.request(
    new HttpRequest('PUT', url, data, {
      headers: new HttpHeaders({
        'Content-Type': '',
        'Content-Disposition': `attachment; filename="test.txt"`,
      }),
    })
  );
  console.log('upload3 end');
}

function upload2(filename, uploadUrl) {
  this.http.request(
    new HttpRequest('PUT', uploadUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': fileType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
      }),
    })
  );
}

function upload1(filename, url) {
  var request = {
    url: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'File-Name': filename,
    },
    description: description,
  };

  var params = [
    { name: 'test', value: 'value' },
    { name: 'fileToUpload', filename: file, mimeType: 'image/jpeg' },
  ];
  task = session.multipartUpload(params, request);
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    /*
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
    */
    console.log('start');
    sigurdGet('http://88.88.200.122:31337', 'test');
    console.log('end');
  };

  return viewModel;
}
