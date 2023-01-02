# Astro Headless Navigation Bar

Astro-Nav is a fully responsive headless navigation bar for Astro. It supports mobile responsive toggle and dropdowns.

## Installation

```
npm install astro-navbar
# or
pnpm add astro-navbar
```

## Basic Usage

```html
---
import { Astronav, MenuItems, MenuIcon, Dropdown, DropdownItems } from "astro-navbar";
---

<div>
  <Astronav>
    <div class="flex justify-between">
      <a>Your Logo</a>
      <MenuIcon class="w-4 h-4 text-gray-800" />
    </div>
    <!--
    // add `hidden` class by default for mobile
    // `lg:flex` is to make it visible in desktop
    // You may use custom CSS instead.
    -->
    <MenuItems class="hidden lg:flex">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <Dropdown class="group">
            <button>
              <span> Services </span>
              <!-- You can style when dropdown is `open` -->
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
</div>
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
