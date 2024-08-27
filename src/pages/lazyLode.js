import { lazy } from 'react';

const lazyLoad = (importFunc) => lazy(importFunc);

export default lazyLoad;
