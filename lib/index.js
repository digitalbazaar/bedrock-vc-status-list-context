/*!
 * Copyright (c) 2022-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as bslContext from '@digitalbazaar/vc-bitstring-status-list-context';
import * as vcStatusListContext from '@digitalbazaar/vc-status-list-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: bslContext.contexts});
jsonLdDocumentLoader.addDocuments({documents: vcStatusListContext.contexts});

export const {constants} = vcStatusListContext;
export const {constants: bslConstants} = bslContext;
