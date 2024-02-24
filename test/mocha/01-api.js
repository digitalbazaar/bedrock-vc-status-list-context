/*!
 * Copyright (c) 2022-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {documentLoader} from '@bedrock/jsonld-document-loader';

describe('bedrock-vc-status-list-context', () => {
  it('sets up contexts properly', async () => {
    const testContexts = [
      '@digitalbazaar/vc-bitstring-status-list-context',
      '@digitalbazaar/vc-status-list-context'
    ];
    for(const testContext of testContexts) {
      const {contexts} = await import(testContext);
      for(const [contextUrl, context] of contexts) {
        // ensure that context documents are defined
        const result = await documentLoader(contextUrl);
        should.exist(result);
        should.exist(result.document);
        result.document.should.be.an('object');
        result.document.should.eql(context);
        should.exist(result.tag);
        result.tag.should.eql('static');
      }
    }
  });
});
