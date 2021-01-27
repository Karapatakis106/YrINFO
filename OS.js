function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Your Operating System is: Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'Your Operating System is: iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Your Operating System is: Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Your Operating System is: Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Your Operating System is: Linux';
  }

  return os;
}
document.write(getOS());
