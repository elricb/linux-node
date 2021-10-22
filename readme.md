# @elricb/linux-node

Functions related to using node on linux/bash supported operating systems.  Basically everything sans MS Windows.

## Install

```
$ npm install @elricb/linux-node
```

## Usage

### pathTildeContract

`pathTildeContract(String)`

```
const {pathTildeContract} = require("@elricb/linux-node");
console.log(pathTildeContract("/home/current-user/directory"));
// outputs: ~/directory
```

### pathTildeExpand

`pathTildeExpand(String)`

```
const {pathTildeExpand} = require("@elricb/linux-node");
console.log(pathTildeExpand("~/directory"));
// outputs: /home/current-user/directory
```


