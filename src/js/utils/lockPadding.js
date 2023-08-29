import { isMobile } from "./isMobile.js";


const fixedElems = document.querySelectorAll('._fixed');
export const lockPadding = () => {
    const scrollbarWidth = 12;

    if (!isMobile.any()) {
        if (fixedElems.length)
            fixedElems.forEach(item => {
                item.style.paddingRight = scrollbarWidth + 'px';
            });

        document.body.style.paddingRight = scrollbarWidth + 'px';
    }
}

export const unLockPadding = () => {
    if (fixedElems.length)
        fixedElems.forEach(item => {
            item.style.paddingRight = 0 + 'px';
        });

    document.body.style.paddingRight = 0 + 'px';
}