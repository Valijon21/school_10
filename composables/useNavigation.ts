export const useNavigation = () => {
  const { t } = useI18n()
  const SCROLL_THRESHOLD = 50

  // Single source of truth — nav structure
  const NAV_ITEMS = [
    { label: "Bosh sahifa", href: "/" },
    {
      label: "Maktab haqida",
      children: [
        { label: "Umumiy ma'lumot", href: "/about/about" },
        { label: "Tarix", href: "/about/history" },
        { label: "Missiya", href: "/about/mission" },
        { label: "Rahbariyat", href: "/about/management" },
      ],
    },
    {
      label: "O'qituvchilar",
      children: [
        { label: "Barcha o'qituvchilar", href: "/teachers/teachers" },
        { label: "Sobiq o'qituvchilar", href: "/teachers/former-teachers" },
      ],
    },
    { label: "Dars jadvali", href: "/academics/schedule" },
    { label: "Yangiliklar", href: "/news/news" },
  ]

  /** Active nav state based on current route */
  function updateActiveNav() {
    const path = window.location.pathname.replace(/\/$/, '') || '/'

    // Clear previous active states
    document.querySelectorAll('.nav-link, .dropdown-menu a, .mobile-nav-link, .mobile-nav-sublink').forEach(el => {
      el.classList.remove('active')
    })

    // Desktop: dropdown submenu items
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
      const href = (link as HTMLAnchorElement).pathname
      if (!href || href === '#') return
      if (path === href || path.startsWith(href + '/')) {
        link.classList.add('active')
        const dropdown = link.closest('.dropdown')
        dropdown?.querySelector('.nav-link')?.classList.add('active')
      }
    })

    // Desktop: top-level single items
    document.querySelectorAll('nav > ul > li:not(.dropdown) .nav-link').forEach(link => {
      const href = (link as HTMLAnchorElement).pathname
      if (!href || href === '#') return
      if (path === href || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active')
      }
    })

    // Mobile: top-level simple links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      const href = (link as HTMLAnchorElement).pathname
      if (!href || href === '#') return
      if (path === href || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active')
      }
    })

    // Mobile: sub-links & expand their parent group
    document.querySelectorAll('.mobile-nav-sublink').forEach(link => {
      const href = (link as HTMLAnchorElement).pathname
      if (!href || href === '#') return
      if (path === href || path.startsWith(href + '/')) {
        link.classList.add('active')
        const item = link.closest('.mobile-nav-item')
        if (item) {
          item.classList.add('open')
          item.querySelector('.mobile-nav-accordion-btn')?.setAttribute('aria-expanded', 'true')
        }
      }
    })
  }

  /** Desktop dropdown — aria sync & keyboard support (CSS handles visual) */
  function initDropdownAccessibility() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle')
      if (!toggle) return

      dropdown.addEventListener('mouseenter', () => toggle.setAttribute('aria-expanded', 'true'))
      dropdown.addEventListener('mouseleave', () => toggle.setAttribute('aria-expanded', 'false'))

      toggle.addEventListener('click', (e) => {
        if ((toggle as HTMLAnchorElement).getAttribute('href') === '#') e.preventDefault()
      })

      dropdown.addEventListener('keydown', (e) => {
        if ((e as KeyboardEvent).key === 'Escape') {
          toggle.setAttribute('aria-expanded', 'false')
          ;(toggle as HTMLElement).blur()
        }
      })
    })
  }

  /**
   * Build mobile overlay with accordion dropdowns.
   * Tap group label → sub-links slide open; tap again → close.
   */
  function buildMobileOverlay(): HTMLElement {
    const overlay = document.createElement('div')
    overlay.id = 'mobile-menu-overlay'

    const nav = document.createElement('nav')
    nav.setAttribute('aria-label', t('actions.mobileMenu'))

    const ul = document.createElement('ul')
    ul.className = 'mobile-nav-list'

    NAV_ITEMS.forEach(item => {
      const li = document.createElement('li')
      li.className = 'mobile-nav-item'

      if (item.children) {
        // Accordion toggle button
        const btn = document.createElement('button')
        btn.className = 'mobile-nav-accordion-btn'
        btn.type = 'button'
        btn.setAttribute('aria-expanded', 'false')
        const labelSpan = document.createElement('span')
        labelSpan.className = 'mobile-nav-btn-text'
        labelSpan.textContent = item.label
        btn.appendChild(labelSpan)

        const chevronSpan = document.createElement('span')
        chevronSpan.className = 'mobile-nav-chevron'
        const icon = document.createElement('i')
        icon.className = 'fas fa-chevron-down'
        chevronSpan.appendChild(icon)
        btn.appendChild(chevronSpan)

        // Collapsible sub-list wrapper
        const subWrapper = document.createElement('div')
        subWrapper.className = 'mobile-nav-sub-wrapper'

        const subUl = document.createElement('ul')
        subUl.className = 'mobile-nav-sub'

        item.children.forEach(child => {
          const subLi = document.createElement('li')
          const a = document.createElement('a')
          a.href = child.href
          a.textContent = child.label
          a.className = 'mobile-nav-sublink'
          subLi.appendChild(a)
          subUl.appendChild(subLi)
        })

        subWrapper.appendChild(subUl)
        li.appendChild(btn)
        li.appendChild(subWrapper)

        // Accordion toggle logic
        btn.addEventListener('click', () => {
          const isOpen = li.classList.contains('open')

          // Close all other open accordions
          ul.querySelectorAll('.mobile-nav-item.open').forEach(openItem => {
            if (openItem !== li) {
              openItem.classList.remove('open')
              openItem.querySelector('.mobile-nav-accordion-btn')?.setAttribute('aria-expanded', 'false')
            }
          })

          // Toggle current
          li.classList.toggle('open', !isOpen)
          btn.setAttribute('aria-expanded', String(!isOpen))
        })

      } else {
        // Simple top-level link
        const a = document.createElement('a')
        a.href = item.href!
        a.textContent = item.label
        a.className = 'mobile-nav-link'
        li.appendChild(a)
      }

      ul.appendChild(li)
    })

    nav.appendChild(ul)
    overlay.appendChild(nav)
    return overlay
  }

  function init() {
    const header = document.getElementById('main-header')

    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header?.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD)
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })

    // Mobile menu setup
    const burgerBtn = document.getElementById('mobile-menu-toggle')
    let overlay = document.getElementById('mobile-menu-overlay')

    if (!overlay && burgerBtn) {
      overlay = buildMobileOverlay()
      document.body.appendChild(overlay)
    }

    if (burgerBtn && overlay) {
      const closeMenu = () => {
        overlay!.classList.remove('open')
        burgerBtn.classList.remove('active')
        document.body.style.overflow = ''
      }

      burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        const isOpen = overlay!.classList.contains('open')
        overlay!.classList.toggle('open')
        burgerBtn.classList.toggle('active')
        document.body.style.overflow = isOpen ? '' : 'hidden'
      })

      // Close on sub-link click (navigate)
      overlay.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'A') closeMenu()
      })

      // Close on backdrop click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeMenu()
      })

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay!.classList.contains('open')) closeMenu()
      })
    }

    initDropdownAccessibility()
    updateActiveNav()
  }

  return { init, updateActiveNav }
}
