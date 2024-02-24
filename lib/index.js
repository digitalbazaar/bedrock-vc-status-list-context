/*!
 * Copyright (c) 2022-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as bslContext from '@digitalbazaar/vc-bitstring-status-list-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import vcStatusListContext from '@digitalbazaar/vc-status-list-context';

const contextModules = [
  bslContext,
  vcStatusListContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

export const {constants} = vcStatusListContext;
export const {constants: bslConstants} = bslContext;
