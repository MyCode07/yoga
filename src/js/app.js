import './parts/menu.js'
import './parts/sliders.js'

import { stickyHeader } from './parts/header.js'
import { toTop } from './static/to-top.js'
import { animateImages } from './parts/image-aniamtions.js'
import { notice } from './parts/notice.js'
import { replaceDomElements } from './static/replace.js'
import { accorden } from './static/accordeon.js'
import './static/side-fixed.js'

accorden()
replaceDomElements()
stickyHeader()
toTop()
animateImages()
notice();