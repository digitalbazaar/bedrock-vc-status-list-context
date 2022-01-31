/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {documentLoader} = require('bedrock-jsonld-document-loader');

describe('bedrock-vc-status-list-context', () => {
  it('sets up contexts properly', async () => {
    const {contexts, constants} = require('vc-status-list-context');

    for(const c in constants) {
      if(!c.includes('URL')) {
        continue;
      }
      // ensure that context document is defined
      const result = await documentLoader(constants[c]);
      should.exist(result);
      should.exist(result.document);
      result.document.should.be.an('object');
      result.document.should.eql(contexts.get(constants[c]));
    }
  });
});
