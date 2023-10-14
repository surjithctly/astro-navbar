# Astro-Navbar

Astro-Navbar is a fully responsive and accessible headless navigation bar for Astro, supporting nested dropdowns and mobile-responsive toggles.

### Live Demos

- [**Stackblitz**](https://stackblitz.com/edit/github-jpfnv9?file=src/pages/index.astro)
- [**Astroship Template**](https://astroship.web3templates.com/)

## Installation

```bash
npm install astro-navbar
# or
pnpm add astro-navbar
```

## Basic Usage

Ensure you have the `.hidden` class in your CSS. If not, add the following:

```css
.hidden {
  display: none;
}
```

Then integrate the navigation bar:

```astro
---
import { Astronav, MenuItems, MenuIcon, Dropdown, DropdownItems, DropdownSubmenu } from "astro-navbar";
---

<div>
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
              <!-- You can style when dropdown is `open` -->
              <svg class="group-open:rotate-180">...arrow..</svg>
            </button>
            <DropdownItems>
              <div class="absolute top-0">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>
                    <DropdownSubmenu>
                      <button>Submenu</button>
                      <DropdownItems>
                        <ul>
                          <li>Sub Menu 1</li>
                          <li>Sub Menu 2</li>
                        </ul>
                      </DropdownItems>
                    </DropdownSubmenu>
                  </li>
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

## Customization

### Styling

Every component, except `Astronav`, supports the `class` attribute for custom styling. The `<Dropdown/>` component will have an `aria-expanded` attribute for accessibility and an `open` class & attribute when shown. This can be styled with CSS or utilities like Tailwind CSS's `group-open`.

### Custom Icons

To use custom icons:

```astro
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

## Using with Tailwind CSS

Astro-Navbar pairs well with Tailwind CSS.

<details>
<summary>Minimal Usage Example with Tailwind CSS</summary>

```astro
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

## Utilities

Some related utilities are provided for convenience.

### Sticky Header

To make the header sticky, you can use the `<StickyHeader />` component. This will help you to add custom classes to the header when scrolled such as `sticky`. Since this is a headless component, no sticky classes has been added by default. You can add your own classes. This utility adds a tiny JS snippet to detect scroll position in a performant way.

Here's an example:

```js
// Wrap the header with sticky header (renders as <header>...</header>)

<StickyHeader
  // default class. applied all the time. No changes
  class="sticky top-0 border-b z-20 transition-all"
  // scroll threshold to enable active class
  scrollY={50}
  // initial classes which will be removed when scrollY reached
  defaultClass="py-5 border-transparent"
  // active classes to add when scrollY reached.
  //  "is-active" class will be added by default
  activeClass="py-2 bg-white/80 border-gray-200 backdrop-blur-lg">
  // ...
  <Astronav>...</Astronav>
  // ...
</StickyHeader>
```

## Options

Here are the supported options / props for this plugin.

### Close Menu on Click

You can add the `closeOnClick` props to the `Astronav` component if you want to close the menu on clicking the item. This is useful on mobile where you have links to the same page like `#about` and want to close menu after click.

```js
// Close whole menu on clicking a menu item inside (on mobile)

<Astronav closeOnClick>...</Astronav>
```

## Contribute

Please create an issue.

## Credits

Copyright ©️ 2023-2099. Surjith S M.
