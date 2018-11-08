## js-storage

[![Build Status](https://travis-ci.com/docomodigital/js-storage.svg?branch=master)](https://travis-ci.com/docomodigital/js-storage)
[![Coverage Status](https://coveralls.io/repos/github/docomodigital/js-storage/badge.svg?branch=master)](https://coveralls.io/github/docomodigital/js-storage?branch=master)
[![npm version](https://badge.fury.io/js/%40docomodigital%2Fjs-storage.svg)](https://badge.fury.io/js/%40docomodigital%2Fjs-storage)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/js-storage.svg)](https://greenkeeper.io/)

Storage is the library to save and get data in different ways.

## Usage
```javascript
import Storage from '@docomodigital/js-storage';

// Set an item in the storage
Storage.set('locale', 'en');

// Get a previously setted item from the storage
Storage.get('locale'); // 'en'

// Delete an item from the storage if present
Storage.delete('locale');

// Switch to another Storage (window.localStorage), default is cookie
Storage.setStorage('localstorage');
```

## Installation

### NPM
```bash
npm install --save @docomodigital/js-storage
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/js-storage/latest](http://docomodigital.github.io/js-storage/latest)

or run the following command inside the js-storage folder: 
```bash
npm run doc:open
```