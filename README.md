# Astro Headless Navigation Bar

Astro-Navbar is a fully accessible responsive headless navigation bar for Astro. It supports mobile responsive toggle and dropdowns.

[**Live Demo on Stackblitz →**](https://stackblitz.com/edit/github-jpfnv9?file=src/pages/index.astro)

[**Live Demo on Astroship Template →**](https://astroship.web3templates.com/)

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

## Customizations

Every Component expect `Astronav` supports a `class` attribute which you can style as needed.

`<Dropdown/>` div will add a `aria-expanded` attribute for Accessibility as well as an `open` class & an attribute with name `open`. Here's how it will look like when a dropdown is shown.

```html
<div class="... open" aria-expanded="true" open></div>
```

So you can style based on both class or the `open` attribute (works well with tailwind css `group-open`).

### Custom Icons for Menu

To add custom icons for menu, you can use `OpenIcon` and `CloseIcon` inside `MenuIcon`. Here's an example. You can also pass custom icon components like `astro-icon` here.

```jsx
---
import { Astronav, MenuIcon, OpenIcon, CloseIcon } from "astro-navbar";
---

 <Astronav>
  ...
  <MenuIcon>
    <OpenIcon>
      <svg>...</svg>
    </OpenIcon>
    <CloseIcon>
      <svg>...</svg>
    </CloseIcon>
  </MenuIcon>
  ...
  </Astronav>
```

## Tailwind CSS

This plugin should work well with regular CSS as well as Tailwind CSS. You can add `group` classes to modify dropdown based on the `open` attribute.

<details>
<summary>Minimal Usage Example with Tailwind CSS</summary>

```html
---
import { Astronav, MenuItems, MenuIcon,  Dropdown, DropdownItems } from "astro-navbar";
---

<header class="lg:flex p-5  gap-5">
  <Astronav>
    <div class="flex w-full justify-between">
      <a>Your Logo</a>
      <div class="block lg:hidden">
        <MenuIcon class="w-4 h-4 text-gray-800" />
      </div>
    </div>
    <MenuItems class="hidden lg:flex">
      <ul class="flex flex-col lg:flex-row lg:gap-5">
        <li>Home</li>
        <li>About</li>
        <li>
          <Dropdown class="group">
            <button class="flex items-center">
              <span> Services </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-3 h-3 mt-0.5 group-open:rotate-180">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </button>
            <DropdownItems class="relative">
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

</details>

## Contribute

Please create an issue.

## Credits

Copyright ©️ 2023-2099. Surjith S M.
