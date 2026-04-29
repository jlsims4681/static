/* uv/uv.config.js */
self.__uv$config = {
    prefix: '/uv/service/',
    // You can use a public bare server for testing, but host your own for production
    bare: 'https://tomp.app/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './uv/uv.handler.js',
    bundle: './uv/uv.bundle.js',
    config: './uv/uv.config.js',
    sw: './uv/uv.sw.js',
};
