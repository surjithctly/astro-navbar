# Astro Headless Navigation Bar

Astro-Nav is a fully responsive headless navigation bar for Astro. It supports mobile responsive toggle and dropdowns.

## Installation

```
npm install astro-nav
# or
pnpm add astro-nav
```

## Basic Usage

```html
---
import { Astronav, MenuItems, MenuIcon,  Dropdown, DropdownItems } from "astro-nav";
---

<header>
  <Astronav>
    <div class="flex justify-between">
      <a>Your Logo</a>
      <MenuIcon class="w-4 h-4 text-gray-800" />
    </div>
    <MenuItems class="hidden lg:flex">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <Dropdown class="group">
            <button>
              <span> Services </span>
              <svg class="group-open:rotate-180">...arrow..</svg>
            </button>
            <DropdownItems>
              <div class="absolute top-0">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            </DropdownItems>
          </Dropdown>
        </li>
      </ul>
    </MenuItems>
  </Astronav>
</header>
```

### Notes

This plugin assumes you have a `.hidden` class in the CSS. If not, add the following to your CSS

```css
.hidden {
  display: none;
}
```

## Tailwind CSS

This plugin will work well with Tailwind CSS.

## Contribute

Please create an issue.

## Credits

Copyright ©️ 2023-2099. Surjith S M.
