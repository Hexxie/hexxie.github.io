---
title: Приклад Markdown синтаксису в блозі
date: 2023-10-05
author: hexxie
description: Sample article showcasing basic Markdown syntax and formatting for HTML elements.
---

TLDR; В якості знайомства з hugo фреймворком - приклад Markdown синтаксису який я буду використовувати. Коротко кажучи - cheatsheet для мене.
<!--more-->

## Заголовки

Наступні HTML `<h1>`—`<h6>` елементи відповідають шесті рівням заголовків. `<h1>` найбільший, а `<h6>` найменший.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Абзац

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Зображення

Можна використовувати наступний синтаксис для включення зображень. Шлях до зображення повинен бути вказаний відносно `index.md` файлу.

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

Також можна включати зображення з зовнішніх джерел.

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## Цитати

Елемент цитати відображає контент який цитується з іншого джерела. Також цитата може включати `footer` або `cite` елементи, аннотації і абревіатури.

### Цитати без атрибутів

> В цитаті Markdown можна використовувати форматування: **bold**,  _italics_, [links](https://gohugo.io/), `code`.

### Цитати з атрибутами

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Таблиці

Таблиці не входять в стандарт Markdown, але Hugo їх підтримує. Супер!

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Markdown в таблицях

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Блоки коду

### Блоки коду через зворотні галочки

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Блок коду з відступами 4 пробіли

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Блок коду з підсвіткою синтаксиса

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Вбудований код

Зворотні галочки використовуються для вбудовування `variable` в речення.

## Списки

### Упорядкований список

1. First item
2. Second item
3. Third item

### Неупорядкований список

* List item
* Another item
* And another item

### Вкладені списки

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Інші елементи — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
