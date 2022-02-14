export function send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {

  let xhr;

  if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.timeout = timeout;

  xhr.ontimeout = onError;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status < 400) {
        onSuccess(xhr.responseText)
      } else if (xhr.status >= 400) {
        onError(xhr.status)
      }
    }
  }

  xhr.open(method, url, true);

  for (const [key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, value)
  }

  xhr.send(data);
}


export function sendPromise(url, method = 'GET', data = '', headers = {}, timeout = 60000) {
  return new Promise((resolve, reject) => {
    send(reject, resolve, url, method, data, headers, timeout)
  })
}


export async function sendFetch(url, method = 'GET', body = '', headers = {}) {
  try {
    let response = await fetch(url, {
      method: method,
      headers: headers,
      body: body
    });
    let result = await response.json();
    return result;
  }
  catch (error) {
    console.log(error);
  }
}