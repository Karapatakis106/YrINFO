function getVideoCardInfo() {
// Finding Graphics Card name, using WebGL. Might be unstable

  const gl = document.createElement('canvas').getContext('webgl');

  if (!gl) {

    return {

      error: "no webgl",

    };

  }

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

  return debugInfo ? {

    vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),

    renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),

  } : {

    error: "no WEBGL_debug_renderer_info",

  };

}

console.log(getVideoCardInfo());

// on index.html

document.write("Graphics Card Name: )
document.write()
document.write(getVideoCardInfo())
