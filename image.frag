
//
// Lighting and art composed for this shot/camera. The trees are really
// cheap (ellipsoids with noise), but they kind of do the job in distance
// and low image resolutions Also I used some cheap reprojection technique
// to smooth out the render.

uniform vec3 iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int iFrame;
uniform float iChannelTime[4];
uniform vec3 iChannelResolution[4];
uniform vec4 iMouse;
uniform samplerXX iChanel0..3;
uniform vec4 iDate;
uniform float iSampleRate;


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord/iResolution.xy;

    vec3 col = texture( iChannel0, p ).xyz;
  //vec3 col = texelFetch( iChannel0, ivec2(fragCoord-0.5), 0 ).xyz;

    col *= 0.5 + 0.5*pow( 16.0*p.x*p.y*(1.0-p.x)*(1.0-p.y), 0.05 );

    fragColor = vec4( col, 1.0 );
}