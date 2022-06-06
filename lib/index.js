/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import vcStatusListContext from '@digitalbazaar/vc-status-list-context';

const contextModules = [
  vcStatusListContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = vcStatusListContext;
export {constants};
