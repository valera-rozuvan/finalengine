//extern
var assert, Texture;

function Framebuffer( width, height ) {
    this.uid = Framebuffer.uid++;

    this.width = width || 256;
    this.height = height || 256;
    this.colorTexture = new Texture().setMinFilter( Texture.LINEAR ).setMagFilter( Texture.NEAREST ).setWrapS( Texture.CLAMP_TO_EDGE ).setWrapT( Texture.CLAMP_TO_EDGE );
    this.needsUpdate = true;
}

Framebuffer.uid = 0;

Framebuffer.prototype = {
    constructor: Framebuffer,
    setColorTexture: function( texture ) {
        /*DEBUG*/
            assert( texture instanceof Texture, 'texture must be an instance of Texture' );
        /*DEBUG_END*/
        this.colorTexture = texture;
        return this;
    },
    setDimentions: function( width, height ) {
        if ( width !== this.width || height !== this.height ) {
            this.needsUpdate = true;
            this.width = width;
            this.height = height;
            this.colorTexture.setDimentions( this.width, this.height );
        }
        return this;
    }
};
