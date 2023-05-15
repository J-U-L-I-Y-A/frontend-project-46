### Hexlet tests and linter status:
[![Actions Status](https://github.com/J-U-L-I-Y-A/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/J-U-L-I-Y-A/frontend-project-46/actions)
[![CI Status](https://github.com/J-U-L-I-Y-A/frontend-project-46/actions/workflows/gendiff.yml/badge.svg)](https://github.com/J-U-L-I-Y-A/frontend-project-46/actions/workflows/gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/22f4344c7f4330303be9/maintainability)](https://codeclimate.com/github/J-U-L-I-Y-A/frontend-project-46/maintainability)
## Проект "Вычислитель Отличий"

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.
Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.
### Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

### Системные требования
ОС: Linux, Windows, WSL.
node js version: от v18.

### Установка
```
git clone git@github.com:J-U-L-I-Y-A/frontend-project-46.git
cd frontend-project-46
make install или npm ci
npm link (может потребоваться sudo)
```
## Пример использования

### Сравнение плоских файлов (JSON)

```
gendiff filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/Zsz6DTDK72cjZVXRDddt3Cw4P.svg)](https://asciinema.org/a/Zsz6DTDK72cjZVXRDddt3Cw4P)

### Сравнение плоских файлов (YAML)

```
gendiff filePath1.yaml filePath2.yaml
```
[![asciicast](https://asciinema.org/a/luuEYmdWHilif8rxcfZSFc37e.svg)](https://asciinema.org/a/luuEYmdWHilif8rxcfZSFc37e)

### Сравнение файлов, имеющих вложенные структуры

```
gendiff filePath1.yaml filePath2.yaml
```
или
```
gendiff filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/zGvcdxmhSzKTOGrWVpOuEDDnq.svg)](https://asciinema.org/a/zGvcdxmhSzKTOGrWVpOuEDDnq)

### Плоский формат
```
gendiff --format plain filePath1.yaml filePath2.yaml
```
или
```
gendiff --format plain filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/GukDo616N6WvsKLeU5rmr3zr0.svg)](https://asciinema.org/a/GukDo616N6WvsKLeU5rmr3zr0)

### Вывод в json
```
gendiff --format json filePath1.yaml filePath2.yaml
```
или
```
gendiff --format json filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/UuR9UVaIhJAw7uvCv1SePxCeO.svg)](https://asciinema.org/a/UuR9UVaIhJAw7uvCv1SePxCeO)