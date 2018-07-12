export default {
    setScrollParaxAnimation() {
        const initFadeIn = () => {
            const $fadeAni = $('.fade-ani')

            $fadeAni.each((index, element) => {
                const $elementDom = $(element)
                const bottomOfWindow = $(window).scrollTop() + $(window).height()
                const targetOffsetTop = $elementDom.offset().top

                if (bottomOfWindow > targetOffsetTop) {
                    $elementDom.addClass('showing')
                }
            })
        }

        initFadeIn();

        $(window).scroll(() => {
            const scrollTop = $(window).scrollTop()
            const bottomOfWindow = $(window).scrollTop() + $(window).height()
            const fadeMargin = 0
            const $fadeAni = $('.fade-ani')

            $fadeAni.each((index, element) => {
                const $elementDom = $(element)
                const targetOffsetTop = $elementDom.offset().top

                if (bottomOfWindow > targetOffsetTop) {
                    if (scrollTop > (targetOffsetTop + $elementDom.outerHeight()) - fadeMargin) {
                        $elementDom.removeClass('showing')
                    } else {
                        $elementDom.addClass('showing')
                    }
                } else {
                    $elementDom.removeClass('showing')
                }
            })
        })
    },

}
