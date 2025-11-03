scene.setBackgroundColor(8)
effects.bubbles.startScreenEffect()
let mySprite = sprites.create(img`
    ..............cfff..............
    ............ccddbf..............
    ...........cbddbff.........ccc..
    ..........fccbbcf.........cbbc..
    ...fffffffccccccff.......cdbc...
    .ffcbbbbbbbbbbbbbcfff....cdbf...
    fcbbbbbbbbbcbbbbbbcccff.cdbf....
    fbcbbbbffbbbcbcbbbcccccffdcf....
    fbb1111ffbbbcbcbbbccccccbbcf....
    .fb11111111bbcbbbccccccccbbcf...
    ..fccc33cb11bbbbcccccccfffbbf...
    ...fc131c111bbbcccccbdbc..fbbf..
    ....f33c111cbbccdddddbc....fff..
    .....ff1111fdbbccddbcc..........
    .......cccccfdbbbfcc............
    .............fffff..............
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    ..............fccbbcf............ccc
    ........ffffffccccccff.........ccbbc
    ......ffbbbbbbbbbbbbbcfff.....cdbbc.
    ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
    ....fbbb1111ff1bcbcbbbcccccccbbbcf..
    .....fb11111111bbbbbbcccccccccbccf..
    ......fccc33cc11bbbbccccccccfffbbcf.
    .......fc131c111bbbcccccbdbc...fbbf.
    ........f33c111cbbbfdddddcc.....fbbf
    .........ff1111fbdbbfddcc........fff
    ...........cccccfbdbbfc.............
    .................fffff..............
    `,img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    .........ffffffccbbcf...............
    ......fffbbbbbbbbcccff..............
    .....fbbbbbbbbbbbbbbbcfff......ccccc
    .....bcbbbbbffbcbcbbbbcccff...cdbbbc
    .....bbb1111ffbbcbcbbbcccccffcddbbc.
    .....fb11111111bcbcbbbcccccccbdbbf..
    ......fccc33c11bbbbbbcccccccccbbcf..
    .......fc131cc11bbbbccccccccffbccf..
    ........f33c1111bbbcccccbdbc..fbbcf.
    .........ff1111cbbbfdddddcc....fbbf.
    ...........ccc1fbdbbfddcc.......fbbf
    ..............ccfbdbbfc..........fff
    .................fffff..............
    `,img`
    ..................ccfff.............
    .................cddbbf.............
    ........fffffffffddbbf..............
    .......fbbbbbbbbbfcbcf..............
    .......fbbc111bffbbccffff...........
    .......fb111111ffbbbbbcccff....ccccc
    ........f1cc3311bbcbcbbccccf..cdbbbc
    ........fcc131c1bbbcbcbcccccfcddbbc.
    .........f111111bbbcbcbccccccbdbbf..
    .........f1111111bbbbbccccccccbbcf..
    ..........f111111bbbbcccccccffbccf..
    ...........c1111cbbbcccccbdbc.fbbcf.
    ............cc11cbbbfddddddc...fbbf.
    ..............cffbdbbfdddcc.....fbbf
    .................fbdbbfcc........fff
    ..................fffff.............
    `,img`
    ....................ccfff...........
    ..........fffffffffcbbbbf...........
    .........fbbbbbbbbbfffbf............
    .........fbb111bffbbbbff............
    .........fb11111ffbbbbbcff..........
    .........f1cccc11bbcbcbcccf.........
    ..........fc1c1c1bbbcbcbcccf...ccccc
    ............c3331bbbcbcbccccfccddbbc
    ...........c333c1bbbbbbbcccccbddbcc.
    ...........c331c11bbbbbcccccccbbcc..
    ..........cc13c111bbbbccccccffbccf..
    ..........c111111cbbbcccccbbc.fccf..
    ...........cc1111cbbbfdddddc..fbbcf.
    .............cccffbdbbfdddc....fbbf.
    ..................fbdbbfcc......fbbf
    ...................fffff.........fff
    `,img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `,img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `],
100,
true
)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Food)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `],
100,
true
)
mySprite2.setPosition(45, 55)
mySprite.setPosition(90, 55)
