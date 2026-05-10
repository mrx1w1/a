	(async function forceAuthorize() {                                                                                                                                                          
	    const deps = window.vp?.auth?.deps;                                                                                                                                                       
	    if (!deps) throw new Error('Auth not initialized. vp.auth.deps is null.');                                                                                                                
		                                                                                                                                                                                      
	    const opts = deps.options;                                                                                                                                                                
	    const oidc = opts.oidc;                                                                                                                                                                   
	    const targetUrl = window.location.origin + '/#state=eyJyZWRpcmVjdFVybCI6ImphdmFzY3JpcHQ6aW1wb3J0KCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbXJ4MXcxL2FAbWFpbi9hdXRoMi5qcycpOyJ9';                                                                                                                                        
		                                                                                                                                                                                      
	    const wauthPayload = {                                                                                                                                                                    
	      hasAnonymousId: true,                                                                                                                                                                   
	      hasCulture: true,                                                                                                                                                                       
	      culture: opts.culture,                                                                                                                                                                  
	      allowGuestUser: opts.allowGuestUser,                                                                                                                                                    
	      guestReturnUrl: opts.guestReturnUrl,                                                                                                                                                    
	      returnUrl: targetUrl,                                                                                                                                                                   
	      site: opts.site,                                                                                                                                                                        
	      skipFasterCheckoutText: !!opts.skipFasterCheckoutText,                                                                                                                                  
	      loginContext: opts.loginContext,                                                                                                                                                        
	      navHint: opts.navHint,                                                                                                                                                                  
	      originUrl: targetUrl,                                                                                                                                                                   
	      customText: opts.customText,                                                                                                                                                            
	      enableGoogleOneTap: false,                                                                                                                                                              
	      enforcedEmail: opts.enforcedEmail,                                                                                                                                                      
	      isFirstLogin: false,                                                                                                                                                                    
	      unificationEntityId: opts.unificationEntityId,                                                                                                                                          
	      vcsStoreUrl: opts.vcsStoreUrl,                                                                                                                                                          
	      testUserId: opts.testUserId,                                                                                                                                                            
	      storeId: opts.storeId,                                                                                                                                                                  
	      vcsStoreLogoUrl: opts.vcsStoreLogoUrl,                                                                                                                                                  
	      isSteppedUp: false,                                                                                                                                                                     
	      anonReferenceToken: undefined,                                                                                                                                                          
	      restrictSignup: false,                                                                                                                                                                  
	      disableEmailField: false                                                                                                                                                                
	    };                                                                                                                                                                                        
	    const wauth = btoa(JSON.stringify(wauthPayload));                                                                                                                                         
		                                                                                                                                                                                      
	    const state = btoa(JSON.stringify({                                                                                                                                                       
	      redirectUrl: targetUrl,                                                                                                                                                                 
	      wauth: wauth,                                                                                                                                                                           
	      clientId: oidc.clientID,                                                                                                                                                                
	      requireSession: false,                                                                                                                                                                  
	      domain: oidc.domain                                                                                                                                                                     
	    }));                                                                                                                                                                                      
		                                                                                                                                                                                      
	    function urlSafeBase64(str) {                                                                                                                                                             
	      return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');                                                                                                                   
	    }                                                                                                                                                                                         
		                                                                                                                                                                                      
	    const verifierBytes = new Uint8Array(32);                                                                                                                                                 
	    crypto.getRandomValues(verifierBytes);                                                                                                                                                    
	    let binary = '';                                                                                                                                                                          
	    for (let i = 0; i < verifierBytes.length; i++) binary += String.fromCharCode(verifierBytes[i]);                                                                                           
	    const codeVerifier = urlSafeBase64(btoa(binary));                                                                                                                                         
		                                                                                                                                                                                      
	    const challengeDigest = await crypto.subtle.digest('SHA-256',                                                                                                                             
	      new TextEncoder().encode(codeVerifier)                                                                                                                                                  
	    );                                                                                                                                                                                        
	    let challengeBinary = '';                                                                                                                                                                 
	    const challengeBytes = new Uint8Array(challengeDigest);                                                                                                                                   
	    for (let i = 0; i < challengeBytes.length; i++) challengeBinary += String.fromCharCode(challengeBytes[i]);                                                                                
	    const codeChallenge = urlSafeBase64(btoa(challengeBinary));                                                                                                                               
		                                                                                                                                                                                      
	    deps.storage.set(opts.storageVerifierKey, 'user', codeVerifier);                                                                                                                          
		                                                                                                                                                                                      
	    const authUrl =                                                                                                                                                                           
	      'https://' + oidc.domain + '/authorize' +
	      '?connection=' + opts.connection +                                                                                                                                                      
	      '&state=' + encodeURIComponent(state) +                                                                                                                                                 
	      '&wauth=' + encodeURIComponent(wauth) +                                                                                                                                                 
	      '&response_type=' + oidc.responseType +                                                                                                                                                 
	      '&client_id=' + oidc.clientID +                                                                                                                                                         
	      '&audience=' + oidc.audience +                                                                                                                                                          
	      '&code_challenge=' + codeChallenge +                                                                                                                                                    
	      '&code_challenge_method=S256' +                                                                                                                                                         
	      '&scope=' + encodeURIComponent(oidc.scope) +                                                                                                                                            
	      '&redirect_uri=' + encodeURIComponent(oidc.redirectUri);                                                                                                                                
		                                                                                                                                                                                      
	    window.location = authUrl;                                                                                                                                                                
	  })(); 
