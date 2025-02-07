/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * @deprecated imperatively finding the DOM element of a react component has been deprecated in React 18.
 * You should use ref properties on the component instead.
 */
var findNodeHandle = component => {
  throw new Error('findNodeHandle has been removed in React 19. ' + 'Use the ref property on the component instead.');
};
export default findNodeHandle;